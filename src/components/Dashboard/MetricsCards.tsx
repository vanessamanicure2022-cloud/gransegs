"use client";

import React from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const metrics = [
  {
    title: 'Receita Prevista',
    value: 'R$ 124.500',
    change: '+12.5%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    title: 'OS em Aberto',
    value: '24',
    change: '-8.2%',
    trend: 'down',
    icon: Clock,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    title: 'Taxa de Conversão',
    value: '68%',
    change: '+5.3%',
    trend: 'up',
    icon: ArrowUpRight,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Novos Clientes',
    value: '12',
    change: '+23.1%',
    trend: 'up',
    icon: ArrowUpRight,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
];

const MetricsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-white border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
              </div>
              <div className="flex items-center gap-1">
                {metric.trend === 'up' ? (
                  <ArrowUpRight className={`w-4 h-4 ${metric.color}`} />
                ) : (
                  <ArrowDownRight className={`w-4 h-4 ${metric.color}`} />
                )}
                <span className={`text-sm font-medium ${metric.color}`}>
                  {metric.change}
                </span>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">
              {metric.title}
            </h3>
            <p className="text-2xl font-bold text-gray-900">
              {metric.value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MetricsCards;