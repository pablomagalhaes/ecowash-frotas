'use client';
import { useState } from 'react';

export default function Footer(){
  const [msg,setMsg] = useState('');
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg('Obrigado! Em breve entraremos em contato.');
  };
  return (
    <footer id="contato" className="border-t border-[#E5ECE9] bg-emerald-50/50">
      <div className="container-wrap grid gap-5 py-6 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-extrabold mb-2">
            <span className="w-9 h-9 rounded-lg bg-[conic-gradient(from_180deg,#16a34a,#22c55e,#10b981,#16a34a)] shadow-soft"></span>
            EcoWash Frotas
          </div>
          <p className="text-slate-700">Limpeza inteligente e ecológica de frotas corporativas.<br/>Atendimento sob demanda ou por contrato.</p>
        </div>
        <nav>
          <h4 className="font-semibold">Empresa</h4>
          <ul className="mt-2 space-y-1 text-slate-700">
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Carreiras</a></li>
            <li><a href="#">Políticas</a></li>
          </ul>
        </nav>
        <nav>
          <h4 className="font-semibold">Serviços</h4>
          <ul className="mt-2 space-y-1 text-slate-700">
            <li><a href="#servicos">Lavagem externa</a></li>
            <li><a href="#servicos">Higienização cabine</a></li>
            <li><a href="#servicos">Detalhamento leve</a></li>
          </ul>
        </nav>
        <div>
          <h4 className="font-semibold">Contato</h4>
          <form className="mt-2 flex gap-2" onSubmit={onSubmit}>
            <input required type="email" className="border rounded-xl px-3 py-2 flex-1" placeholder="Seu e‑mail" />
            <button className="btn btn-primary" type="submit">Enviar</button>
          </form>
          <p className="text-green-700 mt-2">{msg}</p>
        </div>
      </div>
      <div className="container-wrap text-sm text-slate-600 py-3 border-t border-[#E5ECE9]">© {new Date().getFullYear()} EcoWash Frotas. Todos os direitos reservados.</div>
    </footer>
  );
}
