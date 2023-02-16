import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 40px auto;
  padding: 20px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: honeydew;
  border-radius: 10px;
  `;

export const Description = styled.div`
  margin-bottom: 25px;
  text-align: center;
  color: black;
`;

export const Avatar = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  width: 150px;
  display: block;
  border-radius: 50%;
  background-color: white;
  `;

export const Name = styled.p`
  margin-bottom: 7px;
  font-size: 28px;
  font-weight: 700;
  text-shadow: black;
`;

export const Tag = styled.p`
  margin-bottom: 7px;
  font-size: 18px;
  text-shadow: black;
`;

export const Location = styled.p`
  font-size: 18px;
  text-shadow: black;
`;

export const StatsList = styled.ul`
  margin: 0;
  padding: 10px;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 10px;
  background-color: #DCDCDC;
  `;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 33.333%;
  gap: 7px;
`;

export const Label = styled.span`
  font-weight: 500;
  text-shadow: black;
`;

export const Quantity = styled.span`
  font-weight: 700;
  text-shadow: black;
`;
