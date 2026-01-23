import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const ProductCategory = lazy(() => import('./pages/ProductCategory'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const About = lazy(() => import('./pages/About'))
const GlobalMarkets = lazy(() => import('./pages/GlobalMarkets'))
const Team = lazy(() => import('./pages/Team'))
const Certificates = lazy(() => import('./pages/Certificates'))
const Contact = lazy(() => import('./pages/Contact'))

const PageLoader = () => (
  <div className="container-grid py-20">
    <div className="card-surface h-44 animate-pulse bg-white/5" />
  </div>
)

const App = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":categorySlug" element={<ProductCategory />} />
          <Route path=":categorySlug/:productSlug" element={<ProductDetail />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="global-markets" element={<GlobalMarkets />} />
        <Route path="partnerships" element={<Navigate to="/" replace />} />
        <Route path="team" element={<Team />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </Suspense>
)

export default App
