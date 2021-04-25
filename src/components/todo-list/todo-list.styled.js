import styled from 'styled-components';

export const ListStyled = styled.ul`
	padding-left: 0;
	border-color: #ced4da;
`;

export const ListItemStyled = styled.li`
  padding: .25rem .75rem;
  border: 1px solid #ced4da;
  list-style: none;
  margin-bottom: -1px;

  :first-child {
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
  }

  :last-child {
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }
`;