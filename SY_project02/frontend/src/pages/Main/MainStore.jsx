import * as styled_Main from "../../styled/Main";
import { Link } from "react-router-dom";

export const MainStore = () => {
  return (
    <styled_Main.MStore>
      <styled_Main.MStoreInner>
        <styled_Main.MSDiv1 />
        <styled_Main.MSDiv2 />
        <styled_Main.MSDiv3 />
        <styled_Main.MSDiv4 />
        <styled_Main.MSDiv5 />
        <styled_Main.MSDiv6 />
        <styled_Main.MSButton>
          <Link to={"/map"} style={{ textDecoration: "none" }}>
            <styled_Main.MSButtonP>매장 찾기</styled_Main.MSButtonP>
          </Link>
        </styled_Main.MSButton>
      </styled_Main.MStoreInner>
    </styled_Main.MStore>
  );
};
