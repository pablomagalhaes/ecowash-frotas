import Image from 'next/image';

export default function Hero(){
  return (
    <section className="pt-16 pb-7">
      <div className="container-wrap grid items-center gap-7 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <span className="pill">Limpeza inteligente e ecológica</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">Lavagem ecológica de frotas <span className="bg-gradient-to-r from-brand to-emerald-400 bg-clip-text text-transparent">na sua operação</span>.</h1>
          <p className="text-slate-600 mt-3">Equipe treinada, metodologia de baixo consumo de água e produtos biodegradáveis. Nós vamos até a sua base, sem paralisar sua logística.</p>
          <div className="flex gap-7 mt-4">
            <div className="flex flex-col"><strong className="text-green-800 text-xl">Até 180L</strong><span className="text-slate-500">de água economizados por veículo*</span></div>
            <div className="flex flex-col"><strong className="text-green-800 text-xl">+98%</strong><span className="text-slate-500">satisfação de clientes</span></div>
            <div className="flex flex-col"><strong className="text-green-800 text-xl">Operação 24/7</strong><span className="text-slate-500">sem parar sua frota</span></div>
          </div>
          <p className="text-sm text-green-700 mt-2">*Exemplo comparando lavagem tradicional de ~200L com nosso processo (~20L). Valores podem variar por categoria.</p>
          <div className="flex gap-3 mt-3">
            <a className="btn btn-ghost" href="#simulador">Simular economia</a>
            <a className="btn btn-primary" href="#contato">Solicitar proposta</a>
          </div>
        </div>
        <div className="card overflow-hidden">
          <Image src="/frota.png" width={1200} height={700} alt="Frota de veículos EcoWash" className="w-full h-auto" priority />
        </div>
      </div>
    </section>
  );
}
