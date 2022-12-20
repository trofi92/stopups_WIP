import React from "react";
import * as styled_Join from "../../styled/Join/Join";
import * as styled_MI from "../../styled/MyInfo/MyInfo";
import { usePhoneSubmit, useSmsSubmit } from "../../hooks/use-submit";
import { checkPhone } from "../../components/join/JoinRegex";

export const MIPhoneAuth = () => {
  const inputPhoneNumberRef = React.useRef();
  const inputRndRef = React.useRef();
  const [telephone, setTelephone] = React.useState("");
  const [number, setNumber] = React.useState();

  const { phoneSubmit, rnd } = usePhoneSubmit();
  const { smsSubmit } = useSmsSubmit(1234, number, null);

  const handlePhoneSubmit = (e) => {
    setNumber(e.target.value);
    phoneSubmit(e, e.target.closest('input[name="ph_number"]').value);
  };

  console.log("state number =>", number);
  console.log("rnd =>", rnd);

  const handleSmsSubmit = (e) => {
    console.log("rnd-target=>", e.target.value);
    if (!rnd || rnd !== e.target.value) {
      alert("인증에 실패했습니다. 다시 시도해주세요");
      // navigate("/MyInfo", { replace: true });
    }
    alert("인증되었습니다.");
    smsSubmit(e, e.target.closest('input[name="au_number"]').value);
  };

  const onChangeTelephone = (e) => {
    checkPhone(e);
    setTelephone(e.target.value);
    console.log(
      "fuck=>",
      e.target.closest('input[name="phone_number"]').value
    );
  };

  return (
    <styled_Join.RFSectionDiv>
      <styled_Join.RFSectionStrong>
        휴대폰(필수)&nbsp;
      </styled_Join.RFSectionStrong>
      <form onSubmit={handlePhoneSubmit}>
        <styled_MI.MIPhoneDiv>
          <styled_MI.MIPhoneInput
            name="ph_number"
            onChange={onChangeTelephone}
            ref={inputPhoneNumberRef}
            placeholder={"휴대전화 번호를 입력해 주세요."}
          />
          <styled_MI.MIPhoneA>확인</styled_MI.MIPhoneA>
        </styled_MI.MIPhoneDiv>
      </form>

      <styled_MI.MIPhoneDiv>
        <form onSubmit={handleSmsSubmit}>
          <styled_MI.MIPhoneInput
            name="au_number"
            placeholder={"인증번호 4자리를 입력해 주세요."}
            ref={inputRndRef}
          />
          <styled_MI.MIPhoneA>인증</styled_MI.MIPhoneA>
        </form>
      </styled_MI.MIPhoneDiv>
    </styled_Join.RFSectionDiv>
  );
};
