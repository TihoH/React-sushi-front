import { useEffect, useState } from "react";
import { ItemProduct } from "../../types";

export function useGetProduct(id) {
  const [product, setpPoduct] = useState<ItemProduct | null>(null);

  async function getProduct(id:number) {
    try {

      const response = await fetch(`https://react-sushi.onrender.com/getProduct/${id}`)
      const data = await response.json();
      setpPoduct(data);
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getProduct(id);
  }, [id]);

  return {product };
}
