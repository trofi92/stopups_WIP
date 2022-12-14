import {useState} from "react";
import logo from "../../image/Header/logo.png";
import userLogo from "../../image/Header/headerUser.png";
import spotLogo from "../../image/Header/headerSpot.png";
import userCategory from "../../image/Header/headerCategory.png";
import { Link } from "react-router-dom";
import HeaderModal from "./HeaderModal/HeaderModal";
import * as styled_H from "../../styled/Header"

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };



    //삼항연산자 사용해서 로그인시 링크와 아닐 시의 링크를 다르게...전부...다르게...설정...해야...하.ㅁ....
    return (
        <styled_H.HB>
            <styled_H.HPosition>
                <Link to={"/"}>
                    <styled_H.HLogoBox>
                        <styled_H.HLogo src={logo} alt={"logo"}/>
                    </styled_H.HLogoBox>
                </Link>

                <styled_H.HNPosition>
                    <styled_H.HNUl>
                        <styled_H.HNLi></styled_H.HNLi>
                        <styled_H.HNLi>
                            <Link to={"/login"}>
                                <styled_H.HIconUser src={userLogo} alt={"userLogo"}/>
                            </Link>
                        </styled_H.HNLi>
                        <styled_H.HNLi>
                            <Link to={"/map"}>
                                <styled_H.HIconSpot src={spotLogo} alt={"spotLogo"}/>
                            </Link>
                        </styled_H.HNLi>
                        <styled_H.HNLi>
                            <styled_H.HIconCategory src={userCategory}
                                           alt={"userCategory"}
                                           onClick={modalClose}/>
                        </styled_H.HNLi>
                    </styled_H.HNUl>
                </styled_H.HNPosition>
            </styled_H.HPosition>
            {modalOpen && <HeaderModal modalClose={modalClose}/>}
        </styled_H.HB>
    );
};

export default Header;
