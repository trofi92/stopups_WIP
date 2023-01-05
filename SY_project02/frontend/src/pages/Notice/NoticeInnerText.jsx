import * as styled_AB from "../../styled/AllBox";
import * as styled_Notice from "../../styled/Notice/Notice";
import * as styled_NoticeIT from "../../styled/Notice/NoticeInnerText";
import * as styled_ESummer from "../../styled/Event/ESummer";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import NTitleImg from "../../image/Notice/Ntitle.jpg";
import ESFaceBook from "../../image/Event/ESummer/ESFaceBook.png";

import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../utils/urls";

const NoticeInnerText = () => {
  const [notices, setNotices] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const notice = async () => {
      await axios
        .get(`${API}&Notice=ALL&Title=&writeId=`)
        .then((res) => {
          setNotices(res.data);
        });
    };
    notice();
  }, []);

  console.log(notices);

  return (
    <styled_AB.AllBox>
      <Header />
      {/*공지사항 타이틀*/}
      <styled_Notice.NTitleBox>
        <styled_Notice.NTInner>
          <styled_Notice.NTIH2>
            <styled_Notice.NTIImg src={NTitleImg} alt={"NTitleImg"} />
          </styled_Notice.NTIH2>
        </styled_Notice.NTInner>
      </styled_Notice.NTitleBox>

      {/*공지사항 내용*/}
      {notices.map((notice, idx) => {
        // 주소랑 notice.Num이 같은 경우만 출력
        if (location.pathname === `/notice/${notice.Num}`) {
          return (
            <styled_NoticeIT.NITBox key={idx}>
              <styled_NoticeIT.NITInnerBox>
                {/*본문*/}
                <styled_NoticeIT.NITSection>
                  {/*제목*/}
                  <styled_NoticeIT.NITHeader>
                    <styled_NoticeIT.NITH3>
                      {notice.Title}
                      <styled_NoticeIT.NITHSpan />
                    </styled_NoticeIT.NITH3>
                    <styled_NoticeIT.NITUl>
                      <styled_NoticeIT.NITLi>
                        <styled_ESummer.ESSLAImg
                          src={ESFaceBook}
                          alt={"ESFaceBook"}
                        />
                      </styled_NoticeIT.NITLi>
                    </styled_NoticeIT.NITUl>
                  </styled_NoticeIT.NITHeader>
                  {/*본문 내용*/}
                  <styled_NoticeIT.NITArticle>
                    <styled_NoticeIT.NITAInner>
                      {/*한 줄씩 받아와서 적기*/}
                      <styled_NoticeIT.NITAP>
                        <styled_NoticeIT.NITASpan>
                          {notice.Desc}
                        </styled_NoticeIT.NITASpan>
                      </styled_NoticeIT.NITAP>
                    </styled_NoticeIT.NITAInner>
                  </styled_NoticeIT.NITArticle>
                  {/*목록 버튼*/}
                  <styled_NoticeIT.NITButtonBox>
                    <Link to={"/notice"}>
                      <styled_NoticeIT.NITButton>
                        목록
                      </styled_NoticeIT.NITButton>
                    </Link>
                  </styled_NoticeIT.NITButtonBox>
                </styled_NoticeIT.NITSection>

                {/*윗글, 아랫글*/}
                <styled_NoticeIT.NITTable>
                  <colgroup>
                    <col width={"18.181818%"} />
                    <col width={"89.818182%"} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <styled_NoticeIT.NITTh>
                        윗글
                      </styled_NoticeIT.NITTh>
                      <styled_NoticeIT.NITTd>
                        {notice.Num + 1 > notices.length ? (
                          <Link
                            to={`#`}
                            style={{ textDecoration: "none" }}
                          >
                            <styled_NoticeIT.NITTdP>
                              마지막 글입니다.
                            </styled_NoticeIT.NITTdP>
                          </Link>
                        ) : (
                          <Link
                            to={`/notice/${notice.Num + 1}`}
                            style={{ textDecoration: "none" }}
                          >
                            <styled_NoticeIT.NITTdP>
                              윗글
                            </styled_NoticeIT.NITTdP>
                          </Link>
                        )}
                      </styled_NoticeIT.NITTd>
                    </tr>
                    <tr>
                      <styled_NoticeIT.NITTh>
                        아랫글
                      </styled_NoticeIT.NITTh>
                      <styled_NoticeIT.NITTd>
                        {notice.Num - 1 === 0 ? (
                          <Link
                            to={`#`}
                            style={{ textDecoration: "none" }}
                          >
                            <styled_NoticeIT.NITTdP>
                              마지막 글입니다.
                            </styled_NoticeIT.NITTdP>
                          </Link>
                        ) : (
                          <Link
                            to={`/notice/${notice.Num - 1}`}
                            style={{ textDecoration: "none" }}
                          >
                            <styled_NoticeIT.NITTdP>
                              아랫글
                            </styled_NoticeIT.NITTdP>
                          </Link>
                        )}
                      </styled_NoticeIT.NITTd>
                    </tr>
                  </tbody>
                </styled_NoticeIT.NITTable>
              </styled_NoticeIT.NITInnerBox>
            </styled_NoticeIT.NITBox>
          );
        }
      })}

      <Footer />
    </styled_AB.AllBox>
  );
};

export default NoticeInnerText;
