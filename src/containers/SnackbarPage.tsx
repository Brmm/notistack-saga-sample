import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { useSnackbar } from 'notistack';
import React, { FC, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { enqueueSnackbar } from 'store/snackbars/snackbarActions';

type AppProps = {
    enqueueSnackbar: typeof enqueueSnackbar;
};

const SnackbarPage: FC<AppProps> = props => {
    const { closeSnackbar } = useSnackbar();

    const action = (key: string) => (
        <IconButton onClick={() => closeSnackbar(key)}>
            <CloseIcon />
        </IconButton>
    );

    const handleButtonClick = () => {
        props.enqueueSnackbar({
            message: 'Clicked the snackbar summon button!',
            options: {
                variant: 'success',
                action,
            },
        });
    };

    return (
        <Fragment>
            <Typography variant='h3' gutterBottom align='center' color='textPrimary'>
                Notistack Redux + Redux-Saga example
            </Typography>
            <Grid container spacing={1} alignContent='center' alignItems='baseline' justify='center'>
                <Grid item xs={2}>
                    <Button variant='contained' onClick={handleButtonClick}> Display Snackbar </Button>
                </Grid>
            </Grid>
        </Fragment>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ enqueueSnackbar }, dispatch);

export default connect(null, mapDispatchToProps)(SnackbarPage);
