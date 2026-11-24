'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Moon, Sun, X } from 'lucide-react';

const links = [['Funciones', '/vozenta#funciones'], ['Capturas', '/vozenta#capturas'], ['Planes', '/vozenta#planes'], ['Privacidad', '/vozenta/privacy']];

export function VozentaHeader() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const saved = window.localStorage.getItem('kds-theme'); const initial = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; setDark(initial); document.documentElement.classList.toggle('dark', initial); }, []);
  function toggleTheme() { const next = !dark; setDark(next); document.documentElement.classList.toggle('dark', next); window.localStorage.setItem('kds-theme', next ? 'dark' : 'light'); }
  return <><a className="vozenta-skip" href="#contenido">Saltar al contenido</a><header className="site-header vozenta-site-header"><Link className="brand header-brand" href="/" aria-label="Kontrol App Studio, inicio"><span className="brand-symbol" aria-hidden="true"><Image src="/kontrol-isotipo.png" alt="" width={374} height={591} /></span><span>KONTROL</span></Link><nav id="vozenta-navigation" className={menuOpen ? 'vozenta-nav-open' : ''} aria-label="Navegación de Vozenta">{links.map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav><div className="vozenta-header-actions"><button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}>{dark ? <Sun size={19} /> : <Moon size={19} />}</button><button className="vozenta-menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="vozenta-navigation" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button></div></header></>;
}
