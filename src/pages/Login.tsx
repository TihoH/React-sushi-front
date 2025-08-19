import { FileText, MapPinHouse } from "lucide-react";
import React, { useEffect, useState } from "react";
import Registration from "../components/Login/Registration";
import { IRegisterationUser } from "../../types";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store/app";
import LoginUser from "../components/Login/LoginUser";
import Popup from "../UI/Popup";

const Login = () => {
  const navigate = useNavigate();
  const [activePopup, setActivePopup] = useState(false);
  const setAuthUser = useAppStore((state) => state.setAuthUser);
  const setUserId = useAppStore((state) => state.setUserId);
  const setUserName = useAppStore((state) => state.setUserName);
  const [tabsUser, setTabsUser] = useState<"login" | "register">("login");
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });
  const [registerationUser, setRegistrationUser] = useState<IRegisterationUser>(
    {
      name: "",
      email: "",
      password: "",
    }
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [textPopup, setTextPopup] = useState("");

  async function postDataNewUser(e) {
    e.preventDefault();

    if (
      !registerationUser.name ||
      !registerationUser.email ||
      !registerationUser.password
    ) {
      setErrorMessage("❌ Усі поля мають бути заповнені");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerationUser),
      });

      const data = await response.json();

      if (response.ok) {
        setAuthUser(true);
        console.log(data);
        setUserId(data.userId);
        console.log("добавлен");
        setUserName(registerationUser.name);
        setTimeout(() => {
          navigate("/");
        }, 2000);
        setRegistrationUser({
          ...registerationUser,
          name: "",
          email: "",
          password: "",
        });
        setErrorMessage("");
      } else {
        console.error("❌", data.message); // <-- Вот здесь сообщение от сервера
        setErrorMessage(data.message || "Помилка реєстрації");
      }
    } catch (error) {
      console.log(error);
      setAuthUser(false);
    }
  }

  async function postDataLoginUser(e) {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/loginUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLoginData),
      });

      const data = await response.json();

      if (response.ok) {
        setTextPopup("Успешный вход");
        setActivePopup(true);
        setAuthUser(true);
        setUserName(data.user.name);
        setUserId(data.user.id);
        setTimeout(() => {
          navigate("/User");
          setActivePopup(false);
        }, 2000);
      } else {
        setTextPopup(data.message || "Ошибка логина");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex  flex-col md:flex-row text-center min-h-[600px] bg-gray-100 py-16 md:py-10 -mx-4">
      <div className="flex-1 flex justify-center items-center min-h-full ">
        <ul className="flex gap-4 flex-col">
          <li className="flex items-center gap-6">
            <span>
              <MapPinHouse className="text-yellow-600 h-[50px] w-[50px] p-3 bg-white rounded-full " />{" "}
            </span>
            <span>Зберігайте улюблені адреси</span>
          </li>
          <li className="flex items-center gap-6">
            <span>
              <FileText className="text-yellow-600 h-[50px] w-[50px] p-3 bg-white rounded-full " />{" "}
            </span>
            <span>Дивіться історію замовлень</span>
          </li>
        </ul>
      </div>
      <div className="flex-1 md:bg-white rounded-md w-full ">
        {tabsUser === "login" ? (
          <LoginUser
            setRegistrationUser={setUserLoginData}
            registerationUser={userLoginData}
            postDataLoginUser={postDataLoginUser}
            setTabsUser={setTabsUser}
          />
        ) : (
          <Registration
            registerationUser={registerationUser}
            setRegistrationUser={setRegistrationUser}
            postDataUser={postDataNewUser}
            errorMessage={errorMessage}
            setTabsUser={setTabsUser}
          />
        )}
      </div>

      <Popup isActivePopup={activePopup}>
        <h5>{textPopup}</h5>
      </Popup>
    </div>
  );
};

export default Login;
