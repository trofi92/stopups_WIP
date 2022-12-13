import * as styled_Main from "../../styled/Main";
import {Link} from "react-router-dom";

export const MSPromotionBanner = () => {
    return (
        <styled_Main.SPB>
            <styled_Main.SPBBox>
                <styled_Main.SPBText>
                    <styled_Main.SPBTP>
                        여름을 더욱 특별하게 만들어줄 원두
                        <br/>
                        <strong style={{fontSize: "20px"}}>보야지 블렌드</strong>
                        <br/>
                        미디움 로스트의 초콜릿과 너츠향이 매력적인
                        <br/>
                        르완다, 페루, 웨스트 자바의 혼합 커피
                    </styled_Main.SPBTP>
                    <styled_Main.SPBTButtonBox>
                        <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                            <styled_Main.SPBTButton>자세히 보기</styled_Main.SPBTButton>
                        </Link>
                    </styled_Main.SPBTButtonBox>
                </styled_Main.SPBText>
            </styled_Main.SPBBox>
        </styled_Main.SPB>
    );
};
