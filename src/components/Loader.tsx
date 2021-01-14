import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core";

const Loader: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.spinner}>
                <div className={classes.bar}/>
                <div className={classes.bar}/>
                <div className={classes.bar}/>
                <div className={classes.bar}/>
                <div className={classes.bar}/>
            </div>
        </div>
    )
};

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "calc(100% - 60px)",
        background: "#ff5f00",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& div": {
            animation: "LoadingAnimation__sk-stretchdelay 1.2s ease-in-out infinite",
        },
        "& div:nth-child(2)": {
            animationDelay: "-1.1s",
        },
        "& div:nth-child(3)": {
            animationDelay: "-1s",
        },
        "& div:nth-child(4)": {
            animationDelay: "-8s",
        },
        "& div:nth-child(5)": {
            animationDelay: "-9s",
        }
    },
    spinner: {
        height: "40px",
    },
    bar: {
        backgroundColor: "#fff",
        height: "100%",
        width: "6px",
        marginLeft: "1px",
        display: "inline-block",
        animation: "sk-stretchdelay 1.2s ease-in-out infinite",
    }
});

export default Loader;
