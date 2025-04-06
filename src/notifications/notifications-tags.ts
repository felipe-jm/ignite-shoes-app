import { OneSignal } from "react-native-onesignal";

export function createUserInfoTag() {
  OneSignal.User.addTags({
    user_name: "Felipe",
    user_email: "felipemattoseu@gmail.com",
  });
}

export function updateCartUpdateTag(itemsCount: number) {
  OneSignal.User.addTag("cart_update_items_count", itemsCount.toString());
}

export function removeCartUpdateTag() {
  OneSignal.User.removeTag("cart_update_items_count");
}
