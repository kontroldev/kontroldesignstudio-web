'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';

export function VerbaHeader() {
  const [dark, setDark] = useState(false);
  useEffect(() => { const saved = window.localStorage.getItem('kds-theme'); setDark(saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches); }, []);
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); window.localStorage.setItem('kds-theme', dark ? 'dark' : 'light'); }, [dark]);
  return <header className="site-header verba-site-header"><Link className="brand header-brand" href="/" aria-label="Kontrol App Studio, inicio"><span className="brand-symbol" aria-hidden="true"><Image src="/kontrol-isotipo.png" alt="" width={374} height={591} /></span><span>KONTROL</span></Link><nav aria-label="Navegación de Verba"><a href="#funciones">Funciones</a><a href="#capturas">Capturas</a><a href="#privacidad">Privacidad</a></nav><button className="theme-toggle" type="button" onClick={() => setDark((value) => !value)} aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button></header>;
}
