import React from "react";

const FormOder = () => {
  return (
    <div className="flex flex-col gap-3">
      <form className="grid grid-cols-2 gap-6">
        {/* Ім'я */}
        <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <label
            htmlFor="firstName"
            className="text-gray-500 font-semibold block mb-2"
          >
            Ім’я <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            required
            placeholder="Введіть ім’я"
            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        {/* Прізвище */}
        <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <label
            htmlFor="lastName"
            className="text-gray-500 font-semibold block mb-2"
          >
            Прізвище <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            required
            placeholder="Введіть прізвище"
            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        {/* Телефон */}
        <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <label
            htmlFor="phone"
            className="text-gray-500 font-semibold block mb-2"
          >
            Номер телефону <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            placeholder="+38 (0__) ___-__-__"
            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        {/* Адреса доставки */}
        <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <label
            htmlFor="address"
            className="text-gray-500 font-semibold block mb-2"
          >
            Адреса доставки <span className="text-red-500">*</span>
          </label>
          <input
            id="address"
            type="text"
            required
            placeholder="вул. Шевченка, 12"
            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        {/* Бажаний час доставки */}
        <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <label
            htmlFor="deliveryTime"
            className="text-gray-500 font-semibold block mb-2"
          >
            Бажаний час доставки
          </label>
          <input
            id="deliveryTime"
            type="time"
            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>
      </form>
      {/* Передзвонити для підтвердження */}
      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
        <input
          type="checkbox"
          id="callBack"
          className="h-5 w-5 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
        />
        <label htmlFor="callBack" className="text-gray-700 font-medium">
          Передзвонити для підтвердження замовлення
        </label>
      </div>
      {/* Кнопка Підтвердити */}
      <button
        type="submit"
        className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition"
      >
        Підтвердити замовлення
      </button>
    </div>
  );
};

export default FormOder;
