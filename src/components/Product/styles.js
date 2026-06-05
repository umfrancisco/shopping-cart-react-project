import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
	background-color: ${(props) => (props.background === 'gray') ? cores.preta : cores.cinza};
	border-radius: 8px;
	padding: 8px;
	position: relative;
	margin-bottom: 24px;
	text-decoration: none;
	color: ${cores.branca};
	
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

export const Links = styled.a`
	position: absolute;
	bottom: 0;
	margin-bottom: 8px;
	text-decoration: none;
	color: ${cores.branca};
	font-size: 14px;
`;



