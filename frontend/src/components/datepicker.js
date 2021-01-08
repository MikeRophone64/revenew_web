import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MyDate() {
  // The first commit of Material-UI
  const now = Date.now()
  const [selectedDate, setSelectedDate] = React.useState(new Date(now));
  console.log(selectedDate)

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Isert Max selectable date to preventfalsy db queries:
  // useEffect to query db and get max date of seasons 
  // pass max date to maxDate in Datepicker

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          disablePast={true}
          // maxDate={new Date('2021-1-25')}
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
