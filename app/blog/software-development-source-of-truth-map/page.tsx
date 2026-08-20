import type { Metadata } from 'next';
import { getAug19Metadata, renderAug19Article } from '../../aug19-content';
export const metadata: Metadata = getAug19Metadata('blog','software-development-source-of-truth-map');
export default function Page(){return renderAug19Article('blog','software-development-source-of-truth-map')}
