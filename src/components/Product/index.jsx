import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos } from './styles'

const Product = ({ title, category, system, description, infos, image }) => (
	<Card>
		<img src={image} alt={title} />
		<Infos>
			{infos.map(info => <Tag key={info}>{info}</Tag>)}
		</Infos>
		<Titulo>{title}</Titulo>
		<Tag>{category}</Tag>
		<Tag>{system}</Tag>
		<Descricao>{description}</Descricao>
	</Card>
);

export default Product;