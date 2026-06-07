import Tag from '../Tag'
import { Card, Descricao, Titulo, Tags } from './styles'

const Product = ({ id, name, price, shortDescription, longDescription, platforms, imageUrl, stock, game }) => {
	
	const getName = (name) => {
		if (name.length > 20) {
			return name.slice(0, 17)+ ' ...';
		}
		return name;
	}
	
	const getDescription = (shortDescription) => {
		if (shortDescription.length > 95) {
			return shortDescription.slice(0, 92) + ' ...';
		}
		return shortDescription;
	}
	
	const priceFormat = (price) => {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		}).format(price);
	}
	
	if (stock === 0) {
		return (
			<Card>
				<img style={{filter: "grayscale(100%)"}} src={imageUrl} alt={name} />
				<Titulo>{getName(name)}</Titulo>
				<Descricao>Produto indisponível no momento...</Descricao>
			</Card>
		)
	}
	
	return (
		<Card to={`/product/${id}`}>
			<img src={imageUrl} alt={name} />
			<Tags>
				{platforms.map(platform => <Tag key={platform}>{platform}</Tag>)}
			</Tags>
			<Titulo>{getName(name)}</Titulo>
			<Tag>{priceFormat(price)}</Tag>
			<Descricao>{getDescription(shortDescription)}</Descricao>
		</Card>
	);
}

export default Product;