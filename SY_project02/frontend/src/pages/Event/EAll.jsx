import * as styled_Event from "../../styled/Event/Event";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API, IMG } from "../../util/urls";

export const EAll = () => {
  // api 서버에서 받아온 event를 배열로 저장
  const [events, setEvents] = useState([]);

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
    <styled_Event.ESArticle>
      <styled_Event.ESList>
        <styled_Event.ESDl>
          {/*진행 이벤트*/}
          <styled_Event.ESDt>진행 이벤트</styled_Event.ESDt>
          <styled_Event.ESDd>
            <styled_Event.ESDUl>
              {/*각각 이벤트*/}
              {events.map((event) => {
                const img = `${IMG}`;
                return (
                  <styled_Event.ESDLi key={event.EventId}>
                    <styled_Event.ESDLDl>
                      <styled_Event.ESDLDt>
                        <styled_Event.ESDLA>
                          <Link to={`/event/all/${event.EventId}`}>
                            <styled_Event.ESDLImg
                              src={img + event.Image[0]}
                              alt={"ESTitle"}
                            />
                          </Link>
                        </styled_Event.ESDLA>
                      </styled_Event.ESDLDt>
                      <styled_Event.ESDLDd>
                        <styled_Event.ESDLH4>
                          {event.Title}
                        </styled_Event.ESDLH4>
                        <styled_Event.ESDLP>
                          {event.EventTime}
                        </styled_Event.ESDLP>
                      </styled_Event.ESDLDd>
                    </styled_Event.ESDLDl>
                  </styled_Event.ESDLi>
                );
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
