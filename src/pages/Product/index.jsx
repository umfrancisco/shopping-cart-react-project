import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Product = () => {
	
	const { id } = useParams();
	
	const [game, setGame] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:8080/api/game/id/${id}`)
			.then(res => res.json())
			.then(res => setGame(res));
	}, []);
	
	return (
		<>	
			<Hero game={game}/>
			<Section title={'Sobre o jogo'} background='black'>
				<p>{game.description}</p>
				<br/>
				<h4>Disponível para</h4>
				<br/>
				<p>
					{game.platforms?.map(
						(platform) => (<span key={platform}>{platform}<br /></span>)
					)}
				</p>
			</Section>
		</>
	);
}

export default Product;