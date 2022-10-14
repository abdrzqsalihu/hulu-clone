import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests';


export default function Home({ results }) {
  
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Watch TV shows and movies online. Stream TV episodes of Grey&#x27;s Anatomy, This Is Us, Bob&#x27;s Burgers, Brooklyn Nine-Nine, Empire, SNL, and popular movies on your favorite devices. Start your free trial now. Cancel anytime." />
        <link rel="icon" href="https://secure.webtoolhub.com/static/resources/icons/set111/63f29b37.png" />
      </Head>

    <Header/>
    <Nav/>

    <Results results={results}/>
    </div>
  );
}


export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
    ).then(res => res.json());

    return {
      props: {
        results: request.results,
      }
    }

}

