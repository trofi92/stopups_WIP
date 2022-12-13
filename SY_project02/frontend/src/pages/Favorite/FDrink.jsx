import * as styled_F from "../../styled/Favorite";

export const FDrink = () => {
  // 데이터 끌어오기
  // 데이터 있을 때 없을 때 삼항연산자로 구현

    return (
        <styled_F.FCDd1>
            <styled_F.FCDP1/>
            <styled_F.FCDArticle1>
                <styled_F.FCDFieldset1>
                    <styled_F.FCDTable1>
                        <styled_F.FCDTColgroup>
                            <col style={{width: "52px"}}/>
                            <col style={{width: "60px"}}/>
                            <col style={{width: "195px"}}/>
                            <col style={{width: "409px"}}/>
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
                                <styled_F.FCDTHTh1>음료명</styled_F.FCDTHTh1>
                                <styled_F.FCDTHTh1>퍼스널 옵션</styled_F.FCDTHTh1>
                                <styled_F.FCDTHTh1>등록일</styled_F.FCDTHTh1>
                            </styled_F.FCDTHTr1>
                        </styled_F.FCDTHead1>

                        <styled_F.FCDTHTbody1>
                            {/*데이터 있을 때*/}
                            {/*    <styled_F.FCDTHTbodyTdOK>*/}
                            {/*        <styled_F.FCDTHThDiv1>*/}
                            {/*            <styled_F.FCDTHThDInput1*/}
                            {/*                type={"checkbox"}*/}
                            {/*                title={"전체 선택"}*/}
                            {/*            />*/}
                            {/*        </styled_F.FCDTHThDiv1>*/}
                            {/*    </styled_F.FCDTHTbodyTdOK>*/}
                            {/*    <styled_F.FCDTHTbodyTdOK>1</styled_F.FCDTHTbodyTdOK>*/}
                            {/*    <styled_F.FCDTHTbodyTdOK>바닐라 크림 프라푸치노</styled_F.FCDTHTbodyTdOK>*/}
                            {/*    <styled_F.FCDTHTbodyTdOK>프라푸치노용 시럽, 바닐라 시럽(4), 두유, 얼음 많이, 프라푸치노 자바칩(9), 일반휘핑 많이</styled_F.FCDTHTbodyTdOK>*/}
                            {/*    <styled_F.FCDTHTbodyTdOK>2022-12-01 09:45:22</styled_F.FCDTHTbodyTdOK>*/}
                            {/*데이터 없을 때*/}
                            <styled_F.FCDTHTbodyTd1 colSpan={5}>데이터가 없습니다.</styled_F.FCDTHTbodyTd1>
                        </styled_F.FCDTHTbody1>
                    </styled_F.FCDTable1>
                </styled_F.FCDFieldset1>
            </styled_F.FCDArticle1>
        </styled_F.FCDd1>
    );
};