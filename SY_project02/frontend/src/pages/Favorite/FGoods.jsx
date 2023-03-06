import * as styled_F from "../../styled/Favorite";

export const FGoods = () => {
  return (
    <styled_F.FCDd1>
      <styled_F.FCDP1 />
      <styled_F.FCDArticle1>
        <styled_F.FCDFieldset1>
          <styled_F.FCDTable1>
            <styled_F.FCDTColgroup>
              <col style={{ width: "52px" }} />
              <col style={{ width: "100px" }} />
              <col style={{ width: "200px" }} />
              <col style={{ width: "364px" }} />
              <col style={{ width: "114px" }} />
            </styled_F.FCDTColgroup>
            <styled_F.FCDTHead1>
              <styled_F.FCDTHTr1>
                <styled_F.FCDTHTh1>
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
              <styled_F.FCDTHTbodyTd1 colSpan={5}>
                서비스 준비중입니다.
              </styled_F.FCDTHTbodyTd1>
            </styled_F.FCDTHTbody1>
          </styled_F.FCDTable1>

          {/*/!*데이터 있을 때만*!/*/}
          {/*/!*전체 선택, 선택 삭제, 장바구니 이동 버튼*!/*/}
          {/*<styled_F.FCDADiv>*/}
          {/*    <styled_F.FCDADUl>*/}
          {/*        /!*전체 선택*!/*/}
          {/*        <styled_F.FCDADLi>*/}
          {/*            <styled_F.FCDADLA>*/}
          {/*                전체 선택*/}
          {/*            </styled_F.FCDADLA>*/}
          {/*        </styled_F.FCDADLi>*/}
          {/*        /!*선택 삭제*!/*/}
          {/*        /!*선택된 제품이 없을 경우 alert("삭제 할 음료를 선택 하세요.")*!/*/}
          {/*        <styled_F.FCDADLi>*/}
          {/*            <styled_F.FCDADLA>*/}
          {/*                선택 삭제*/}
          {/*            </styled_F.FCDADLA>*/}
          {/*        </styled_F.FCDADLi>*/}
          {/*        <styled_F.FCDADLiCart>*/}
          {/*            <styled_F.FCDADLACart>*/}
          {/*                장바구니 이동*/}
          {/*            </styled_F.FCDADLACart>*/}
          {/*        </styled_F.FCDADLiCart>*/}
          {/*    </styled_F.FCDADUl>*/}
          {/*</styled_F.FCDADiv>*/}
        </styled_F.FCDFieldset1>
      </styled_F.FCDArticle1>
    </styled_F.FCDd1>
  );
};
