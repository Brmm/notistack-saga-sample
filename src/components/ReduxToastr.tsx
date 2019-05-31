import React, { FC } from 'react';
import Toastr from 'react-redux-toastr';
import { defaultToastrOptions } from 'utils/constants';

const ReduxToastr: FC = () => (
    <Toastr
        position={defaultToastrOptions.position}
        timeOut={defaultToastrOptions.options!.timeOut}
        transitionIn={defaultToastrOptions.options!.transitionIn}
        transitionOut={defaultToastrOptions.options!.transitionOut}
        closeOnToastrClick
    />
);

export default ReduxToastr;