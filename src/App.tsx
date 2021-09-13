import {Grid} from '@material-ui/core';
import {Card} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import {Container} from '@material-ui/core';
import React, {useState} from 'react';
import {Counter} from './Counter';
import {CounterSettings} from './CounterSettings';


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

    let count = JSON.parse(localStorage.getItem('startValue')!)
    let [startValue, setStartValue] = useState<number>(JSON.parse(localStorage.getItem('startValue')!))
    let [maxValue, setMaxValue] = useState<number>(JSON.parse(localStorage.getItem('maxValue')!))
    let [startValueDisplay, setStartValueDisplay] = useState<number>(count ? count : 0)
    let [error, setError] = useState<boolean>(false)

    function Inc() {
        if (startValueDisplay < maxValue) {
            setError(false)
            setStartValueDisplay(startValueDisplay + 1)
        } else {
            setError(true)
        }
    }

    function Dec() {
        if (startValueDisplay > startValue) {
            setError(false)
            setStartValueDisplay(startValueDisplay - 1)
        } else {
            setError(true)
        }
    }

    function Reset() {
        setStartValueDisplay(startValue)
        setError(false)
    }

    const setToLocalStorage = () => {
        setError(false)
        setStartValueDisplay(startValue)
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    const clearLocalStorage = () => {
        localStorage.clear()
        setError(false)
        setStartValue(0)
        setMaxValue(0)
        setStartValueDisplay(0)
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
                            <Counter count={count}
                                     maxValue={maxValue}
                                     Inc={Inc}
                                     Reset={Reset}
                                     Dec={Dec}
                                     startValue={startValue}
                                     startvalueDisplay={startValueDisplay}
                                     setError={setError}
                                     error={error}
                                     classes={classes}
                            />
                        </Card>
                    </Grid>
                    <Grid item md={5}>
                        <Card variant="outlined" square className={classes.CardItem}>
                            <CounterSettings count={count}
                                             startValue={startValue}
                                             maxValue={maxValue}
                                             setToLocalStorage={setToLocalStorage}
                                             clearLocalStorage={clearLocalStorage}
                                             setStartValue={setStartValue}
                                             setMaxValue={setMaxValue}
                                             classes={classes}
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

