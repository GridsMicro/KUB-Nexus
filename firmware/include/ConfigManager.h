/**
 * @file ConfigManager.h
 * @description NVS Storage Manager for WiFi and API Credentials
 */

#ifndef CONFIG_MANAGER_H
#define CONFIG_MANAGER_H

#include <Arduino.h>
#include <Preferences.h>

struct ProjectConfig {
  char wifi_ssid[33];
  char wifi_pass[65];
  char api_key[65];
  char api_secret[65];
  char line_token[65];
  bool is_setup;
};

class ConfigManager {
public:
  static void begin();
  static bool loadConfig(ProjectConfig &config);
  static void saveConfig(const ProjectConfig &config);
  static void resetConfig();

private:
  static Preferences _prefs;
};

#endif
