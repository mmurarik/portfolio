import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { icons: { icon: `${process.env.PAGES_BASE_PATH || ''}/favicon.svg` }, title: 'Miranda Murarik | AI systems, evaluation, and research', description: 'Projects, skills, and experience across LLM evaluation, automation, data and analytics, and research.' };
export default function RootLayout({children}: {children: React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
