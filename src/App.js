import './App.css';
import { RouterProvider } from 'react-router-dom';
import routerConfig from './router/routerConfig';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
}

export default App;
