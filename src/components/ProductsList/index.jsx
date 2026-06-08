import Product from '../Product'
import { Container, GamesList, HardwareList, Title } from './styles'

const ProductsList = ({ title, background, products, type }) => {
	
	if (type === 'hardware') {
		return (
			<Container background={background}>
				<div className='container'>
					<Title>{title}</Title>
					<HardwareList>
						{products.map(game => (
							<Product
								key={game.id}
								id={game.id}
								price={game.price}
								name={game.name}
								description={game.description} 
								imageUrl={game.imageUrl}
								stock={game.stock}
								type='hardware'
							/>
						))}
					</HardwareList>
				</div>
			</Container>
		);
	}
	
	return (
		<Container background={background}>
			<div className='container'>
				<Title>{title}</Title>
				<GamesList>
					{products.map(game => (
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
				</GamesList>
			</div>
		</Container>
	);
}

export default ProductsList;