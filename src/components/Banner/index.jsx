import { Imagem, Titulo, Precos } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => (
	<Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
		<div className='container'>
			<Titulo>Titulo do Game</Titulo>
			<Precos>
				De <span>R$ 250,00</span> <br />
				Por R$ 99,90
			</Precos>
		</div>
	</Imagem>
);

export default Banner;