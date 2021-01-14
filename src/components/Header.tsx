import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core";


const Header: FC = () => {
    const classes = useStyles();
    return (
        <header className={classes.root}>
            <div className={classes.wrapper}>
                <h3>{"Sixt Code Task"}</h3>
            </div>
            <div className={classes.subHeader}/>
        </header>
    )
};

const useStyles = makeStyles({
    root: {
        fontFamily: "Roboto Condensed,sans-serif",
        color: "#ffffff",
    },
    wrapper: {
        width: "100%",
        background: "#191919",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60px"
    },
    subHeader: {
        background: "#ff5f00",
        height: "5px",
    }
});

export default Header;
