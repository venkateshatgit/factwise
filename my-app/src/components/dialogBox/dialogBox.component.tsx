import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CelebContextInterface } from '../../utility/model';
import { useContext } from 'react';
import { CelebrityConext } from '../../context/celebrity.context';

interface Props{
    open: boolean,
    setOpen: (open: boolean)=> void,
    id: number
}

function DialogBox({open, setOpen, id}: Props) {
    const { celebData, setCelebData } = useContext(CelebrityConext) as CelebContextInterface;

    const handleClose = (flag: boolean) => {
        
        if(flag===true){
            const newCelebData = celebData.filter((celeb) =>
                celeb.id === id ? false : true
            );
            setCelebData(newCelebData);
        }
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to delete?"}
            </DialogTitle>

            <DialogActions>
                <Button variant="outlined" onClick={() => handleClose(false)}>Cancel</Button>
                <Button variant='contained' color='error' onClick={() => handleClose(true)}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogBox;