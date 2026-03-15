"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, User, Bell, Shield, Database } from 'lucide-react';

const Configuracoes = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Configurações</h1>
            <p className="text-gray-600">Gerencie preferências e configurações do sistema</p>
          </div>

          <Tabs defaultValue="perfil" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="perfil">Perfil</TabsTrigger>
              <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
              <TabsTrigger value="seguranca">Segurança</TabsTrigger>
              <TabsTrigger value="dados">Dados</TabsTrigger>
            </TabsList>

            <TabsContent value="perfil">
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Perfil do Usuário
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nome">Nome Completo</Label>
                      <Input id="nome" defaultValue="João Dias" />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" defaultValue="joao@anberc.com.br" />
                    </div>
                    <div>
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input id="telefone" defaultValue="(12) 9999-8888" />
                    </div>
                    <div>
                      <Label htmlFor="cargo">Cargo</Label>
                      <Input id="cargo" defaultValue="Administrador" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button>Salvar Alterações</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notificacoes">
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Notificações
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Novos orçamentos</p>
                        <p className="text-sm text-gray-600">Receber notificações quando novos orçamentos forem criados</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Ordens de serviço</p>
                        <p className="text-sm text-gray-600">Notificações sobre atualizações de OS</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Pagamentos</p>
                        <p className="text-sm text-gray-600">Alertas sobre pagamentos recebidos ou pendentes</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button>Salvar Configurações</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="seguranca">
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Segurança
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="senha">Senha Atual</Label>
                      <Input id="senha" type="password" />
                    </div>
                    <div>
                      <Label htmlFor="nova-senha">Nova Senha</Label>
                      <Input id="nova-senha" type="password" />
                    </div>
                    <div>
                      <Label htmlFor="confirmar-senha">Confirmar Nova Senha</Label>
                      <Input id="confirmar-senha" type="password" />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      Último acesso: 15/01/2024 às 14:30
                    </p>
                    <Button variant="outline" className="mr-2">
                      Alterar Senha
                    </Button>
                    <Button variant="outline">
                      Gerenciar Dispositivos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dados">
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Dados do Sistema
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Backup Automático</p>
                      <p className="text-sm text-gray-600 mb-4">
                        O sistema realiza backups diários automaticamente às 23:00
                      </p>
                      <Button variant="outline" size="sm">
                        Agendar Backup Manual
                      </Button>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Exportação de Dados</p>
                      <p className="text-sm text-gray-600 mb-4">
                        Exporte seus dados em formato CSV ou JSON
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Exportar CSV
                        </Button>
                        <Button variant="outline" size="sm">
                          Exportar JSON
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Configuracoes;