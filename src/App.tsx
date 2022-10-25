import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginLayout, MainLayout } from 'layouts';
import LoginPage from 'pages/auth/Login/LoginPage';
import Dashboard from 'pages/Dashboard/Dashboard';

import 'antd/dist/antd.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route element={<LoginLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
