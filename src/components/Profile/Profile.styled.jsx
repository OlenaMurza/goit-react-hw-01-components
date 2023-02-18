import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 40px auto;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: honeydew;
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 61%) 0px 5px 5px 1px;
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
  border-bottom: 5px;
  `;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  width: 100%;
  background-color: #f0f0f0;
  border-bottom:5px;
    :not(:last-child) {
    border-right: 1px solid #e1e1e1;
  }
`;

export const Label = styled.span`
  font-weight: 500;
  text-shadow: black;
`;

export const Quantity = styled.span`
  font-weight: 700;
  text-shadow: black;
`;
