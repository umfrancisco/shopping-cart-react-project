import Section from '../../components/Section'
import { Items, Item, Action, Modal, ModalContent } from './styles'
import { useState } from 'react'

const mock = [
	{
		id: 1,
		url: "https://i.ytimg.com/vi/N0axELt9K5c/maxresdefault.jpg"
	},
	{
		id: 2,
		url: "https://www.gamereactor.pt/media/grtv/39/193994_w926.jpg"
	},
	{
		id: 3,
		url: "https://gaminghistory101.com/wp-content/uploads/2017/01/sleeping_dogs_definitive_edition_3.jpg"
	},
	{
		id: 4,
		url: "https://m.media-amazon.com/images/I/81xUpxXMcuL._AC_UF1000,1000_QL80_.jpg"
	}
]

const Gallery = () => {
	const [modalEstaAberto, setModalEstaAberto] = useState(false);
	const [modalUrl, setModalUrl] = useState(null);
	
	return (
		<>
		<Section title='Galeria' background='black'>
			<Items>
				{mock.map(media => (
					<Item key={media.id} onClick={() => {
						setModalEstaAberto(true);
						setModalUrl(media.url);
					}}>
						<img src={media.url} alt='gameplay'/>
						<Action><p>Ver imagem</p></Action>
					</Item>				
				))}
			</Items>
		</Section>
		<Modal className={modalEstaAberto ? 'visible' : ''}>
			<ModalContent className='container'>
				<header>
					<h4>Imagem do jogo</h4>
					<p onClick={() => setModalEstaAberto(false)}>Fechar</p>
				</header>
				<img src={modalUrl} alt='' />
			</ModalContent>
			<div className='overlay'></div>
		</Modal>
		</>
	);
}

export default Gallery;

