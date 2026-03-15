"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { data, error: supabaseError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (supabaseError) {
        throw supabaseError;
      }
      
      // Redirect to home page after successful login
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 p-4">
        <div className="text-center">
          <Link to="/" className="inline-block mb-6">
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
          </Link>
          <h2 className="mb-2 text-2xl font-bold text-[#001F3F]">
            Entrar na Anberc
          </h2>
          <p className="text-sm text-gray-500">
            Acesse sua conta para continuar
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6">
            <p>{error}</p>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email" className="mb-2 block text-sm font-medium text-[#001F3F]">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#38BDF8] focus:border-[#38BDF8] px-3 py-2"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <Label htmlFor="password" className="mb-2 block text-sm font-medium text-[#001F3F]">
              Senha
            </Label>
            <div className="relative">
              <Input                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#38BDF8] focus:border-[#38BDF8] px-3 py-2 pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={false}
                onChange={() => {}} // Implementar se necessário
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
            disabled={loading}
            className="w-full bg-[#001F3F] text-white hover:bg-[#002d5c] disabled:bg-[#001F3F]/50 font-medium py-3 px-4 rounded-md transition-all duration-200"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>
          <p className="text-center text-sm text-gray-500">
            Não tem uma conta?
            <Link
              to="/login"
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

export default LoginPage;