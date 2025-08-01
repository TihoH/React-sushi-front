import { useEffect, useState } from "react";
import { ItemProduct } from "../../types";

export function useGetDataSearch(searchValue: string) {

    const [isLoadingSearch, setIsLoadingSearch] = useState(true)
    const [dataSearch, setDataSearch] = useState<ItemProduct[] | null>(null)

    async function getDataSearch() {

        try {
            const response = await fetch(
                `https://react-sushi.onrender.com/search?q=${searchValue}`
            );
            const data = await response.json();
            setDataSearch(data)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoadingSearch(false)
        }
    }

    useEffect(() => {
        setIsLoadingSearch(true)
        const debounceSearch = setTimeout(() => {
            if (searchValue.trim() != '') {
                getDataSearch();
            }
        }, 1500)

        return () => {
            clearTimeout(debounceSearch)
        }

    }, [searchValue]);

    return { dataSearch, isLoadingSearch }

}