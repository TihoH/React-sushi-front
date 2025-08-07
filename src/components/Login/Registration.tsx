import React, { FC } from "react";
import { IRegisterationUser } from "../../../types";
import CustomInput from "../../UI/CustomInput";

interface RegistrationProps {
  registerationUser: IRegisterationUser;
  setRegistrationUser: (e: any) => void;
  postDataUser:(e) => void
}

const Registration: FC<RegistrationProps> = ({
  registerationUser,
  setRegistrationUser,
  postDataUser
}) => {
  return (
    <div className="flex items-center justify-center h-full">
      <form className="flex w-full flex-col gap-4 max-w-[400px]">
        <CustomInput
          placeholder="Имя"
          className="w-full py-3 rounded-md border px-2"
          onChange={(e) =>
            setRegistrationUser({ ...registerationUser, name: e.target.value })
          }
        />
        <CustomInput
          className="w-full py-3 rounded-md border px-2"
        type="email"
        placeholder="Email"
          onChange={(e) =>
            setRegistrationUser({ ...registerationUser, email: e.target.value })
          }
        />
        <CustomInput
          className="w-full py-3 rounded-md border px-2"
          placeholder="Пароль"
          type="password"
          onChange={(e) =>
            setRegistrationUser({
              ...registerationUser,
              password: e.target.value,
            })
          }
        />

        <div>
          <button className="border px-10 py-2 rounded-md hover:bg-gray-200 transition" onClick={ (e) => postDataUser(e) }>
            Добавить пользователя
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
