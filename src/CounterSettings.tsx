import {Box, Input, Typography} from '@material-ui/core';
import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import {UniButton} from './Components/UniButton';
import {ClassNameMap} from '@material-ui/core/styles/withStyles';
import {useDispatch} from "react-redux";
import {setMaxValueAC, setStartValueAC} from "./bll/counter-reducer";

export type CounterSettingsPropsType = {
    setToLocalStorage: () => void
    clearLocalStorage: () => void
    classes: ClassNameMap<"error" | "root" | "CardItem" | "Input">
    startValueDisplay: number
    maxValueDisplay: number
    setError: Dispatch<SetStateAction<boolean>>
}

export function CounterSettings(props: CounterSettingsPropsType) {

    const dispatch = useDispatch()

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0) {
            props.setError(false)
            let startValue = +e.currentTarget.value
            dispatch(setStartValueAC(startValue))
            localStorage.setItem('startValue', startValue.toString())
        } else {
            props.setError(true)
        }
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0) {
            props.setError(false)
            let maxValue = +e.currentTarget.value
            dispatch(setMaxValueAC(maxValue))
            localStorage.setItem('maxValue', maxValue.toString())
        } else {
            props.setError(true)
        }
    }

    return (

        <div>
            <Typography variant={'overline'} style={{fontSize: '1em', fontWeight: 'bolder'}}>Settings</Typography>
            <div className={props.classes.Input}><Typography variant={'overline'} style={{
                whiteSpace: 'nowrap',
                minWidth: '90px', marginLeft: '60px'
            }}>Start value</Typography><Input type='number'
                                              inputProps={{style: {textAlign: 'center', width: "50px"}}}
                                              value={props.startValueDisplay}
                                              onChange={onChangeStartValueHandler}/>
            </div>
            <div className={props.classes.Input}><Typography variant={'overline'} style={{
                whiteSpace: 'nowrap',
                minWidth: '90px', marginLeft: '60px'
            }}>Max value</Typography> <Input type='number'
                                             className={props.classes.Input}
                                             inputProps={{style: {textAlign: 'center', width: "50px"}}}
                                             value={props.maxValueDisplay}
                                             onChange={onChangeMaxValueHandler}
            />
            </div>
            <Box marginTop={'10px'}>
                <UniButton callback={props.setToLocalStorage}
                           title={'Set'}/>
                <UniButton callback={props.clearLocalStorage}
                           title={'Clear'}/>
            </Box>
        </div>
    )
}


