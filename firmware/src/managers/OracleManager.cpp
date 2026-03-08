/**
 * @file OracleManager.cpp
 * @description Implement KUB Oracle Bridge for Nexus Eco-Data
 */

#include "OracleManager.h"

// Note: Values should come from ConfigManager in production
String OracleManager::_oracleEndpoint =
    "https://api.kubfoundation.com/v1/oracle/publish"; // Mock endpoint based on
                                                       // research
String OracleManager::_projectToken = ""; // Provided by KUB Developer Center

void OracleManager::begin() {
  Serial.println("[Oracle] Bridge Initialized. Ready to sync eco-data.");
}

bool OracleManager::pushData(float energyValue, float co2Reduced) {
  if (WiFi.status() != WL_CONNECTED)
    return false;

  HTTPClient http;
  http.begin(_oracleEndpoint);
  http.addHeader("Content-Type", "application/json");
  // http.addHeader("Authorization", "Bearer " + _projectToken);

  JsonDocument doc;
  doc["project"] = "KUB-Nexus-IoT";
  doc["energy_kw"] = energyValue;
  doc["co2_saved"] = co2Reduced;
  doc["timestamp"] = millis(); // Mock TS for sequence

  String payload;
  serializeJson(doc, payload);

  int httpCode = http.POST(payload);
  bool success = (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_CREATED);

  if (success) {
    Serial.printf("[Oracle] Sync Success: %.2f kW sent to KUB Chain\n",
                  energyValue);
  } else {
    Serial.printf("[Oracle] Sync Failed (%d)\n", httpCode);
  }

  http.end();
  return success;
}

void OracleManager::update() {
  // Logic for periodic sync (e.g., every 30 mins)
  static unsigned long lastSync = 0;
  if (millis() - lastSync > 1800000) { // 30 mins
    lastSync = millis();
    // pushData(12.55, 1.22); // Mock Eco-data
  }
}
