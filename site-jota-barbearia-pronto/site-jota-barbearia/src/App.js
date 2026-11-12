import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { ArrowUpRight, Check, MapPin, Menu, MoveDown, Sparkles } from "lucide-react";
import "@/App.css";

const signupLink = "https://l.appbarber.com.br/efcc80kb";
const bookingLink = "https://sites.appbarber.com.br/jotabarbearia";
const whatsappLink = "https://wa.me/message/323BZGX4A22LA1";
const mapsLink = "https://www.google.com/maps/search/?api=1&query=Jota+Barbearia+Parauapebas";
const logoUrl = `${process.env.PUBLIC_URL}/images/logo.png`;
const barberCutImage = `${process.env.PUBLIC_URL}/images/hero-salao.webp`;
const barberImageTwo = `${process.env.PUBLIC_URL}/images/barbeiro-1.webp`;
const barberImageThree = `${process.env.PUBLIC_URL}/images/barbeiro-2.webp`;
const barberImageFour = `${process.env.PUBLIC_URL}/images/barbeiro-3.webp`;
const storefrontImage = `${process.env.PUBLIC_URL}/images/fachada.webp`;

const plans = [
  { name: "Corte ilimitado", label: "Plano 01", price: "79,90", copy: "Para manter o corte sempre alinhado.", features: ["Cortes ilimitados", "Praticidade no dia a dia", "Mensalidade fixa"] },
  { name: "Barba ilimitada", label: "Plano 02", price: "84,90", copy: "Para deixar a barba sempre bem cuidada.", features: ["Serviços de barba ilimitados", "Visual sempre alinhado", "Mensalidade fixa"] },
  { name: "Premium", label: "Plano completo", price: "149,90", copy: "Corte e barba no mesmo plano, com melhor custo-benefício.", features: ["Cortes ilimitados", "Serviços de barba ilimitados", "Mais economia em um só plano"], featured: true },
];

const reveal = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

function PlanButton({ planIndex, featured }) {
  const [hovered, setHovered] = useState(false);
  return <a className={`button ${featured ? "button-yellow" : "button-dark"}`} style={!featured ? { background: hovered ? "#ffd600" : "#111", color: hovered ? "#111" : "#fff", borderColor: hovered ? "#ffd600" : "#111" } : undefined} href={signupLink} target="_blank" rel="noreferrer" onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)} onPointerDown={() => setHovered(true)} onPointerUp={() => setHovered(false)} data-testid={`plan-${planIndex}-signup-button`}>{featured ? "Quero o Premium" : "Assinar agora"}<ArrowUpRight size={16} /></a>;
}

function App() {
  const heroRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroShift = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let frame;
    const raf = (time) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(frame); lenis.destroy(); };
  }, []);

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <div className="announcement" data-testid="announcement-bar"><span>Parauapebas, PA</span><span>A amarelinha mais famosa da cidade</span><span>Assine seu estilo <ArrowUpRight size={13} /></span></div>
      <nav className="nav" data-testid="main-navigation">
        <a href="#inicio" className="brand" data-testid="brand-home"><img src={logoUrl} alt="Jota Barbearia" style={{ width: 48, height: 48, objectFit: "contain" }} /><span>JOTA<small>BARBEARIA</small></span></a>
        <div className="nav-links"><a href="#planos" data-testid="nav-plans-link">Planos</a><a href="#vantagens" data-testid="nav-benefits-link">A experiência</a><a href="#contato" data-testid="nav-contact-link">Contato</a></div>
        <a href={signupLink} target="_blank" rel="noreferrer" className="nav-cta" data-testid="nav-signup-button">Quero ser assinante <ArrowUpRight size={16} /></a>
        <button className="mobile-menu" aria-label="Abrir menu" onClick={() => setMenuOpen((open) => !open)} data-testid="mobile-menu-button"><Menu size={22} /></button>
        {menuOpen && <div className="mobile-nav" style={{ position: "absolute", right: 20, top: 70, display: "flex", flexDirection: "column", gap: 20, padding: "22px 25px", background: "#171717", border: "1px solid rgba(255,214,0,.4)", boxShadow: "0 15px 40px rgba(0,0,0,.35)", font: "11px 'DM Mono', monospace", textTransform: "uppercase", letterSpacing: ".1em" }} data-testid="mobile-navigation"><a href="#planos" onClick={() => setMenuOpen(false)} data-testid="mobile-plans-link">Planos</a><a href="#vantagens" onClick={() => setMenuOpen(false)} data-testid="mobile-benefits-link">A experiência</a><a href="#contato" onClick={() => setMenuOpen(false)} data-testid="mobile-contact-link">Contato</a></div>}
      </nav>

      <main>
        <section className="hero" id="inicio" ref={heroRef} data-testid="hero-section">
          <motion.div className="hero-image" style={{ y: heroShift, backgroundImage: `url("${barberCutImage}")` }} aria-hidden="true"><div className="hero-image-overlay" /></motion.div>
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="hero-content wrap">
            <motion.div className="hero-copy" initial="hidden" animate="visible" variants={stagger}>
              <motion.div className="eyebrow" variants={reveal}><span className="eyebrow-dot" /> Seu estilo merece estar em dia</motion.div>
              <motion.h1 variants={reveal}><span>Seu corte.</span><em>Sua rotina.</em><span>Seu estilo.</span></motion.h1>
              <motion.p variants={reveal}>Tenha mais praticidade para cuidar do visual. Escolha seu plano, aproveite sua assinatura e mantenha o estilo sempre em dia.</motion.p>
              <motion.div className="hero-actions" variants={reveal}><a className="button button-yellow" href={signupLink} target="_blank" rel="noreferrer" data-testid="hero-signup-button">Quero ser assinante <ArrowUpRight size={17} /></a><a className="button" style={{ background: "#fff", color: "#111", borderColor: "#fff" }} href={bookingLink} target="_blank" rel="noreferrer" data-testid="hero-booking-button">Agendar meu corte <ArrowUpRight size={17} /></a><a className="text-link" href="#planos" data-testid="hero-plans-link">Conheça os planos <MoveDown size={16} /></a></motion.div>
            </motion.div>
            <motion.div className="hero-side" style={{ backgroundImage: `linear-gradient(rgba(13,13,13,.52), rgba(13,13,13,.72)), url("${barberImageFour}")`, backgroundSize: "cover", backgroundPosition: "center" }} initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .5, duration: 1 }}>
              <div className="hero-stamp"><span>JOTA</span><i>BARBEARIA</i><b>PARAUAPEBAS · 2024</b></div>
              <div className="hero-note">01<br /><span>Assinatura<br />sem complicação</span></div>
            </motion.div>
          </div>
          <div className="hero-bottom wrap"><span>Role para descobrir</span><span className="line" /><span>01 / 04</span></div>
        </section>

        <div className="marquee" data-testid="editorial-marquee"><div className="marquee-track"><span>Seu estilo, do seu jeito</span><b>✳</b><span>A amarelinha mais famosa de Parauapebas</span><b>✳</b><span>Seu estilo, do seu jeito</span><b>✳</b><span>A amarelinha mais famosa de Parauapebas</span><b>✳</b></div></div>

        <section className="section plans-section" id="planos" data-testid="plans-section">
          <div className="wrap"><motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal}><div className="eyebrow"><span className="eyebrow-dot" /> Escolha o seu plano</div><h2>O ritual de estar<br /><em>sempre em dia.</em></h2><p>Uma assinatura que acompanha sua rotina e deixa o cuidado com o visual mais simples.</p></motion.div>
            <motion.div className="plans-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} variants={stagger}>
              {plans.map((plan, index) => <motion.article className={`plan-card ${plan.featured ? "featured" : ""}`} variants={reveal} key={plan.name} data-testid={`plan-card-${index + 1}`}>
                {plan.featured && <div className="popular-tag" data-testid="premium-popular-tag"><Sparkles size={13} /> Melhor custo-benefício</div>}
                <div className="plan-top"><span>{plan.label}</span><span>0{index + 1}</span></div><h3>{plan.name}</h3><p>{plan.copy}</p><div className="plan-price"><small>R$</small>{plan.price}<b>/ mês</b></div>
                <ul>{plan.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul><PlanButton planIndex={index + 1} featured={plan.featured} />
              </motion.article>)}
            </motion.div>
          </div>
        </section>

        <section className="section experience-section" id="vantagens" data-testid="benefits-section"><div className="wrap experience-grid"><motion.div className="experience-visual" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><div className="image-frame image-main"><img src={barberImageTwo} alt="Barbeiro realizando um corte na Jota Barbearia" /></div><div className="image-frame image-small"><img src={barberImageThree} alt="Serviço de barbearia da Jota" /></div><span className="visual-caption">A experiência Jota<br /><b>começa no detalhe.</b></span></motion.div>
            <motion.div className="experience-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={stagger}><motion.div className="eyebrow" variants={reveal}><span className="eyebrow-dot" /> Por que escolher a Jota?</motion.div><motion.h2 variants={reveal}>Mais que um<br /><em>corte.</em></motion.h2><motion.p variants={reveal}>Uma experiência pensada para você cuidar do visual com praticidade e constância — do seu jeito, no seu tempo.</motion.p><motion.div className="benefit-list" variants={stagger}>{[["01", "Liberdade para cuidar do visual", "Com seu plano ativo, aproveite os serviços incluídos na assinatura."], ["02", "Praticidade para agendar", "Acesse nosso agendamento online e escolha o melhor horário disponível."], ["03", "Um padrão Jota", "Seu cuidado faz parte da experiência da amarelinha mais famosa de Parauapebas."]].map(([number, title, text]) => <motion.div className="benefit-item" variants={reveal} key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></motion.div>)}</motion.div></motion.div>
          </div></section>

        <section className="location-section" id="contato" data-testid="location-section"><div className="location-photo" style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(90deg, #191919 5%, rgba(25,25,25,.9) 48%, rgba(25,25,25,.4)), url("${storefrontImage}")`, backgroundSize: "cover", backgroundPosition: "center", opacity: .42 }} aria-hidden="true" /><div className="map-glow" /><div className="wrap location-content" style={{ position: "relative", zIndex: 2 }}><div className="eyebrow"><span className="eyebrow-dot" /> Estamos esperando por você</div><h2>Vem pra<br /><em>Jota Barbearia.</em></h2><p>Fale com nossa equipe, agende seu horário ou venha conhecer a amarelinha mais famosa de Parauapebas.</p><div className="location-actions"><a className="button button-yellow" href={whatsappLink} target="_blank" rel="noreferrer" data-testid="whatsapp-button">Falar no WhatsApp <ArrowUpRight size={17} /></a><a className="button button-outline" href={bookingLink} target="_blank" rel="noreferrer" data-testid="booking-button">Agendar online <ArrowUpRight size={17} /></a><a className="button button-outline" href={mapsLink} target="_blank" rel="noreferrer" data-testid="directions-button"><MapPin size={17} /> Como chegar</a></div></div><div className="location-mark" style={{ display: "none" }} aria-hidden="true">JOTA<span>BARBEARIA</span></div></section>
      </main>
      <footer className="footer wrap"><a href="#inicio" className="brand" data-testid="footer-brand"><img src={logoUrl} alt="Jota Barbearia" style={{ width: 48, height: 48, objectFit: "contain" }} /><span>JOTA<small>BARBEARIA</small></span></a><span>Seu estilo é aqui.</span><span>© 2024 Jota Barbearia</span></footer>
    </div>
  );
}

export default App;