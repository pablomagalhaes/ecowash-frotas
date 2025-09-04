'use client';
import { useEffect, useState } from 'react';

export default function Simulator(){
  const [fleetSize,setFleetSize]=useState(40);
  const [washes,setWashes]=useState(2);
  const [tradLiters,setTradLiters]=useState(200);
  const [ecoLiters,setEcoLiters]=useState(20);
  const [tariff,setTariff]=useState(12);

  const savePerWash = Math.max(tradLiters - ecoLiters, 0);
  const litersSaved = fleetSize * washes * savePerWash;
  const m3 = litersSaved / 1000;
  const money = m3 * tariff;

  const curr = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(money);

  return (
    <section id="simulador" className="section">
      <div className="container-wrap">
        <div className="section-head"><div><span className="pill">ROI verde</span><h2 className="mt-2 text-2xl font-bold">Simule a economia de água</h2></div></div>
        <div className="grid gap-4 lg:grid-cols-2">
          <aside className="card p-5">
            <div className="grid gap-3 md:grid-cols-2">
              <label className="grid gap-1">Tamanho da frota (veículos)
                <input className="border rounded-xl px-3 py-2" type="number" value={fleetSize} min={1} onChange={e=>setFleetSize(parseInt(e.target.value||'0'))} />
              </label>
              <label className="grid gap-1">Lavagens por mês (por veículo)
                <input className="border rounded-xl px-3 py-2" type="number" value={washes} min={1} onChange={e=>setWashes(parseInt(e.target.value||'0'))} />
              </label>
              <label className="grid gap-1">Lavagem tradicional (L/veículo)
                <input className="border rounded-xl px-3 py-2" type="number" value={tradLiters} min={1} onChange={e=>setTradLiters(parseInt(e.target.value||'0'))} />
              </label>
              <label className="grid gap-1">EcoWash (L/veículo)
                <input className="border rounded-xl px-3 py-2" type="number" value={ecoLiters} min={0} onChange={e=>setEcoLiters(parseInt(e.target.value||'0'))} />
              </label>
              <label className="grid gap-1">Tarifa de água (R$/m³)
                <input className="border rounded-xl px-3 py-2" type="number" step="0.01" value={tariff} min={0} onChange={e=>setTariff(parseFloat(e.target.value||'0'))} />
              </label>
            </div>
            <div className="h-2"></div>
            <div className="grid gap-3">
              <div className="card p-4 flex items-center justify-between"><span>Litros economizados/mês</span><strong>{litersSaved.toLocaleString('pt-BR')} L</strong></div>
              <div className="card p-4 flex items-center justify-between"><span>m³ economizados/mês</span><strong>{m3.toLocaleString('pt-BR',{maximumFractionDigits:2})} m³</strong></div>
              <div className="card p-4 flex items-center justify-between"><span>Economia estimada/mês</span><strong>{curr}</strong></div>
            </div>
            <p className="text-sm text-slate-600 mt-2">Valores estimados para referência. Ajuste os campos conforme sua realidade.</p>
          </aside>
          <div className="card p-5">
            <h3 className="text-xl font-semibold mb-2">Resultado ambiental e operacional</h3>
            <p className="text-slate-600">A redução de consumo hídrico facilita certificações ambientais e pode diminuir custos de abastecimento e descarte. Com operação in loco, é possível planejar janelas para que sua frota siga rodando.</p>
            <ul className="list-disc pl-5 mt-2 text-slate-700">
              <li>Menos água captada e tratada;</li>
              <li>Menos deslocamento até postos de lavagem;</li>
              <li>Padronização de qualidade por checklist.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
