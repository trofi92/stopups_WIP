import * as styled_F from "../../styled/Favorite";

export const FGoods = () => {
    return (
        <styled_F.FCDd1>
            <styled_F.FCDP1/>
            <styled_F.FCDArticle1>
                <styled_F.FCDFieldset1>
                    <styled_F.FCDTable1>
                        <styled_F.FCDTColgroup>
                            <col style={{width: "52px"}}/>
                            <col style={{width: "60px"}}/>
                            <col style={{width: "185px"}}/>
                            <col style={{width: "419px"}}/>
                            <col style={{width: "114px"}}/>
                        </styled_F.FCDTColgroup>
                        <styled_F.FCDTHead1>
                            <styled_F.FCDTHTr1>
                                <styled_F.FCDTHTh1>
                                    {/*체크박스 체크시 이미지 변경*/}
                                    <styled_F.FCDTHThDiv1>
                                        <styled_F.FCDTHThDInput1
                                            type={"checkbox"}
                                            title={"전체 선택"}
                                            />
                                    </styled_F.FCDTHThDiv1>
                                </styled_F.FCDTHTh1>
                                <styled_F.FCDTHTh1>No</styled_F.FCDTHTh1>
                                <styled_F.FCDTHTh1>상품명</styled_F.FCDTHTh1>
                                <styled_F.FCDTHTh1>그라인드 옵션</styled_F.FCDTHTh1>
                                <styled_F.FCDTHTh1>등록일</styled_F.FCDTHTh1>
                            </styled_F.FCDTHTr1>
                        </styled_F.FCDTHead1>

                        {/*<styled_F.FCDTHTbody1>*/}
                        {/*    /!*데이터 있을 때*!/*/}
                        {/*    <styled_F.FCDTHTbodyTdOK>*/}
                        {/*        <styled_F.FCDTHThDiv1>*/}
                        {/*            <styled_F.FCDTHThDInput1*/}
                        {/*                type={"checkbox"}*/}
                        {/*                title={"전체 선택"}*/}
                        {/*            />*/}
                        {/*        </styled_F.FCDTHThDiv1>*/}
                        {/*    </styled_F.FCDTHTbodyTdOK>*/}
                        {/*    <styled_F.FCDTHTbodyTdOK>번</styled_F.FCDTHTbodyTdOK>*/}
                        {/*    <styled_F.FCDTHTbodyTdOK>상품명</styled_F.FCDTHTbodyTdOK>*/}
                        {/*    <styled_F.FCDTHTbodyTdOK>그라인드 옵션</styled_F.FCDTHTbodyTdOK>*/}
                        {/*    <styled_F.FCDTHTbodyTdOK>등록일</styled_F.FCDTHTbodyTdOK>*/}
                        {/*</styled_F.FCDTHTbody1>*/}

                        <styled_F.FCDTHTbody1>
                            {/*데이터 없을 때*/}
                            <styled_F.FCDTHTbodyTd1 colSpan={5}>데이터가 없습니다.</styled_F.FCDTHTbodyTd1>
                        </styled_F.FCDTHTbody1>
                    </styled_F.FCDTable1>
                </styled_F.FCDFieldset1>
            </styled_F.FCDArticle1>
        </styled_F.FCDd1>
    );
};