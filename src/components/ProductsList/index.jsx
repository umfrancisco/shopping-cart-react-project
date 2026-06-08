import Product from '../Product'
import { Container, GamesList, HardwareList, Title } from './styles'

const ProductsList = ({ title, background, products, type }) => {
	
	if (type === 'hardware') {
		return (
			<Container background={background}>
				<div className='container'>
					<Title>{title}</Title>
					<HardwareList>
						{products.map(product => (
							<Product
								key={product.id}
								id={product.id}
								price={product.price}
								name={product.name}
								description={product.description} 
								imageUrl={product.imageUrl}
								stock={product.stock}
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
					{products.map(product => (
						<Product
							key={product.id}
							id={product.id}
							price={product.price}
							name={product.name} 
							description={product.description} 
							imageUrl={product.imageUrl}
							stock={product.stock}
							platforms={product.platforms}
						/>
					))}
				</GamesList>
			</div>
		</Container>
	);
}

export default ProductsList;