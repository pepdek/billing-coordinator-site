import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ConnectPage from './pages/ConnectPage'
import OAuthPage from './pages/OAuthPage'
import ConfirmedPage from './pages/ConfirmedPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/oauth" element={<OAuthPage />} />
        <Route path="/confirmed" element={<ConfirmedPage />} />
      </Routes>
    </BrowserRouter>
  )
}
