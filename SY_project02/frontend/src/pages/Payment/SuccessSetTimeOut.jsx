import * as styled_Payment from "../../styled/Payment/Payment";
import * as styled_Success from "../../styled/Payment/Success";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const SuccessSetTimeOut = () => {
  const [text1, setText1] = useState(true);
  const [text2, setText2] = useState(false);
  const [text3, setText3] = useState(false);
  const [text4, setText4] = useState(false);
  const [line2, setLien2] = useState(false);
  const [line3, setLien3] = useState(false);
  const [line4, setLien4] = useState(false);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const random = Math.floor(Math.random() * 9001) + 1000;
    const random1 = Math.floor(Math.random() * 70001) + 30000;
    const random2 = Math.floor(Math.random() * 500001) + 500000;
    let timer1 = setTimeout(function () {
      setText1(!text1);
      setText2(!text2);
      setLien2(!line2);
      clearTimeout(timer1);
    }, random);

    let timer2 = setTimeout(function () {
      setText2(false);
      setText3(!text3);
      setLien3(!line3);
      clearTimeout(timer2);
    }, random + random1);

    let timer3 = setTimeout(function () {
      setText3(false);
      setText4(!text4);
      setLien4(!line4);
      clearTimeout(timer3);
    }, random + random1 + random2);
  }, []);

  return (
    <styled_Payment.PSection1>
      <styled_Success.STitleBox>
        {text4 === true ? (
          <styled_Success.STitle1>
            <span>{user?.location?.content}</span>에서
          </styled_Success.STitle1>
        ) : (
          <styled_Success.STitle11>
            <span>{user?.location?.content}</span>에서
          </styled_Success.STitle11>
        )}
        <styled_Success.STitle2>
          n번째 메뉴로
          {text4 === true
            ? " 완성되었습니다(A-1)"
            : " 준비 중입니다(A-1)"}
        </styled_Success.STitle2>
      </styled_Success.STitleBox>
      <styled_Success.STitle3>
        주문 승인 즉시 메뉴 준비가 시작됩니다. 완성 후, 빠르게 픽업해
        주세요.
      </styled_Success.STitle3>
      {/*결제 완료, 주문 요청, 주문 승인, 준비 완료*/}
      <styled_Success.STitle4>
        <styled_Success.STestFlex>
          {/*일정 시간 지남에 따라 바뀌게*/}
          <styled_Success.STF2>
            {text1 === true ? (
              <styled_Success.STest2>결제 완료</styled_Success.STest2>
            ) : (
              <styled_Success.STest>결제 완료</styled_Success.STest>
            )}
            <styled_Success.STLine2 />
          </styled_Success.STF2>
          <styled_Success.STF2>
            {text2 === true ? (
              <styled_Success.STest2>주문 요청</styled_Success.STest2>
            ) : (
              <styled_Success.STest>주문 요청</styled_Success.STest>
            )}
            {line2 === true ? (
              <styled_Success.STLine2 />
            ) : (
              <styled_Success.STLine />
            )}
          </styled_Success.STF2>
          <styled_Success.STF2>
            {text3 === true ? (
              <styled_Success.STest2>주문 승인</styled_Success.STest2>
            ) : (
              <styled_Success.STest>주문 승인</styled_Success.STest>
            )}
            {line3 === true ? (
              <styled_Success.STLine2 />
            ) : (
              <styled_Success.STLine />
            )}
          </styled_Success.STF2>
          <styled_Success.STF2>
            {text4 === true ? (
              <styled_Success.STest2>준비 완료</styled_Success.STest2>
            ) : (
              <styled_Success.STest>준비 완료</styled_Success.STest>
            )}
            {line4 === true ? (
              <styled_Success.STLine2 />
            ) : (
              <styled_Success.STLine />
            )}
          </styled_Success.STF2>
        </styled_Success.STestFlex>
      </styled_Success.STitle4>
    </styled_Payment.PSection1>
  );
};
