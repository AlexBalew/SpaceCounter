import React, {SetStateAction, Dispatch} from 'react';
import {Typography} from '@material-ui/core';
import {ClassNameMap} from '@material-ui/core/styles/withStyles';
import {UniButton} from './Components/UniButton';

export type CounterPropsType = {
    value: number
    Inc: () => void
    Dec: () => void
    Reset: (startValue: number) => void
    startValueDisplay: number
    maxValueDisplay: number
    setError: Dispatch<SetStateAction<boolean>>
    error: boolean
    classes: ClassNameMap<"root" | "error">
}

export const  Counter:React.FC<CounterPropsType> = (props) =>{
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
            <UniButton callback={() => {props.Reset(props.startValueDisplay)}}
                       title='Reset'
            />
            {props.value === props.maxValueDisplay && <div className='string'>{props.maxValueDisplay} is a max number here</div>}
            {props.value === props.startValueDisplay && <div className='string'>{props.startValueDisplay} is a min number here</div>}
        </div>
    )
}