import { ButtonContainer, ButtonLink } from './styles'

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