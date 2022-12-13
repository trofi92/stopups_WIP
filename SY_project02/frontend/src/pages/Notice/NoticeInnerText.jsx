import { AllBox } from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import {
  NTIH2,
  NTIImg,
  NTInner,
  NTitleBox,
} from "../../styled/Notice/Notice";
import NTitleImg from "../../image/Notice/Ntitle.jpg";
import {
  NITAInner,
  NITAP,
  NITArticle,
  NITASpan,
  NITBox,
  NITButton,
  NITButtonBox,
  NITH3,
  NITHeader,
  NITHSpan,
  NITInnerBox,
  NITLi,
  NITSection,
  NITTable,
  NITTbody,
  NITTd,
  NITTdP,
  NITTh,
  NITUl,
} from "../../styled/Notice/NoticeInnerText";
import ESFaceBook from "../../image/Event/ESummer/ESFaceBook.png";
import { ESSLAImg } from "../../styled/Event/ESummer";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";

const NoticeInnerText = () => {
  return (
    <AllBox>
      <Header />
      {/*공지사항 타이틀*/}
      <NTitleBox>
        <NTInner>
          <NTIH2>
            <NTIImg src={NTitleImg} alt={"NTitleImg"} />
          </NTIH2>
        </NTInner>
      </NTitleBox>

      {/*공지사항 내용*/}
      <NITBox>
        <NITInnerBox>
          {/*본문*/}
          <NITSection>
            {/*제목*/}
            <NITHeader>
              <NITH3>
                시스템 개선 및 서비스 점검 안내
                <NITHSpan />
              </NITH3>
              <NITUl>
                <NITLi>
                  <ESSLAImg src={ESFaceBook} alt={"ESFaceBook"} />
                </NITLi>
              </NITUl>
            </NITHeader>
            {/*본문 내용*/}
            <NITArticle>
              <NITAInner>
                {/*한 줄씩 받아와서 적기*/}
                <NITAP>
                  <NITASpan>공지사항 내용</NITASpan>
                </NITAP>
                <NITAP>
                  <NITASpan>
                    공지사항 내용
                    <NITASpan> 이런 식으로 </NITASpan>
                    <NITASpan>해놨던데 </NITASpan>
                    <NITASpan>왜지</NITASpan>
                  </NITASpan>
                </NITAP>
              </NITAInner>
            </NITArticle>
            {/*목록 버튼*/}
            <NITButtonBox>
              <Link to={"/notice"}>
                <NITButton>목록</NITButton>
              </Link>
            </NITButtonBox>
          </NITSection>
          {/*윗글, 아랫글*/}
          <NITTable>
            <colgroup>
              <col width={"18.181818%"} />
              <col width={"89.818182%"} />
            </colgroup>
            <tbody>
              <tr>
                <NITTh>윗글</NITTh>
                <NITTd>
                  <Link to={"#"} style={{ textDecoration: "none" }}>
                    <NITTdP>윗글 제목</NITTdP>
                  </Link>
                </NITTd>
              </tr>
              <tr>
                <NITTh>아랫글</NITTh>
                <NITTd>
                  <Link to={"#"} style={{ textDecoration: "none" }}>
                    <NITTdP>아랫글 제목</NITTdP>
                  </Link>
                </NITTd>
              </tr>
            </tbody>
          </NITTable>
        </NITInnerBox>
      </NITBox>

      <Footer />
    </AllBox>
  );
};

export default NoticeInnerText;
