import * as styled_Search from "../../styled/Search";
import {Link} from "react-router-dom";

export const SMap = () => {
    return (
        <styled_Search.SSection>
            {/*매장 헤더*/}
            <styled_Search.SSHeader>
                <styled_Search.SSHH2>매장</styled_Search.SSHH2>
                <Link to={"/serviceReady"}>
                    <styled_Search.SSHP>매장 더보기</styled_Search.SSHP>
                </Link>
            </styled_Search.SSHeader>
            {/*매장 내용*/}
            <styled_Search.SSUl>
                <styled_Search.SSLi>
                    <styled_Search.SSLP>검색 결과가 없습니다.</styled_Search.SSLP>
                </styled_Search.SSLi>
            </styled_Search.SSUl>
        </styled_Search.SSection>
    );
};