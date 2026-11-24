import { Coffee, Heart } from 'lucide-react';

export function VerbaSupport() {
  return (
    <section className="shell verba-support" id="apoyar">
      <div className="verba-support-icon"><Coffee size={27} aria-hidden="true" /></div>
      <div>
        <p className="kicker">Hecha por una persona</p>
        <h2>¿Me invitas a un café?</h2>
        <p>Si Verba te resulta útil, puedes apoyar su desarrollo con una aportación voluntaria desde la propia app. Cada gesto ayuda a seguir cuidando y mejorando Verba.</p>
        <p className="verba-support-note"><Heart size={16} aria-hidden="true" /> Encontrarás «Apoyar al desarrollador» en Verba cuando esté disponible. Es un pago puntual, no una suscripción y no desbloquea funciones.</p>
      </div>
    </section>
  );
}
