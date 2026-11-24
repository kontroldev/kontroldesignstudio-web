import { Coffee, Heart } from 'lucide-react';

export function VozentaSupport() {
  return (
    <section className="shell vozenta-support" id="apoyar">
      <div className="vozenta-support-icon"><Coffee size={27} aria-hidden="true" /></div>
      <div>
        <p className="kicker">Hecha por una persona</p>
        <h2>¿Me invitas a un café?</h2>
        <p>Si Vozenta te resulta útil, puedes apoyar su desarrollo con una aportación voluntaria desde la propia app. Cada gesto ayuda a seguir cuidando y mejorando Vozenta.</p>
        <p className="vozenta-support-note"><Heart size={16} aria-hidden="true" /> Encontrarás «Apoyar al desarrollador» en Vozenta cuando esté disponible. Es un pago puntual, no una suscripción y no desbloquea funciones.</p>
      </div>
    </section>
  );
}
