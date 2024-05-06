import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MapPage from './pages/MapPage';

const router = createBrowserRouter([
  { path: '/', element: <LoginPage /> },
  { path: '/map', element: <MapPage /> },
]);

export default router;
