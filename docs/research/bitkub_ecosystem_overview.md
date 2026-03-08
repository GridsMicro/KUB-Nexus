# 🌿 Bitkub Ecosystem Research & Vision 2026

เอกสารฉบับนี้รวบรวมข้อมูลจากการวิจัยเกี่ยวกับ Bitkub Exchange API และ Bitkub Chain (KUB Chain) เพื่อสร้างระบบนิเวศนวัตกรรมที่ยั่งยืน ผสานพลัง IoT (ESP32) และ Next.js 16+

---

## 🏛️ Bitkub Exchange API (Trading & Data)

ระบบ API สำหรับการเข้าถึงข้อมูลตลาดและการส่งคำสั่งซื้อขายอัตโนมัติ

### 1. Public API (Market Data)
- **Base URL:** `https://api.bitkub.com`
- **Endpoints ที่สำคัญ:**
    - `/api/market/ticker`: ข้อมูลราคาล่าสุดทุกเหรียญ
    - `/api/market/depth`: ข้อมูล Order Book (Bid/Ask)
    - `/api/market/trades`: ประวัติการซื้อขายย้อนหลัง
- **Websocket:** `wss://api.bitkub.com/websocket-api/`
    - รองรับเทคโนโลยี Real-time สำหรับ Dashboards บน Next.js หรือแสดงผลบนหน้าจอ OLED ของ ESP32

### 2. Private API (Trading & Wallet)
- **Authentication:** ต้องใช้ API Key และ API Secret (HmacSHA256)
- **V3/V4 Standard:** รองรับการจัดการสินทรัพย์ และการส่งคำสั่งซื้อขายที่รวดเร็ว
- **Security:** ต้องจำกัด IP Address และสิทธิ์ (Read/Write) ในหน้า API Management

---

## ⛓️ Bitkub Chain (KUB Chain)

เครือข่ายบล็อกเชนมาตรฐาน EVM ที่มีความเร็วสูงและค่า Gas ต่ำ

### 1. Network Configuration
- **Mainnet:**
    - RPC: `https://rpc.bitkubchain.io`
    - Chain ID: `96`
- **Testnet:**
    - RPC: `https://rpc-testnet.bitkubchain.io`
    - Chain ID: `25925`

### 2. KUB Application Protocol (KAP)
- **KAP-20:** มาตรฐานโทเค็น (Fungible Token) คล้าย ERC-20
- **KAP-721 / KAP-1155:** มาตรฐาน NFT สำหรับ Digital Assets และ Loyalty Programs
- **Next SDK:** รองรับการเชื่อมต่อกับกระเป๋า Bitkub NEXT อย่างง่ายดาย

---

## 💡 Innovation Ideas (IoT + Web)

1. **TerraTrace (Environmental Oracle):** ESP32 บันทึกข้อมูลเซนเซอร์สิ่งแวดล้อมลง KUB Chain (Proof of Data)
2. **SolarKUB (Eco-DCA):** ระบบซื้อเหรียญอัตโนมัติเมื่อผลิตพลังงานแสงอาทิตย์ได้เกินกำหนด
3. **KUB-HMI (Industrial Terminal):** แผงควบคุมระบบอุตสาหกรรมที่เชื่อมต่อกับเศรษฐกิจดิจิทัล
4. **EcoNFT (Gamified Sustainability):** ระบบสะสมแต้ม NFT เมื่อทำกิจกรรมรักษ์โลก

---

> [!IMPORTANT]
> **Security Reminder:** ห้ามทำการ Hardcode API Keys หรือ Private Keys ในซอร์สโค้ด ให้ใช้ `.env.local` สำหรับ Next.js และ `ConfigManager (NVS)` สำหรับ ESP32 เสมอ
