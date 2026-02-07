import React, { useEffect, useState } from 'react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import {
  Play,
  CheckCircle,
  X,
  ChevronDown,
  ChevronUp,
  Star,
  Shield,
  Heart,
  Brain,
  Lock
} from 'lucide-react';
import { FAQItem } from './types';

const App: React.FC = () => {
  // Initialize AOS Animation on mount
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
        offset: 100,
      });
    }
  }, []);

  // FAQ Data
  const faqData: FAQItem[] = [
    {
      question: "É terapia ou aconselhamento pastoral?",
      answer: "É Psicoterapia Clínica com base integrativa. Usamos a técnica da psicologia sob a luz da cosmovisão cristã."
    },
    {
      question: "O atendimento é Online?",
      answer: "Sim. Atendo pacientes em diversos países. O governo da sua vida não depende de barreiras geográficas."
    },
    {
      question: "Aceita convênio?",
      answer: "Não. O nosso pacto é de alto nível e exige investimento direto no seu compromisso."
    }
  ];

  // State for FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToNextSection = (e: React.MouseEvent) => {
    const currentSection = (e.currentTarget as HTMLElement).closest('section') || (e.currentTarget as HTMLElement).closest('.min-h-screen');
    if (currentSection) {
      const nextSection = currentSection.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "557781349323";
    const message = encodeURIComponent("Olá Larissa, vim pelo site e quero agendar minha sessão estratégica.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="font-sans text-darkgrey bg-offwhite">

      {/* 
        BLOCK 1: HERO SECTION
        Objective: Immediate Impact. Filter audience.
      */}
      <section id="hero" className="relative min-h-screen flex items-center bg-royal overflow-hidden py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column: Text Content */}
            <div className="lg:w-3/5 text-center lg:text-left" data-aos="fade-right">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6 tracking-wide">
                Pare de <span className="text-gold italic">mendigar aprovação</span> e assuma o <span className="underline decoration-gold underline-offset-8 text-gold">governo</span> da sua própria história.
              </h1>
              <h2 className="font-sans text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                Psicoterapia Integrativa para quem cansou de viver como órfão e decidiu ativar sua verdadeira <span className="text-white font-medium">Identidade Divina</span>. A união definitiva entre a <span className="text-gold-light">ciência da psique</span> e a <span className="text-gold-light">profundidade da fé</span>.
              </h2>
              <Button onClick={scrollToNextSection} className="text-lg px-10 py-5">
                QUERO AGENDAR MINHA SESSÃO ESTRATÉGICA
              </Button>
            </div>

            {/* Right Column: Expert Image */}
            <div className="lg:w-2/5" data-aos="fade-left">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 border border-gold/30 rounded-full animate-pulse-slow"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl shadow-gold/20"></div>

                <img
                  src="https://i.imgur.com/WJfQst7.jpeg"
                  alt="Larissa Nunes - Psicoterapeuta Integrativa"
                  className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-2xl border-b-4 border-gold"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        BLOCK 2: PAIN POINTS (IDENTIFICATION)
        Objective: Connect with emotional pain.
      */}
      <Section className="bg-white">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-royal mb-6">
            Você sente que tem um <span className="text-gold">leão adormecido</span> dentro de você?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Você conquistou, lutou, mas quando coloca a cabeça no travesseiro, sente um <span className="font-bold text-royal italic">vazio</span> que nenhum sucesso preenche. <br />
            Talvez você esteja vivendo um destes cenários hoje:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {[
            {
              icon: <Heart className="w-8 h-8 text-gold" />,
              title: "A Orfandade Emocional",
              desc: "Você se sente uma eterna criança buscando a aprovação de pais, cônjuges ou chefes."
            },
            {
              icon: <Lock className="w-8 h-8 text-gold" />,
              title: "A Gaiola de Ouro",
              desc: "Tem fé, frequenta a igreja, mas vive refém da ansiedade, da culpa e do medo do julgamento."
            },
            {
              icon: <Brain className="w-8 h-8 text-gold" />,
              title: "Paralisia por Análise",
              desc: "Sabe exatamente o que precisa fazer para crescer, mas trava na hora da execução."
            },
            {
              icon: <Shield className="w-8 h-8 text-gold" />,
              title: "Vitimismo Oculto",
              desc: "Sente que o mundo lhe deve algo e que suas feridas do passado são sua 'sentença de morte'."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 border-l-4 border-gold bg-offwhite hover:bg-white hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-serif text-xl font-bold text-royal mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="font-serif text-xl md:text-2xl italic text-royal max-w-3xl mx-auto">
            "Essa dor não é o fim. É o sinal de que você está vivendo <span className="bg-gold/10 px-2 py-1 rounded">abaixo da sua identidade</span>. O sono da negligência emocional está te custando caro demais."
          </p>
        </div>
      </Section>

      <section id="video" className="w-full bg-royal py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-10" data-aos="fade-up">
            Dê o play e comece o seu despertar agora.
          </h2>
          <div className="max-w-md mx-auto" data-aos="zoom-in">
            <div className="wistia-video-container shadow-2xl border border-gold/30 overflow-hidden rounded-lg">
              {/* @ts-ignore */}
              <wistia-player media-id="kzrkn5yyrn" aspect="0.75">
                <div className="wistia_preload_transcript_outer_wrapper" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-133.33%' }}>
                  <div className="wistia_preload_transcript_inner_wrapper" style={{ overflow: 'auto' }}>
                    <p className="wistia_preload_transcript_text" aria-hidden="true" tabIndex={-1} style={{ textAlign: 'justify', fontSize: '5px' }}>
                      E a pergunta mais importante que eu tenho pra te fazer hoje é, quanto está te custando continuar fingindo que está tudo bem? Você ri para o mundo, você serve todo mundo, você é forte no trabalho, mas quando coloca a cabeça no travesseiro sente aquele vazio que nenhum sucesso pode preencher. Eu sei exatamente o que é isso. Você não está cansado, você só está desconectado de quem nasceu para ser. E enquanto você continuar mendigando por aprovação, você vai ser escravo de quem te valida. E isso não é humildade, isso é orfandade emocional. E a orfandade emocional, ela te impede de governar a sua própria vida. Muito prazer, eu sou Larissa Nunes, psicoterapeuta e mentora de identidade. O meu trabalho aqui não é passar a mão na sua cabeça e te manter na zona de conforto. O meu trabalho é unir a ciência da psique com os alicerces da fé, para te ajudar a acordar o leão que está adormecido aí dentro. Eu não te ofereço uma cura mágica, eu ofereço pacto. Se você decidir que o tempo de ser vítima acabou, eu serei a estrategista que vai te guiar para fora desse deserto. Mas a decisão precisa ser sua, eu só posso ajudar quem quer ser ajudado. Se você está pronto para parar de sobreviver e começar a governar, toque no botão que está aqui embaixo. Agende a sua sessão estratégica e vamos juntos assumir o controle da sua história. Eu te espero do lado de cá.
                    </p>
                  </div>
                </div>
              </wistia-player>
            </div>
          </div>
        </div>
      </section>

      {/* 
        BLOCK 3b: METHODOLOGY
        Objective: Bridge Faith & Science.
      */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-royal mb-6">
              Onde a <span className="text-gold italic">Técnica</span> encontra a <span className="text-gold italic">Transcendência</span>.
            </h2>
            <div className="w-20 h-1 bg-gold mb-8"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Esqueça a ideia de que você precisa escolher entre sua saúde mental e sua vida espiritual.
              Meu método de trabalho é fundamentado em um <span className="font-bold text-royal underline decoration-gold/50">alicerce duplo</span>:
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-royal text-gold flex items-center justify-center font-bold font-serif text-xl">1</div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-royal mb-2">A Ciência da Psique <span className="text-gray-400 font-normal text-base">(Técnica)</span></h3>
                  <p className="text-gray-600">Ferramentas clínicas para tratar traumas, <span className="font-medium text-royal">ressignificar o luto</span> e quebrar ciclos de comportamento destrutivo. Não é "conversa fiada", é <span className="text-gold font-bold">neurociência</span> e psicologia aplicada.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center font-bold font-serif text-xl">2</div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-royal mb-2">A Identidade Divina <span className="text-gray-400 font-normal text-base">(Fundamento)</span></h3>
                  <p className="text-gray-600">A cura real só acontece quando você descobre quem é. Não trato apenas os sintomas; vamos à <span className="font-bold text-royal italic">raiz espiritual</span> e emocional da sua identidade como Imagem e Semelhança.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-offwhite p-10 border border-gray-200 shadow-lg" data-aos="fade-left">
            <h3 className="font-serif text-2xl font-bold text-royal mb-6 text-center">O que eu NÃO faço:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-medium">Passar a mão na sua cabeça para te manter na zona de conforto.</p>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-medium">Ignorar sua fé ou tratá-la como um delírio.</p>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-medium">Prometer pílulas mágicas sem o seu esforço.</p>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 
        BLOCK 4: ABOUT THE PROFESSIONAL
        Objective: Authority through experience.
      */}
      <Section className="bg-royal text-white" dark>
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6" data-aos="fade-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
              Minha autoridade não vem apenas dos livros. <br /> Vem do <span className="text-gold italic">deserto</span>.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Muito prazer, eu sou <span className="text-white font-bold border-b border-gold">Larissa Nunes</span>.
            </p>
            <p className="text-gray-300 leading-relaxed font-light">
              Antes de ser a <span className="text-white">estrategista emocional</span> que guia centenas de pessoas, eu precisei atravessar o meu próprio vale. Eu conheço o gosto amargo da rejeição e a dor do abandono paterno. Eu sei o que é ter que <span className="font-bold text-white">forjar a própria força</span> quando o chão desaparece.
            </p>
            <p className="text-gray-300 leading-relaxed font-light">
              Transformei o luto da figura paterna terrena na descoberta inabalável da <span className="text-white">Paternidade Divina</span>. Esse processo gerou em mim a <span className="text-gold italic">"musculatura emocional"</span> necessária para sustentar a sua dor sem ser engolida por ela.
            </p>
            <p className="text-gold text-xl font-serif italic">
              "Hoje, minha missão é clara: Sou o farol para quem decidiu sair da escuridão da orfandade. Não aceito que você viva menos do que nasceu para governar."
            </p>
            <div className="pt-6">
              <Button variant="outline" onClick={scrollToNextSection}>
                CONHECER O MÉTODO
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="zoom-in">
            <div className="relative">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-gold -z-10"></div>
              <img
                src="https://i.imgur.com/tnEWauN.jpeg"
                alt="Retrato da Terapeuta - Larissa Nunes"
                className="w-full h-auto object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 
        BLOCK 5: THE PROCESS
        Objective: Logistics and Commitment.
      */}
      <Section>
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-royal mb-4">
            O Caminho para o Seu Governo
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

          {[
            { step: "01", title: "A Decisão", desc: "Você preenche o formulário de aplicação. Não aceito qualquer pessoa; busco quem está decidido a mudar." },
            { step: "02", title: "A Sessão Estratégica", desc: "Um encontro online onde alinhamos expectativas e desenhamos o mapa da sua restauração." },
            { step: "03", title: "O Processo Contínuo", desc: "Sessões semanais de confronto, acolhimento e construção de identidade." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 text-center" data-aos="fade-up" data-aos-delay={idx * 150}>
              <div className="w-24 h-24 mx-auto bg-royal text-gold rounded-full flex items-center justify-center font-serif text-3xl font-bold mb-6 border-4 border-white shadow-lg">
                {item.step}
              </div>
              <h3 className="font-serif text-2xl font-bold text-royal mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto" data-aos="fade-up">
          <div className="bg-royal text-white p-10 md:p-14 text-center border border-gold relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold text-royal font-bold px-4 py-1 uppercase text-sm tracking-widest">
              Diferencial
            </div>
            <p className="font-serif text-2xl md:text-3xl italic leading-relaxed">
              "Se você não desistir de você, <span className="text-gold font-bold">eu não desisto de nós</span>. Meu pacto é caminhar com você até que você aprenda a andar sozinho."
            </p>
          </div>
        </div>
      </Section>

      {/* 
        BLOCK 6: TESTIMONIALS
        Objective: Social Proof.
      */}
      <Section className="bg-offwhite">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-royal mb-16 text-center" data-aos="fade-up">
          Quem decidiu acordar o leão:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "https://i.imgur.com/FD6z7SK.jpeg",
            "https://i.imgur.com/Pu6d4sJ.jpeg",
            "https://i.imgur.com/zLtIsBA.jpeg"
          ].map((src, idx) => (
            <div key={idx} className="bg-white p-2 shadow-xl rounded-lg border border-gray-100" data-aos="fade-up" data-aos-delay={idx * 100}>
              <img
                src={src}
                alt={`Depoimento ${idx + 1}`}
                className="w-full h-auto rounded shadow-sm hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 
        BLOCK 7: FAQ
        Objective: Remove Friction.
      */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-royal mb-12 text-center" data-aos="fade-up">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4" data-aos="fade-up" data-aos-delay={index * 50}>
                <button
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-serif text-xl font-bold text-royal group-hover:text-gold transition-colors">{item.question}</span>
                  {openFaqIndex === index ? <ChevronUp className="text-gold" /> : <ChevronDown className="text-gray-400" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 pb-4 pr-8">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 
        BLOCK 8: FOOTER
        Objective: Scarcity & Final CTA.
      */}
      <footer className="bg-royal text-white pt-20 pb-10 px-6" id="footer-cta">
        <div className="container mx-auto max-w-4xl text-center" data-aos="zoom-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
            O despertar exige coragem. <br /> Você vai continuar dormindo?
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Minha agenda é limitada porque ofereço entrega total a cada paciente. Se você sentiu que o seu lugar é aqui, não hesite.
          </p>

          <Button
            onClick={openWhatsApp}
            className="text-lg md:text-xl px-12 py-6 shadow-2xl animate-pulse"
          >
            QUERO AGENDAR MINHA SESSÃO AGORA
          </Button>

          <div className="mt-20 pt-8 border-t border-white/10 text-sm text-gray-500 font-sans">
            <p>© 2024 Larissa Nunes - Todos os direitos reservados. Governo & Identidade.</p>
          </div>
        </div>
      </footer>
    </div >
  );
};

export default App;