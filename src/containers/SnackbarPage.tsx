import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { FC, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { incrementSaga } from 'store/home/homeActions';
import { closeSnackbar, enqueueSnackbar } from 'store/snackbars/snackbarActions';

type AppProps = {
    enqueueSnackbar: typeof enqueueSnackbar;
    closeSnackbar: typeof closeSnackbar;
    incrementSaga: typeof incrementSaga;
};

const SnackbarPage: FC<AppProps> = props => {
    const handleButtonClick = () => {
        props.enqueueSnackbar({
            message: 'Clicked the snackbar summon button!',
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
                action: key => (
                    <Button onClick={() => props.closeSnackbar(key)}>dissmiss me</Button>
                ),
            },
        });
    };

    const handleDismissAll = () => {
        props.closeSnackbar();
    };

    const handleShowSnackbarBySaga = () => {
        props.incrementSaga(1);
    };

    return (
        <Fragment>
            <Typography variant='h3' gutterBottom align='center' color='textPrimary'>
                Notistack Redux + Redux-Saga example
            </Typography>
            <Grid container spacing={1} alignContent='center' alignItems='baseline' justify='center'>
                <Grid item xs={3}>
                    <Button variant='contained' onClick={handleButtonClick}>Display Snackbar</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant='contained' onClick={handleDismissAll}>Dismiss All</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant='contained' onClick={handleShowSnackbarBySaga}>Display Snackbar by Saga</Button>
                </Grid>
            </Grid>
        </Fragment>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ enqueueSnackbar, closeSnackbar, incrementSaga }, dispatch);

export default connect(null, mapDispatchToProps)(SnackbarPage);
