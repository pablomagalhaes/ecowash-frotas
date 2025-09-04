export default function Process(){
  const steps = [
    {n:1, title:'Preparação', desc:'Aplicação de produto biodegradável que age decompondo as partículas de sujeira.'},
    {n:2, title:'Limpeza', desc:'Utilização de toalhas de microfibra para remover a sujeira dissolvida, evitando riscos.'},
    {n:3, title:'Proteção', desc:'Aplicação de cera protetora à base de carnaúba, que melhora o brilho e protege a pintura.'},
  ];
  return (
    <section id="como-funciona" className="section">
      <div className="container-wrap">
        <div className="section-head"><div><span className="pill">Processo</span><h2 className="mt-2 text-2xl font-bold">Como funciona</h2></div></div>
        <div className="grid-3">
          {steps.map(s=> (
            <article key={s.n} className="card p-5">
              <div className="badge">{s.n}</div>
              <h4 className="mt-2 font-semibold">{s.title}</h4>
              <p className="text-slate-600">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
