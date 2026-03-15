"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Plus, Eye, Edit, Download, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const Orcamentos = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('todos');

  const orcamentos = [
    {
      id: 1,
      numero: 'ORC-2024-001',
      cliente: 'Empresa ABC Ltda',
      data: '15/01/2024',
      status: 'aprovado',
      valor: 'R$ 12.500',
      itens: 5,
    },
    {
      id: 2,
      numero: 'ORC-2024-002',
      cliente: 'Cliente XYZ',
      data: '18/01/2024',
      status: 'pendente',
      valor: 'R$ 8.900',
      itens: 3,
    },
    {
      id: 3,
      numero: 'ORC-2024-003',
      cliente: 'Indústria LMN',
      data: '22/01/2024',
      status: 'rejeitado',
      valor: 'R$ 25.300',
      itens: 8,
    },
  ];

  const filteredOrcamentos = orcamentos.filter(orcamento => {
    const matchesSearch = orcamento.cliente.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         orcamento.numero.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'todos' || orcamento.status === activeTab;
    return matchesSearch && matchesTab;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'aprovado': return 'bg-green-100 text-green-800';
      case 'pendente': return 'bg-yellow-100 text-yellow-800';
      case 'rejeitado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'aprovado': return 'Aprovado';
      case 'pendente': return 'Pendente';
      case 'rejeitado': return 'Rejeitado';
      default: return status;
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
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Orçamentos</h1>
                <p className="text-gray-600">Gerencie propostas e contratos</p>
              </div>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Novo Orçamento
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Buscar orçamentos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="pendente">Pendentes</TabsTrigger>
              <TabsTrigger value="aprovado">Aprovados</TabsTrigger>
              <TabsTrigger value="rejeitado">Rejeitados</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-4">
            {filteredOrcamentos.map((orcamento) => (
              <Card key={orcamento.id} className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {orcamento.numero}
                        </h3>
                        <Badge className={getStatusColor(orcamento.status)}>
                          {getStatusText(orcamento.status)}
                        </Badge>
                      </div>
                      <p className="text-gray-600">{orcamento.cliente}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-cyan-600">
                        {orcamento.valor}
                      </p>
                      <p className="text-sm text-gray-500">{orcamento.itens} itens</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">
                      {orcamento.data}
                    </span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Visualizar
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-1" />
                        Editar
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Orcamentos;