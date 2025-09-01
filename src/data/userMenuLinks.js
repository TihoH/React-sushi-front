import { ListOrdered, MapPinHouse, Star, User, UserX } from "lucide-react";

export const userMenuLinks = [
  {
    name: "Профіль",
    id: 1,
    icon: User,
    link: "/User/UserProfile",
    linkName: "UserProfile",
  },
  {
    name: "Замовлення",
    id: 2,
    icon: ListOrdered,
    link: "/User/UserOrders",
    linkName: "UserOrders",
  },
  {
    name: "Обране",
    id: 200,
    icon: Star,
    link: "/User/Favorites",
    linkName: "Favorites",
  },
  {
    name: "Адреса",
    id: 3,
    icon: MapPinHouse,
    link: "/User/UserAdress",
    linkName: "UserAdress",
  },
];
