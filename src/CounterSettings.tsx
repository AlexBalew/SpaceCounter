import {Box, Input} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import {UniButton} from './Components/UniButton';
import {ClassNameMap} from '@material-ui/core/styles/withStyles';

export type CounterSettingsPropsType = {
    count: number
    startValue: number
    maxValue: number
    setToLocalStorage: () => void
    clearLocalStorage: () => void
    setStartValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
    classes: ClassNameMap<"error" | "root" | "CardItem" | "Input">
    startValueDisplay: number
    setError: Dispatch<SetStateAction<boolean>>
}

export function CounterSettings(props: CounterSettingsPropsType) {



    const onChangeStartValueValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0) {
            props.setError(false)
            let startValue = +e.currentTarget.value
            props.setStartValue(startValue)
            localStorage.getItem('startValue')
        } else {
            props.setError(true)
        }
    }

    const onChangeMaxValueValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value > 0) {
            props.setError(false)
            let maxValue = +e.currentTarget.value
            props.setMaxValue(maxValue)
            localStorage.getItem('maxValue')
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
                                              value={props.startValue}
                                              onChange={onChangeStartValueValueHandler}/>
            </div>
            <div className={props.classes.Input}><Typography variant={'overline'} style={{
                whiteSpace: 'nowrap',
                minWidth: '90px', marginLeft: '60px'
            }}>Max value</Typography> <Input type='number'
                                             className={props.classes.Input}
                                             inputProps={{style: {textAlign: 'center', width: "50px"}}}
                                             value={props.maxValue}
                                             onChange={onChangeMaxValueValueHandler}
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


