import { OneSignal } from "react-native-onesignal";

export function createUserInfoTag() {
  OneSignal.User.addTags({
    user_name: "Felipe",
    user_email: "felipemattoseu@gmail.com",
  });
}
