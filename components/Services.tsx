export default function Services() {
    const items = [
        {
            title: "Sites para apresentar sua empresa",
            description: "Paginas institucionais com visual profissional, informacoes bem organizadas e foco em credibilidade."
        },
        {
            title: "Landing pages para campanhas e servicos",
            description: "Estruturas objetivas para destacar oferta, gerar contato e conduzir o visitante ate a acao principal."
        },
        {
            title: "Interfaces para sistemas e operacoes internas",
            description: "Telas claras e funcionais para processos, atendimento, controle de dados e uso no dia a dia da equipe."
        }
    ];

    return (
        <div className="bg-primary font-all text-secundary shadow-3xl sm:rounded-none sm:shadow-none">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.28em] text-secundary/70">Como posso ajudar</p>
                    <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                        Solucoes digitais para negocios que precisam comunicar melhor e vender com mais confianca.
                    </h2>
                    <p className="mt-6 text-base leading-relaxed text-secundary/85 sm:text-lg lg:text-xl">
                        Desenvolvo experiencias digitais com foco em apresentacao, clareza e usabilidade. O objetivo e simples: fazer seu negocio parecer mais profissional e facilitar o caminho para novos contatos.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                    {items.map((item) => (
                        <div key={item.title} className="rounded-[2rem] border border-secundary/10 bg-secundary p-6 text-primary shadow-xl">
                            <h3 className="text-xl font-extrabold leading-snug">{item.title}</h3>
                            <p className="mt-4 text-base leading-relaxed text-primary/90">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-3">
                    <div className="rounded-[1.75rem] border border-secundary/15 bg-white/70 p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-secundary/60">Clareza</p>
                        <p className="mt-3 text-base leading-relaxed text-secundary/85">
                            Linguagem simples, estrutura organizada e comunicacao pensada para quem vai contratar ou comprar.
                        </p>
                    </div>
                    <div className="rounded-[1.75rem] border border-secundary/15 bg-white/70 p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-secundary/60">Cuidado visual</p>
                        <p className="mt-3 text-base leading-relaxed text-secundary/85">
                            Interfaces responsivas e bem acabadas para transmitir mais valor logo no primeiro acesso.
                        </p>
                    </div>
                    <div className="rounded-[1.75rem] border border-secundary/15 bg-white/70 p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-secundary/60">Estrutura</p>
                        <p className="mt-3 text-base leading-relaxed text-secundary/85">
                            Desenvolvimento com base tecnica para crescer com formularios, integracoes e necessidades reais do negocio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
