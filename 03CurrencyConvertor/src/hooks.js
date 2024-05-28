import { useEffect, useState } from "react";

export default function useCurrencyInfo(curr) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`)
            .then(response => response.json())
            .then(info => {
                setData(info[curr])
            })
    }, [curr])

    return data;
}
