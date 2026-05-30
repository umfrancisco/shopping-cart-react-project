import { Imagem, Titulo, Precos } from '../Banner/styles'
import bannerImg from '../../assets/images/mfakurian_black.jpg'
import Button from '../Button'

const Hero = () => (
	<Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
		<div className='container'>
			<div>
				<img 
					src="https://raw.githubusercontent.com/umfrancisco/Shopping_Cart_Backend/refs/heads/main/images/sleeping-dogs.png" 
					alt="destaque"/>
				<Titulo>Sleeping Dogs</Titulo>
				<Precos>
					Por R$ 99,90
				</Precos>
			</div>
			<Button type="link" to='/aasd' title='Clique aqui'>
				Adicionar ao carrinho
			</Button>
		</div>
	</Imagem>
);

export default Hero;