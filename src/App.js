import React from "react";
import "./style.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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

const data = [
  {
    name: `${format(new Date(2014, 0, 12), 'MM/dd/yyyy')}`,
    weight: 52,
  },
  {
    name: `${format(new Date(2014, 1, 2), 'MM/dd/yyyy')}`,
    weight: 68,
  },
  {
    name: `${format(new Date(2014, 2, 3), 'MM/dd/yyyy')}`,
    weight: 62,
  },
  {
    name: `${format(new Date(2014, 3, 4), 'MM/dd/yyyy')}`,
    weight: 80,
  },
  {
    name: `${format(new Date(2014, 4, 5), 'MM/dd/yyyy')}`,
    weight: 75,
  },
  {
    name: `${format(new Date(2014, 5, 6), 'MM/dd/yyyy')}`,
    weight: 63,
  },
  {
    name: `${format(new Date(2014, 6, 9), 'MM/dd/yyyy')}`,
    weight: 90,
  },
];

const handleSubmit = () => {}
const handleChange = () => {}

export default function App() {
  const FORMAT = 'MM/dd/yyyy';

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ padding: 10 }}>
        <label>
          <input
            className="search"
            type="number"
            onChange={handleChange}
            placeholder="Enter your weight."
          />
        </label>
        <DayPickerInput 
          formatDate={formatDate}
          format={FORMAT}
          parseDate={parseDate}
          placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="weight" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
