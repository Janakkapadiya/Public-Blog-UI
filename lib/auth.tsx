//@ts-ignore
import Cookies from "js-cookie";

export const setToken = async (data: {
  user: { id: string; email: string; username: string };
  jwt: string;
}) => {
  if (typeof window === "undefined") {
    return;
  }
  Cookies.set("id", data.user.id);
  Cookies.set("email", data.user.email);
  Cookies.set("jwt", data.jwt);
  Cookies.set("username", data.user.username);
};

export const unsetToken = () => {
  if (typeof window === "undefined") {
    return;
  }
  Cookies.remove("id");
  Cookies.remove("jwt");
  Cookies.remove("email");
};
