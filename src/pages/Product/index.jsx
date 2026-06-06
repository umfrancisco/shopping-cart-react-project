import Hero from '../../components/Hero'
import Section from '../../components/Section'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProductById } from '../../api/productService'

const Product = () => {
	
	const { id } = useParams();
	
	const [product, setProduct] = useState([]);
	useEffect(() => {
	  getProductById(id)
	    .then(setProduct)
	    .catch(console.error);
	}, []);
	
	return (
		<>	
			<Hero game={product}/>
			<Section title={'Sobre o jogo'} background='black'>
				<p>{product.longDescription}</p>
				<br/>
				<h4>Disponível para</h4>
				<br/>
				<p>
					{product.platforms?.map(
						(platform) => (<span key={platform}>{platform}<br /></span>)
					)}
				</p>
			</Section>
		</>
	);
}

export default Product;