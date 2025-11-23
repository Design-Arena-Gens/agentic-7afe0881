"use client";

import { useMemo, useState } from "react";
import type { GreetingInfo } from "@/lib/greetings";

type GreetingShowcaseProps = {
  entries: GreetingInfo[];
};

const accentPalette = ["#F97316", "#14B8A6", "#3B82F6", "#EC4899", "#8B5CF6", "#22C55E"];

export function GreetingShowcase({ entries }: GreetingShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGreeting = entries[activeIndex];

  const buttonStyles = useMemo(() => {
    return entries.map((_, index) => ({
      borderColor: accentPalette[index % accentPalette.length],
    }));
  }, [entries]);

  return (
    <section className="greeting-showcase">
      <div className="greeting-selector" role="listbox" aria-label="Choisissez une langue">
        {entries.map((greeting, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={greeting.language}
              type="button"
              role="option"
              aria-selected={isActive}
              className={`selector-button ${isActive ? "selector-button--active" : ""}`}
              onClick={() => setActiveIndex(index)}
              style={buttonStyles[index]}
            >
              <span className="selector-language">{greeting.language}</span>
              <span className="selector-native">{greeting.nativeName}</span>
            </button>
          );
        })}
      </div>

      <article className="greeting-details" aria-live="polite">
        <header className="greeting-header">
          <p className="greeting-label">Formule</p>
          <h2 className="greeting-word">{activeGreeting.greeting}</h2>
          <p className="greeting-pronunciation">
            <span>Prononciation&nbsp;:</span> {activeGreeting.pronunciation}
          </p>
        </header>

        <dl className="greeting-meta">
          <div>
            <dt>Région</dt>
            <dd>{activeGreeting.region}</dd>
          </div>
          <div>
            <dt>Étiquette</dt>
            <dd>{activeGreeting.etiquette}</dd>
          </div>
        </dl>

        <p className="greeting-fact">✨ {activeGreeting.funFact}</p>
      </article>
    </section>
  );
}
