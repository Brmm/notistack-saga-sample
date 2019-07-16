import { withSnackbar, WithSnackbarProps } from 'notistack';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from 'store/rootStore';
import { removeSnackbar } from 'store/snackbars/snackbarActions';
import { Snackbar } from 'store/snackbars/snackbarTypes';

export type SnackbarProps = {
    snackbars: Snackbar[];
    displayed?: string[];
    enqueueSnackbar: WithSnackbarProps['enqueueSnackbar'];
    removeSnackbar: typeof removeSnackbar
};

export class Snackbars extends Component<SnackbarProps & WithSnackbarProps> {
    private displayed: (string | number)[] = [];

    storeDisplayed (id: string | number) {
        this.displayed = [...this.displayed, id];
    }

    shouldComponentUpdate (newProps: SnackbarProps) {
        let notExists = false;

        for (const newSnackbar of newProps.snackbars) {
            if (newSnackbar.dismissed) {
                this.props.closeSnackbar(newSnackbar.key);
                // @ts-ignore
                this.props.removeSnackbar(newSnackbar.key);
            }

            if (notExists) continue;
            notExists = notExists ||
                !this.props.snackbars
                    .filter((notification: Snackbar) => newSnackbar.key === notification.key)
                    .length;
        }
        return notExists;
    }

    componentDidUpdate () {
        this.props.snackbars.forEach((snackbar: Snackbar) => {
            if (!snackbar.key) return;
            if (this.displayed.includes(snackbar.key)) return;

            // @ts-ignore
            this.props.enqueueSnackbar(snackbar.message, {
                ...snackbar.options,
                // @ts-ignore
                onClose: (event, reason, key) => {
                    if (snackbar.options && snackbar.options.onClose) {
                        // @ts-ignore
                        snackbar.options.onClose(event, reason, key);
                    }
                    this.props.removeSnackbar(key);
                },
            });
            this.storeDisplayed(snackbar.key);
        });
    }

    render () {
        return <Fragment />;
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    snackbars: state.notifications.snackbars,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            removeSnackbar,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(Snackbars));