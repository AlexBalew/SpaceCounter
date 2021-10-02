const initState = {
    value: 0,
    startValue: 0,
    maxValue: 1
}

export const counterReducer = (state: InitStateType = initState, action: AllACType): InitStateType => {
    switch (action.type) {
        case 'INC_VALUE' : {
            return {...state, value: state.value + 1}
        }
        case 'DEC_VALUE' : {
            return {...state, value: state.value - 1}
        }
        case 'RESET_VALUE' : {
            return {...state, value: action.startValue}
        }
        case 'SET_COUNTER_SETTINGS' : {
            return {...state, value: action.startValue}
        }
        case 'CLEAR_COUNTER_SETTINGS' : {
            return {...state, maxValue: 1, startValue: 0}
        }
        case 'SET_START_VALUE' : {
            return {...state, startValue: action.settingsStartValue}
        }
        case 'SET_MAX_VALUE' : {
            return {...state, maxValue: action.settingsMaxValue}
        }
        case 'SET_START_VALUES' : {
            return {...state, startValue: action.startValue, maxValue: action.maxValue, value: action.startValue}
        }
        default:
            return state
    }
}


export const incAC = () => {
    return {
        type: 'INC_VALUE'
    } as const
}

export const decAC = () => {
    return {
        type: 'DEC_VALUE'
    } as const
}

export const resetAC = (startValue: number) => {
    return {
        type: 'RESET_VALUE',
        startValue
    } as const
}

export const setCounterSettingsAC = (startValue: number) => {
    return {
        type: 'SET_COUNTER_SETTINGS',
        startValue,
    } as const
}

export const clearCounterLSAC = () => {
    return {
        type: 'CLEAR_COUNTER_SETTINGS',
    } as const
}

export const setStartValueAC = (settingsStartValue: number) => {
    return {
        type: 'SET_START_VALUE',
        settingsStartValue
    } as const
}

export const setMaxValueAC = (settingsMaxValue: number) => {
    return {
        type: 'SET_MAX_VALUE',
        settingsMaxValue
    } as const
}

export const setStartValuesAC = (startValue: number, maxValue: number) => {
    return {
        type: 'SET_START_VALUES',
        startValue,
        maxValue
    } as const
}

/*export const setStartValueTC =  (value: string)=> async(dispatch: Dispatch<any>)=>{
    const res = await apiController.getStartNumbers(value)
    if(res){
        dispatch(setStartValuesAC(res))

    }
}*/



type InitStateType = typeof initState

export type AllACType = IncACType
    | DecACType
    | ResetACType
    | setCounterSettingsACType
    | clearCounterLSACType
    | setStartValueACType
    | setMaxValueACType
    | setStartValuesACType

export type IncACType = ReturnType<typeof incAC>
export type DecACType = ReturnType<typeof decAC>
export type ResetACType = ReturnType<typeof resetAC>
export type setCounterSettingsACType = ReturnType<typeof setCounterSettingsAC>
export type clearCounterLSACType = ReturnType<typeof clearCounterLSAC>
export type setStartValueACType = ReturnType<typeof setStartValueAC>
export type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export type setStartValuesACType = ReturnType<typeof setStartValuesAC>


