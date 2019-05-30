import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { FC, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { decrement, decrementAsync, increment, incrementAsync } from 'store/home/homeActions';
import { HomeState } from 'store/home/homeTypes';
import { ApplicationState } from 'store/rootStore';

type CounterPageProps = {
    count: HomeState['count'];
    increment: typeof increment;
    decrement: typeof decrement;
    incrementAsync: typeof incrementAsync;
    decrementAsync: typeof decrementAsync;
};

const CounterPage: FC<CounterPageProps> = props => {
    return (
        <Fragment>
            <Typography variant='h3' gutterBottom align='center' color='textPrimary'>
                Amount counted
            </Typography>
            <Grid container spacing={1} alignContent='center' alignItems='baseline' justify='center'>
                <Grid item xs={2}>
                    <Button variant='contained' color='primary' onClick={() => props.increment(1)}>Increment</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained' color='primary' onClick={() => props.decrement(1)}>Decrement</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained' color='primary' onClick={() => props.incrementAsync(1)}>Increment Async</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained' color='primary' onClick={() => props.decrementAsync(1)}>Decrement Async</Button>
                </Grid>
            </Grid>
        </Fragment>
    );
};

const mapStateToProps = (state: ApplicationState) => ({ count: state.home.count });
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ increment, decrement, incrementAsync, decrementAsync }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);