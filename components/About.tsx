export default function About() {
    return (
        <div className="bg-secundary font-all text-primary shadow-3xl sm:rounded-none sm:shadow-none">
            <div className="mx-auto flex min-h-[420px] max-w-7xl flex-col px-6 py-12 lg:min-h-[600px] lg:px-12 lg:py-16 xl:min-h-screen xl:justify-center">
                <h2 className="text-base font-bold lg:text-xl xl:text-2xl">Sobre Mim</h2>

                <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                    <div className="text-left">
                        <p className="text-2xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                            Crio sites profissionais para empresas que querem passar credibilidade e gerar mais oportunidades.
                        </p>

                        <div className="mt-6 space-y-5 text-base leading-relaxed text-primary/90 sm:text-lg lg:text-2xl">
                            <p>
                                Sou João Gabriel, desenvolvedor frontend, e trabalho construindo interfaces modernas, organizadas e fáceis de usar. Meu objetivo é transformar a ideia do cliente em um site que represente bem o negócio e transmita confiança desde o primeiro acesso.
                            </p>
                            <p>
                                Atualmente atuo como desenvolvedor frontend e também trago uma base forte em tecnologia, dados e integração de sistemas. Isso me ajuda a ir além do visual: penso em estrutura, desempenho, clareza das informações e experiência do usuário.
                            </p>
                            <p>
                                Para negócios que precisam de presença digital, entrego páginas com design profissional, navegação clara e foco em resultado, seja para apresentar a empresa, destacar serviços, fortalecer a marca ou facilitar o contato com novos clientes.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div className="rounded-[2rem] border border-primary/20 bg-primary/8 p-5">
                            <p className="text-xs uppercase tracking-[0.28em] text-primary/70">O que entrego</p>
                            <p className="mt-3 text-base leading-relaxed sm:text-lg">
                                Sites institucionais, landing pages e interfaces responsivas com visual profissional e comunicação objetiva.
                            </p>
                        </div>

                        <div className="rounded-[2rem] border border-primary/20 bg-primary/8 p-5">
                            <p className="text-xs uppercase tracking-[0.28em] text-primary/70">Como trabalho</p>
                            <p className="mt-3 text-base leading-relaxed sm:text-lg">
                                Busco entender o negócio, organizar a mensagem certa e desenvolver uma experiência simples, bonita e confiável para o público final.
                            </p>
                        </div>

                        <div className="rounded-[2rem] border border-primary/20 bg-primary/8 p-5">
                            <p className="text-xs uppercase tracking-[0.28em] text-primary/70">Compromisso</p>
                            <p className="mt-3 text-base leading-relaxed sm:text-lg">
                                Entregar um site bem cuidado, alinhado com a identidade da empresa e preparado para causar uma boa primeira impressão.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
