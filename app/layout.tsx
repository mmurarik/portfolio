import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { icons: { icon: `${process.env.PAGES_BASE_PATH || ''}/favicon.svg` }, title: 'Miranda Murarik | AI automation engineer', description: 'I build AI and data systems and evaluate how well they work. Explore my work in AI evaluation, survey automation, and data engineering.' };
export default function RootLayout({children}: {children: React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
