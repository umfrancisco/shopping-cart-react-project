import { Container, Title } from './styles'

const Section = ({ title, background, children }) => (
	<Container background={background}>
		<div className='container'>
			<Title>{title}</Title>
			{children}
		</div>
	</Container>
);

export default Section;