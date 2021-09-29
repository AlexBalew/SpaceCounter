import {Grid} from '@material-ui/core';
import {Card} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import {Container} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {Counter} from './Counter';
import {CounterSettings} from './CounterSettings';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {clearCounterLSAC, decAC, incAC, resetAC, setCounterSettingsAC} from "./bll/counter-reducer";


const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    error: {
        color: 'red',
    },
    CardItem: {
        width: '16em',
        height: '10em',
        textAlign: 'center',
        background: "#E6E6FA",
    },
    Input: {
        display: 'flex',
        justifyItems: 'center',
    }
});

function APP() {

    const classes = useStyles();

    let value = useSelector<AppStateType, number>(state => state.counter.value)
    const startValueDisplay = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValueDisplay = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const dispatch = useDispatch()

    let startValue = +localStorage.getItem('startValue')!
    let maxValue = +localStorage.getItem('maxValue')!

    useEffect(() => {

    }, [])

    let [error, setError] = useState<boolean>(false)

    function Inc() {
            if (value < maxValue) {
                setError(false)
                dispatch(incAC())
            } else {
                setError(true)
            }
        }

    function Dec() {
            if (value > startValue) {
                setError(false)
                dispatch(decAC())
            } else {
                setError(true)
            }
    }

    function Reset(startValue: number) {
        dispatch(resetAC(startValue))
        setError(false)
    }


    const setToLocalStorage = () => {
        setError(false)
        if (startValueDisplay && maxValueDisplay) {
            dispatch(setCounterSettingsAC(startValueDisplay))
        }
    }
    const clearLocalStorage = () => {
        localStorage.clear()
        setError(false)
        dispatch(clearCounterLSAC())
        dispatch(resetAC(0))
    }


    return (
        <div style={{
            background: `url(https://wallpapers-hub.art/wallpaper-images/136632.jpg)`,
            height: '100vh',
            backgroundSize: 'cover'
        }}>
            <Container fixed maxWidth="md" className={classes.root}>
                <Grid container spacing={4} justifyContent={'center'}>
                    <Grid item md={4}>
                        <Card variant="outlined" square className={classes.CardItem}>
                            <Counter value={value}
                                     maxValue={maxValue}
                                     Inc={Inc}
                                     Reset={Reset}
                                     Dec={Dec}
                                     startValue={startValue}
                                     startValueDisplay={startValueDisplay}
                                     setError={setError}
                                     error={error}
                                     classes={classes}
                            />
                        </Card>
                    </Grid>
                    <Grid item md={5}>
                        <Card variant="outlined" square className={classes.CardItem}>
                            <CounterSettings startValue={startValue}
                                             maxValue={maxValue}
                                             setToLocalStorage={setToLocalStorage}
                                             clearLocalStorage={clearLocalStorage}
                                             classes={classes}
                                             maxValueDisplay={maxValueDisplay}
                                             startValueDisplay={startValueDisplay}
                                             setError={setError}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
        ;
}

export default APP;

