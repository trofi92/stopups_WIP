import * as styled_Main from "../../styled/Main";
import MSImg1 from "../../image/Main/MSeason/MSImg1.png";
import MSImg2 from "../../image/Main/MSeason/MSImg2.png";
import MSImg3 from "../../image/Main/MSeason/MSImg3.png";
import { Link } from "react-router-dom";
import * as styled_BU from "../../styled/Button";

export const MSeason = () => {
  return (
    <styled_Main.MS>
      <styled_Main.MSInner>
        <styled_Main.MSITitle />
        <styled_Main.MSIImg1 src={MSImg1} />
        <styled_Main.MSIImg2 src={MSImg2} />
        <styled_Main.MSIImg3 src={MSImg3} />
        <styled_Main.MSIButtonDiv>
          <Link
            to={"/event/all/1"}
            style={{ textDecoration: "none" }}
          >
            <styled_BU.SeeDetails>자세히 보기</styled_BU.SeeDetails>
          </Link>
        </styled_Main.MSIButtonDiv>
      </styled_Main.MSInner>
    </styled_Main.MS>
  );
};
