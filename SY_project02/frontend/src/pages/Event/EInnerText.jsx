import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import * as styled_Notice from "../../styled/Notice/Notice";
import ETitle from "../../image/Event/ETitle.jpg";
import * as styled_ESummer from "../../styled/Event/ESummer";
import ESFaceBook from "../../image/Event/ESummer/ESFaceBook.png"
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const EInnerText = () => {
    const [events, setEvents] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const event = async () => {
            await axios
                .get("http://stopupsapi.shop:8080/api/?apikey=TeamYN1670470710431&Event=ALL&Title=&EventId=")
                .then((res) => {
                    setEvents(res.data);
                })
        };
        event();
    }, []);

    return(
        <styled_AB.AllBox>
            <Header/>

            {events.map((event, idx) => {
                if (location.pathname === `/event/all/${event.EventId}`) {
                    const img = `http://stopupsapi.shop:8080`
                    return (
                        <>
                            <styled_Notice.NTitleBox key={idx}>
                                <styled_Notice.NTInner>
                                    <styled_Notice.NTIH2>
                                        <styled_Notice.NTIImg src={ETitle} alt={"ETitle"}/>
                                    </styled_Notice.NTIH2>
                                </styled_Notice.NTInner>
                            </styled_Notice.NTitleBox>
                            {/*이벤트 전체 박스*/}
                            <styled_ESummer.ESBox>
                                <styled_ESummer.ESBPosition>
                                    <styled_ESummer.ESSection>
                                        {/*섹션의 헤더*/}
                                        <styled_ESummer.ESSHeader>
                                            <styled_ESummer.ESSHH3>
                                                {event.Title}
                                                <styled_ESummer.ESSHSpan>{event.EventTime}</styled_ESummer.ESSHSpan>
                                            </styled_ESummer.ESSHH3>
                                            <styled_ESummer.ESSUl>
                                                <styled_ESummer.ESSLi>
                                                    <styled_ESummer.ESSLA>
                                                        <styled_ESummer.ESSLAImg src={ESFaceBook} alt={"ESFaceBook"}/>
                                                    </styled_ESummer.ESSLA>
                                                </styled_ESummer.ESSLi>
                                            </styled_ESummer.ESSUl>
                                        </styled_ESummer.ESSHeader>
                                        {/*섹션의 아티클*/}
                                        <styled_ESummer.ESArticle>
                                            <styled_ESummer.ESADiv>
                                                <styled_ESummer.ESADiv2>
                                                    <styled_ESummer.ESADiv3>
                                                        {/*음료*/}
                                                        <styled_ESummer.ESADiv4>
                                                            <styled_ESummer.ESADImg src={img + event.Image[1]} alt={"ESMenu"}/>
                                                        </styled_ESummer.ESADiv4>
                                                        {/*디저트*/}
                                                        <styled_ESummer.ESADiv4>
                                                            <styled_ESummer.ESADImg src={img + event.Image[2]} alt={"ESDessert"}/>
                                                        </styled_ESummer.ESADiv4>
                                                        {/*MD*/}
                                                        <styled_ESummer.ESADiv4>
                                                            <styled_ESummer.ESADImg src={img + event.Image[3]} alt={"ESMD"}/>
                                                        </styled_ESummer.ESADiv4>
                                                        {/*블랜드*/}
                                                        <styled_ESummer.ESADiv4>
                                                            <styled_ESummer.ESADImg src={img + event.Image[4]} alt={"ESBlend"}/>
                                                        </styled_ESummer.ESADiv4>
                                                        {/*카드*/}
                                                        <styled_ESummer.ESADiv4>
                                                            <styled_ESummer.ESADImg src={img + event.Image[5]} alt={"ESCard"}/>
                                                            <Link to={"#"}>
                                                                <styled_ESummer.ESADP4>2022 서머 선샤인 카드 자세히보기</styled_ESummer.ESADP4>
                                                            </Link>
                                                        </styled_ESummer.ESADiv4>
                                                    </styled_ESummer.ESADiv3>
                                                </styled_ESummer.ESADiv2>
                                            </styled_ESummer.ESADiv>
                                        </styled_ESummer.ESArticle>
                                        {/*목록 버튼*/}
                                        <styled_ESummer.ESButtonBox>
                                            <Link to={"/event"} style={{textDecoration: "none"}}>
                                                <styled_ESummer.ESBP>
                                                    목록
                                                </styled_ESummer.ESBP>
                                            </Link>
                                        </styled_ESummer.ESButtonBox>
                                    </styled_ESummer.ESSection>
                                </styled_ESummer.ESBPosition>
                            </styled_ESummer.ESBox>
                        </>
                    )
                }
            })}

            <Footer/>
        </styled_AB.AllBox>
    );
};

export default EInnerText;
