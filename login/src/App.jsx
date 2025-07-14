import { useState } from 'react'
import './App.css';
import Loginform from './pages/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
       <Route path="/" element={<Loginform />} />
      
    </Routes>
      
    </>
  )
}

export default App