import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'

const Header = () => (
	<HeaderBar>
		<div>
			<img src={logo} alt="logo" />
			<nav>
				<Links>
					<LinkItem>
						<Link to="/">Home</Link>
					</LinkItem>
					<LinkItem>
						<Link to="/categories">Games</Link>
					</LinkItem>
					<LinkItem>
						<Link to="/hardware">Hardware</Link>
					</LinkItem>
				</Links>
			</nav>
		</div>
		<LinkCart>
			<Link to="/cart">
				<img src={carrinho} alt="carrinho icone" />
			</Link>
		</LinkCart>
	</HeaderBar>
);

export default Header