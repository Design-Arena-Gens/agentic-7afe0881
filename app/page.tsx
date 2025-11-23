import { greetings } from "@/lib/greetings";
import { GreetingShowcase } from "@/components/GreetingShowcase";

const etiquetteHighlights = [
  {
    title: "Saluer, c'est inviter",
    description:
      "Un bonjour chaleureux ouvre la porte à la conversation. Les cultures du monde valorisent les salutations comme le premier signe de respect.",
  },
  {
    title: "Adapter son ton",
    description:
      "Certaines langues requièrent un niveau de politesse spécifique, une inclinaison ou un sourire. Observer le contexte reste la meilleure boussole.",
  },
  {
    title: "Écouter la réponse",
    description:
      "Plusieurs salutations se construisent comme un échange. Répondre avec la formule attendue témoigne d'une écoute attentive.",
  },
];

const culturalTips = [
  {
    label: "Heure du jour",
    tip: "En français, préférez « bon après-midi » après 13h, et « bonsoir » dès que la lumière décline.",
  },
  {
    label: "Proximité",
    tip: "Chaque région définit sa bulle sociale. Observez les gestes locaux (poignée de main, bise, révérence).",
  },
  {
    label: "Intonation",
    tip: "La mélodie d'un mot peut en changer le sens. Répétez doucement après un locuteur natif pour vous rapprocher du rythme authentique.",
  },
];

export default function HomePage() {
  const featuredGreeting = greetings[0];

  return (
    <div className="page-container">
      <section className="hero">
        <p className="hero-eyebrow">Bienvenue</p>
        <h2 className="hero-title">
          Explorez l&apos;âme du mot <span className="hero-highlight">«&nbsp;Bonjour&nbsp;»</span>
        </h2>
        <p className="hero-description">
          Plus qu&apos;une simple formule de politesse, «&nbsp;Bonjour&nbsp;» incarne l&apos;envie de bien démarrer la journée avec courtoisie et
          chaleur. Découvrez ses cousins linguistiques et capturez leurs nuances pour saluer le monde avec aisance.
        </p>
        <div className="hero-card">
          <p className="hero-card-label">Essentiel</p>
          <p className="hero-card-word">{featuredGreeting.greeting}</p>
          <p className="hero-card-pronunciation">{featuredGreeting.pronunciation}</p>
          <p className="hero-card-tip">{featuredGreeting.etiquette}</p>
        </div>
      </section>

      <GreetingShowcase entries={greetings} />

      <section className="insight-grid">
        {etiquetteHighlights.map((item) => (
          <article key={item.title} className="insight-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="tips-panel">
        <h3>3 repères pour saluer avec confiance</h3>
        <ul>
          {culturalTips.map((tip) => (
            <li key={tip.label}>
              <strong>{tip.label}</strong>
              <span>{tip.tip}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
