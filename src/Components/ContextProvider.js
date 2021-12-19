import {createContext, useState} from "react";

export const PageContext = createContext(null);
export const ResultsPerPageContext = createContext(null);
export const OrderContext = createContext(null);
export const SearchContext = createContext(null);

export function ContextProvider(props){
    const [page, setPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);
    const [order, setOrder] = useState("Descending");
    const [search, setSearch] = useState("");

    return(
        <PageContext.Provider value={{page, setPage}}>
            <ResultsPerPageContext.Provider value={{resultsPerPage, setResultsPerPage}}>
                <OrderContext.Provider value={{order, setOrder}}>
                    <SearchContext.Provider value={{search, setSearch}}>
                        {props.children}
                    </SearchContext.Provider>
                </OrderContext.Provider>
            </ResultsPerPageContext.Provider>
        </PageContext.Provider>
    )
}