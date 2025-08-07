import GroupSushiList from "./GroupSushiList";
import BannerSlide from "./BannerSlide";
import MainInfoBlock from "./MainInfoBlock";
import { useGetDataCategory } from "../hooks/useGetDataCategory.ts";
import { useAppStore } from "../store/app.js";


const Main = () => {
  const { data, isLoading } = useGetDataCategory('deliveryDnepr');
      const {activeCities } = useAppStore((state) => state);

  return (
    <>
      <BannerSlide />
      <GroupSushiList dataList={data} isLoading={isLoading} title={`Доставка суші ${activeCities}`} />
      <MainInfoBlock />

    </>
  );
};

export default Main;
