import { Imagem, Titulo, Precos } from '../Banner/styles'
import bannerImg from '../../assets/images/mfakurian_black.jpg'
import { ButtonContainer } from '../Button/styles'
import { useCart } from '../../context/CartContext'

const Hero = ({ game }) => {
	
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
						src={game.imageUrl} 
						alt={game.name}/>
					<Titulo>{game.name}</Titulo>
					<Precos>
						Por {priceFormat(game.price)}
					</Precos>
				</div>
				<p id="message"></p>
				<ButtonContainer onClick={() => addToCart(game)}>
					Adicionar ao carrinho
				</ButtonContainer>
			</div>
		</Imagem>
	);
}

export default Hero;