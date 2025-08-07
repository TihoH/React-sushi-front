import HeaderTopLeftInfo from "./HeaderTopLeftInfo";
import HeaderTopRigthInfo from "./HeaderTopRigthInfo";

const HeaderTop = ({ setActiveBurgerMenu, activeBurgerMenu }) => {
  const urlImageLogo =
    "https://cdn.wesushi.com.ua/VENUS/WEB/D444D3E0-3EFA-11ED-AE25-8DD7739E8B8B/1738009561561_%D0%BB%D0%BE%D0%B3%D0%BE%D0%B2%20%D0%B2%20%D0%BA%D1%80%D0%B8%D0%B2%D1%8B%D1%85_we%20sushi-09.svg?alt=media&token=42fa83d8-3515-4090-b72f-b5ed2dfef0cd}";
  return (
    <div className="flex flex-wrap  justify-between items-center  border-b-2 border-gray-100 py-2 px-6 ">
      <div className="flex flex-row-reverse md:flex-row items-center  gap-3 ">
        <HeaderTopLeftInfo />
        <a href="/">
          <img className="max-w-[50px] w-full md:absolute md:left-1/2 md:-translate-x-1/2 md:top-2" src={urlImageLogo} alt="" />
        </a>
      </div>
      <HeaderTopRigthInfo
        setActiveBurgerMenu={setActiveBurgerMenu}
        activeBurgerMenu={activeBurgerMenu}
      />
    </div>
  );    
};

export default HeaderTop;
