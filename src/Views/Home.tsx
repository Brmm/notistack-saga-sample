import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import classnames from 'classnames';
import Notifiers from 'containers/Notifiers';
import ConnectedSnackbarPage from 'containers/SnackbarPage';
import React, { FC, Fragment } from 'react';
import css from 'styles/home.module.scss';

const Home: FC = () => (
    <Fragment>
        <Notifiers />
        <Grid container alignContent='center' alignItems='center' justify='center' spacing={10} className={classnames(css.setHeight)}>
            <Grid item xs={8}>
                <Paper elevation={4} className={classnames(css.setPaperSize)}>
                    <ConnectedSnackbarPage />
                </Paper>
            </Grid>
        </Grid>
    </Fragment>
);

export default Home;