import { useAllPrismicDocumentsByType } from '@prismicio/react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './styles.module.scss'

export default function Posts() {
  const [documents] = useAllPrismicDocumentsByType('publication')

  console.log(documents)

  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {documents ? (
            <>
              {documents.map(document => {
                return(
                  <Link href={`/posts/${document.uid}`} key={document.id}>
                    <a> 
                      <time>{new Date(document.last_publication_date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</time>
                      <strong>{document.data.title[0].text}</strong>
                      <p>{document.data.content.find(content => content.type === 'paragraph')?.text ?? ''}</p>
                    </a>
                  </Link>
                )
              })}
            </>
          ) : (
            <div className={styles.postsNotFound}>
              <h1>Carregando posts...</h1>
            </div>
          )}

        </div>
      </main>
    </>
  );
}