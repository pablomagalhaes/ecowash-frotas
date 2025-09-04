'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header(){
  const [open,setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-[#E5ECE9]">
      <div className="container-wrap flex items-center justify-between gap-4 py-3">
        <Link href="#" className="flex items-center gap-2 font-extrabold">
          {/* <span className="w-9 h-9 rounded-lg bg-[conic-gradient(from_180deg,#16a34a,#22c55e,#10b981,#16a34a)] shadow-soft"></span>
          EcoWash Frotas */}
          <Image src="/ecowash-frotas-logo2.png" width={300} height={100} alt="Frota de veículos EcoWash" className="w-full h-auto" priority />
        </Link>
        <nav className="hidden md:flex items-center gap-5 opacity-90">
          <a href="#servicos">Serviços</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#simulador">Simulador</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost md:hidden" onClick={()=>setOpen(!open)} aria-expanded={open}>Menu</button>
          {/* <a className="btn btn-primary hidden md:inline-flex" href="#contato">Solicitar proposta</a> */}
          <a 
            className="btn btn-primary hidden md:inline-flex" 
            href="https://wa.me/5522998122344?text=Olá%2C%20gostaria%20de%20agendar%20uma%20apresentação" 
            target="_blank"
          >
            Solicitar proposta
          </a>
        </div>
      </div>
      {open && (
        <div className="container-wrap pb-3 md:hidden">
          <div className="card p-3 grid gap-2">
            <a href="#servicos">Serviços</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#simulador">Simulador</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
      )}
    </header>
  );
}
