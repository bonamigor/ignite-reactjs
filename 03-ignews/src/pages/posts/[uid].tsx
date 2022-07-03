import { usePrismicDocumentByUID, PrismicRichText } from '@prismicio/react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Head from "next/head"
import { useRouter } from "next/router"

import styles from './post.module.scss'

export default function Post() {
  const router = useRouter()
  const { uid } = router.query
  const [document] = usePrismicDocumentByUID('publication', String(uid))
  
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
              <div className={styles.postContent}>
                <PrismicRichText field={document.data.content}/>
              </div>
            </>
          )}
        </article>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req}) => {
  const session = await getSession({ req })

  if (!session?.activeSubscription) { 
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}