import { useEffect, useState } from "react";
import { useTheme } from "native-base";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import {
  NotificationWillDisplayEvent,
  OneSignal,
  OSNotification,
} from "react-native-onesignal";

import { Notification } from "../components/Notification";

import { AppRoutes } from "./app.routes";

export function Routes() {
  const { colors } = useTheme();

  const [notification, setNotification] = useState<OSNotification | null>(null);

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  useEffect(() => {
    const handleReceiveNotifications = (
      event: NotificationWillDisplayEvent
    ) => {
      event.preventDefault();

      const response = event.getNotification();

      setNotification(response);
    };

    OneSignal.Notifications.addEventListener(
      "foregroundWillDisplay",
      handleReceiveNotifications
    );

    return () => {
      OneSignal.Notifications.removeEventListener(
        "foregroundWillDisplay",
        handleReceiveNotifications
      );
    };
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <AppRoutes />

      {notification && (
        <Notification
          title={notification.title || ""}
          onClose={() => setNotification(null)}
        />
      )}
    </NavigationContainer>
  );
}
