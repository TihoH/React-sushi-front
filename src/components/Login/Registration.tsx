import React, { FC } from "react";
import { IRegisterationUser } from "../../../types";
import CustomInput from "../../UI/CustomInput";

interface RegistrationProps {
  registerationUser: IRegisterationUser;
  setRegistrationUser: (e: any) => void;
  postDataUser: (e) => void;
  errorMessage: string;
  setTabsUser: (value) => void;
}

const Registration: FC<RegistrationProps> = ({
  registerationUser,
  setRegistrationUser,
  postDataUser,
  errorMessage,
  setTabsUser,
}) => {
  return (
<div className="flex md:flex-rowitems-center justify-center h-full flex-col px-4">
  <div className="flex flex-col md:flex-row mt-6 md:mt-0 gap-6 items-center">
    {/* Форма */}
    <form className="flex w-full flex-col gap-5 max-w-[400px] bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
        Реєстрація
      </h2>
      <p className="text-sm text-gray-500 text-center mb-4">
        Створіть новий акаунт, щоб робити замовлення швидше
      </p>

      <CustomInput
        placeholder="Ім'я"
        className="w-full py-3 rounded-md border px-3 shadow-sm focus:ring-2 focus:ring-yellow-400 outline-none"
        onChange={(e) =>
          setRegistrationUser({ ...registerationUser, name: e.target.value })
        }
      />

      <CustomInput
        className="w-full py-3 rounded-md border px-3 shadow-sm focus:ring-2 focus:ring-yellow-400 outline-none"
        type="email"
        placeholder="Електронна пошта"
        onChange={(e) =>
          setRegistrationUser({ ...registerationUser, email: e.target.value })
        }
      />

      <CustomInput
        className="w-full py-3 rounded-md border px-3 shadow-sm focus:ring-2 focus:ring-yellow-400 outline-none"
        placeholder="Пароль"
        type="password"
        onChange={(e) =>
          setRegistrationUser({
            ...registerationUser,
            password: e.target.value,
          })
        }
      />

      <button
        className="bg-yellow-500 text-white font-medium py-3 rounded-md hover:bg-yellow-600 transition shadow-md"
        onClick={(e) => postDataUser(e)}
      >
        Зареєструватися
      </button>

      {errorMessage && (
        <span className="text-red-600 text-sm text-center">{errorMessage}</span>
      )}
    </form>

    {/* Блок справа */}
    <div className="flex flex-col text-center min-w-[150px]">
      <span className="text-gray-500 text-sm">Вже маєте акаунт?</span>
      <span
        className="text-blue-500 font-medium cursor-pointer hover:underline"
        onClick={() => setTabsUser("login")}
      >
        Увійти
      </span>
    </div>
  </div>
</div>
  );
};

export default Registration;
