import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import Home from './pages/home/Home.tsx'
import Login from './pages/login/Login.tsx'
import Register from './pages/register/Register.tsx'
import Transition from './pages/transition/Transition.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/go/:destination" element={<Transition />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout><Home /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
