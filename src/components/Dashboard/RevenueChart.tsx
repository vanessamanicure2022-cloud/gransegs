"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RevenueChart = () => {
  const data = [
    { month: 'Jan', revenue: 65000 },
    { month: 'Fev', revenue: 72000 },
    { month: 'Mar', revenue: 68000 },
    { month: 'Abr', revenue: 85000 },
    { month: 'Mai', revenue: 92000 },
    { month: 'Jun', revenue: 124500 },
  ];

  const maxValue = Math.max(...data.map(d => d.revenue));
  
  return (
    <Card className="bg-white border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-900 font-semibold">Fluxo Financeiro</CardTitle>
        <p className="text-gray-600 text-sm">Receita mensal</p>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-end justify-between gap-2">
          {data.map((item, index) => {
            const height = (item.revenue / maxValue) * 100;
            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t-lg transition-all duration-500 hover:from-cyan-600 hover:to-cyan-500"
                  style={{ height: `${height}%` }}
                />
                <span className="text-xs text-gray-600">{item.month}</span>
                <span className="text-xs font-medium text-gray-900">
                  R$ {(item.revenue / 1000).toFixed(0)}k
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;