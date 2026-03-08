/**
 * @file main.cpp
 * @author GridsMicro
 * @brief KUB-Nexus Firmware - Autonomous Eco-Trading Gateway
 * @version 1.0.0
 * @date 2026-03-08
 *
 * Vision: Connecting clean energy and smart trading.
 */

#include "ConfigManager.h"
#include "FailsafeManager.h"
#include "OracleManager.h"
#include "RNPacket.h"
#include "WiFiManager.h"
#include <Arduino.h>
#include <ArduinoJson.h>

void setup() {
  Serial.begin(115200);
  delay(100);
  Serial.println("\n[KUB-Nexus] Starting System...");

  // Initialize Managers
  ConfigManager::begin();
  WiFiManager::begin();   // Handle WiFi and Setup Portal
  OracleManager::begin(); // KUB Chain Oracle Bridge
  FailsafeManager::begin();

  Serial.println("[KUB-Nexus] Ready: Autonomous Eco-Trading Gateway");
}

void loop() {
  // 1. Process Safety & Systems
  FailsafeManager::update();
  WiFiManager::update();
  OracleManager::update(); // Sync data to KUB Chain

  // 2. Example: Send Telemetry every 5 seconds

  static unsigned long lastSent = 0;
  if (millis() - lastSent > 5000) {
    lastSent = millis();

    // Create 20-byte RNPacket
    RNPacket_t packet = RNPacketManager::create(2, 12.55f, 1.2f, 32.5f);
    Serial.write((uint8_t *)&packet, sizeof(packet));
    Serial.println("\n[Telemetry] RNPacket Sent");
  }

  delay(10);
}
