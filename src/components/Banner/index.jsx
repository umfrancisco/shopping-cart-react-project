import { Imagem, Titulo, Precos } from './styles'
import Tag from '../Tag'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Button from '../Button'

const Banner = () => (
	<Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
		<div className='container'>
			<Tag size='big'>Destaque do dia</Tag>
			<div>
				<Titulo>Titulo do Game</Titulo>
				<Precos>
					De <span>R$ 250,00</span> <br />
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