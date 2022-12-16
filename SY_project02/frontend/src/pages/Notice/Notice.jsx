import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import * as styled_Notice from "../../styled/Notice/Notice";
import NTitleImg from "../../image/Notice/Ntitle.jpg"
import NNext from "../../image/Notice/NNext.jpg"
import {Footer} from "../../components/Footer/Footer";
import {NoticeInner} from "./NoticeInner";
import {useState} from "react";

const Notice = () => {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState("");

    const onChangeSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const onClickSearch = (e) => {
        e.preventDefault();
        if (search === "") {
            alert("검색어를 입력하세요")
        } else  {
            setResult(search);
        }
    };

    return (
        <styled_AB.AllBox>
            <Header/>

            {/*공지사항 타이틀*/}
            <styled_Notice.NTitleBox>
                <styled_Notice.NTInner>
                    <styled_Notice.NTIH2>
                        <styled_Notice.NTIImg src={NTitleImg} alt={"NTitleImg"}/>
                    </styled_Notice.NTIH2>
                </styled_Notice.NTInner>
            </styled_Notice.NTitleBox>

            {/*공지사항*/}
            <styled_Notice.NB>
                <styled_Notice.NBPosition>
                    {/*공지사항 검색창*/}
                    <styled_Notice.NInput>
                        <styled_Notice.NIP>
                            <styled_Notice.NIPInput
                                type={"text"}
                                value={search}
                                onChange={onChangeSearch}
                                placeholder={"검색어를 입력해 주세요."}
                            />
                            <styled_Notice.NIPA
                                href={"#"}
                                type={"submit"}
                                onClick={onClickSearch}
                            >
                                검색
                            </styled_Notice.NIPA>
                        </styled_Notice.NIP>
                    </styled_Notice.NInput>
                    {/*공지사항 게시글들*/}
                    <styled_Notice.NTable>
                        {/*넓이*/}
                        <styled_Notice.NColgroup>
                            <col width={"5.45454%"}/>
                            <col width={"74.5454%"}/>
                            <col width={"10.90909%"}/>
                            <col width={"*"}/>
                        </styled_Notice.NColgroup>
                        {/*게시글들 헤드*/}
                        <styled_Notice.NThead>
                            <styled_Notice.NTr>
                                <styled_Notice.NTh scope={"col"}>NO</styled_Notice.NTh>
                                <styled_Notice.NTh scope={"col"}>제목</styled_Notice.NTh>
                                <styled_Notice.NTh scope={"col"}>날짜</styled_Notice.NTh>
                                <styled_Notice.NTh scope={"col"}>조회수</styled_Notice.NTh>
                            </styled_Notice.NTr>
                        </styled_Notice.NThead>
                        {/*게시글들 박스*/}
                        <styled_Notice.NTbody>
                            {/*각각 게시글*/}
                            <NoticeInner result={result}/>
                        </styled_Notice.NTbody>
                    </styled_Notice.NTable>
                    {/*게시글 페이지*/}
                    <styled_Notice.NPagination>
                        {/*숫자*/}
                        <styled_Notice.NPUl>
                            <styled_Notice.NPLi>
                                <styled_Notice.NPAClicked>1</styled_Notice.NPAClicked>
                            </styled_Notice.NPLi>
                            <styled_Notice.NPLi>
                                <styled_Notice.NPA>2</styled_Notice.NPA>
                            </styled_Notice.NPLi>
                            {/*다음 버튼*/}
                            <styled_Notice.NPLNext>
                                <styled_Notice.NPLNA href={"#"}>
                                    <styled_Notice.NPLNAImg src={NNext} alt={"NNext"}/>
                                </styled_Notice.NPLNA>
                            </styled_Notice.NPLNext>
                        </styled_Notice.NPUl>
                    </styled_Notice.NPagination>
                </styled_Notice.NBPosition>
            </styled_Notice.NB>

            <Footer/>
        </styled_AB.AllBox>
    );
};

export default Notice;
