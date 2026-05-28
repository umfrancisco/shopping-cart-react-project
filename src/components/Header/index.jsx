import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
	<HeaderBar>
		<div>
			<img src={logo} alt="logo" />
			<nav>
				<Links>
					<LinkItem>
						<a href="google.com">Categorias</a>
					</LinkItem>
					<LinkItem>
						<a href="google.com">Novidades</a>
					</LinkItem>
					<LinkItem>
						<a href="google.com">Novidades</a>
					</LinkItem>
				</Links>
			</nav>
		</div>
		<LinkCart href="google.com">
			0 - produto(s)
			<img src={carrinho} alt="carrinho icone" />
		</LinkCart>
	</HeaderBar>
);

export default Header