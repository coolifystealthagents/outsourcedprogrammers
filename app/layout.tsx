import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedprogrammers.com'), title: { default: 'Outsourced Programmers | Developer staffing guides', template: '%s | Outsourced Programmers' }, description: 'Plan an outsourced developer role around real tickets, code review, safe repository access, and clear release ownership.', openGraph: { title: 'Outsourced Programmers', description: 'Practical guides for scoping, onboarding, and reviewing outsourced programming work.', url: 'https://outsourcedprogrammers.com', siteName: 'Outsourced Programmers', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
