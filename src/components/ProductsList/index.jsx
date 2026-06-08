import Product from '../Product'
import { Container, List, Title } from './styles'

const ProductsList = ({ title, background, games }) => (
	<Container background={background}>
		<div className='container'>
			<Title>{title}</Title>
			<List>
				{games.map(game => (
					<Product
						key={game.id}
						id={game.id}
						price={game.price}
						name={game.name} 
						description={game.description} 
						imageUrl={game.imageUrl}
						stock={game.stock}
						platforms={game.platforms}
					/>
				))}
			</List>
		</div>
	</Container>
);

export default ProductsList;