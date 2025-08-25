  import { ListOrdered, MapPinHouse, Star, User, UserX } from "lucide-react";
  export const userMenuLinks = [
    {
      name: "Профиль",
      id: 1,
      icon: User,
      link: "/User/UserProfile",
      linkName: "UserProfile",
    },
    {
      name: "Заказы",
      id: 2,
      icon: ListOrdered,
      link: "/User/UserOrders",
      linkName: "UserOrders",
    },
        {
      name: "Избранное",
      id: 200,
      icon: Star,
      link: "/User/Favorites",
      linkName: "Favorites",
    },
    {
      name: "Адрес",
      id: 3,
      icon: MapPinHouse,
      link: "/User/UserAdress",
      linkName: "UserAdress",
    },
  ];