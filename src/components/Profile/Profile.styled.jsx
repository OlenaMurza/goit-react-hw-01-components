import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 40px auto;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: honeydew;
  border: 1px solid grey;
  `;

export const Description = styled.div`
  margin-bottom: 25px;
 margin-top: 25px;
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
  padding: 0;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #DCDCDC;
  `;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
 justify-content: center;
  gap: 7px;
  width:calc(100% / 3);
  height: 90px;
  border: 1px solid grey;
   `;

export const Label = styled.span`
  font-weight: 500;
  text-shadow: black;
`;

export const Quantity = styled.span`
  font-weight: 700;
  text-shadow: black;
`;
