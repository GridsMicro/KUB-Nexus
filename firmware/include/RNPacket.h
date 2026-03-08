/**
 * @file RNPacket.h
 * @description RNPacket Binary Protocol (20 bytes)
 */

#ifndef RN_PACKET_H
#define RN_PACKET_H

#include <Arduino.h>

#pragma pack(push, 1)
struct RNPacket_t {
  uint8_t header;  // 0xAA
  uint8_t type;    // Packet Type
  uint8_t battery; // 0-100%
  uint8_t state;   // Failsafe state
  float v1;        // Value 1 (e.g., Solar Voltage)
  float v2;        // Value 2 (e.g., Current)
  float v3;        // Value 3 (e.g., Temperature)
  uint16_t crc;    // CRC-16-CCITT
};
#pragma pack(pop)

class RNPacketManager {
public:
  static uint16_t calculateCRC(const uint8_t *data, size_t len);
  static bool validate(const RNPacket_t &packet);
  static RNPacket_t create(uint8_t type, float v1, float v2, float v3);
};

#endif
