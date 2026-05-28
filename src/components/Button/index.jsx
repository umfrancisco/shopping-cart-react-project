import { ButtonContainer, ButtonLink } from './styles'

// case error: 21:07

function hello() {
	console.log("hello world from button");
}

const Button = ({ type, title, to, children }) => {
	if (type === 'button') {
		return (
			<ButtonContainer type='button' title={title} onClick={hello()}>
				{children}
			</ButtonContainer>
		);
	}
	return (
		<ButtonLink type='link' to={to} title={title} onClick={hello()}>
			{children}
		</ButtonLink>
	);
}

export default Button;