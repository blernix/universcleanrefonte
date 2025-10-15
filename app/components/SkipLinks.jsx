// Composant SkipLinks pour l'accessibilité
// Permet aux utilisateurs de lecteurs d'écran de sauter directement au contenu principal

export default function SkipLinks() {
  return (
    <div className="skip-links">
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      <a href="#services" className="skip-link">
        Aller aux services
      </a>
      <a href="#contact" className="skip-link">
        Aller au formulaire de contact
      </a>

      <style jsx>{`
        .skip-links {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 9999;
        }

        .skip-link {
          position: absolute;
          left: -9999px;
          top: 0;
          z-index: 999;
          padding: 1rem 1.5rem;
          background-color: #2563eb;
          color: white;
          text-decoration: none;
          font-weight: 600;
          border-radius: 0 0 0.5rem 0.5rem;
        }

        .skip-link:focus {
          left: 0.5rem;
          outline: 3px solid #1e40af;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
