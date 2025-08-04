import { useEffect, useState } from "react";
function useFetch<T>(url: string){
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true);
        fetch(url)
            .then(res=> res.json())
            .then(json =>setData(json))
            .catch(()=>setData(null))
            .finally(()=> setLoading(false))

    },[url]);
    return {data, loading}
}
export default useFetch;