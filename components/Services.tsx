import Image from 'next/image';

const services = [
  {title:'Lavagem externa ecológica', desc:'Limpeza de carroceria com consumo mínimo de água e insumos biodegradáveis.', img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop'},
  {title:'Higienização de cabine', desc:'Aspiração, limpeza de painéis e sanitização de pontos de contato.', img:'https://images.unsplash.com/photo-1515923162046-254335f270f0?q=80&w=1200&auto=format&fit=crop'},
  {title:'Detalhamento leve', desc:'Remoção de sujeiras persistentes, hidratação de plásticos e pneus.', img:'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop'},
  {title:'Proteção de pintura', desc:'Selantes que prolongam o brilho e facilitam limpezas futuras.', img:'https://images.unsplash.com/photo-1541441733651-5b8a1dfd5b0d?q=80&w=1200&auto=format&fit=crop'},
  {title:'Utilitários e pesados', desc:'Procedimentos adequados para vans, VUCs, caminhões e máquinas leves.', img:'https://images.unsplash.com/photo-1544829728-e5cb9eed551d?q=80&w=1200&auto=format&fit=crop'},
  {title:'Plano sob medida', desc:'Escopo, frequência e janelas desenhados para sua operação.', img:'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop'},
];

export default function Services(){
  return (
    <section id="servicos" className="section">
      <div className="container-wrap">
        <div className="section-head">
          <div><span className="pill">Soluções</span><h2 className="mt-2 text-2xl font-bold">Serviços para sua frota</h2></div>
          <div className="badge">Planos customizados</div>
        </div>
        <div className="grid-3">
          {services.map(s=> (
            <article key={s.title} className="card p-4">
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-emerald-50 mb-3">
                <Image src={s.img} alt={s.title} width={1200} height={800} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-semibold">{s.title}</h4>
              <p className="text-slate-600">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
