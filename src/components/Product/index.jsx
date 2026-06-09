import Tag from '../Tag'
import { Card, Descricao, Titulo, Tags } from './styles'

const Product = ({ id, name, price, description, longDescription, platforms, imageUrl, stock, type }) => {
	
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
	
	if (stock === 0) {
		return (
			<Card>
				<img style={{filter: "grayscale(100%)"}} src={imageUrl} alt={name} />
				<Titulo>{getName(name)}</Titulo>
				<Descricao>Produto indisponível no momento</Descricao>
			</Card>
		)
	}
	
	if (type === 'hardware') {
		return (
			<Card to={`/product/${id}`}>
				<img src={imageUrl} alt={name} />
				<Titulo>{getName(name)}</Titulo>
				<Tag>{priceFormat(price)}</Tag>
				<Descricao>{getDescription(description)}</Descricao>
			</Card>
		);
	}
	
	return (
		<Card to={`/product/${id}`}>
			<img src={imageUrl} alt={name} />
			<Tags>
				{platforms.map(platform => <Tag key={platform}>{platform}</Tag>)}
			</Tags>
			<Titulo>{getName(name)}</Titulo>
			<Tag>{priceFormat(price)}</Tag>
			<Descricao>{getDescription(description)}</Descricao>
		</Card>
	);
}

export default Product;