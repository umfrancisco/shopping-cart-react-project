import ProductsList from '../../components/ProductsList'
import { useState, useEffect } from 'react'
import { getProductsByCategory } from '../../api/productService'

const Categories = () => {
	
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
			<ProductsList title="Ação" background="gray" games={action}/>		
			<ProductsList title="Aventura" background="black" games={adventure}/>
			<ProductsList title="Fantasia" background="gray" games={fantasy}/>		
			<ProductsList title="FPS" background="black" games={fps}/>
		</>
	);
}

export default Categories;

