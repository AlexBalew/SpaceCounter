import Button from '@material-ui/core/Button';
import React from 'react';


export type ButtonType = {
    title: string
    callback: () => void
}

export function UniButton(props: ButtonType) {

    const callBackAction = () => {
        props.callback()
    }

    return (
        <Button variant={"outlined"} style={{color: 'black'}} onClick={callBackAction}>{props.title}</Button>
    )
}