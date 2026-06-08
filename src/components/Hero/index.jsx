import { Imagem, Titulo, Precos } from '../Banner/styles'
import bannerImg from '../../assets/images/mfakurian_black.jpg'
import { ButtonContainer } from '../Button/styles'
import { useCart } from '../../context/CartContext'

const Hero = ({ product }) => {
	
	const { addToCart } = useCart();
	
	const priceFormat = (price) => {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		}).format(price);
	}
	
	return (
		<Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
			<div className='container'>
				<div>
					<img 
						src={product.imageUrl} 
						alt={product.name}/>
					<Titulo>{product.name}</Titulo>
					<Precos>
						Por {priceFormat(product.price)}
					</Precos>
				</div>
				<p id="message"></p>
				<ButtonContainer onClick={() => addToCart(product)}>
					Adicionar ao carrinho
				</ButtonContainer>
			</div>
		</Imagem>
	);
}

export default Hero;