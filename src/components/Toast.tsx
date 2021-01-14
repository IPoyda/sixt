import React, {FC} from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import {Snackbar} from "@material-ui/core";

interface IToastProps {
    open: boolean;
    message: string;
    duration?: number;
    onClose: () => void;
}

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Toast: FC<IToastProps> = (props: IToastProps) => {
    const {open, message, duration = 6000, onClose} = props;
    return (
        <Snackbar open={open} autoHideDuration={duration} onClose={onClose}>
            <Alert severity="error" onClose={onClose}>{message}</Alert>
        </Snackbar>
    )
};

export default Toast;
