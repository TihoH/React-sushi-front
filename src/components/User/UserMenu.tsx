import { ListOrdered, MapPinHouse, User, UserX } from "lucide-react";
import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppStore } from "../../store/app";

const UserMenu = ({ setActiveBurgerAside, setActiveLink, activeLink }) => {
  const userMenuLinks = [
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
      name: "Адрес",
      id: 3,
      icon: MapPinHouse,
      link: "/User/UserAdress",
      linkName: "UserAdress",
    },
  ];
  const { setAuthUser } = useAppStore((store) => store);
  const navigate = useNavigate();
  const location = useLocation();
  const { nameLink } = location.state || {};

  const exitUser = () => {
    navigate("/");
    setAuthUser(false);
  };
  const changeLink = (item) => {
        // setActiveLink(item.linkName);
    setActiveBurgerAside(false);
  };

  console.log(location);

  return (
    <div className="w-full max-w-sm bg-white md:shadow-lg rounded-2xl  h-full flex  flex-col justify-between">
      <ul className="flex flex-col ">
        {userMenuLinks.map((item) => (
          <li
            key={item.id}
            className={` ${
              item.linkName === nameLink ? "bg-gray-100" : ""
            } group  hover:bg-gray-100 hover:pl-2 transition-all `}
          >
            <Link
              to={item.link}
              className={`flex items-center gap-3 px-4 py-4 transition-colors pl-6`}
              onClick={() => changeLink(item)}
              state={ {nameLink: item.linkName} }
            >
              <item.icon className="w-5 h-5 text-gray-600" />
              <span className="text-base font-medium text-gray-800 group-hover:text-yellow-500 transition-all">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
        <li className="group hover:bg-gray-100 flex items-center gap-3 px-4 py-4 pl-6 hover:pl-8 transition-all">
          <UserX className="text-gray-600" />
          <button
            className="group-hover:text-yellow-500 font-medium"
            onClick={() => exitUser()}
          >
            Выйти
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
