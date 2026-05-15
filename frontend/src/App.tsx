import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import Home from './pages/home/Home.tsx'
import Login from './pages/login/Login.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout><Home /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
