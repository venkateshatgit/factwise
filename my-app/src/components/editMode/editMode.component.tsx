import React, { useContext, useState } from 'react'
import './editMode.style.css';
import { CelebrityConext } from '../../context/celebrity.context';
import { NativeSelect} from '@mui/material';
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { currentAge } from '../../utility/calFunction';
import { CelebContextInterface, CelebInterface } from '../../utility/model';

interface Props{
    item: CelebInterface,
    toggleMode: () => void
}

function EditMode({item, toggleMode}: Props) {
    const {celebData, setCelebData} = useContext(CelebrityConext) as CelebContextInterface;

    const [dob, setDob] = useState<string>(currentAge(item.dob));
    const [gender, setGender] = useState<string>(item.gender);
    const [country, setCountry] = useState<string>(item.country);
    const [description, setDescription] = useState<string>(item.description);

    const handleSubmit = () => {

        //validation here
        const newItem = item;
        newItem.dob = dob.toString();
        newItem.gender = gender;
        newItem.country = country;
        newItem.description = description;

        const newCelebData = celebData;
        newCelebData.forEach(data => {
            if(data.id === item.id){
                data = newItem;
            }
        })
        setCelebData(newCelebData);
        toggleMode();
    }

    return (
        <div className='eiditMode'>
            <div className="info">
                <div className='info-sub'>
                    <h4>Age</h4>
                    <input 
                        type='number' 
                        value={dob} 
                        onChange={(e) => setDob(e.target.value)}
                    />
                </div>

                <div className='info-sub'>
                    <h4>Gender</h4>
                    <NativeSelect
                        defaultValue={gender}
                        inputProps={{
                        name: 'gender',
                        id: 'uncontrolled-native',
                        }}
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                        <option value={"Transgender"}>Transgender</option>
                        <option value={"Rather not say"}>Rather not say</option>
                        <option value={"Other"}>Other</option>
                    </NativeSelect>
                </div>

                <div className='info-sub'>
                    <h4>Country</h4>
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)}/>
                </div>
            </div>
            <div className="description" >
                <h4>Description</h4>
                <textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{
                        "width": "100%",
                        "minHeight": "100px"
                    }}
                />
            </div>
            <div className='icons'>
                <IoCloseCircleSharp style={{"color": "red"}} className="icon" onClick={() => toggleMode()}/>
                <FaCheckCircle style={{"color": "green"}} className="icon" onClick={handleSubmit}/>
            </div>
        </div>
    )
}

export default EditMode;