import type { Metadata } from 'next';
import Link from 'next/link';
import { VozentaHeader } from '@/components/vozenta/vozenta-header';
import { VozentaFooter } from '@/components/vozenta/vozenta-footer';

export const metadata: Metadata = {
  title: 'Vozenta — Política de privacidad',
  description: 'Cómo Vozenta trata tus archivos, transcripciones y compras en macOS.',
};

export default function VozentaPrivacyPage() {
  return (
    <main className="vozenta-page">
      <VozentaHeader />
      <article className="legal-page shell" id="contenido" tabIndex={-1}>
        <p className="kicker">Vozenta</p>
        <h1>Política de privacidad</h1>
        <p className="legal-page-introduction">Tu voz y tus archivos son tuyos. Vozenta está diseñada para transcribirlos en tu Mac.</p>
        <div className="legal-page-content">
          <div className="privacy-meta"><span>Última actualización</span><strong>24 de noviembre de 2026</strong></div>
          <aside className="privacy-summary"><p className="privacy-summary-label">En pocas palabras</p><p>Vozenta procesa tus archivos y guarda tus transcripciones en tu Mac. No envía tus grabaciones a Kontrol App Studio para transcribirlas ni requiere una cuenta de Vozenta.</p></aside>
          <section><h2>1. Responsable y alcance</h2><p>Vozenta es una aplicación para macOS desarrollada por Raúl Gallego bajo el nombre Kontrol App Studio. Esta política describe el tratamiento de información al utilizar Vozenta. Para cualquier consulta, escribe a <a className="text-link" href="mailto:info@kontroldesignstudio.com">info@kontroldesignstudio.com</a>.</p></section>
          <section><h2>2. Audio, vídeo y transcripciones</h2><p>Los archivos que seleccionas se procesan localmente en tu Mac para generar la transcripción o, cuando eliges esa función con un modelo compatible, traducirla al inglés. Vozenta no envía esos archivos ni el texto resultante a servidores de Kontrol App Studio. El contenido se utiliza para prestar las funciones que solicitas, no para publicidad ni para entrenar modelos por parte de Kontrol App Studio.</p><p>La app guarda en tu Mac las transcripciones, su historial y datos asociados, como título, fecha, idioma, ruta del archivo de origen y fragmentos de texto. Los archivos que exportes se guardan donde elijas. Durante el procesamiento pueden crearse archivos temporales que la app intenta eliminar al terminar.</p></section>
          <section><h2>3. Modelos y conexión a Internet</h2><p>Cuando solicitas descargar un modelo, Vozenta se conecta a proveedores externos que alojan sus archivos, entre ellos Hugging Face. Esos proveedores reciben los datos técnicos necesarios para atender la conexión, como la dirección IP, y aplican sus propias políticas de privacidad. Tus grabaciones no se envían como parte de la descarga. Una vez descargado el modelo, la transcripción puede realizarse sin conexión.</p></section>
          <section><h2>4. Compras y preferencias</h2><p>Apple gestiona las compras de Vozenta Pro y las propinas mediante el App Store y StoreKit, de acuerdo con sus propias condiciones y política de privacidad. Vozenta utiliza la información de transacción que Apple proporciona para reconocer las compras y habilitar Pro; Kontrol App Studio no recibe ni almacena los datos de tu tarjeta. Consultar productos o realizar compras puede requerir conexión.</p><p>La app guarda preferencias y datos de funcionamiento en el Mac, incluido el contador diario de transcripciones del plan gratuito y datos relacionados con el estado de apoyo. El contador se reinicia al comenzar un nuevo día según la hora local.</p></section>
          <section><h2>5. Conservación y eliminación</h2><p>Las transcripciones y los modelos permanecen en el Mac hasta que los elimines. Puedes eliminar una transcripción desde la biblioteca de Vozenta y un modelo desde Ajustes. Eliminar un modelo no borra tus transcripciones.</p><p>Las copias exportadas, los archivos originales y las copias de seguridad que hayas creado se gestionan por separado. Desinstalar la app no garantiza que se borren todos sus datos o copias. Si necesitas ayuda para localizarlos o eliminarlos, contacta con nosotros.</p></section>
          <section><h2>6. Analítica y contacto</h2><p>Según la versión de Vozenta descrita en esta política, Kontrol App Studio no incorpora analítica publicitaria ni crea perfiles de uso, y la app no requiere una cuenta propia. Si nos escribes, utilizaremos tu dirección y el contenido de tu mensaje para responder y gestionar tu solicitud; conserva o elimina tus propios mensajes según prefieras.</p></section>
          <section><h2>7. Tus derechos y opciones</h2><p>Puedes solicitar acceso, rectificación o eliminación de la información que nos hayas enviado, así como ejercer otros derechos aplicables, escribiendo a la dirección de contacto indicada arriba. También puedes presentar una reclamación ante la autoridad de protección de datos competente. Las transcripciones que permanecen solo en tu Mac se gestionan desde tu dispositivo.</p></section>
          <section><h2>8. Cambios en esta política</h2><p>Si el funcionamiento de Vozenta cambia de manera que afecte a la privacidad, actualizaremos esta política y la fecha de revisión.</p></section>
        </div>
        <p className="legal-page-back"><Link className="text-link" href="/vozenta">Volver a Vozenta</Link></p>
      </article>
      <VozentaFooter />
    </main>
  );
}
