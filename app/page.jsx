// app/page.jsx
'use client';
import Acceuil from '@/components/Acceuil';
import Contact from '@/components/Contact';
import LanguageSelector from '@/components/LanguageSelector';

export default function Page() {
    return (
        <>
            <LanguageSelector />
            <Acceuil />
            <Contact />
        </>
    );
}
