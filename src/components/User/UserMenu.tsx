  import { UserX } from "lucide-react";
  import { Link, useLocation, useNavigate } from "react-router-dom";
  import { useAppStore } from "../../store/app";
  import { userMenuLinks } from "../../data/userMenuLinks";
  import { userFavoritesStore } from "../../store/userFavorites";

  const UserMenu = ({setActiveBurgerAside}) => {
    const setAuthUser = useAppStore((store) => store.setAuthUser);
    const navigate = useNavigate();
    const location = useLocation();
    const { nameLink } = location.state || {};

    const allIdFavorites = userFavoritesStore((state) => state.allIdFavorites);

    console.log(allIdFavorites)

    const exitUser = () => {
      navigate("/");
      setAuthUser(false);
    };

    return (
      <div className="w-full max-w-sm bg-white md:shadow-lg md:rounded-2xl  h-full flex  flex-col justify-between">
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
                state={{ nameLink: item.linkName }}
                onClick={ () => setActiveBurgerAside(false) }
              >
      
                <item.icon className="w-5 h-5 text-gray-600" />
                <div className="w-full flex items-center justify-between text-base font-medium text-gray-800 md:group-hover:text-yellow-500 transition-all">
                  <span> {item.name}</span>
                  {item.name === "Обране" && (
                    <span
                      className={
                        "text-green-700  text-sm  rounded-full w-[27px] h-[27px] inline-flex items-center justify-center "
                      }
                    >
                      {allIdFavorites.length > 0 && allIdFavorites.length}
                    </span>
                  )}
                </div>
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
