import * as styled_Notice from "../../styled/Notice/Notice";
import {Link} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const NoticeInner = () => {
  const [info, setInfo] = useState([]);
  const getInfo = async () => {
    const res = await axios.get(
      "http://54.180.86.156:8080/api/?apikey=TeamYN1670397914440&Notice=ALL&Title=&writeId="
    );
    setInfo(res.data);
  };
  useEffect(() => {
    getInfo().then((r) => console.log("111111=>", r));
  }, []);

  console.log("2222222222=>", info);

  // 조회수 세션스토리지 카운트

  //

    return (
        <>
            {info.map((infos, idx) => {
                return (
                    <styled_Notice.NTBTr key={idx}>
                        <styled_Notice.NTBTd>{idx + 1}</styled_Notice.NTBTd>
                        <styled_Notice.NTBTDLeft>
                            <Link to={`/noticeText`} style={{textDecoration: "none"}}>
                                <styled_Notice.NTBTDLA>{infos.Title}</styled_Notice.NTBTDLA>
                            </Link>
                        </styled_Notice.NTBTDLeft>
                        <styled_Notice.NTBTd>{infos.Date}</styled_Notice.NTBTd>
                        <styled_Notice.NTBTd>조회수</styled_Notice.NTBTd>
                    </styled_Notice.NTBTr>
                );
            })}
        </>
    );
};
