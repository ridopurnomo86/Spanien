import React, {
  Suspense,
} from 'react'
import './App.css'
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom'
import {
  lazy,
} from '@loadable/component'
import PulseLoading from './components/atoms/PulseLoading'
import Navbar from './containers/organism/Navbar'
import Footer from './containers/organism/Footer'

const LandingPage = lazy(() => import('./containers/pages/LandingPage'))
const AboutPage = lazy(() => import('./containers/pages/AboutPage'))
const ProductPage = lazy(() => import('./containers/pages/ProductPage'))

function App() {
  return (
    <Router>
      <div className="App font-body overflow-hidden bg-blue-50">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Suspense fallback={<PulseLoading />}>
              <LandingPage />
            </Suspense>
          </Route>
          <Route path="/about" exact>
            <Suspense fallback={<PulseLoading />}>
              <AboutPage />
            </Suspense>
          </Route>
          <Route path="/product" exact>
            <Suspense fallback={<PulseLoading />}>
              <ProductPage />
            </Suspense>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
