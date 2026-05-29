import Product from '../Product'
import { Container, List, Title } from './styles'

const ProductsList = ({ title, background }) => (
	<Container>
		<div className='container'>
			<Title>{title}</Title>
			<List>
				<Product />
				<Product />
				<Product />
				<Product />
			</List>
		</div>
	</Container>
);

export default ProductsList;