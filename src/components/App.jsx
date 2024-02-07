import './../assets/css/main.css'
import Data from './Data'
import Features from './Features'
import Header from './Header'
import TopBaner from './TopBaner'
import RoadMap from './RoadMap'
import Footer from './Footer'
import UpArrow from './upArrow'
import Contract from './Contract'

const App = () => {
  return (
    <>
    <div className='main-container'>
      <Header />
      <TopBaner />
      <Contract/>
      <Features />
      <RoadMap />
      <Data />
    </div>
    <div className='bottom-page'>
      <Footer />
      <UpArrow/>
    </div>
    </>
  )
}

export default App
