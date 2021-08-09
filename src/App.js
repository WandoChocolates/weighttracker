import React from "react";
import "./style.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { format } from 'date-fns';

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

export default function App() {
  return (
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
  );
}
