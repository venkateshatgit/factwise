import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

interface Props{
    open: boolean,
    setOpen: (open: boolean) => void,
    validationMessage: string[]
}

function VaildationDailog({open, setOpen, validationMessage}: Props) {

    const handleClose = (flag: boolean) => {
        
        if(flag===true){

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
            <ul>
                {validationMessage.map((message, index) => {
                    return <li key={index}>{message}</li>
                })}
            </ul>
            </DialogTitle>

            <DialogActions>
                <Button variant="outlined" onClick={() => handleClose(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default VaildationDailog