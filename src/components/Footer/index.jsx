import { Container, Link, Links, FooterSection, SectionTitle } from './styles'

const Footer = () => (
	<Container>
		<div className='container'>
			<FooterSection>
				<SectionTitle>Games</SectionTitle>
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
				<SectionTitle>Hardware</SectionTitle>
				<Links>
					<li>
						<Link>Computadores</Link>
					</li>
					<li>
						<Link>Periféricos</Link>
					</li>
				</Links>
			</FooterSection>
			<p>{new Date().getFullYear()} - &copy; EPLAY Todos os direitos reservados</p>
		</div>
	</Container>
);

export default Footer;