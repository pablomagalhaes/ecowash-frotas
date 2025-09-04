import Image from 'next/image';

const services = [
  {title:'Lavagem externa ecológica', desc:'Limpeza de carroceria com consumo mínimo de água e insumos biodegradáveis.', img:'/services/lavagem-ecologica.jpeg'},
  {title:'Higienização de cabine', desc:'Aspiração, limpeza de painéis e sanitização de pontos de contato.', img:'/services/higienizacao-cabine.png'},
  {title:'Detalhamento leve', desc:'Remoção de sujeiras persistentes, hidratação de plásticos e pneus.', img:'/services/detalhamento-leve.webp'},
  {title:'Proteção de pintura', desc:'Selantes que prolongam o brilho e facilitam limpezas futuras.', img:'/services/protecao-pintura.jpg'},
  {title:'Utilitários e pesados', desc:'Procedimentos adequados para vans, VUCs, caminhões e máquinas leves.', img:'/services/utilitarios-pesados.jpg'},
  {title:'Plano sob medida', desc:'Escopo, frequência e janelas desenhados para sua operação.', img:'/services/plano-sob-medida.webp'},
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
