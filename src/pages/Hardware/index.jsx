import ProductsList from '../../components/ProductsList'
import { useState, useEffect } from 'react'
import { getHardwares } from '../../api/productService'

const Hardware = () => {
	
	const [hardwares, setHardwares] = useState([]);
	
	useEffect(() => {
	  getHardwares()
	    .then(setHardwares)
	    .catch(console.error);
	}, []);
	
	return (
		<>
			<ProductsList title="Computadores" background="gray" products={hardwares} type='hardware' />
			<ProductsList title="Periféricos" background="black" products={hardwares} type='hardware' />
		</>
	);
}

export default Hardware;

