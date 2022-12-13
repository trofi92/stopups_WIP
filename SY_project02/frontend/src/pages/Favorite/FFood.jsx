import {
  FCDd1,
  FCDArticle1,
  FCDP1,
  FCDFieldset1,
  FCDTable1,
  FCDTHead1,
  FCDTHTr1,
  FCDTColgroup,
  FCDTHTh1,
  FCDTHThDiv1,
  FCDTHThDInput1,
  FCDTHTbody1,
  FCDTHTbodyTd1,
  FCDTHTbodyTr1,
  FCDTHTbodyTdOK,
} from "../../styled/Favorite";

export const FFood = () => {
  return (
    <FCDd1>
      <FCDP1 />
      <FCDArticle1>
        <FCDFieldset1>
          <FCDTable1>
            <FCDTColgroup>
              <col style={{ width: "52px" }} />
              <col style={{ width: "60px" }} />
              <col style={{ width: "210px" }} />
              <col style={{ width: "185px" }} />
              <col style={{ width: "204px" }} />
              <col style={{ width: "114px" }} />
            </FCDTColgroup>
            <FCDTHead1>
              <FCDTHTr1>
                <FCDTHTh1>
                  {/*체크박스 체크시 이미지 변경*/}
                  <FCDTHThDiv1>
                    <FCDTHThDInput1
                      type={"checkbox"}
                      title={"전체 선택"}
                    />
                  </FCDTHThDiv1>
                </FCDTHTh1>
                <FCDTHTh1>No</FCDTHTh1>
                <FCDTHTh1>푸드명</FCDTHTh1>
                <FCDTHTh1>워밍 옵션</FCDTHTh1>
                <FCDTHTh1>메뉴 추가</FCDTHTh1>
                <FCDTHTh1>등록일</FCDTHTh1>
              </FCDTHTr1>
            </FCDTHead1>

            {/*<FCDTHTbody1>*/}
            {/*    /!*데이터 있을 때*!/*/}
            {/*    <FCDTHTbodyTdOK>*/}
            {/*        <FCDTHThDiv1>*/}
            {/*            <FCDTHThDInput1*/}
            {/*                type={"checkbox"}*/}
            {/*                title={"전체 선택"}*/}
            {/*            />*/}
            {/*        </FCDTHThDiv1>*/}
            {/*    </FCDTHTbodyTdOK>*/}
            {/*    <FCDTHTbodyTdOK>번호</FCDTHTbodyTdOK>*/}
            {/*    <FCDTHTbodyTdOK>푸드 명</FCDTHTbodyTdOK>*/}
            {/*    <FCDTHTbodyTdOK>워밍 옵션</FCDTHTbodyTdOK>*/}
            {/*    <FCDTHTbodyTdOK>메뉴 추가</FCDTHTbodyTdOK>*/}
            {/*    <FCDTHTbodyTdOK>2022-12-01 09:45:22</FCDTHTbodyTdOK>*/}
            {/*</FCDTHTbody1>*/}

            <FCDTHTbody1>
              {/*데이터 없을 때*/}
              <FCDTHTbodyTd1 colSpan={6}>
                데이터가 없습니다.
              </FCDTHTbodyTd1>
            </FCDTHTbody1>
          </FCDTable1>
        </FCDFieldset1>
      </FCDArticle1>
    </FCDd1>
  );
};
