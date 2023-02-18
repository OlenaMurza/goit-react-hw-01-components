import styled from '@emotion/styled';

export const Container = styled.section`
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 20px;
  width: 350px;
  background-color: lightgrey;
  border-radius: 10px;
  `;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  `;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-basis: calc(100% / 5);
  background-color: ${() => `#${Math.floor(Math.random() * 16777215).toString(16)}`};
`;

export const Label = styled.span`
  font-weight: 500;
  `;

export const Percentage = styled.span`
  font-weight: 700;
  `;