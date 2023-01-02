import * as styled_Search from "../../styled/Search";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API, IMG } from "../../util/urls";

export const SEvent = ({ result, state }) => {
  const [allEvent, setAllEvent] = useState([]);

  useEffect(() => {
    const all = async () => {
      await axios
        .get(`${API}&Event=ALL&Title=&EventId=`)
        .then((res) => {
          setAllEvent(res.data);
        });
    };
    all();
  }, []);

  const searchedAllEvent = allEvent.filter((data) => {
    if (state !== "" && result === "") {
      return data.Title.toLowerCase().includes(state.toLowerCase());
    } else if (result !== "") {
      return data.Title.toLowerCase().includes(result.toLowerCase());
    }
  });

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
        {searchedAllEvent.length === 0 ||
        (result === "" && state === "") ? (
          <styled_Search.SSLi>
            <styled_Search.SSLP>
              검색 결과가 없습니다.
            </styled_Search.SSLP>
          </styled_Search.SSLi>
        ) : (
          searchedAllEvent.map((event) => {
            console.log(event);
            if (event) {
              const img = `${IMG}`;
              return (
                <styled_Search.SSLi key={event.EventId}>
                  <styled_Search.SEFigure>
                    <styled_Search.SEFImg
                      src={img + event.Image[0]}
                      alt={"ESTitle"}
                    />
                  </styled_Search.SEFigure>
                  <styled_Search.SEDiv>
                    <styled_Search.SEDHeader>
                      <styled_Search.SEDHH3>
                        {event.Title}
                      </styled_Search.SEDHH3>
                      {event.Proceed === "진행중" ? (
                        <styled_Search.SEDHSpan>
                          진행중
                        </styled_Search.SEDHSpan>
                      ) : (
                        <styled_Search.SEDHSpanEnd>
                          종료
                        </styled_Search.SEDHSpanEnd>
                      )}
                    </styled_Search.SEDHeader>
                    <styled_Search.SEDPDate>
                      {event.Date}
                    </styled_Search.SEDPDate>
                    <Link
                      to={"/event/all/" + event.EventId}
                      style={{ textDecoration: "none" }}
                    >
                      <styled_Search.SEDPLink>
                        http://localhost:3000/event/all/
                        {event.EventId}
                      </styled_Search.SEDPLink>
                    </Link>
                  </styled_Search.SEDiv>
                </styled_Search.SSLi>
              );
            }
          })
        )}
      </styled_Search.SSUl>
    </styled_Search.SSection>
  );
};
