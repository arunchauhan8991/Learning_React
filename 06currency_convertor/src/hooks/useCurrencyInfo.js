import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {


        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())   //is .then se api ka response json me convert hoga asynchronously (api ka promise fulfill hoga)
        .then((data) => setData(data[currency]))
        console.log(data);
        
    }, [currency]);
    return data
}

export default useCurrencyInfo; 