// pages/index.jsx
import React from 'react';
import { useRouter } from 'next/router';
import ArticleShow from '@/components/ArticleShow';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';

export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;
  const { t } = useTranslation('common'); // Utilisez le namespace 'common'

  if (!id) return null;

  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <h1>{t('welcome_message')}</h1>
          <p>{t('intro_text')}</p>
          <h2>{t('categories')}</h2>
          <ArticleShow articleId={id} />
        </main>
        <Footer />
      </body>
    </html>
  );
}
