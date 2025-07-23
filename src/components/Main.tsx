import GroupSushiList from "./GroupSushiList";
import BannerSlide from "./BannerSlide";
import MainInfoBlock from "./MainInfoBlock";
import { useGetDataCategory } from "../hooks/useGetDataCategory";
import { useStore } from "../store/app";
import { useParams } from "react-router-dom";

const Main = () => {
  const { data, isLoading } = useGetDataCategory('deliveryDnepr');

  return (
    <>
      <BannerSlide />
      <GroupSushiList dataDelivery={data} isLoading={isLoading} />
      <MainInfoBlock />

    </>
  );
};

export default Main;
