import { Container, Link, Links, FooterSection, SectionTitle } from './styles'

const Footer = () => (
	<Container>
		<div className='container'>
			<FooterSection>
				<SectionTitle>Categorias</SectionTitle>
				<Links>
					<li>
						<Link>Ação</Link>
					</li>
					<li>
						<Link>Aventura</Link>
					</li>
					<li>
						<Link>Fantasia</Link>
					</li>
					<li>
						<Link>FPS</Link>
					</li>
				</Links>
			</FooterSection>
			<p>{new Date().getFullYear()} - &copy; EPLAY Todos os direitos reservados</p>
		</div>
	</Container>
);

export default Footer;