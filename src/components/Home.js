import Nav from './Nav'
import Header from './Header'
import Row from './Row'

export default function Home() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      
      {/* Header */}
      <Header />
      
      {/* Row */}
      <Row title='Netflix Originals' movieType='netflix-originals' />
      <Row title='Trending Now' movieType='trending-now' />
      <Row title='Top Rated' movieType='top-rated' />
      <Row title='Action Movies' movieType='action-movies' />
      <Row title='Horror Movies' movieType='horror-movies' />
      <Row title='Romance Movies' movieType='romance-movies' />
      <Row title='Documentaries Movies' movieType='documentaries-movies' />
    </div>
  )
}