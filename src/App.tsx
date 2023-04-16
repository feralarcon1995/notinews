import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles"  element={<Articles/>} />
        <Route path="/articles/:articleID" element={<ArticleDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
