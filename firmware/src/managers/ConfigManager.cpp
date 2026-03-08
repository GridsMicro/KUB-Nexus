/**
 * @file ConfigManager.cpp
 */

#include "ConfigManager.h"

Preferences ConfigManager::_prefs;

void ConfigManager::begin() {
  _prefs.begin("nexus-config", false);
  Serial.println("[Config] Preferences initialized");
}

bool ConfigManager::loadConfig(ProjectConfig &config) {
  if (!_prefs.isKey("is_setup")) {
    config.is_setup = false;
    return false;
  }

  _prefs.getBytes("config", &config, sizeof(ProjectConfig));
  return true;
}

void ConfigManager::saveConfig(const ProjectConfig &config) {
  ProjectConfig copy = config;
  copy.is_setup = true;
  _prefs.putBytes("config", &copy, sizeof(ProjectConfig));
  _prefs.putBool("is_setup", true);
  Serial.println("[Config] Configuration saved to NVS");
}

void ConfigManager::resetConfig() {
  _prefs.clear();
  Serial.println("[Config] Configuration cleared!");
}
