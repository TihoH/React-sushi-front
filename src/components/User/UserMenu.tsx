import { ListOrdered, MapPinHouse, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const userMenuLinks = [
    { name: "Профиль", id: 1, icon: User, link: "/User/UserProfile" },
    { name: "Заказы", id: 2, icon: ListOrdered , link: "/User/UserOrders" },
       { name: "Адрес", id: 3, icon: MapPinHouse , link: "/User/UserAdress" },
  ];

  return (
    <ul className="flex items-center flex-col p-2">
      {userMenuLinks.map((item) => (
        <li key={item.id} className="flex items-center gap-4">
          <span>
            {<item.icon />}
          </span>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UserMenu;
