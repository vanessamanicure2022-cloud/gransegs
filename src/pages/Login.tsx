"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="text-center">
          <div className="mb-6">
            <div className="flex items-center justify-center gap-3">
              <div className="relative flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#001F3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tighter text-[#001F3F]">ANBERC</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#778899]">Soluções Integradas</span>
              </div>
            </div>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-[#001F3F]">
            Entrar na Anberc
          </h2>
          <p className="text-sm text-gray-500">
            Acesse sua conta para continuar
          </p>
        </div>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <Label htmlFor="email" className="mb-2 block text-sm font-medium text-[#001F3F]">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              className="w-full bg-gray-50 border-gray-200 focus:border-[#38BDF8] focus:ring-[#38BDF8]"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <Label htmlFor="password" className="mb-2 block text-sm font-medium text-[#001F3F]">
              Senha
            </Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full bg-gray-50 border-gray-200 focus:border-[#38BDF8] focus:ring-[#38BDF8]"
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#38BDF8] focus:ring-[#38BDF8] border-gray-300 rounded"
              />
              <Label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                Lembrar-me
              </Label>
            </div>
            <div className="text-sm">
              <Link href="#" className="font-medium text-[#38BDF8] hover:text-[#0EA5E9]">
                Esqueceu a senha?
              </Link>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#001F3F] text-white hover:bg-[#002d5c] font-medium py-3 px-4 rounded-lg"
          >
            Entrar
          </Button>
          <p className="text-center text-sm text-gray-500">
            Não tem uma conta?
            <Link
              href="/login"
              className="font-medium text-[#38BDF8] hover:text-[#0EA5E9] ml-1"
            >
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;