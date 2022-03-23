import React from 'react'
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, makeStyles } from '@material-ui/core'

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

  return (
    <AppBar position='static' color='transparent'>
        <Container>
            <Toolbar>
                <Typography className={classes.title}>
                    Crypto Hunter
                </Typography>
                <Select 
                    variant='outlined' 
                    style={{ 
                        width: 100, 
                        height: 40, 
                        marginLeft: 15,
                    }}
                >
                    <MenuItem value={'USD'}>USD</MenuItem>
                    <MenuItem value={'IDR'}>IDR</MenuItem>
                </Select>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header