import ProductsList from '../../components/ProductsList'
import { useState, useEffect } from 'react'

const Categories = () => {
	
	const [action, setAction] = useState([]);
	const [adventure, setAdventure] = useState([]);
	const [fantasy, setFantasy] = useState([]);
	const [fps, setFps] = useState([]);
	
	useEffect(() => {
		fetch('http://localhost:8080/api/game/category/action')
			.then(res => res.json())
			.then(res => setAction(res));
			
		fetch('http://localhost:8080/api/game/category/adventure')
			.then(res => res.json())
			.then(res => setAdventure(res));
		
		fetch('http://localhost:8080/api/game/category/fantasy')
			.then(res => res.json())
			.then(res => setFantasy(res));

		fetch('http://localhost:8080/api/game/category/fps')
			.then(res => res.json())
			.then(res => setFps(res));
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

