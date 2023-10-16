// Rule của ReactJS là nếu muốn sử dụng custom hook thì phải bắt đầu bằng use
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        try {
            async function response() {
                let res = await axios.get(url);
                let data = res && res.data ? res.data : [];
                setData(data);
                setIsLoading(false);
                setIsError(false);
            }
            setTimeout(() => {
                response();
            }, 3000);
        }
        catch (e) {
            setIsError(true);
            setIsLoading(false);
        }

    }, [url]);
    return {
        data, isLoading, isError
    }
}
// Get data from real online server with axios
// const response = async () => {
//     setTimeout(async () => {
//         try {
//             let res = await axios.get('https://jsonplaceholder.typicode.com/users123123');
//             let data = res && res.data ? res.data : [];
//             setData(data);
//             setisLoading(false);
//             setIsError(false);
//         }
//         catch (e) {
//             setIsError(true);
//             setisLoading(false);
//             // alert(e.name + ": " + e.message);
//         }
//     }, 3000);
// }
// useEffect(() => {
//     response();
// }, [])

export default useFetch;