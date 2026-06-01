import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useState, useEffect } from 'react'

const Home = () => {
	
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch('http://localhost:8080/api/game')
			.then(res => res.json())
			.then(res => setData(res));
	}, []);
	
	return (
		<>
			<Banner />
			<ProductsList title="Em destaque" background="black" games={data}/>
		</>
	);
}

export default Home;

