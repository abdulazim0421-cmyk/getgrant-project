import { redirect } from 'next/navigation';

export default function LangHome({ params }: { params: { lang: string } }) {
    redirect(`/${params.lang}/Home`);
}