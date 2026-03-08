#ifndef NOTIFICATION_MANAGER_H
#define NOTIFICATION_MANAGER_H

#include <Arduino.h>

class NotificationManager {
public:
  static void begin();
  static void update();

  // Send a message via LINE Notify (or Telegram)
  static bool sendAlert(const char *message);
  static bool sendTradeResult(const char *action, float amount, float price);

private:
  static const char *_lineNotifyToken;
};

#endif
