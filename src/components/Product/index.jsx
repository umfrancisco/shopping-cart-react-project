import Tag from '../Tag'
import { Card, Descricao, Titulo, Tags, Link } from './styles'
import Button from '../Button'

const Product = ({ id, name, price, description, platforms, imageUrl }) => {
	
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
	
	const priceFormat = (price) => {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		}).format(price);
	} 
	
	return (
		<Card>
			<img src={imageUrl} alt={name} />
			<Tags>
				{platforms.map(platform => <Tag key={platform}>{platform}</Tag>)}
			</Tags>
			<Titulo>{getName(name)}</Titulo>
			<Tag>{priceFormat(price)}</Tag>
			<Descricao>{getDescription(description)}</Descricao>
			<Link href={`/product/${id}`}>Mais detalhes</Link>
		</Card>
	);
}

export default Product;