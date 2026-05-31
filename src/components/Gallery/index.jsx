import Section from '../../components/Section'
import { Items, Item } from './styles'

const Gallery = () => (
	<Section title='Galeria' background='black'>
		<Items>
			<Item>
				<img src='https://i.ytimg.com/vi/N0axELt9K5c/maxresdefault.jpg' alt='gameplay' />
			</Item>
			<Item>
				<img src='https://www.gamereactor.pt/media/grtv/39/193994_w926.jpg' alt='gameplay' />
			</Item>
			<Item>
				<img src='https://gaminghistory101.com/wp-content/uploads/2017/01/sleeping_dogs_definitive_edition_3.jpg' alt='gameplay' />
			</Item>
			<Item>
				<img src='https://m.media-amazon.com/images/I/81xUpxXMcuL._AC_UF1000,1000_QL80_.jpg' alt='gameplay' />
			</Item>
		</Items>
	</Section>
);

export default Gallery;