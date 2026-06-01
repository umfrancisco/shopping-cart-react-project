import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
	background-color: ${cores.cinza};
	border-radius: 8px;
	padding: 8px;
	position: relative;
	margin-bottom: 24px;
	
	img {
		display: block;
		width: 100%;
		height: 320px;
		object-fit: cover;
	}
	
	${TagContainer} {
		margin-right: 8px;
	}
`;

export const Titulo = styled.h3`
	font-weight: bold;
	font-size: 16px;
	display: block;
	margin-top: 16px;
	margin-bottom: 8px;
`;

export const Descricao = styled.p`
	font-size: 14px;
	line-height: 22px;
	display: block;
	margin-top: 16px;
`;

export const Tags = styled.div`
	position: absolute;
	top: 16px;
	right: 16px;
`;



