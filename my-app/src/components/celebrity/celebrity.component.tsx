import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { IoIosArrowDropdown } from "react-icons/io";
import './celebrity.styles.css';
import { CelebInterface } from '../../utility/model';
import AccordDetail from '../accordDetail/accordDetail.component';
import VaildationDailog from '../validationDailog/vaildationDailog.component';

interface Props{
    id: number,
    item: CelebInterface,
    expanded: false | string,
    setExpanded: React.Dispatch<React.SetStateAction<string | false>>
}

function Celebrity({id, item, expanded, setExpanded}: Props ) {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const toggleMode = () => {
        setEditMode(prev => !prev);
    }

    // isExpanded is inbuilt, we will get respective true or false upon click.
    const handleClick = (panel: string) => (
        event: React.SyntheticEvent, 
        isExpanded: boolean
    ) => {
        //check edit mode is open or not
        if(!editMode){
            setExpanded(isExpanded ? panel : false);
        }
        else{
            setOpen(true);
        }
        
        
    };

    return (
        <Accordion
            key={id}
            expanded={expanded === id.toString()} 
            onChange={handleClick(id.toString())}
            style={{
                "borderRadius": "10px",
                "borderStyle": "none",
            }}
            sx={{
                '::before': {
                  content: 'none', // Hides the ::before pseudo-element
                },
            }}
            className='accord'
        >
            <AccordionSummary
                expandIcon={<IoIosArrowDropdown />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <div className='profile-image'>
                    <img src={item.picture} />
                </div>
                <h3>{item.first} {item.last}</h3>
            </AccordionSummary>
            <AccordionDetails>
                <AccordDetail item={item}  editMode={editMode} toggleMode={toggleMode}/>
            </AccordionDetails>

            <VaildationDailog open={open} setOpen={setOpen} validationMessage={["Close edit mode"]}/>
        </Accordion>
    )
}

export default Celebrity;