import * as styled_Notice from "../../styled/Notice/Notice";
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export const NoticeInner = ({result}) => {
    const [notices, setNotices] = useState([]);

    console.log("공지 검색 결과", result);

    useEffect(() => {
        const notice = async () => {
            await axios
                .get("http://stopupsapi.shop:8080/api/?apikey=TeamYN1670397914440&Notice=ALL&Title=&writeId=")
                .then((res) => {
                    setNotices(res.data);
                })
        };
        notice();
    }, [])

    const searchedAllNotice = notices.filter((data) => {
        if (result !== "") {
            return data.Title.toLowerCase().includes(result.toLowerCase());
        }
    });

    console.log("searchedAllNotice", searchedAllNotice);

    return (
        <>
            {/*검색 결과를 포함하는 공지 제목이 있으면 그것만 띄우기*/}
            {searchedAllNotice.length !== 0 && result !== "" ? (
                searchedAllNotice.map((notice, idx) => {
                    if (notice) {
                        return (
                            <styled_Notice.NTBTr key={notice.Id}>
                                <styled_Notice.NTBTd>{idx + 1}</styled_Notice.NTBTd>
                                <styled_Notice.NTBTDLeft>
                                    <Link to={`/notice/${notice.Id}`} style={{textDecoration: "none"}}>
                                        <styled_Notice.NTBTDLA>{notice.Title}</styled_Notice.NTBTDLA>
                                    </Link>
                                </styled_Notice.NTBTDLeft>
                                <styled_Notice.NTBTd>{notice.Date}</styled_Notice.NTBTd>
                                <styled_Notice.NTBTd>조회수</styled_Notice.NTBTd>
                            </styled_Notice.NTBTr>
                        )
                    }
                })
            ) : (
                //검색 결과를 포함하는 공지 제목이 없으면 전부 띄우기
                notices.map((notice, idx) => {
                    return (
                        <styled_Notice.NTBTr key={notice.Id}>
                            <styled_Notice.NTBTd>{idx + 1}</styled_Notice.NTBTd>
                            <styled_Notice.NTBTDLeft>
                                <Link to={`/notice/${notice.Id}`} style={{textDecoration: "none"}}>
                                    <styled_Notice.NTBTDLA>{notice.Title}</styled_Notice.NTBTDLA>
                                </Link>
                            </styled_Notice.NTBTDLeft>
                            <styled_Notice.NTBTd>{notice.Date}</styled_Notice.NTBTd>
                            <styled_Notice.NTBTd>조회수</styled_Notice.NTBTd>
                        </styled_Notice.NTBTr>
                    )
                })
            )}
        </>
    );
};
