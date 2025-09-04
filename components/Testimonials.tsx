export default function Testimonials(){
  const quotes = [
    ['“Conseguimos manter a frota limpa sem parar o turno. Relatórios por placa ajudaram muito.”','— Gestor de operações, Transporte Urbano'],
    ['“A economia de água surpreendeu o comitê ESG. Visual limpo e padrão em todas as vans.”','— Coordenação ESG, Logística'],
    ['“Equipe cuidadosa e rápida. Cabines higienizadas sem cheiro forte e sem resíduos.”','— Frota de serviços, Facilities'],
  ];
  return (
    <section id="depoimentos" className="section">
      <div className="container-wrap">
        <div className="section-head"><div><span className="pill">Clientes</span><h2 className="mt-2 text-2xl font-bold">O que dizem</h2></div></div>
        <div className="grid-3">
          {quotes.map(([q,a])=> (
            <article key={q} className="card p-5">
              <p>{q}</p>
              <p className="text-slate-600">{a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
