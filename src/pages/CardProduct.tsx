import { useLocation, useNavigate } from "react-router-dom";
import { useGetProduct } from "../hooks/useGetProduct";
import { ArrowBigLeftDash } from "lucide-react";
import CardProductInfo from "../components/CardProductInfo";
import SkeletonPageProduct from "../UI/SkeletonPageProduct";

const CardProduct = () => {
  const idProduct = useLocation().state?.id;
  const { product , isLoading } = useGetProduct(idProduct);
  const navigate = useNavigate();

  if (!product) {
    return (<SkeletonPageProduct />)
  }

  return (
    <div>
      <div>
        <button
          className="flex items-center hover:text-yellow-800 "
          onClick={() => navigate(-1)}
        >
          <span className="mr-4">
            <ArrowBigLeftDash color="#e2ad50" />
          </span>{" "}
          НАЗАД
        </button>
      </div>
      <div className="flex gap-10 mt-5 ">
        <div className="max-w-[600px] w-full">
          
          <img className="w-full rounded-lg" src={product?.imageUrl} alt="" />
        </div>
        <CardProductInfo product={product} />
      </div>
    </div>
  );
};

export default CardProduct;
