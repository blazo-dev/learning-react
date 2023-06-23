import { Suspense, lazy } from 'react'
import './App.scss'
import { Route, Router } from './router'
import { Loader } from './components'

const LazyHomePage = lazy(() => import('./pages/home/HomePage'))
const LazyAboutPage = lazy(() => import('./pages/about/AboutPage'))
const LazyPage404 = lazy(() => import('./pages/page404/Page404'))

const routes = [
  {
    path: '/search/:query',
    Component: ({ routeParams }) => <h1>Search: {routeParams.query}</h1>
  }
]

function App () {
  return (
    <main className='main'>
      <Suspense fallback={<Loader />}>
        <Router routes={routes} defaultComponent={LazyPage404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
