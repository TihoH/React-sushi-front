import GroupSushiList from "./GroupSushiList";
import BannerSlide from "./BannerSlide";
import MainInfoBlock from "./MainInfoBlock";
import { useGetDataCategory } from "../hooks/useGetDataCategory.ts";


const Main = () => {
  const { data, isLoading } = useGetDataCategory('deliveryDnepr');

  return (
    <>
      <BannerSlide />
      <GroupSushiList dataList={data} isLoading={isLoading} title={"Доставка суші Дніпро"} />
      <MainInfoBlock />

    </>
  );
};

export default Main;
