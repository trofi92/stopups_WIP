import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import * as styled_Notice from "../../styled/Notice/Notice";
import ETitle from "../../image/Event/ETitle.jpg";
import * as styled_ESummer from "../../styled/Event/ESummer";
import ESFaceBook from "../../image/Event/ESummer/ESFaceBook.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API, IMG } from "../../utils/urls";

const EInnerText = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const event = async () => {
      await axios
        .get(`${API}&Event=ALL&Title=&EventId=`)
        .then((res) => {
          setEvents(res.data);
        });
    };
    event();
  }, []);

  return (
    <styled_AB.AllBox>
      <Header />

      {events.map((event, idx) => {
        if (location.pathname === `/event/all/${event.EventId}`) {
          const img = `${IMG}`;
          return (
            <div key={idx}>
              <styled_Notice.NTitleBox>
                <styled_Notice.NTInner>
                  <styled_Notice.NTIH2>
                    <styled_Notice.NTIImg
                      src={ETitle}
                      alt={"ETitle"}
                    />
                  </styled_Notice.NTIH2>
                </styled_Notice.NTInner>
              </styled_Notice.NTitleBox>
              <styled_ESummer.ESBox>
                <styled_ESummer.ESBPosition>
                  <styled_ESummer.ESSection>
                    <styled_ESummer.ESSHeader>
                      <styled_ESummer.ESSHH3>
                        {event.Title}
                        <styled_ESummer.ESSHSpan>
                          {event.EventTime}
                        </styled_ESummer.ESSHSpan>
                      </styled_ESummer.ESSHH3>
                      <styled_ESummer.ESSUl>
                        <styled_ESummer.ESSLi>
                          <styled_ESummer.ESSLA>
                            <styled_ESummer.ESSLAImg
                              src={ESFaceBook}
                              alt={"ESFaceBook"}
                            />
                          </styled_ESummer.ESSLA>
                        </styled_ESummer.ESSLi>
                      </styled_ESummer.ESSUl>
                    </styled_ESummer.ESSHeader>
                    <styled_ESummer.ESArticle>
                      <styled_ESummer.ESADiv>
                        <styled_ESummer.ESADiv2>
                          <styled_ESummer.ESADiv3>
                            <styled_ESummer.ESADiv4>
                              <styled_ESummer.ESADImg
                                src={img + event.Image[1]}
                                alt={"ESMenu"}
                              />
                            </styled_ESummer.ESADiv4>
                            <styled_ESummer.ESADiv4>
                              <styled_ESummer.ESADImg
                                src={img + event.Image[2]}
                                alt={"ESDessert"}
                              />
                            </styled_ESummer.ESADiv4>
                            <styled_ESummer.ESADiv4>
                              <styled_ESummer.ESADImg
                                src={img + event.Image[3]}
                                alt={"ESMD"}
                              />
                            </styled_ESummer.ESADiv4>
                            <styled_ESummer.ESADiv4>
                              <styled_ESummer.ESADImg
                                src={img + event.Image[4]}
                                alt={"ESBlend"}
                              />
                            </styled_ESummer.ESADiv4>
                            <styled_ESummer.ESADiv4>
                              <styled_ESummer.ESADImg
                                src={img + event.Image[5]}
                                alt={"ESCard"}
                              />
                              <Link to={"#"}>
                                <styled_ESummer.ESADP4>
                                  2022 서머 선샤인 카드 자세히보기
                                </styled_ESummer.ESADP4>
                              </Link>
                            </styled_ESummer.ESADiv4>
                          </styled_ESummer.ESADiv3>
                        </styled_ESummer.ESADiv2>
                      </styled_ESummer.ESADiv>
                    </styled_ESummer.ESArticle>
                    <styled_ESummer.ESButtonBox>
                      <Link
                        to={"/event/all"}
                        style={{ textDecoration: "none" }}
                      >
                        <styled_ESummer.ESBP>
                          목록
                        </styled_ESummer.ESBP>
                      </Link>
                    </styled_ESummer.ESButtonBox>
                  </styled_ESummer.ESSection>
                </styled_ESummer.ESBPosition>
              </styled_ESummer.ESBox>
            </div>
          );
        }
      })}

      <Footer />
    </styled_AB.AllBox>
  );
};

export default EInnerText;
