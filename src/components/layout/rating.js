import React from "react";
import Rating from '@material-ui/lab/Rating';
import {makeStyles} from '@material-ui/core/styles';

const HalfRating = ({number}) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'inline-block',
            marginRight: '10px',
            flexDirection: 'column',
            '& > * + *': {
                marginTop: theme.spacing(1),
            },
        },
    }));
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Rating name="half-rating-read" size="small" defaultValue={number} precision={0.5} readOnly/>
        </div>
    );
}


export default HalfRating;
