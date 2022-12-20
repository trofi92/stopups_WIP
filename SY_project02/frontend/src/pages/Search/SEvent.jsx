import * as styled_Search from "../../styled/Search";
import {Link} from "react-router-dom";
import ESTitle from "../../image/Event/ESummer/ESTitle.jpg";
import {useEffect, useState} from "react";
import axios from "axios";

export const SEvent = ({result, state}) => {
    const [allEvent, setAllEvent] = useState([]);

    // console.log("이벤트 검색 결과", result);

    useEffect(() => {
        const all = async () => {
            await axios
                .get("http://stopupsapi.shop:8080/api/?apikey=TeamYN1670470710431&Event=ALL&Title=&EventId=")
                .then((res) => {
                    setAllEvent(res.data);
                })
        };
        all();
    }, []);

    // console.log("allEvent", allEvent);

    const searchedAllEvent = allEvent.filter((data) => {
        if (state !== "" && result === "") {
            return data.Title.toLowerCase().includes(state.toLowerCase());
        } else if (result !== "") {
            return data.Title.toLowerCase().includes(result.toLowerCase());
        }
    })

    // console.log("searchedAllEvent", searchedAllEvent);

    return (
        <styled_Search.SSection>
            {/*이벤트 헤더*/}
            <styled_Search.SSHeader>
                <styled_Search.SSHH2>이벤트</styled_Search.SSHH2>
                <Link to={"/event"}>
                    <styled_Search.SSHP>이벤트 더보기</styled_Search.SSHP>
                </Link>
            </styled_Search.SSHeader>
            {/*이벤트 내용*/}
            <styled_Search.SSUl>
                {searchedAllEvent.length === 0 || result === "" && state === "" ? (
                    <styled_Search.SSLi>
                        <styled_Search.SSLP>검색 결과가 없습니다.</styled_Search.SSLP>
                    </styled_Search.SSLi>
                ) : (
                    searchedAllEvent.map((event) => {
                        if (event) {
                            const img = `http://stopupsapi.shop:8080`;
                            return (
                                <styled_Search.SSLi key={event.EventId}>
                                    <styled_Search.SEFigure>
                                        <styled_Search.SEFImg src={img + event.Image[0]} alt={"ESTitle"}/>
                                    </styled_Search.SEFigure>
                                    <styled_Search.SEDiv>
                                        <styled_Search.SEDHeader>
                                            <styled_Search.SEDHH3>{event.Title}</styled_Search.SEDHH3>
                                            <styled_Search.SEDHSpan>진행중</styled_Search.SEDHSpan>
                                        </styled_Search.SEDHeader>
                                        <styled_Search.SEDPDate>{event.Date}</styled_Search.SEDPDate>
                                        <Link to={"/event/all/" + event.EventId} style={{textDecoration: "none"}}>
                                            <styled_Search.SEDPLink>
                                                http://localhost:3000/event/all/{event.EventId}
                                            </styled_Search.SEDPLink>
                                        </Link>
                                    </styled_Search.SEDiv>
                                </styled_Search.SSLi>
                            )
                        }
                    })
                )}
            </styled_Search.SSUl>
        </styled_Search.SSection>
    );
};