import React, { useContext, useState } from 'react'
import { CelebContextInterface, CelebInterface } from './utility/model';
import { CiSearch } from "react-icons/ci";
import './App.css';
import { CelebrityConext } from './context/celebrity.context';
import Celebrity from './components/celebrity/celebrity.component';

const App: React.FC = () => {
    const {celebData} = useContext(CelebrityConext) as CelebContextInterface;

    const [searchValue, setSearchValue] = useState<string>("");
    const [filteredData, setFilteredData] = useState<CelebInterface[]>([]);
    const [expanded, setExpanded] = useState<string | false>(false);

    //handleChange: filters the list view, according to input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchBy = e.target.value;
        const filtered:CelebInterface[] = celebData.filter((item, index) => {
            const fullName = `${item.first}${item.last}`.toLowerCase();
            const reversedFullName = `${item.last}${item.first}`.toLowerCase();
            const trimmedSearchValue = searchBy.replace(/\s+/g, '').toLowerCase();
            return fullName.includes(trimmedSearchValue) || reversedFullName.includes(trimmedSearchValue);
        })
    
        setSearchValue(searchBy);
        setFilteredData(filtered);
    }

    return (
        <div className='App'>
            <h2>List View</h2>
            <div className="search-bar">
                <CiSearch />
                <input 
                    type="text" 
                    className="search-bar-input" 
                    placeholder={'Search user'} 
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className="celebrities-list">
                {(searchValue? filteredData : celebData).map((item, index)=> {
                    return (
                        <Celebrity
                            id={item.id}
                            item={item} 
                            expanded={expanded}  
                            setExpanded={setExpanded}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default App