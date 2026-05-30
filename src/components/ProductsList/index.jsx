import Product from '../Product'
import { Container, List, Title } from './styles'

const ProductsList = ({ title, background }) => (
	<Container background={background}>
		<div className='container'>
			<Title>{title}</Title>
			<List>
				<Product category='Ação' system='Xbox 360' title='Batman Arkham Asylum' description='Game Description' image='https://raw.githubusercontent.com/umfrancisco/Shopping_Cart_Backend/refs/heads/main/images/batman.png' infos={['-10%', 'R$ 150.00']} />
				<Product category='Ação' system='Xbox 360' title='Grand Theft Auto IV' description='Game Description' image='https://raw.githubusercontent.com/umfrancisco/Shopping_Cart_Backend/refs/heads/main/images/gta-iv.png' infos={['-10%', 'R$ 150.00']} />
				<Product category='Ação' system='Xbox 360' title='Red Dead Redemption' description='Game Description' image='https://raw.githubusercontent.com/umfrancisco/Shopping_Cart_Backend/refs/heads/main/images/red-dead-redemption.png' infos={['-10%', 'R$ 150.00']} />
				<Product category='Ação' system='Xbox 360' title='Skyrim' description='Game Description' image='https://raw.githubusercontent.com/umfrancisco/Shopping_Cart_Backend/refs/heads/main/images/skyrim.png' infos={['-10%', 'R$ 150.00']} />
			</List>
		</div>
	</Container>
);

export default ProductsList;