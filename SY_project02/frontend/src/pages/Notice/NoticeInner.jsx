import * as styled_Notice from "../../styled/Notice/Notice";
import {Link} from "react-router-dom";

export const NoticeInner = ({result, notice}) => {
    // Notice에서 notice(공지사항 api 데이터 [])와 result(검색 값) 받아옴
    // notice는 postsData 함수에 넣어서 한번에 10개씩 들어옴

    // notice에서 result를 포함하는 값만!
    const searchedAllNotice = notice.filter((data) => {
        if (result !== "") {
            return data.Title.toLowerCase().includes(result.toLowerCase());
        }
    });

    return (
        <>
            {/*검색 결과를 포함하는 공지 제목이 있으면 그것만 띄우기*/}
            {searchedAllNotice.length !== 0 && result !== "" ? (
                searchedAllNotice.map((notice, idx) => {
                    if (notice) {
                        return (
                            <styled_Notice.NTBTr key={idx}>
                                <styled_Notice.NTBTd>{notice.Num}</styled_Notice.NTBTd>
                                <styled_Notice.NTBTDLeft>
                                    <Link to={`/notice/${notice.Num}`} style={{textDecoration: "none"}}>
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
                notice.map((notice, idx) => {
                    return (
                        <styled_Notice.NTBTr key={idx}>
                            <styled_Notice.NTBTd>{notice.Num}</styled_Notice.NTBTd>
                            <styled_Notice.NTBTDLeft>
                                <Link to={`/notice/${notice.Num}`} style={{textDecoration: "none"}}>
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