import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";

import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";
import UsersPage from "./pages/Users/UsersPage";
import EditUser from "./pages/Users/EditUser/EditUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
