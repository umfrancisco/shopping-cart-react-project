import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
	width: 100%;
	height: 620px;
	display: block;
	background-repeat: no-repeat;
	background-size: cover;
	font-weight: bold;
	
	.container {
		position: relative;
		padding-top: 100px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	
	img {
		border-radius: 8px;
		max-height: 320px;
		margin-top: 8px;
	}
	
	${TagContainer} {
		position: absolute;
		top: 32px;
	}
`;

export const Titulo = styled.h2`
	font-size: 36px;
	max-width: 450px;
	margin-top: 16px;
`;

export const Precos = styled.p`
	font-size: 24px;
`;