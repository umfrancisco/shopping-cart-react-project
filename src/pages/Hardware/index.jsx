import ProductsList from '../../components/ProductsList'
import { useState, useEffect } from 'react'
import { getProductsByCategory } from '../../api/productService'

const Hardware = () => {
	
	const [action, setAction] = useState([]);
	const [adventure, setAdventure] = useState([]);
	const [fantasy, setFantasy] = useState([]);
	const [fps, setFps] = useState([]);
	
	useEffect(() => {
	  getProductsByCategory("action")
	    .then(setAction)
	    .catch(console.error);
	  getProductsByCategory("adventure")
	    .then(setAdventure)
	    .catch(console.error);
	  getProductsByCategory("fantasy")
	    .then(setFantasy)
	    .catch(console.error);
	  getProductsByCategory("fps")
		 .then(setFps)
		 .catch(console.error);
	}, []);
	
	return (
		<>
			<ProductsList title="Computadores" background="gray" products={adventure} type='hardware' />
			<ProductsList title="Periféricos" background="black" products={fantasy} type='hardware' />
		</>
	);
}

export default Hardware;

