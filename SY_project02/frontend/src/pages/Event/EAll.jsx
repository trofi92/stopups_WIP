import * as styled_Event from "../../styled/Event/Event";
import {Link} from "react-router-dom";
import ESTitle from "../../image/Event/ESummer/ESTitle.jpg";
import {useEffect, useState} from "react";
import axios from "axios";


export const EAll = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const event = async () => {
            await axios
                .get("http://stopupsapi.shop:8080/api/?apikey=TeamYN1671673527249&Event=ALL&Title=&EventId=")
                .then((res) => {
                    setEvents(res.data);
                })

        };
        event();
    }, []);

    // console.log("events", events);

    return (
        <styled_Event.ESArticle>
            <styled_Event.ESList>
                <styled_Event.ESDl>
                    {/*진행 이벤트*/}
                    <styled_Event.ESDt>진행 이벤트</styled_Event.ESDt>
                    <styled_Event.ESDd>
                        <styled_Event.ESDUl>
                            {/*각각 이벤트*/}
                            {events.map((event) => {
                                const img = `http://stopupsapi.shop:8080`;
                                return (
                                    <styled_Event.ESDLi key={event.EventId}>
                                        <styled_Event.ESDLDl>
                                            <styled_Event.ESDLDt>
                                                <styled_Event.ESDLA>
                                                    <Link to={`/event/all/${event.EventId}`}>
                                                        <styled_Event.ESDLImg src={img + event.Image[0]} alt={"ESTitle"}/>
                                                    </Link>
                                                </styled_Event.ESDLA>
                                            </styled_Event.ESDLDt>
                                            <styled_Event.ESDLDd>
                                                <styled_Event.ESDLH4>{event.Title}</styled_Event.ESDLH4>
                                                <styled_Event.ESDLP>{event.EventTime}</styled_Event.ESDLP>
                                            </styled_Event.ESDLDd>
                                        </styled_Event.ESDLDl>
                                    </styled_Event.ESDLi>
                                )
                            })}

                        </styled_Event.ESDUl>
                    </styled_Event.ESDd>
                    {/*종료 이벤트*/}
                    <styled_Event.ESDt>종료 이벤트</styled_Event.ESDt>
                    <styled_Event.ESDd></styled_Event.ESDd>
                </styled_Event.ESDl>
            </styled_Event.ESList>
        </styled_Event.ESArticle>
    );
};