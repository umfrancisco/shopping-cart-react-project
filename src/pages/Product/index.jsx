import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Product = () => {
	
	const { id } = useParams();
	
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:8080/api/game/id/${id}`)
			.then(res => res.json())
			.then(res => setData(res));
	}, []);
	
	return (
		<>	
			<Hero />
			<Section title='Sobre o jogo' background='black'>
				<p>
					{data.description}
				</p>
			</Section>
			<Gallery />
		</>
	);
}

export default Product;