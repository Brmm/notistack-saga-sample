import React, { FC } from 'react';
import Toastr from 'react-redux-toastr';

const ReduxToastr: FC = () => (
    <Toastr
        timeOut={3000}
        position='bottom-left'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        closeOnToastrClick
    />
);

export default ReduxToastr;