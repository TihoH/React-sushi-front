
import CartItem from "./Cart/CartItem";
import { useCartStore } from "../store/cart";

const AdedToOrder = () => {
    const {adedToOrderProducts} = useCartStore( store => store )
    
  return (
    <div>
      <div className="mt-4 mb-1 flex flex-1 px-5 items-center">
        <h2 className="text-xl md:text-3xl  w-full text-center md:text-start">Додадково до замовлення</h2>
        
      </div>
      <div className="flex flex-col gap-4">
        {adedToOrderProducts.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} activeTypePrise={true}  />
        ))}
      </div>
    </div>
  );
};

export default AdedToOrder;
