import { AllBox } from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import {
  NB,
  NBPosition,
  NColgroup,
  NInput,
  NIP,
  NIPA,
  NIPInput,
  NNLFirst,
  NNoticeList,
  NPA,
  NPAClicked,
  NPagination,
  NPANext,
  NPLi,
  NPLNA,
  NPLNAImg,
  NPLNext,
  NPUl,
  NTable,
  NTbody,
  NTBTd,
  NTBTDLA,
  NTBTDLeft,
  NTBTr,
  NTh,
  NThead,
  NTIH2,
  NTIImg,
  NTInner,
  NTitleBox,
  NTr,
} from "../../styled/Notice/Notice";
import NTitleImg from "../../image/Notice/Ntitle.jpg";
import NNext from "../../image/Notice/NNext.jpg";
import { Footer } from "../../components/Footer/Footer";
import { NoticeInner } from "./NoticeInner";

const Notice = () => {
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

      {/*공지사항*/}
      <NB>
        <NBPosition>
          {/*공지사항 검색창*/}
          <NInput>
            <NIP>
              <NIPInput
                type={"text"}
                placeholder={"검색어를 입력해 주세요."}
              />
              <NIPA href={"#"}>검색</NIPA>
            </NIP>
          </NInput>
          {/*공지사항 게시글들*/}
          <NTable>
            {/*넓이*/}
            <NColgroup>
              <col width={"5.45454%"} />
              <col width={"74.5454%"} />
              <col width={"10.90909%"} />
              <col width={"*"} />
            </NColgroup>
            {/*게시글들 헤드*/}
            <NThead>
              <NTr>
                <NTh scope={"col"}>NO</NTh>
                <NTh scope={"col"}>제목</NTh>
                <NTh scope={"col"}>날짜</NTh>
                <NTh scope={"col"}>조회수</NTh>
              </NTr>
            </NThead>
            {/*게시글들 박스*/}
            <NTbody>
              {/*각각 게시글*/}
              <NoticeInner />
            </NTbody>
          </NTable>
          {/*게시글 페이지*/}
          <NPagination>
            {/*숫자*/}
            <NPUl>
              <NPLi>
                <NPAClicked>1</NPAClicked>
              </NPLi>
              <NPLi>
                <NPA>2</NPA>
              </NPLi>
              {/*다음 버튼*/}
              <NPLNext>
                <NPLNA href={"#"}>
                  <NPLNAImg src={NNext} alt={"NNext"} />
                </NPLNA>
              </NPLNext>
            </NPUl>
          </NPagination>
        </NBPosition>
      </NB>

      <Footer />
    </AllBox>
  );
};

export default Notice;
