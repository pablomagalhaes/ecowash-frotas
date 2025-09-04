export default function Benefits(){
  const items = [
    {title:'Economia de água', desc:'Processo otimizado que consome até ~90% menos água vs. lavagem tradicional.', icon:'leaf'},
    {title:'Operação in loco', desc:'Atendimento na sua base, com janelas de horário que não travam a logística.', icon:'rows'},
    {title:'Segurança e compliance', desc:'Equipe treinada, EPIs e documentação conforme exigências locais.', icon:'shield'},
    {title:'Suporte 24/7', desc:'Acompanhamento e canal direto para gestores de frota.', icon:'support'},
  ];
  return (
    <section id="beneficios" className="section">
      <div className="container-wrap">
        <div className="section-head"><div><span className="pill">Por que escolher</span><h2 className="mt-2 text-2xl font-bold">Benefícios que importam</h2></div></div>
        <div className="grid-4">
          {items.map((it)=>(
            <article key={it.title} className="card p-4">
              <div className="badge">{it.title}</div>
              <h4 className="mt-2 font-semibold">{it.title}</h4>
              <p className="text-slate-600">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
