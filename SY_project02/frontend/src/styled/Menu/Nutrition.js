import styled from "styled-components";
export const Table = styled.div`
  font-family: "nbg", "맑은 고딕", HelveticaNeue, DroidSans, Sans-serif,
    Helvetica;
  font-size: 1em;
  line-height: 1;
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  th {
    width: 768px;
    height: 47px;
    font-size: 14px;
    font-weight: bold;
    color: #222;

    text-align: center;
    border-top: 1px solid #333333;
    border-bottom: 1px solid #333333;
  }
  td {
    font-size: 14px;
    color: #666;
    padding: 16px 0;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  width: 768px;
  height: 100%;
`;