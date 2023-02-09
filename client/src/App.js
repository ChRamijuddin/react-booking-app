
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import List from './pages/List';
import Hotel from './pages/Hotel';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />
  },
  {
    path: "/hotels",
    element:<List />
  },
  {
    path: "/hotels/:id",
    element:<Hotel />
  },
  {
    path: "/login",
    element:<Login />
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
