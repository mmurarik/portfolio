"use client";
import { useEffect } from 'react';
export default function Motion() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--reading-progress', String(range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0));
      frame = 0;
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { if (!reduced.matches) entry.target.classList.add('arrived'); observer?.unobserve(entry.target); } });
    }, { threshold: 0.08 }) : null;
    document.querySelectorAll('.reveal').forEach(element => observer?.observe(element));
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', scroll);
    update();
    return () => { observer?.disconnect(); window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll); if(frame) cancelAnimationFrame(frame); document.documentElement.style.removeProperty('--reading-progress'); };
  }, []);
  return <div className="reading-progress" aria-hidden="true"/>;
}
