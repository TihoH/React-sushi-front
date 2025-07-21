import { useEffect, useState } from "react";
import MainDeliveryDnepr from "./MainDeliveryDnepr";
import BannerSlide from "./BannerSlide";
import MainInfoBlock from "./MainInfoBlock";

const Main = () => {
    const [deliveryData , setDeliveryData] = useState([])

  async function getData() {
    const response = await fetch("https://react-sushi.onrender.com/sushi");
    const data = await response.json();
    console.log(data);
  }

  async function getDataDeliveryDnepr() {
    const response = await fetch(
      `https://react-sushi.onrender.com/sushi?category=deliveryDnepr`
    );
    const data = await response.json();
    setDeliveryData(data)
    console.log(data);
  }

  useEffect(() => {
    getData();
    getDataDeliveryDnepr();
  }, []);
  return (
    <div className="min-h-screen">
        <BannerSlide />
      <MainDeliveryDnepr category="deliveryDnepr" dataDelivery={deliveryData}/>
      <MainInfoBlock />
    </div>
  );
};

export default Main;
