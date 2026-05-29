import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
	<Card>
		<img src="https://raw.githubusercontent.com/umfrancisco/Shopping_Cart_Backend/refs/heads/main/images/gta-iv.png" alt="game" />
		<Titulo>Nome do jogo</Titulo>
		<Tag>Categoria</Tag>
		<Tag>Plataforma</Tag>
		<Descricao>
			Grand Theft Auto IV is a 2008 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the sixth main entry in the Grand Theft Auto series, following 2004's Grand Theft Auto: San Andreas, and the eleventh entry overall.
		</Descricao>
	</Card>
);

export default Product;