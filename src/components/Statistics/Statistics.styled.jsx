import styled from '@emotion/styled';

export const Votes = styled.ul`
  margin: 0 auto;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const VotesItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
`;

export const Rate = styled.span`
  text-align: left;
  font-size: 32px;
  font-weight: 500;
  color: var(--accent);
`;
