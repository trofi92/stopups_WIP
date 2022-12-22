// import styled from "styled-components";
// export const DetailBox = styled.div`
//   width: 768px;
//   height: 431px;
//   display: flex;
// `;
// export const SizeBox = styled.div`
//   width: 800px;
//   display: flex;
//   justify-content: space-between;
//   margin-top: 15px;
//   span {
//     font-weight: 600;
//     font-size: 25px;
//   }
// `;
// export const SizeDetailBox = styled.div`
//   padding: 5px;

//   width: 150px;
//   margin-left: 650px;
//   position: absolute;
//   p {
//     font-weight: 500;
//     font-size: 17px;
//     margin: 0;
//   }

//   border-radius: 2px;
// `;

// export const DetailImageBox = styled.div`
//   width: 314.109px;
//   height: 415px;
//   display: flex;
//   flex-direction: column;
// `;
// export const DetailTextBox = styled.div`
//   width: 425px;
//   height: 431px;
//   margin-left: 25px;

//   span {
//     font-size: 14px;
//     font-family: "Arial";
//     font-weight: normal;
//     color: #666;
//   }
// `;

// export const SmallImageContainer = styled.div``;

// export const SmallImage = styled.div`
//   width: 76px;
//   height: 79px;
//   cursor: pointer;
//   color: #666;
//   background-image: ${(props) => `url(${props.url})`};
//   background-size: cover;
//   margin-top: 10px;
//   margin-right: 10px;
// `;
// export const detailTextBox = styled.div`
//   width: 425.844px;
//   height: 139.188px;
//   font-family: "nbg", "맑은 고딕", HelveticaNeue, DroidSans, Sans-serif,
//     Helvetica;
//   margin: 0;
//   padding: 0;
//   border: 0;
//   font-size: 100%;
//   vertical-align: baseline;
// `;
// export const Ntitle = styled.div`
//   border-top: 1px solid #ddd;
//   border-bottom: 1px solid #ddd;
//   border-left: 0;
//   width: 410px;
//   height: 60px;
//   padding: 10px;

//   p {
//     margin-top: 0;
//   }
// `;

// export const NDetail = styled.div`
//   width: 800px;

//   margin-bottom: 10px;

//   ul {
//     width: 100%;
//     color: #444;
//     line-height: 1.6;
//     list-style: none;
//     padding-left: 0px;
//     padding-top: 0px;
//     margin-top: 0;
//   }
//   dt {
//     display: flex;
//   }
//   dd {
//     margin-left: auto;
//   }
//   hr {
//     /* margin-left: 10px;
//     margin-right: 10px;
//     border: dashed 0.5px #ddd; */
//   }
// `;

// export const Notice = styled.div`
//   width: 365px;
//   height: 22px;
//   background: #f4f4f2;
//   padding: 13px 11px;
//   font-size: 14px;
//   color: #444;
//   border-radius: 3px;
//   position: relative;
//   border: 0;
//   margin: 0;
//   line-height: 1.6;
// `;
import styled from "styled-components";
export const DetailBox = styled.div`
  width: 768px;
  height: 431px;
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
  / span {
    font-size: 14px;
    font-family: "Arial";
    font-weight: normal;
    color: #666;
  }
`;
export const TextBoxSpan = styled.span`
  color: black !important;
  float: right;

  font-weight: normal;
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
  input {
    margin-top: 2px;
    margin-left: 3px;
    margin-right: 3px;
  }
`;
export const Ntitle = styled.div`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  width: 410px;
  height: 60px;
  padding: 10px;

  p {
    margin-top: 0;
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
    padding-left: 0px;
    padding-top: 0px;
    margin-top: 0;
  }
  dt {
    display: flex;
  }
  dd {
    margin-left: auto;
  }
  hr {
    margin-left: 10px;
    margin-right: 10px;
    border: dashed 0.5px #ddd;
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
