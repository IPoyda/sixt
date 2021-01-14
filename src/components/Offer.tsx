import React, {FC} from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import {OfferRecord} from "../records/offer";
import FallbackImage from "../fallback.png";
import Image from "./Image";

interface IProps {
    offer: OfferRecord;
}

const Offer: FC<IProps> = (props: IProps) => {
    const classes = useStyles();
    const {offer} = props;
    return (
        <Grid container item xs={12} md={6} lg={4} spacing={6} className={classes.offerContainer}>
            <Grid item xs={12} className={classes.imageContainer}>
                <Image src={offer.images.small} fallbackSrc={FallbackImage} alt="car preview"/>
            </Grid>
            <Grid item xs={12} className={classes.primaryText}>{offer.name}</Grid>
            <Grid container item xs={12} className={classes.priceContainer}>
                <Grid item xs={6} className={classes.primaryText}>{"Total"}</Grid>
                <Grid container item xs={6} direction="column" alignItems="flex-end">
                    <div className={classes.primaryText}>&euro;{offer.price.display}</div>
                    <div className={classes.secondaryText}>{"Tax Included"}</div>
                </Grid>
            </Grid>
        </Grid>
    )
};

const useStyles = makeStyles({
    offerContainer: {
        cursor: "pointer",
        marginBottom: "20px",
        marginTop: "20px",
        background: "#ff5f00",
        fontFamily: "Roboto Condensed,sans-serif",
        "&:hover": {
            boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        },
    },
    imageContainer: {
        textAlign: "center",
        "& img": {
            width: 350,
            height: 200,
        }
    },
    priceContainer: {
        background: "#191919",
    },
    primaryText: {
        fontWeight: 700,
        textTransform: "uppercase",
        fontSize: "20px",
        color: "#ffffff",
    },
    secondaryText: {
        color: "#ff5f00",
    }
});

export default Offer;
