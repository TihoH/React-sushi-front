import { useEffect, useState } from "react";
import { ItemProduct } from "../../types";

export function useGetDataCategory(category:string | undefined) {
  const [data, setData] = useState<ItemProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getDataCategory(category) {
    try {
      const response = await fetch( `https://react-sushi.onrender.com/sushi?category=${category}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
        console.log(error)
         setIsLoading(false)
    }finally {
        setIsLoading(false)
    }
  }

  useEffect(() => {
    getDataCategory(category);
  }, [category]);

  return {data , isLoading};
}
