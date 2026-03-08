/**
 * @file RNPacket.cpp
 */

#include "RNPacket.h"

uint16_t RNPacketManager::calculateCRC(const uint8_t *data, size_t len) {
  uint16_t crc = 0xFFFF;
  for (size_t i = 0; i < len; i++) {
    crc ^= (uint16_t)data[i] << 8;
    for (uint8_t j = 0; j < 8; j++) {
      if (crc & 0x8000) {
        crc = (crc << 1) ^ 0x1021; // Poly for CCITT
      } else {
        crc <<= 1;
      }
    }
  }
  return crc;
}

bool RNPacketManager::validate(const RNPacket_t &packet) {
  uint16_t receivedCRC = packet.crc;
  uint16_t calculatedCRC =
      calculateCRC((uint8_t *)&packet, sizeof(RNPacket_t) - 2);
  return receivedCRC == calculatedCRC;
}

RNPacket_t RNPacketManager::create(uint8_t type, float v1, float v2, float v3) {
  RNPacket_t p;
  p.header = 0xAA;
  p.type = type;
  p.battery = 85; // Example
  p.state = 1;    // READY
  p.v1 = v1;
  p.v2 = v2;
  p.v3 = v3;
  p.crc = calculateCRC((uint8_t *)&p, sizeof(RNPacket_t) - 2);
  return p;
}
