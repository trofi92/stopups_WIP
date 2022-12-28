import * as styled_Main from "../../styled/Main";
import {Link} from "react-router-dom";

export const MainReserve = () => {
    return (
        <styled_Main.MReserve>
            <styled_Main.MRInner>
                <styled_Main.MRText1></styled_Main.MRText1>
                <styled_Main.MRText2></styled_Main.MRText2>
                <styled_Main.MRIImg></styled_Main.MRIImg>
                <styled_Main.MRButtonBox>
                    <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                        <styled_Main.MRButton>자세히 보기</styled_Main.MRButton>
                    </Link>
                </styled_Main.MRButtonBox>
            </styled_Main.MRInner>
        </styled_Main.MReserve>
    );
};