import React from 'react'
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, makeStyles, createTheme, ThemeProvider } from '@material-ui/core'
import { Navigate, useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: 'gold',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        cursor: 'pointer',
    }
}))

const Header = () => {
    const classes = useStyles();
    const history = useNavigate();
    const { currency, setCurrency } = CryptoState();

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            type: 'dark',
        },
    });

    console.log(currency);

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position='static' color='transparent'>
                <Container>
                    <Toolbar>
                        <Typography onClick={() => history('/')} className={classes.title} variant='h5'>
                            Crypto Hunter
                        </Typography>
                        <Select 
                            variant='outlined' 
                            style={{ 
                                width: 100, 
                                height: 40, 
                                marginRight: 15,
                            }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={'USD'}>USD</MenuItem>
                            <MenuItem value={'IDR'}>IDR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header