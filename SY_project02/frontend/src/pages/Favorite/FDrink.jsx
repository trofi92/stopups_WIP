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
  FCDTHTbodyTdOK,
} from "../../styled/Favorite";

export const FDrink = () => {
  // 데이터 끌어오기
  // 데이터 있을 때 없을 때 삼항연산자로 구현

  return (
    <FCDd1>
      <FCDP1 />
      <FCDArticle1>
        <FCDFieldset1>
          <FCDTable1>
            <FCDTColgroup>
              <col style={{ width: "52px" }} />
              <col style={{ width: "60px" }} />
              <col style={{ width: "195px" }} />
              <col style={{ width: "409px" }} />
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
                <FCDTHTh1>음료명</FCDTHTh1>
                <FCDTHTh1>퍼스널 옵션</FCDTHTh1>
                <FCDTHTh1>등록일</FCDTHTh1>
              </FCDTHTr1>
            </FCDTHead1>

            <FCDTHTbody1>
              {/*데이터 있을 때*/}
              {/*    <FCDTHTbodyTdOK>*/}
              {/*        <FCDTHThDiv1>*/}
              {/*            <FCDTHThDInput1*/}
              {/*                type={"checkbox"}*/}
              {/*                title={"전체 선택"}*/}
              {/*            />*/}
              {/*        </FCDTHThDiv1>*/}
              {/*    </FCDTHTbodyTdOK>*/}
              {/*    <FCDTHTbodyTdOK>1</FCDTHTbodyTdOK>*/}
              {/*    <FCDTHTbodyTdOK>바닐라 크림 프라푸치노</FCDTHTbodyTdOK>*/}
              {/*    <FCDTHTbodyTdOK>프라푸치노용 시럽, 바닐라 시럽(4), 두유, 얼음 많이, 프라푸치노 자바칩(9), 일반휘핑 많이</FCDTHTbodyTdOK>*/}
              {/*    <FCDTHTbodyTdOK>2022-12-01 09:45:22</FCDTHTbodyTdOK>*/}
              {/*데이터 없을 때*/}
              <FCDTHTbodyTd1 colSpan={5}>
                데이터가 없습니다.
              </FCDTHTbodyTd1>
            </FCDTHTbody1>
          </FCDTable1>
        </FCDFieldset1>
      </FCDArticle1>
    </FCDd1>
  );
};
