import React, { useContext, useState } from 'react'
import'./viewMode.style.css';
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { CelebrityConext } from '../../context/celebrity.context';
import { CelebContextInterface, CelebInterface } from '../../utility/model';
import { currentAge } from '../../utility/calFunction';
import DialogBox from '../dialogBox/dialogBox.component';

interface Props{
  item: CelebInterface,
  toggleMode: () => void
}


function ViewMode({ item, toggleMode }: Props) {
  
  const [open, setOpen] = useState<boolean>(false);
  const [deleteItem, setDeleteItem] = useState<boolean>(false);

  return (
    <div className="view-mode">
      <div className="info">
        <div className="info-sub">
          <h4>Age</h4>
          <p>{currentAge(item.dob)}</p>
        </div>

        <div className="info-sub">
          <h4>Gender</h4>
          <p>{item.gender}</p>
        </div>

        <div className="info-sub">
          <h4>Country</h4>
          <p>{item.country}</p>
        </div>
      </div>
      <div className="description">
        <h4>Description</h4>
        <p>{item.description}</p>
      </div>

      <div className="icons">
        <MdDelete
          className='icon'
          style={{
            "color" : "red"
          }}
          onClick={() => {
            //dailogue box asking to delete or not
            setOpen(true);
          }}
        />
        <MdModeEditOutline
          className='icon'           
          style={{
            "color" : "blue"
          }}
          onClick={toggleMode} 
        />
      </div>
      <DialogBox open={open} setOpen={setOpen} id={item.id}/>
    </div>
  );
}

export default ViewMode;