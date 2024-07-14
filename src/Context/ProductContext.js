import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const AppContext = createContext()

const API = "https://mocki.io/v1/05918ae0-3435-4798-8582-1b05dcf3203e";

const AppProvider =  ({children})  => {
    const getProducts =async(url) => {
        const res = await axios.get(url);
        const products = await res.data;
        console.log(
            '~file: ProductContext.js ~ line12 ~ getProducts ~ products',
            products
        );
    };

    useEffect(() => {
        getProducts(API);
    },[]);

    return <AppContext.Provider value={{}}>
        {children}
        </AppContext.Provider>;

    // const useProductContext = () =>{
    //     return useContext(AppContext)
    // }
};

export {AppContext, AppProvider };