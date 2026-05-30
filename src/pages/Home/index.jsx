import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

const Home = () => (
	<>
		<Banner />
		<ProductsList title="Promoções" background="black" />		
		<ProductsList title="Em breve" background="gray" />	
	</>
);

export default Home;