import ProductsList from '../../components/ProductsList'
import { useState, useEffect } from 'react'
import { getProductsByCategory } from '../../api/productService'

const Hardware = () => {
	
	const [hardwares, setHardwares] = useState([]);
	
	useEffect(() => {
	  getProductsByCategory("notebook")
	    .then(setHardwares)
	    .catch(console.error);
	}, []);
	
	return (
		<>
			<ProductsList title="Computadores" background="gray" products={hardwares} type='hardware' />
		</>
	);
}

export default Hardware;

