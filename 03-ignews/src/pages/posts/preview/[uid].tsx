import { usePrismicDocumentByUID, PrismicRichText } from '@prismicio/react';
import { GetStaticProps } from 'next';
import { getSession, useSession } from 'next-auth/react';
import Head from "next/head"
import { useRouter } from "next/router"

import styles from '../post.module.scss'
import { ActiveLink } from '../../../components/ActiveLink/index';
import Link from 'next/link';
import { useEffect } from 'react';

export default function PostPreview() {
  const { data: session } = useSession()
  const router = useRouter()
  const { uid } = router.query
  const [document] = usePrismicDocumentByUID('publication', String(uid))

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${document.uid}`)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])
  
  return (
    <>
      <Head>
        {document && <title>{ document.data.title[0].text } | Ignews </title>}
      </Head>
      <main className={styles.container}>
        <article className={styles.post}>
          {document && (
            <>
              <h1>{document.data.title[0].text}</h1>
              <time>{ new Date(document.last_publication_date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric'}) }</time>
              <div className={`${styles.postContent} ${styles.previewContent}`}>
                <PrismicRichText field={document.data.content.splice(-7, 5)}/>
              </div>

              <div className={styles.continueReading}>
                Wanna continue reading?
                <Link href="/" > 
                  <a href=''>Subscribe now 🤗</a>
                </Link>
              </div>
            </>
          )}
        </article>
      </main>
    </>
  )
}