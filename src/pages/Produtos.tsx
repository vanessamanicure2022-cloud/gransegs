"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Edit, Trash2, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

const Produtos = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('todos');

  const produtos = [
    {
      id: 1,
      nome: 'Sistema de CFTV Completo',
      categoria: 'Segurança',
      preco: 'R$ 3.500',
      estoque: 15,
      status: 'ativo',
      imagem: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=300',
    },
    {
      id: 2,
      nome: 'Manutenção Elétrica Preventiva',
      categoria: 'Elétrica',
      preco: 'R$ 800',
      estoque: 0,
      status: 'ativo',
      imagem: 'https://images.unsplash.com/photo-1554224155-6726b0ffd17c?auto=format&fit=crop&q=80&w=300',
    },
    {
      id: 3,
      nome: 'Instalação de Ar Condicionado',
      categoria: 'Climatização',
      preco: 'R$ 1.200',
      estoque: 8,
      status: 'ativo',
      imagem: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=300',
    },
    {
      id: 4,
      nome: 'Sistema de Alarme Inteligente',
      categoria: 'Segurança',
      preco: 'R$ 2.800',
      estoque: 12,
      status: 'ativo',
      imagem: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=300',
    },
  ];

  const filteredProdutos = produtos.filter(produto => {
    const matchesSearch = produto.nome.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterCategory === 'todos' || produto.categoria === filterCategory;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Catálogo de Produtos</h1>
                <p className="text-gray-600">Gerencie seus serviços e produtos</p>
              </div>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Novo Produto
              </Button>
            </div>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <select 
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              >
                <option value="todos">Todas as Categorias</option>
                <option value="Segurança">Segurança</option>
                <option value="Elétrica">Elétrica</option>
                <option value="Climatização">Climatização</option>
              </select>
              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProdutos.map((produto) => (
              <Card key={produto.id} className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                  <img 
                    src={produto.imagem} 
                    alt={produto.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {produto.nome}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {produto.categoria}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-cyan-600">
                      {produto.preco}
                    </span>
                    <span className={`text-sm font-medium ${
                      produto.estoque > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {produto.estoque > 0 ? `${produto.estoque} em estoque` : 'Esgotado'}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="w-4 h-4 mr-1" />
                      Editar
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
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

export default Produtos;