import React, { FC, useEffect, useState } from "react";
import { useAppStore } from "../../store/app";
import { IRegisterationUser } from "../../../types";
import { CircleCheckBig, Pencil } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const UserProfile: FC = () => {
  const userId = useAppStore((state) => state.userId);
  const [dataUser, setDataUser] = useState<IRegisterationUser | null>(null);
  const [newUserPhone, setNewUserPhone] = useState("+380");
  const [isActiveNewPhone, setIsActiveNewPhone] = useState<boolean>(false);
  const [newUserAddress, setNewUserAddress] = useState("");
  const [isActiveAddress, setActiveAddress] = useState<boolean>(false);
  
  // Получаем данные пользователя
  const getUserData = async () => {
    try {
      const response = await fetch(
        `https://react-sushi.onrender.com/getUserData/${userId}`
      );
      const data = await response.json();
      console.log(data);
      // Конвертируем createdAt один раз в объект Date
      if (data?.createdAt) {
        data.createdAt = new Date(data.createdAt);
      }

      setDataUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Обновление телефона
  const editUserPhone = async (type: string) => {
    try {
      const response = await fetch(
        `https://react-sushi.onrender.com/editDataUser/${userId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phone: newUserPhone,
            address: newUserAddress,
          }),
        }
      );

      if (response.ok) {
        setIsActiveNewPhone(false);
        setActiveAddress(false);
        getUserData(); // обновляем данные после изменения
      }
    } catch (error) {
      setIsActiveNewPhone(false);
    }
  };
  useEffect(() => {
    if (!dataUser && userId) getUserData();
  }, [userId]);

  const formattedCreated = dataUser?.createdAt
    ? new Date(dataUser.createdAt).toLocaleString("uk-UA", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "-";

  const formattedUpdated = dataUser?.updatedAt
    ? new Date(dataUser.updatedAt).toLocaleString("uk-UA", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "-";

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Профіль користувача
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Имя */}
        <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h4 className="text-gray-500 font-semibold">Ім'я</h4>
          <p className="text-gray-900 mt-1">{dataUser?.name || "-"}</p>
        </div>

        {/* Email */}
        <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h4 className="text-gray-500 font-semibold">Електронна пошта</h4>
          <p className="text-gray-900 mt-1">{dataUser?.email || "-"}</p>
        </div>

        {/* Телефон */}
        <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h4 className="text-gray-500 font-semibold">Телефон</h4>
          <div className="flex flex-col gap-2 justify-between">
            <div className="flex justify-between items-center">
              <p className="text-gray-900 mt-1">
                {dataUser?.phone || "не вказано"}
              </p>
              {newUserPhone.replace(/\s/g, "").length > 12 &&
              isActiveNewPhone ? (
                <button className="hover:text-gray-500" onClick={() => editUserPhone('phone')}>
                  Змінити
                </button>
              ) : (
                <Pencil
                  className="cursor-pointer hover:text-yellow-500 transition-all"
                  strokeWidth={1}
                  onClick={() => setIsActiveNewPhone(!isActiveNewPhone)}
                />
              )}
            </div>
            <div className="flex items-center justify-between relative">
              <AnimatePresence>
                {isActiveNewPhone && (
                  <motion.div
                    className="flex items-center relative max-w-[250px] w-full"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      className="py-2 outline-none border px-1 rounded-md w-full"
                      type="text"
                      placeholder="Введіть новий номер"
                      value={newUserPhone}
                      onChange={(e) => setNewUserPhone(e.target.value)}
                    />
                    {newUserPhone.replace(/\s/g, "").length > 12 && (
                      <CircleCheckBig
                        className="text-green-500 absolute right-2"
                        strokeWidth={1}
                      />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Адреса */}
        <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h4 className="text-gray-500 font-semibold">Адреса</h4>
          <div className="flex gap-2 justify-between">
            <p className="text-gray-900 mt-1">
              {dataUser?.address || "не вказано"}
            </p>
            {newUserAddress.replace(/\s/g, "").length > 5 && isActiveAddress ? (
              <button
                className="hover:text-gray-500"
                onClick={() => editUserPhone("address")}
              >
                Змінити
              </button>
            ) : (
              <Pencil
                className="cursor-pointer hover:text-yellow-500 transition-all"
                strokeWidth={1}
                onClick={() => setActiveAddress(!isActiveAddress)}
              />
            )}
          </div>
          <div className="flex items-center justify-between relative">
            <AnimatePresence>
              {isActiveAddress && (
                <motion.div
                  className="flex items-center relative max-w-[250px] w-full"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    className="py-2 outline-none border px-1 rounded-md w-full"
                    type="text"
                    placeholder="Введіть адрес"
                    value={newUserAddress}
                    onChange={(e) => setNewUserAddress(e.target.value)}
                  />
                  {newUserAddress.replace(/\s/g, "").length > 5 && (
                    <CircleCheckBig
                      className="text-green-500 absolute right-2"
                      strokeWidth={1}
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div></div>
        </div>

        {/* Дата создания */}
        <div>
          <h4 className="text-gray-600 font-semibold">
            Дата створення профілю:
          </h4>
          <p className="text-gray-900 mt-1">{formattedCreated}</p>
        </div>

        {/* Дата изменения */}
        <div>
          <h4 className="text-gray-600 font-semibold">
            Останнє оновлення профілю:
          </h4>
          <p className="text-gray-900 mt-1">{formattedUpdated}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
