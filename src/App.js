import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route
} from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import ProductDetail from './pages/ProductDetail';

// const routerDefinitions =
//   createRoutesFromElements(
//     <Route>
//       <Route path='/' element={<Home />} />
//       <Route path='/products' element={<Products />} />
//     </Route>
//   );

// const router = createBrowserRouter(routerDefinitions);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:productId', element: <ProductDetail /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;