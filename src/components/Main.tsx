import { useEffect } from "react";


const Main = () => {

    async function getData() {
        const response = await fetch( 'http://localhost:5000/sushi' )
        const data = await response.json()
        console.log(data)
    }

    useEffect( () => {
        getData()
    } , [])
    return (
        <div>
            <h1>Main</h1>
        </div>
    );
};

export default Main;