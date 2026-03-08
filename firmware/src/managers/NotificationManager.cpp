#include "NotificationManager.h"
#include "ConfigManager.h"
#include <HTTPClient.h>

const char *NotificationManager::_lineNotifyToken = "";

void NotificationManager::begin() {
  Serial.println("[Notify] Initializing LINE Notify service...");

  ProjectConfig config;
  if (ConfigManager::loadConfig(config)) {
    if (strlen(config.line_token) > 0) {
      static String token = String(config.line_token);
      _lineNotifyToken = token.c_str();
    }
  }
}

void NotificationManager::update() {
  // Notification queue processing if necessary
}

bool NotificationManager::sendAlert(const char *message) {
  if (strlen(_lineNotifyToken) == 0) {
    Serial.println(
        "[Notify] Warning: LINE Token is empty. Skipping notification.");
    return false;
  }

  Serial.printf("[Notify] Sending Notification: %s\n", message);

  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("[Notify] Error: WiFi not connected.");
    return false;
  }

  HTTPClient http;
  http.begin("https://notify-api.line.me/api/notify");
  http.addHeader("Authorization", String("Bearer ") + _lineNotifyToken);
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");

  String payload = "message=" + String(message);
  int httpCode = http.POST(payload);

  if (httpCode > 0) {
    Serial.printf("[Notify] Success! HTTP Code: %d\n", httpCode);
  } else {
    Serial.printf("[Notify] Failed! Error: %s\n",
                  http.errorToString(httpCode).c_str());
  }

  http.end();
  return httpCode == 200;
}

bool NotificationManager::sendTradeResult(const char *action, float amount,
                                          float price) {
  char buffer[128];
  snprintf(
      buffer, sizeof(buffer),
      "🤖 [KUB-Nexus Auto-Trade]\n%s: %0.4f\nราคา: %0.2f THB\n✅ สำเร็จแล้ว!",
      action, amount, price);
  return sendAlert(buffer);
}
