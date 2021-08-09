import React, {useState} from "react";
import "./style.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { format } from 'date-fns';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

//Using date-fns to parse and format dates
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

const initialData = [
  {
    date: `${format(new Date(2014, 0, 12), 'MM/dd/yyyy')}`,
    weight: 52,
  },
  {
    date: `${format(new Date(2014, 1, 2), 'MM/dd/yyyy')}`,
    weight: 68,
  },
  {
    date: `${format(new Date(2014, 2, 3), 'MM/dd/yyyy')}`,
    weight: 62,
  },
  {
    date: `${format(new Date(2014, 3, 4), 'MM/dd/yyyy')}`,
    weight: 80,
  },
  {
    date: `${format(new Date(2014, 4, 5), 'MM/dd/yyyy')}`,
    weight: 75,
  },
  {
    date: `${format(new Date(2014, 5, 6), 'MM/dd/yyyy')}`,
    weight: 63,
  },
  {
    date: `${format(new Date(2014, 6, 9), 'MM/dd/yyyy')}`,
    weight: 90,
  },
];



export default function App() {
  const [data, setData] = useState(initialData);
  const [weight, setWeight] = useState();
  const [selectedDay, setDate] = useState();
  const FORMAT = 'MM/dd/yyyy';

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, {date: `${selectedDay}`, weight: weight}]);
  }
  const handleChange = (event) => {
    const a = parseFloat(event.target.value);
    setWeight(a);
  }

  const handleDayChange = (selectedDay) => {
    const date = dateFnsFormat(selectedDay, FORMAT)
    setDate(date);
  }

  console.log('-->', {weight});
  console.log('-->', {selectedDay});
  console.log('-->', {data});

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ padding: 10 }}>
        <input
          name = "weight"
          value={weight}
          className="weight"
          type="number"
          onChange={handleChange}
          placeholder="Enter your weight."
        />
        <DayPickerInput 
          name = "date"
          value={selectedDay}
          onDayChange={handleDayChange}
          dayPickerProps={{
            selectedDays: selectedDay,
          }}
          formatDate={formatDate}
          format={FORMAT}
          parseDate={parseDate}
          placeholder={`Date eg. ${dateFnsFormat(new Date(), FORMAT)}`}
        />
        <input className="addButton" type="submit" value="Submit" />
      </form>

      <LineChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="weight" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
