'use client';
import { ReviewTape } from './components';
export function TestimonialsRail({ contact = false }: { contact?: boolean }) { return <div className={contact ? 'contact-review-wrap' : 'booking-review-wrap'}><ReviewTape /></div>; }
