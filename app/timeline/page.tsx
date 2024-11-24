import TimelineClient from './TimelineClient';

export function generateStaticParams() {
  const locales = ['en', 'fr']; // Replace with your locales
  return locales.map((locale) => ({ locale }));
}

export default function Page() {
  return <TimelineClient />;
}