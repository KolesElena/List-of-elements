import styled from 'styled-components';

export const ButtonStyled = styled.button`
	font-weight: ${props => props.important ? "bold" : "normal"};
	color: ${props => props.important ? "steelblue" : "black"};
	width: 35px;
	margin: 3px;
`;

export const LabelStyled = styled.span`
	font-weight: ${props => props.important ? "bold" : "normal"};
	color: ${props => props.important ? "steelblue" : "black"};
	margin-left: 1.25rem;
	line-height: 35px;
	cursor: pointer;
	user-select: none;
`;