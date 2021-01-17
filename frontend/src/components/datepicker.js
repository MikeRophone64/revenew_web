import 'date-fns';
import React, { useState, useEffect, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import StoreContext from '../contexts/storeContexts';
import { loadCityTax } from '../store/cityTax';

export default function MyDate() {

  const store = useContext(StoreContext);

  const now = Date.now()
  const [selectedDate, setSelectedDate] = React.useState(new Date(now));
  const [endDate, setEndDate] = useState(new Date(now))

  const handleDateChange = (date) => {
    setSelectedDate(date);
    
    const formatedDate = date.toISOString().split('T')[0]
    store.dispatch(loadCityTax(formatedDate));
  };

  useEffect(() => {
    // fetch seasons
    const url = 'api/seasons?format=json'
    fetch(url)
    .then(response => response.json())
    .then(data => {
      let maxDate = new Date(now).toISOString().split('T')[0]

      // find max Date
      for(let i = 1; i < data.length; i++) {
        var value = data[i]['end_date'];
        if (value > maxDate) maxDate = value;
      }
      setEndDate(maxDate)
    })
  })


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          disablePast={true}
          maxDate={endDate}
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date of Arrival"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>
  );
}
