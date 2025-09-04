export default function FAQ(){
  const items = [
    ['Vocês atendem fora do horário comercial?','Sim. Atuamos 24/7 com janelas programadas para não impactar a operação.'],
    ['Quais produtos são usados?','Produtos licenciados e biodegradáveis, com FISPQ disponível quando aplicável.'],
    ['É necessário ponto de água/energia?','Levantamos no diagnóstico. Temos soluções móveis para diferentes cenários.'],
    ['Como é feito o controle de qualidade?','Checklists digitais por placa, com evidências fotográficas e indicadores.'],
  ];
  return (
    <section id="faq" className="section">
      <div className="container-wrap">
        <div className="section-head"><div><span className="pill">Dúvidas</span><h2 className="mt-2 text-2xl font-bold">Perguntas frequentes</h2></div></div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-3">
            {items.map(([q,a])=> (
              <details key={q} className="card p-4">
                <summary className="font-semibold cursor-pointer">{q}</summary>
                <p className="text-slate-600 mt-1">{a}</p>
              </details>
            ))}
          </div>
          <aside className="card p-4">
            <h3 className="text-lg font-semibold">Fale com um especialista</h3>
            <p className="text-slate-600">Tire dúvidas sobre escopo, frequências e indicadores de SLA.</p>
            <div className="flex gap-2 mt-2">
              <a className="btn btn-primary" href="#contato">Solicitar contato</a>
              <a className="btn btn-ghost" href="#contato">Enviar e‑mail</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
