import { useState } from 'react'
import EditMode from '../editMode/editMode.component';
import './accordDetail.style.css';
import { CelebInterface } from '../../utility/model';
import ViewMode from '../viewMode/viewMode.component';

interface Props{
    item: CelebInterface
}

function AccordDetail({item}: Props){
    const [editMode, setEditMode] = useState<boolean>(false);

    const toggleMode = () => {
        setEditMode(prev => !prev);
    }

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