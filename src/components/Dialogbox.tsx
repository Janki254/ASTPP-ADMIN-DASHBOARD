import * as React from 'react';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	useMediaQuery,
	useTheme,
} from '@mui/material';

// Props type for the DeleteDialog component
interface DeleteDialogProps {
    open: boolean;
    onClose: () => void;
    onDelete: () => void;
}

const Dialogbox: React.FC<DeleteDialogProps> = ({open, onClose, onDelete}) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
            fullScreen={fullScreen}
        >
            <DialogTitle id='alert-dialog-title' align='center'>
                <DeleteOutlineIcon color='error' style={{fontSize: '40px'}} />
            </DialogTitle>
            <DialogContent>
                <DialogContentText
                    id='alert-dialog-description'
                    sx={{textAlign: 'center'}}
                >
                    You are about to delete a record?
                    <br />
                    Deleting call history record cannot be undone.
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{justifyContent: 'center'}}>
                <Button onClick={onClose} variant='outlined' color='primary'>
                    Cancel
                </Button>
                <Button
                    onClick={onDelete}
                    variant='contained'
                    color='secondary'
                    autoFocus
                >
                    Yes, Delete it
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Dialogbox;
