import Head from 'next/head'
import Articles from '../components/Articles'

export default function Home({ articles }) {
  // console.log(articles)
  return (
    <div>
     <Head>
        <title>Web Dev News</title>
        <meta name='Keywords' content='web dev, programming' />
      </Head>

      <Articles articles={ articles } />

    </div>
  )
}

export const getStaticProps = async () =>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props : {
      articles
    }
  }

}