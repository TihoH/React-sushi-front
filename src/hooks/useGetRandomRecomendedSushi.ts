import { useEffect, useState } from "react";
import { ItemProduct } from "../../types";

export function useGetRandomRecomendedSushi() {
  const [productRecomednded, setRecomemdedPoduct] = useState<ItemProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getRecomendedProduct() {
    try {

      const response = await fetch(`https://react-sushi.onrender.com/sushi/random`)
      const data = await response.json();
      setRecomemdedPoduct(data);
    } catch (error) {
        console.log(error)
         setIsLoading(false)
    }finally {
        setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    getRecomendedProduct();
  }, []);

  return {productRecomednded , isLoading};
}
