import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Products } from '../pages/Products';
import { NotFound } from 'pages/NotFound';
import { ProductDetails } from '../pages/ProductDetails';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
