import { useLocation, useNavigate } from "react-router-dom";
import { useGetProduct } from "../hooks/useGetProduct.ts";
import { ArrowBigLeftDash } from "lucide-react";
import CardProductInfo from "../components/CardProductInfo";
import SkeletonPageProduct from "../UI/SkeletonPageProduct";
import RecomendedProducts from "../components/RecomendedProducts.tsx";
import { useEffect } from "react";

const CardProduct = () => {
  const idProduct = useLocation().state?.id;
  const { product } = useGetProduct(idProduct);
  const navigate = useNavigate();

    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  if (!product) {
    return <SkeletonPageProduct />;
  }

  return (
    <div className="mt-16 md:mt-5 ">
      <div>
        <button
          className="flex items-center hover:text-yellow-800 group"
          onClick={() => navigate(-1)}
        >
          <span className="mr-4">
            <ArrowBigLeftDash className="text-[#e2ad50] group-hover:text-red-600 duration-200 group-hover:animate-pulse transition-transform   "  />
          </span>{" "}
          НАЗАД
        </button>
      </div>
      <div className=" flex flex-col  md:flex md:flex-row gap-10 mt-5 ">
        <div className="max-w-[600px] w-full">
          <img className="w-full rounded-lg" src={product?.imageUrl} alt="" />
        </div>
        <CardProductInfo product={product} />
      </div>
      <div>
        <RecomendedProducts />
      </div>
    </div>
  );
};

export default CardProduct;
