/**
 * @file WiFiManager.cpp
 */

#include "WiFiManager.h"

WebServer WiFiManager::_server(80);
DNSServer WiFiManager::_dnsServer;
bool WiFiManager::_isAPMode = false;

void WiFiManager::begin() {
  ProjectConfig config;
  ConfigManager::begin();

  if (ConfigManager::loadConfig(config) && strlen(config.wifi_ssid) > 0) {
    Serial.printf("[WiFi] Connecting to %s...\n", config.wifi_ssid);
    WiFi.begin(config.wifi_ssid, config.wifi_pass);

    // Wait for connection (non-blocking in real app, but simplified here)
    int attempts = 0;
    while (WiFi.status() != WL_CONNECTED && attempts < 20) {
      delay(500);
      Serial.print(".");
      attempts++;
    }

    if (WiFi.status() == WL_CONNECTED) {
      Serial.println("\n[WiFi] Connected! IP: " + WiFi.localIP().toString());
      return;
    }
  }

  // If connection fail or no config, start AP Mode
  startAP();
}

void WiFiManager::startAP() {
  _isAPMode = true;
  WiFi.mode(WIFI_AP);
  WiFi.softAP("KUB-Nexus-Setup");

  _dnsServer.start(53, "*", WiFi.softAPIP());
  setupServer();

  Serial.println("[WiFi] AP Mode Started: KUB-Nexus-Setup");
  Serial.print("[WiFi] IP: ");
  Serial.println(WiFi.softAPIP());
}

void WiFiManager::setupServer() {
  _server.on("/", handleRoot);
  _server.on("/save", HTTP_POST, handleSave);
  _server.onNotFound(handleRoot); // Redirect all to setup page
  _server.begin();
}

void WiFiManager::update() {
  if (_isAPMode) {
    _dnsServer.processNextRequest();
  }
  _server.handleClient();
}

void WiFiManager::handleRoot() {
  String html = "<html><head><meta name='viewport' "
                "content='width=device-width, initial-scale=1.0'>";
  html += "<style>body{font-family:sans-serif;background:#05070a;color:white;"
          "padding:20px;}";
  html +=
      "input{width:100%;padding:10px;margin:10px 0;background:#111;border:1px "
      "solid #333;color:white;border-radius:8px;}";
  html += "button{width:100%;padding:15px;background:#10b981;border:none;color:"
          "white;font-weight:bold;border-radius:8px; "
          "cursor:pointer;}</style></head>";
  html += "<body><h1 style='color:#10b981'>KUB-Nexus Setup</h1>";
  html += "<form action='/save' method='POST'>";
  html += "<label>WiFi SSID</label><input name='ssid' placeholder='WiFi Name'>";
  html += "<label>WiFi Password</label><input name='pass' type='password'>";
  html += "<label>Bitkub API Key</label><input name='key'>";
  html +=
      "<label>Bitkub API Secret</label><input name='secret' type='password'>";
  html += "<button type='submit'>Save & Connect</button></form></body></html>";
  _server.send(200, "text/html", html);
}

void WiFiManager::handleSave() {
  ProjectConfig config;
  strncpy(config.wifi_ssid, _server.arg("ssid").c_str(), 32);
  strncpy(config.wifi_pass, _server.arg("pass").c_str(), 64);
  strncpy(config.api_key, _server.arg("key").c_str(), 64);
  strncpy(config.api_secret, _server.arg("secret").c_str(), 64);

  ConfigManager::saveConfig(config);

  _server.send(200, "text/html", "<h1>Config Saved! Restarting...</h1>");
  delay(2000);
  ESP.restart();
}
