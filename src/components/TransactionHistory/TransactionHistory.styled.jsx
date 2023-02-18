import styled from '@emotion/styled';

export const Transactions = styled.table`
  margin: 20px auto 0 auto;
  width: 600px;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 5px;
  background-color: #fafafa;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  overflow: hidden;
`;

export const TableHeader = styled.thead`
 height: 40px;
  background-color: #00FFFF;
  text-align: center;
  text-transform: uppercase;
  color: white;
  th {
    width: calc(100% / 3);
    :not(:last-child) {
      border-right: 1px solid #ffffff;
    }
  }
  `;

export const HeaderRow = styled.tr``;

export const HeaderTitle = styled.th``;

export const TableBody = styled.tbody``;

export const BodyRow = styled.tr`
  height: 40px;
  text-align: center;
  text-transform: capitalize;
  &:nth-child(even) {
    background-color: #FAF0E6;
  }
  td {
    :not(:last-child) {
      border-right: 1px solid #DCDCDC;
    }
  }
`;

export const BodyValue = styled.td`
  text-align: center;
    width: calc(100% / 3);
`;