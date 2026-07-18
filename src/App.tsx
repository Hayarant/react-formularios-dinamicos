import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './routes/ProtectedRoute'

import Login from './pages/login/Login'
import HomePage from './pages/home/Index'
import UsersPage from './pages/users/Index'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login'element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/users' element={<UsersPage />} />
        </Route>        
      </Routes>
    </div>
  )
}

export default App
