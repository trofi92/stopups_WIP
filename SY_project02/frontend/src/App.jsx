import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Test } from "./pages/Test";
import { NotFound } from "./pages/NotFound";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import JoinAgree from "./pages/Join/JoinAgree";
import Cart from "./pages/Cart/Cart";
import JoinSuccess from "./pages/Join/JoinSuccess";
import Favorite from "./pages/Favorite/Favorite";
import LPlease from "./pages/Login/LPlease";
import Notice from "./pages/Notice/Notice";
import Event from "./pages/Event/Event";
import EInnerText from "./pages/Event/EInnerText";
import JPass from "./pages/Join/JPass";
import MyInfoAgree from "./pages/MyInfo/MyInfoAgree";
import MyInfo from "./pages/MyInfo/MyInfo";
import MIPass from "./pages/MyInfo/Pass/MIPass";
import MIPassword from "./pages/MyInfo/MIPassword";
import MyStopUps from "./pages/MyStopUps";
import ScrollToTop from "./util/ScrollToTop";
import { Success } from "./pages/Payment/Success";
import { Failed } from "./pages/Payment/Failed";
import { Payment } from "./pages/Payment/Payment";
import ServiceReady from "./pages/ServiceReady";
import LFindIdAgree from "./pages/Login/LFindId/LFindIdAgree";
import LIdPass from "./pages/Login/LFindId/LIdPass";
import LFindId from "./pages/Login/LFindId/LFindId";
import LFindPwAgree from "./pages/Login/LFindPw/LFindPwAgree";
import LPwPass from "./pages/Login/LFindPw/LPwPass";
import LFindPw from "./pages/Login/LFindPw/LFindPw";
import NoticeInnerText from "./pages/Notice/NoticeInnerText";
import Search from "./pages/Search/Search";
import Map from "./pages/Map/Map";
import MIPassPassword from "./pages/MyInfo/Pass/MIPassPassword";
import Introduce from "./pages/Introduce/Introduce";
import Menu from "./pages/Menu/Menu";
import MenuEach from "./pages/Menu/MenuItem/MenuEach";
import { Redirect } from "./Redirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/*로그인*/}
        <Route path={"/login"} element={<Login />} />
        {/*로그인 요청*/}
        <Route path={"/loginPlease"} element={<LPlease />} />
        {/*아이디 찾기 동의*/}
        <Route path={"/findIdAgree"} element={<LFindIdAgree />} />
        {/*아이디 찾기 인증*/}
        <Route path={"/idPass"} element={<LIdPass />} />
        {/*아이디 찾기 성공*/}
        <Route path={"/findId"} element={<LFindId />} />
        {/*비밀번호 찾기 동의*/}
        <Route path={"/findPwAgree"} element={<LFindPwAgree />} />
        {/*비밀번호 찾기 인증*/}
        <Route path={"/pwPass"} element={<LPwPass />} />
        {/*비밀번호 수정*/}
        <Route path={"/findPw"} element={<LFindPw />} />
        {/*회원가입 동의*/}
        <Route path={"/joinAgree"} element={<JoinAgree />} />
        {/*회원가입 인증*/}
        <Route path={"/joinPass"} element={<JPass />} />
        {/*회원가입*/}
        <Route path={"/join"} element={<Join />} />
        {/*회원가입 성공*/}
        <Route path={"/joinSuccess"} element={<JoinSuccess />} />
        {/*장바구니*/}
        <Route path={"/cart"} element={<Cart />} />
        {/*찜목록*/}
        <Route path={"/favorite"} element={<Favorite />} />
        {/*공지*/}
        <Route path={"/notice"} element={<Notice />} />
        {/*공지 내용*/} {/*임시*/}
        <Route path={"/notice/:id"} element={<NoticeInnerText />} />
        {/*이벤트*/}
        <Route path={"/event/:id"} element={<Event />} />
        {/*이벤트 - 전체*/}
        <Route path={"/event/all/:id"} element={<EInnerText />} />
        {/*이벤트 - 스탑업스 카드, 스탑업스 리워드, 온라인 (구현X)*/}
        {/*<Route path={"/event/stopUpsCard/:id"} element={<EInnerText />} />*/}
        {/*<Route path={"/event/stopUpsReward/:id"} element={<EInnerText />} />*/}
        {/*<Route path={"/event/online/:id"} element={<EInnerText />} />*/}
        {/*개인정보 확인 및 수정 동의*/}
        <Route path={"/myInfoAgree"} element={<MyInfoAgree />} />
        {/*개인정보 확인 및 수정 인증*/}
        <Route path={"/myInfoPass"} element={<MIPass />} />
        {/*휴대폰 인증 사용할 수 없는 경우의 개인정보 확인 및 수정 인증 */}
        <Route path={"/myInfoPassPassword"} element={<MIPassPassword />} />
        {/*개인정보 확인 및 수정*/}
        <Route path={"/myInfo"} element={<MyInfo />} />
        {/*비밀번호 변경*/}
        <Route path={"/myInfoPassword"} element={<MIPassword />} />
        {/*MyStopUps 한눈에 보기*/}
        <Route path={"/myStopUps"} element={<MyStopUps />} />
        {/*서비스 준비중*/}
        <Route path={"/serviceReady"} element={<ServiceReady />} />
        {/*검색 페이지*/}
        <Route path={"/search"} element={<Search />} />
        {/*지도 페이지*/}
        <Route path={"/map"} element={<Map />} />
        {/*장바구니에서 넘어온 지도 페이지*/}
        <Route path={"/selectMap"} element={<Map />} />
        {/*메뉴 페이지*/}
        <Route path={"/menu/:Category"} element={<Menu />} />
        {/*각 메뉴 상세 페이지*/}
        <Route path={"/menu/:Category/:item"} element={<MenuEach />} />
        {/*스탑없으 소개*/}
        <Route path={"/introduce"} element={<Introduce />} />
        <Route path="/payment" element={<Payment name={"payment"} />} />
        <Route path="/failed" element={<Failed name={"fail"} />} />
        <Route path="/success" element={<Success name={"success"} />} />
        <Route path="/test1" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/menu/*" element={<NotFound />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/test" element={<Test />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
