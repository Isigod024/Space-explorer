import React from 'react';
import { useRouter } from 'next/router';
import ArticleShow from '@/components/ArticleShow';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ArticlePage() {
    const router = useRouter();
    const { id } = router.query;

    if (!id) return null;

    return <html lang="en">
      <body>
        <Header />
        <main >
            <ArticleShow articleId={id} />
        </main>
        <Footer />
      </body>
    </html>
     ;
}
