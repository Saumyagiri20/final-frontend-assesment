
"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { salesData } from '../../data/salesData';

export default function SalesChart() {
  return (
    <div className="w-full h-80 p-4">
      <h2 className="text-xl font-bold mb-4">Sales Data</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={salesData}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
