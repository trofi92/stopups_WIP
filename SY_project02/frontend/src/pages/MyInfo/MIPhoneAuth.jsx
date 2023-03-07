import React from "react";
import * as styled_Join from "../../styled/Join/Join";
import * as styled_MI from "../../styled/MyInfo/MyInfo";
import { usePhoneSubmit, useSmsSubmit } from "../../hooks/use-submit";
import { checkPhone } from "../../components/Join/JoinRegex";
import { useNavigate } from "react-router-dom";

export const MIPhoneAuth = () => {
  const navigate = useNavigate();
  const [telephone, setTelephone] = React.useState("");
  const [rndNum, setRndNum] = React.useState("");

  const inputPhoneNumberRef = React.useRef();
  const phoneRef = inputPhoneNumberRef?.current?.value;

  const { phoneSubmit, rnd } = usePhoneSubmit();
  const { smsSubmit } = useSmsSubmit(rnd, telephone, null);

  const handlePhoneSubmit = (e) => {
    if (e.target.value === "") {
      alert("휴대전화 번호를 입력해 주세요.");
    }
    setTelephone(phoneRef);
    phoneSubmit(e, telephone);
  };

  const handleSmsSubmit = (e) => {
    document.getElementById("au_number").value = "";
    if (!rnd || rnd !== rndNum) {
      alert("인증에 실패했습니다. 다시 시도해 주세요.");
      return navigate("/MyInfo", { replace: true });
    }
    smsSubmit(e, rndNum);
    return navigate("/MyInfo", {
      state: { telephone: phoneRef, certification: true },
    });
  };

  return (
    <styled_Join.RFSectionDiv>
      <styled_Join.RFSectionStrong>
        휴대폰(필수)&nbsp;
      </styled_Join.RFSectionStrong>
      <styled_MI.MIPhoneDiv>
        <styled_MI.MIPhoneInput
          type="number"
          name="ph_number"
          ref={inputPhoneNumberRef}
          onChange={(e) => checkPhone(e.target.value)}
          placeholder={"휴대전화 번호를 입력해주세요."}
        />
        <styled_MI.MIPhoneA onClick={handlePhoneSubmit}>
          확인
        </styled_MI.MIPhoneA>
      </styled_MI.MIPhoneDiv>

      <styled_MI.MIPhoneDiv>
        <styled_MI.MIPhoneInput
          type="number"
          id="au_number"
          onChange={(e) => setRndNum(e.target.value)}
          placeholder={"인증번호 4자리를 입력해주세요."}
        />
        <styled_MI.MIPhoneA onClick={handleSmsSubmit}>
          인증
        </styled_MI.MIPhoneA>
      </styled_MI.MIPhoneDiv>
    </styled_Join.RFSectionDiv>
  );
};
