import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedprogrammers.com'), title: { default: 'Outsourced Programmers | Offshore outsourcing guides', template: '%s | Outsourced Programmers' }, description: 'our staffing team-style guides for outsourced programmers: services, onboarding, role scope, and provider questions.', openGraph: { title: 'Outsourced Programmers', description: 'Practical outsourcing guides for business teams.', url: 'https://outsourcedprogrammers.com', siteName: 'Outsourced Programmers', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
