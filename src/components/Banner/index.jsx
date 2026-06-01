import { useState, useEffect } from 'react'
import { Imagem, Titulo, Precos } from './styles'
import Tag from '../Tag'
import bannerImg from '../../assets/images/mfakurian_black.jpg'
import Button from '../Button'

const Banner = () => {
	const [game, setGame] = useState([]);
	
	useEffect(() => {
		
		fetch('http://localhost:8080/api/game/id/10')
			.then(res => res.json())
			.then(res => setGame(res));
	}, []);
	
	const priceFormat = (price) => {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		}).format(price);
	} 
	
	return (
		<Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
			<div className='container'>
				<Tag size='big'>Destaque do dia</Tag>
				<div>
					<img 
						src={game.imageUrl} 
						alt="destaque"/>
					<Titulo>{game.name}</Titulo>
					<Precos>
						Por {priceFormat(game.price)}
					</Precos>
				</div>
				<Button type="link" to={`/product/${game.id}`} title='Clique aqui'>
					Veja a oferta
				</Button>
			</div>
		</Imagem>
	);
}

export default Banner;