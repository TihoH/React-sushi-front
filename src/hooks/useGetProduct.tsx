import { useEffect, useState } from "react";
import { ItemProduct } from "../../types";

export function useGetProduct(id) {
  const [product, setpPoduct] = useState<ItemProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getProduct(id:number) {
    try {

      const response = await fetch(`https://react-sushi.onrender.com/getProduct/${id}`)
      const data = await response.json();
      setpPoduct(data);
      console.log(data)
    } catch (error) {
        console.log(error)
         setIsLoading(false)
    }finally {
        setIsLoading(false)
    }
  }

  useEffect(() => {
    getProduct(id);
  }, [id]);

  return {product , isLoading};
}
