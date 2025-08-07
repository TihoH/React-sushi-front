import { FileText, MapPinHouse } from "lucide-react";
import React, { useEffect, useState } from "react";
import Registration from "../components/Login/Registration";
import { IRegisterationUser } from "../../types";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store/app";

const Login = () => {
  const navigate = useNavigate();
  const {setUserAuth , setAuthUser} = useAppStore( state => state )
  const [registerationUser, setRegistrationUser  ] = useState<IRegisterationUser>(
    {
      name: "",
      email: "",
      password: "",
    }
  );

  async function postDataUser(e) {
    e.preventDefault();
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
        setAuthUser(true)
        console.log("добавлен");
        setUserAuth(registerationUser.name)
        setTimeout(() => {
          navigate("/");
        }, 2000);
        setRegistrationUser({...registerationUser , name: '' , email: '' , password: ''})
      }
    
      
      console.error("❌", data.message); // <-- Вот здесь сообщение от сервера
    } catch (error) {
      console.log(error);
        setAuthUser(false)
    }
  }

  useEffect(() => {
    // postDataUser()
  }, []);

  return (
    <div className="flex  text-center border min-h-[600px] bg-gray-100 py-10 -mx-4">
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
      <div className="flex-1 bg-white rounded-md">
        <Registration
          registerationUser={registerationUser}
          setRegistrationUser={setRegistrationUser}
          postDataUser={postDataUser}
        />
      </div>
    </div>
  );
};

export default Login;
