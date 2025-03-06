import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
    // Get the base URL from the Vite environment or default to '/'
    const baseUrl = import.meta.env.BASE_URL || '/';

    return (
        <Routes>
            <Route path={`${baseUrl}`} element={<Home />} />
            <Route path={`${baseUrl}login`} element={<Login />} />
            <Route path={`${baseUrl}dashboard`} element={<Dashboard />} />
        </Routes>
    );
}

export default App;
