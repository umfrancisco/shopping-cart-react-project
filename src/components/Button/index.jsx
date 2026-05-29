import { ButtonContainer, ButtonLink } from './styles'

// case error: 21:07, Projeto 6, Parte 1

const Button = ({ type, title, to, children }) => {
	if (type === 'button') {
		return (
			<ButtonContainer type='button' title={title}>
				{children}
			</ButtonContainer>
		);
	}
	return (
		<ButtonLink type='link' to={to} title={title}>
			{children}
		</ButtonLink>
	);
}

export default Button;