import { useState } from 'react'
import EditMode from '../editMode/editMode.component';
import './accordDetail.style.css';
import { CelebInterface } from '../../utility/model';
import ViewMode from '../viewMode/viewMode.component';

interface Props{
    item: CelebInterface,
    editMode: boolean,
    toggleMode: () => void
}

function AccordDetail({item, editMode, toggleMode}: Props){


    return (
        <>
            {editMode ? (
                <EditMode item={item} toggleMode={toggleMode}/>
                ):(
                <ViewMode item={item} toggleMode={toggleMode}/> )}
        </>
    )
}

export default AccordDetail