import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

const Product = () => {
	
	const { id } = useParams();
	
	return (
		<>	
			<Hero />
			<Section title='Sobre o jogo' background='black'>
				<p>
					Sleeping Dogs is a 2012 action-adventure game developed by United 
					Front Games and published by Square Enix. The game was released for PlayStation 3, 
					Windows, and Xbox 360 in August 2012. Set in contemporary Hong Kong, the story follows Wei Shen, 
					a Hong Kong-American police officer and martial artist who goes undercover and infiltrates the 
					Sun On Yee Triad.
				</p>
			</Section>
			<Section title='Informações' background='black'>
				<p>
					Plataformas: PC, Xbox 360, PS3 <br/>
					Desenvolvedor: United Front Games
				</p>
			</Section>
			<Section title='Galeria' background='black'>
				<div>
					fotos
				</div>
			</Section>
		</>
	);
}

export default Product;