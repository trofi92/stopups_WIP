import styled from "styled-components";
export const DetailBox = styled.div`
  width: 768px;
  height: 600px;
  display: flex;
`;

export const DetailImageBox = styled.div`
  width: 314.109px;
  height: 415px;
  display: flex;
  flex-direction: column;
`;
export const DetailTextBox = styled.div`
  width: 425px;
  height: 431px;
  margin-left: 25px;
  span {
    font-size: 24px;
    font-weight: bold;
    color: #222;
    line-height: 1px;
  }
`;

export const TextBoxSpan = styled.span`
  color: black !important;
  float: right;
  line-height: 17px !important;
  font-size: 15px !important;
  font-weight: normal !important;
`;

export const Image = styled.div`
  background-size: cover;
  background-image: ${(props) => `url(${props.url})`};
  width: 314px;
  height: 328px;
`;

export const SmallImageContainer = styled.div``;

export const SmallImage = styled.div`
  width: 76px;
  height: 79px;
  cursor: pointer;
  color: #666;
  background-image: ${(props) => `url(${props.url})`};
  background-size: cover;
  margin-top: 10px;
  margin-right: 10px;
`;
export const detailTextBox = styled.div`
  width: 425.844px;
  height: 139.188px;
  font-family: "nbg", "맑은 고딕", HelveticaNeue, DroidSans, Sans-serif,
    Helvetica;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
`;
export const Fieldset = styled.fieldset`
  display: flex;
  font-size: 12px;
  width: ${(props) => props.width};
  margin-top: 5px;
  color: #666;
  
  input {
    cursor: pointer;
    margin-top: 2px;
    margin-left: 3px;
    margin-right: 3px;
    accent-color: #006633;
  }
  
`;
export const smallFieldset = styled.div`
  display: flex;
`;


export const Ntitle = styled.div`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  width: 410px;
  height: 46px;
  padding: 5px 10px 20px 10px;

  p {
    font-size: 14px;
    margin-top: 9px;
    margin-bottom: 5px;
  }
  
  span {
    padding-top: 15px;
    line-height: 18px;
    font-size: 13px;
    margin-right: 6px;
    color: #444;
    font-weight: normal;
  }
`;

export const NDetail = styled.div`
  width: 425px;
  height: 150px;
  display: flex;
  margin-bottom: 10px;

  overflow: hidden;
  
  ul {
    width: 50%;
    height: 112px;
    color: #444;
    line-height: 1.6;
    list-style: none;
    padding-left: 0;
    padding-top: 0;
    margin-top: 0;
    font-size: 14px;
  }
  dt {
    display: flex;
    float: left;
    width: 85%;
  }
  dd {
    float: right;
    width: 15%;
    text-align: right;
  }
  hr {
    margin-left: 10px;
    margin-right: 10px;
    border: dashed 0.1px #ddd;
  }
  dl {
    display: flex;
  }
`;

export const Notice = styled.div`
  width: 365px;
  height: 22px;
  background: #f4f4f2;
  padding: 13px 11px;
  font-size: 14px;
  color: #444;
  border-radius: 3px;
  position: relative;
  border: 0;
  margin: 0;
  line-height: 1.6;
`;
export const Input = styled.input.attrs((props) => ({
  type: "radio",
  id: props.id,
  name: !props.name ? "size" : props.name,
  value: props.id,
}))`
`;

export const MenuDescP = styled.p`
  font-size: 16px;
  color: #444;
  font-weight: 500;
  margin-bottom: 20px;
  line-height: 1.6;
  min-height: 40px;
`