import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Hardware from './pages/Hardware'
import Product from './pages/Product'
import Cart from './pages/Cart'

const Rotas = () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/categories' element={<Categories />} />
		<Route path='/hardware' element={<Hardware />} />
		<Route path='/product/:id' element={<Product />} />
		<Route path='/cart' element={<Cart />} />
	</Routes>
);

export default Rotas;