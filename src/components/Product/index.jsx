import Tag from '../Tag'
import { Card, Descricao, Titulo, Tags } from './styles'

const Product = ({ name, price, description, platforms, imageUrl }) => {
	
	const getName = (name) => {
		if (name.length > 20) {
			return name.slice(0, 17)+ ' ...';
		}
		return name;
	}
	
	const getDescription = (description) => {
		if (description.length > 95) {
			return description.slice(0, 92) + ' ...';
		}
		return description;
	}
	
	return (
		<Card>
			<img src={imageUrl} alt={name} />
			<Tags>
				{platforms.map(platform => <Tag key={platform}>{platform}</Tag>)}
			</Tags>
			<Titulo>{getName(name)}</Titulo>
			<Tag>{price}</Tag>
			<Descricao>{getDescription(description)}</Descricao>
		</Card>
	);
}

export default Product;