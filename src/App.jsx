import './App.css'
import ClientLogo from './components/clientLogo/ClientLogo'
import Delivery from './components/delivery/Delivery'
import Header from './components/header/Header'
import Shop from './components/shop&&coll/Shop'
import Subscribe from './components/subscribe/Subscribe'

function App() {

  return (
    <div className="container">
     <Header/>
     <ClientLogo/>
     <Shop/>
     <Delivery/>
     <Subscribe/>
    </div>
  )
}

export default App
