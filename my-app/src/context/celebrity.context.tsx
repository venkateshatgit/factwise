import { createContext, useEffect, useState } from "react";
import { CelebContextInterface, CelebInterface } from '../utility/model';


export const CelebrityConext = createContext<CelebContextInterface | null>(null);


export const CelebrityProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [celebData, setCelebData] = useState<CelebInterface[]>([]);

    const value = {celebData, setCelebData};

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch("/celebrities.json");
            // console.log(res);
      
            const data = await res.json();
            setCelebData(data);
        }
        fetchData();
    }, [])

    return (
        <CelebrityConext.Provider value={value}>
            {children}
        </CelebrityConext.Provider>
    )
}