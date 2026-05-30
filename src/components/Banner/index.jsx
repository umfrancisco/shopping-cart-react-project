import { Imagem, Titulo, Precos } from './styles'
import Tag from '../Tag'
import bannerImg from '../../assets/images/mfakurian_black.jpg'
import Button from '../Button'

const Banner = () => (
	<Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
		<div className='container'>
			<Tag size='big'>Destaque do dia</Tag>
			<div>
				<img 
					src="https://raw.githubusercontent.com/umfrancisco/Shopping_Cart_Backend/refs/heads/main/images/sleeping-dogs.png" 
					alt="destaque"/>
				<Titulo>Sleeping Dogs</Titulo>
				<Precos>
					Por R$ 99,90
				</Precos>
			</div>
			<Button type="link" to='/produto' title='Clique aqui'>
				Veja a oferta
			</Button>
		</div>
	</Imagem>
);

export default Banner;