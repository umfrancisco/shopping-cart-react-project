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
						category={game.category} 
						system={game.system} 
						title={game.title} 
						description={game.description} 
						image={game.image} 
						infos={game.infos}
					/>
				))}
			</List>
		</div>
	</Container>
);

export default ProductsList;