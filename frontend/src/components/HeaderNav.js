import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Logo from '../../static/images/ReveNewLogo.png';
import Toolbar from '@material-ui/core/Toolbar';

import Flag_EUR from '../../static/images/FlagIcons/EUR.svg';
import Flag_GBP from '../../static/images/FlagIcons/GBP.svg';
import Flag_CHF from '../../static/images/FlagIcons/CHF.svg';
import Flag_DKK from '../../static/images/FlagIcons/DKK.svg';
import Flag_USD from '../../static/images/FlagIcons/USD.svg';
import { currencyChanged } from '../store/currency';
import StoreContext from '../contexts/storeContexts';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HeadeNavigation() {
  const store = useContext(StoreContext);
  const classes = useStyles();

  const clickHandler = (currency) => {
    store.dispatch(currencyChanged({ selectedCurrency: currency }));
  }

  return (
      <AppBar position="fixed" color="default">
        <Toolbar>
          <img src={Logo}/>
          <Grid className="currencies">
            <IconButton aria-label="EUR" className="button-no-focus" onClick={() => clickHandler('EUR')}>
              <img src={Flag_EUR} alt="EUR" height="25px"/>
            </IconButton>
            <IconButton aria-label="GBP" className="button-no-focus" onClick={() => clickHandler('GBP')}>
              <img src={Flag_GBP} alt="GBP" height="25px"/>
            </IconButton>
            <IconButton aria-label="CHF" className="button-no-focus" onClick={() => clickHandler('CHF')}>
              <img src={Flag_CHF} alt="CHF" height="25px"/>
            </IconButton>
            <IconButton aria-label="USD" className="button-no-focus" onClick={() => clickHandler('USD')}>
              <img src={Flag_USD} alt="USD" height="25px"/>
            </IconButton>
            <IconButton aria-label="DKK" className="button-no-focus" onClick={() => clickHandler('DKK')}>
              <img src={Flag_DKK} alt="DKK" height="25px"/>
            </IconButton>
          </Grid>
          <Button color="inherit">Call Rates</Button>
        </Toolbar>
      </AppBar>
  );
}