import { Imagem, Titulo, Precos } from '../Banner/styles'
import bannerImg from '../../assets/images/mfakurian_black.jpg'
import Button from '../Button'

const Hero = ({ game }) => {
	
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
				<Button type="link" to='/aasd' title='Clique aqui'>
					Adicionar ao carrinho
				</Button>
			</div>
		</Imagem>
	);
}

export default Hero;