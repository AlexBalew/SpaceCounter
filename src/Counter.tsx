import {Typography} from '@material-ui/core';
import {ClassNameMap} from '@material-ui/core/styles/withStyles';
import React from 'react';
import {SetStateAction} from 'react';
import {Dispatch} from 'react';
import {UniButton} from './Components/UniButton';

export type CounterPropsType = {
    value: number
    maxValue: number
    Inc: () => void
    Reset: (startValue: number) => void
    Dec: () => void
    startValue: number
    startValueDisplay: number
    setError: Dispatch<SetStateAction<boolean>>
    error: boolean
    classes: ClassNameMap<"root" | "error">
}

export function Counter(props: CounterPropsType) {
    return (
        <div>
            <Typography align={"center"}
                        variant={'overline'}
                        style={{fontSize: '1em', fontWeight: 'bolder'}}>Counter</Typography>
            <div className={props.error ? props.classes.error : ''}
                 style={{marginTop: "20px", marginBottom: '30px', fontSize: '20px'}}>{props.error ?
                <span>Oops</span> : props.value}</div>
            <UniButton callback={props.Inc}
                       title='+1'
            />
            <UniButton callback={props.Dec}
                       title='-1'
            />
            <UniButton callback={() => {props.Reset(props.startValue)}}
                       title='Reset'
            />
            {/*{props.count === props.maxValue && <div className='string'>{props.maxValue} is a max number here</div>}*/}
        </div>
    )
}