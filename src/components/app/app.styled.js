import styled from 'styled-components';
import { tablet } from '../../styles/breakpoints';

export const AppStyled = styled.div `
	margin: 2rem .6rem;

	${tablet} {
		margin: 2rem auto 0 auto;
		max-width: 400px;
	}
`;