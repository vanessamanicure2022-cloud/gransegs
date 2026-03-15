"use client";

import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import MetricsCards from '@/components/dashboard/MetricsCards';
import RevenueChart from '@/components/dashboard/RevenueChart';
import { Card, CardContent } from '@/components/ui/card';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Visão geral do seu negócio</p>
          </div>

          <MetricsCards />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueChart />
            
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Atividade Recente</h3>
                <div className="space-y-4">
                  {[
                    { action: 'Novo orçamento criado', client: 'Empresa ABC', time: '2 horas atrás' },
                    { action: 'OS finalizada', client: 'Cliente XYZ', time: '5 horas atrás' },
                    { action: 'Novo cliente adicionado', client: 'Indústria LMN', time: '1 dia atrás' },
                    { action: 'Pagamento recebido', client: 'Corporativa XYZ', time: '2 dias atrás' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 font-medium">{item.action}</p>
                        <p className="text-xs text-gray-600">{item.client} • {item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;