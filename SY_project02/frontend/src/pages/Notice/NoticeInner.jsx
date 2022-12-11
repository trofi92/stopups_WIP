import {NTBTd, NTBTDLA, NTBTDLeft, NTBTr} from "../../styled/Notice/Notice";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";


export const NoticeInner = () => {
    const [info, setInfo] = useState([]);
    const getInfo = async () => {
        const res = await axios.get('http://54.180.86.156:8080/api/?apikey=TeamYN1670397914440&Notice=ALL&Title=&writeId=');
        setInfo(res.data)
    }
    useEffect(() => {
            getInfo().then(r => console.log("111111=>", r));
        }
        , []
    )

    console.log("2222222222=>", info);

    // 조회수 세션스토리지 카운트

    //

    return (
        <>
            {info.map((infos, idx) => {
                return (
                    <NTBTr key={idx}>
                        <NTBTd>{idx + 1}</NTBTd>
                        <NTBTDLeft>
                            <Link to={`/noticeText`} style={{textDecoration: "none"}}>
                                <NTBTDLA>{infos.Title}</NTBTDLA>
                            </Link>
                        </NTBTDLeft>
                        <NTBTd>{infos.Date}</NTBTd>
                        <NTBTd>조회수</NTBTd>
                    </NTBTr>
                );
            })}
        </>
    );
};

