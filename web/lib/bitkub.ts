/**
 * @file bitkub.ts
 * @description Bitkub API v3 Integration Library
 * @standards Next.js 16+, TypeScript
 */

import crypto from 'crypto';

const BITKUB_API_BASE = 'https://api.bitkub.com';

// Note: These should only be used in Server Components or Server Actions
const API_KEY = process.env.BITKUB_API_KEY || '';
const API_SECRET = process.env.BITKUB_API_SECRET || '';

export interface TickerData {
    id: number;
    last: number;
    lowestAsk: number;
    highestBid: number;
    percentChange: number;
    baseVolume: number;
    quoteVolume: number;
    isFrozen: number;
    high24hr: number;
    low24hr: number;
}

/**
 * Generate Signature for Private API v3
 */
function generateSignature(payload: string): string {
    return crypto.createHmac('sha256', API_SECRET).update(payload).digest('hex');
}

/**
 * Fetch latest ticker data for a specific symbol
 * @param symbol e.g., 'BTC_THB'
 */
export async function getTicker(symbol: string = 'BTC_THB'): Promise<TickerData | null> {
    try {
        const response = await fetch(`${BITKUB_API_BASE}/api/market/ticker?sym=${symbol}`, {
            next: { revalidate: 10 }, // Cache for 10 seconds
        });


        if (!response.ok) throw new Error('Failed to fetch ticker');

        const data = await response.json();
        return data[symbol] || null;
    } catch (error) {
        console.error('Bitkub API Error:', error);
        return null;
    }
}

/**
 * Place a Market Order (Private API)
 * @param symbol e.g., 'THB_BTC'
 * @param amount Amount in THB (for buy) or BTC (for sell)
 * @param side 'buy' or 'sell'
 */
export async function placeMarketOrder(symbol: string, amount: number, side: 'buy' | 'sell'): Promise<any> {
    if (!API_KEY || !API_SECRET) {
        throw new Error('API Credentials missing');
    }

    const payload = JSON.stringify({
        sym: symbol,
        amt: amount, // THB for buy, BTC for sell
        typ: 'market',
    });

    const timestamp = Date.now();
    const signature = generateSignature(timestamp + 'POST' + '/api/market/place-bid' + payload); // simplified logic

    // Note: Actual V3 signature logic involves ts + method + url + payload
    // This is a draft implementation following general REST security practices

    try {
        const response = await fetch(`${BITKUB_API_BASE}/api/market/place-${side === 'buy' ? 'bid' : 'ask'}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-BTK-APIKEY': API_KEY,
                'X-BTK-TS': timestamp.toString(),
                'X-BTK-SIGN': signature
            },
            body: payload
        });

        return await response.json();
    } catch (error) {
        console.error('Order Execution Error:', error);
        return { error: 'Failed to place order' };
    }
}
