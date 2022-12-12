export const apiBaseEndPoint = "https://dummyjson.com";
import { getCookie, hasCookie } from "cookies-next";

export const getUserIdFromCookie = () => {
  const isUserCookie = hasCookie("user");
  if (isUserCookie) {
    const cookie: any = getCookie("user");
    const user = JSON.parse(cookie);
    return user?.id;
  } else {
    return undefined;
  }
};
