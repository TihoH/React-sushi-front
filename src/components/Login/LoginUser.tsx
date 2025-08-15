import React from "react";
import CustomInput from "../../UI/CustomInput";

const LoginUser = ({
  setRegistrationUser,
  registerationUser,
  postDataLoginUser,
  setTabsUser,
}) => {
  return (
    <div className="flex md:flex-rowitems-center justify-center h-full flex-col px-4 mt-6 md:mt-6">
      <div className="flex gap-6 items-center flex-col md:flex-row">
        {/* Форма логіна */}
        <form className="flex w-full  flex-col gap-5 md:max-w-[400px] bg-white  shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
            Вхід
          </h2>
          <p className="text-sm text-gray-500 text-center mb-4">
            Увійдіть у свій акаунт, щоб продовжити
          </p>

          <CustomInput
            className="w-full py-3 rounded-md border px-3 shadow-sm focus:ring-2 focus:ring-yellow-400 outline-none"
            type="email"
            placeholder="Електронна пошта"
            onChange={(e) =>
              setRegistrationUser({
                ...registerationUser,
                email: e.target.value,
              })
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
            onClick={(e) => postDataLoginUser(e)}
          >
            Увійти
          </button>
        </form>

        {/* Блок справа */}
        <div className="flex flex-col text-center min-w-[150px]">
          <span className="text-gray-500 text-sm">Ще не маєте акаунту?</span>
          <span
            className="text-blue-500 font-medium cursor-pointer hover:underline"
            onClick={() => setTabsUser("register")}
          >
            Зареєструватися
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
