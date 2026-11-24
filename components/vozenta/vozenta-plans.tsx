const rows = [
  ['Transcripciones al día', '3 completadas', 'Sin límite diario'],
  ['Duración por archivo', 'Hasta 15 minutos', 'Sin límite de duración'],
  ['Archivos en cola', 'Uno cada vez', 'Varios archivos'],
  ['Modelos', 'Whisper Tiny y Base', 'Todos los modelos compatibles'],
  ['Exportación', 'TXT', 'TXT, PDF, SRT, VTT y JSON'],
  ['Traducción al inglés con Whisper', 'No incluida', 'Incluida'],
  ['Procesamiento local y sin cuenta', 'Incluido', 'Incluido'],
];

export function VozentaPlans() {
  return (
    <div className="vozenta-comparison">
      <table>
        <caption className="vozenta-sr-only">Comparación de los planes Gratis y Vozenta Pro</caption>
        <thead><tr><th scope="col">Funciones</th><th scope="col">Gratis<span>Para empezar</span></th><th scope="col">Vozenta Pro<span>Pago único</span></th></tr></thead>
        <tbody>{rows.map(([feature, free, pro]) => <tr key={feature}><th scope="row">{feature}</th><td>{free}</td><td>{pro}</td></tr>)}</tbody>
      </table>
      <p>Los modelos disponibles dependen de la versión de macOS y del procesador de tu Mac.</p>
    </div>
  );
}
