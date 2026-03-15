"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Filter, Calendar, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const OS = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const columns = [
    {
      id: 'aguardando',
      title: 'Aguardando',
      color: 'bg-gray-100',
      textColor: 'text-gray-700',
      cards: [
        {
          id: 1,
          numero: 'OS-2024-001',
          cliente: 'Empresa ABC Ltda',
          prioridade: 'alta',
          data: '15/01/2024',
          tecnico: null,
        },
        {
          id: 2,
          numero: 'OS-2024-002',
          cliente: 'Cliente XYZ',
          prioridade: 'media',
          data: '18/01/2024',
          tecnico: null,
        },
      ],
    },
    {
      id: 'execucao',
      title: 'Em Execução',
      color: 'bg-blue-100',
      textColor: 'text-blue-700',
      cards: [
        {
          id: 3,
          numero: 'OS-2024-003',
          cliente: 'Indústria LMN',
          prioridade: 'alta',
          data: '20/01/2024',
          tecnico: 'João Silva',
        },
        {
          id: 4,
          numero: 'OS-2024-004',
          cliente: 'Corporativa XYZ',
          prioridade: 'baixa',
          data: '22/01/2024',
          tecnico: 'Maria Santos',
        },
      ],
    },
    {
      id: 'finalizado',
      title: 'Finalizado',
      color: 'bg-green-100',
      textColor: 'text-green-700',
      cards: [
        {
          id: 5,
          numero: 'OS-2024-005',
          cliente: 'Empresa ABC Ltda',
          prioridade: 'media',
          data: '25/01/2024',
          tecnico: 'João Silva',
        },
      ],
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'alta': return 'bg-red-100 text-red-800';
      case 'media': return 'bg-yellow-100 text-yellow-800';
      case 'baixa': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'alta': return 'Alta';
      case 'media': return 'Média';
      case 'baixa': return 'Baixa';
      default: return priority;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Ordens de Serviço</h1>
                <p className="text-gray-600">Gerencie as tarefas da sua equipe</p>
              </div>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Nova OS
              </Button>
            </div>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Buscar ordens de serviço..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {columns.map((column) => (
              <Card key={column.id} className="bg-white border-gray-200 shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className={cn("text-sm font-semibold", column.textColor)}>
                      {column.title}
                    </CardTitle>
                    <Badge variant="secondary" className={column.color}>
                      {column.cards.length}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {column.cards.map((card) => (
                    <Card key={card.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-move">
                      <CardContent className="p-4">
                        <div className="mb-3">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {card.numero}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {card.cliente}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className={getPriorityColor(card.prioridade)}>
                            {getPriorityText(card.prioridade)}
                          </Badge>
                          <span className="text-xs text-gray-500">
                            {card.data}
                          </span>
                        </div>
                        
                        {card.tecnico && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <User className="w-4 h-4" />
                            <span>{card.tecnico}</span>
                          </div>
                        )}
                        
                        <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Calendar className="w-4 h-4 mr-1" />
                            Detalhes
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default OS;