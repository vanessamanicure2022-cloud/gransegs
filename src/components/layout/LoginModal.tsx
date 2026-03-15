"use client";

import React from 'react';
import { Dialog, DialogOverlay, DialogContent, DialogHeader, DialogTitle, DialogButton } from "@/components/ui/dialog";
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Dialog onOpen={onOpen} onClose={onClose}>
        <DialogOverlay />
        <Dialog>
          <DialogHeader>
            <DialogTitle>Entrar na Conta</DialogTitle>
            <DialogButton onClick={onClose} aria-label="Fechar">
              <X size={24} />
            </DialogButton>
          </DialogHeader>
          <DialogContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#333333] ml-1">E-mail</label>
                <Input className="bg-[#F5F5F5] border-transparent h-12 rounded-xl focus:ring-[#38BDF8]" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#333333] ml-1">Senha</label>
                <Input type="password" className="bg-[#F5F5F5] border-transparent h-12 rounded-xl focus:ring-[#38BDF8]" placeholder="********" />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a href="#" className="text-[#38BDF8] hover:text-[#0EA5E9]">
                    Esqueci minha senha
                  </a>
                </div>
                <Button className="w-full bg-[#001F3F] text-white hover:bg-[#002d5c]">Entrar</Button>
              </div>
            </form>
            <p className="mt-4 text-[#38BDF8] text-sm">Ainda não tem uma conta? <a href="#" className="text-[#38BDF8] hover:text-[#0EA5E9]">Criar conta</a></p>
          </DialogContent>
        </Dialog>
      </Dialog>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000033]" onClick={onClose} style={{ display: isOpen ? 'flex' : 'none' }}>
        <div className="bg-white rounded-2xl p-6 w-full max-w-md">
          <button className="absolute top-2 left-2" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginModal;