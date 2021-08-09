import React from "react";
import "./style.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { format } from 'date-fns';

const data = [
  {
    name: 'Page A',
    weight: 52,
  },
  {
    name: 'Page B',
    weight: 68,
  },
  {
    name: 'Page C',
    weight: 62,
  },
  {
    name: 'Page D',
    weight: 80,
  },
  {
    name: 'Page E',
    weight: 75,
  },
  {
    name: 'Page F',
    weight: 63,
  },
  {
    name: 'Page G',
    weight: 90,
  },
];

export default function App() {
  return (
      <LineChart
        width={500}
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
