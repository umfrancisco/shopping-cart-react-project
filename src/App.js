import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Header from './components/Header'
import Footer from './components/Footer'
import Rotas from './routes'
import { CartProvider } from './context/CartContext'

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<GlobalCss />
				<div className='container'>
					<Header />
				</div>
				<Rotas />
				<Footer />
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
