import React, {FC, useCallback, useEffect, useState, ChangeEvent, useMemo} from 'react';
import {connect} from 'react-redux';
import {Grid, Theme, makeStyles, createStyles} from "@material-ui/core";
import {Pagination} from '@material-ui/lab';
import {fetchOffers} from "../actions";
import {OfferRecord} from "../records/offer";
import Offer from "../components/Offer";
import Loader from "../components/Loader";
import {IState} from "../common/types";

interface IRedux {
    offers: OfferRecord[];
    isFetching: boolean;
}

interface IDispatch {
    onFetchOffers: () => void;
}

type IProps = IRedux & IDispatch;

const PAGE_SIZE = 12;

const OffersContainer: FC<IProps> = (props: IProps) => {
    const classes = useStyles();
    const {offers, isFetching, onFetchOffers} = props;
    const [page, setPage] = useState(1);

    useEffect(() => {
        onFetchOffers();
    }, [onFetchOffers]);

    const totalPages = useMemo(() => Math.ceil(offers.length / PAGE_SIZE), [offers]);

    const displayOffers = useMemo(() => {
        return offers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
    }, [offers, page]);

    const handleChange = useCallback((event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }, []);

    return (
        <>
            {isFetching && <Loader/>}
            {!isFetching && (
                <>
                    <Grid container spacing={1} className={classes.offersContainer}>
                        {displayOffers.map((offer: OfferRecord, index: number) => <Offer key={index} offer={offer}/>)}
                    </Grid>
                    <div className={classes.paginationContainer}>
                        <Pagination count={totalPages} page={page} onChange={handleChange} variant="outlined" />
                    </div>
                </>
            )}
        </>
    )
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        offersContainer: {
            width: "100%",
            padding: "20px 40px",
            [theme.breakpoints.up("md")]: {
                justifyContent: "space-between",
            },
            [theme.breakpoints.down("sm")]: {
                justifyContent: "center",
            }
        },
        paginationContainer: {
            display: "flex",
            justifyContent: "center",
            height: "60px",
        }
    }),
);

const mapStateToProps = (state: IState) => ({
    offers: state.offers.list,
    isFetching: state.offers.isFetching,
});

const mapDispatchToProps = (dispatch: any) => ({
    onFetchOffers: () => dispatch(fetchOffers()),
});

export const Offers = connect(mapStateToProps, mapDispatchToProps)(OffersContainer);
