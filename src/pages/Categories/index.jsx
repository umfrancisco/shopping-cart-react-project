import ProductsList from '../../components/ProductsList'

const data = [
	{
		id: 1,
		category: "action",
		system: "Windows",
		title: "GTA IV",
		description: "Game Desc",
		image: "https://raw.githubusercontent.com/umfrancisco/shopping-cart-backend/refs/heads/main/images/gta-iv.png",
		infos: ["-10%", "R$ 150.00"]
	},
	{
		id: 2,
		category: "adventure",
		system: "Xbox 360",
		title: "Skyrim",
		description: "Game Desc",
		image: "https://raw.githubusercontent.com/umfrancisco/shopping-cart-backend/refs/heads/main/images/skyrim.png",
		infos: ["-10%", "R$ 150.00"]
	},
	{
		id: 3,
		category: "action",
		system: "Windows",
		title: "Batman Arkham Asylum",
		description: "Game Desc",
		image: "https://raw.githubusercontent.com/umfrancisco/shopping-cart-backend/refs/heads/main/images/batman.png",
		infos: ["-10%", "R$ 150.00"]
	},
	{
		id: 4,
		category: "adventure",
		system: "Xbox 360",
		title: "Red Dead Redemption",
		description: "Game Desc",
		image: "https://raw.githubusercontent.com/umfrancisco/shopping-cart-backend/refs/heads/main/images/red-dead-redemption.png",
		infos: ["-10%", "R$ 150.00"]
	}
	
]

const Categories = () => (
	<>
		<ProductsList title="Ação" background="gray" games={data}/>		
		<ProductsList title="Aventura" background="black" games={data}/>
		<ProductsList title="Fantasia" background="gray" games={data}/>		
		<ProductsList title="FPS" background="black" games={data}/>	
	</>
);

export default Categories;

