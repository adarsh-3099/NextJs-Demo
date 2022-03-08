import Head from 'next/head'

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div>
     <Head>
        <title>Web Dev News</title>
        <meta name='Keywords' content='web dev, programming' />
      </Head>

      <h1>Welcome to Next.</h1>

      {
        articles.map((article)=>(
          <h1>{article.title}</h1>
        ))
      }
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