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
import ESummer from "./pages/Event/ESummer";
import JPass from "./pages/Join/JPass";
import MyInfoAgree from "./pages/MyInfo/MyInfoAgree";
import MyInfo from "./pages/MyInfo/MyInfo";
import MIPass from "./pages/MyInfo/MIPass";
import MIPassword from "./pages/MyInfo/MIPassword";
import MyStopUps from "./pages/MyStopUps";
import ScrollToTop from "./util/ScrollToTop";
import { Success } from "./pages/payment/Success";
import { Failed } from "./pages/payment/Failed";
import { Payment } from "./pages/payment/Payment";
import ServiceReady from "./pages/ServiceReady";
import LFindIdAgree from "./pages/Login/LFindId/LFindIdAgree";
import LIdPass from "./pages/Login/LFindId/LIdPass";
import LFindId from "./pages/Login/LFindId/LFindId";
import LFindPwAgree from "./pages/Login/LFindPw/LFindPwAgree";
import LPwPass from "./pages/Login/LFindPw/LPwPass";
import LFindPw from "./pages/Login/LFindPw/LFindPw";
import NoticeInnerText from "./pages/Notice/NoticeInnerText";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/*" element={<NotFound />} />
        {/*로그인*/}
        <Route path={"/login"} element={<Login />} />
        {/*로그인 요청*/}
        <Route path={"/loginPlease"} element={<LPlease/>} />
        {/*아이디 찾기 동의*/}
        <Route path={"/findIdAgree"} element={<LFindIdAgree/>} />
        {/*아이디 찾기 인증*/}
        <Route path={"/idPass"} element={<LIdPass/>} />
        {/*아이디 찾기 성공*/}
        <Route path={"/findId"} element={<LFindId/>} />
        {/*비밀번호 찾기 동의*/}
        <Route path={"/findPwAgree"} element={<LFindPwAgree/>} />
        {/*비밀번호 찾기 인증*/}
        <Route path={"/pwPass"} element={<LPwPass/>}/>
        {/*비밀번호 수정*/}
        <Route path={"/findPw"} element={<LFindPw/>} />
        {/*회원가입 동의*/}
        <Route path={"/joinAgree"} element={<JoinAgree />} />
        {/*회원가입 인증*/}
        <Route path={"/joinPass"} element={<JPass/>} />
        {/*회원가입*/}
        <Route path={"/join"} element={<Join />} />
        {/*회원가입 성공*/}
        <Route path={"/joinSuccess"} element={<JoinSuccess/>} />
        {/*장바구니*/}
        <Route path={"/cart"} element={<Cart/>} />
        {/*찜목록*/}
        <Route path={"/favorite"} element={<Favorite/>} />
        {/*공지*/}
        <Route path={"/notice"} element={<Notice/>} />
        {/*공지 내용*/} {/*임시*/}
        {/*api에서 공지글 받아 내려서 각 id값에 따라 /:id로 연결되게끔..?*/}
        <Route path={"/noticeText"} element={<NoticeInnerText/>}/>
        {/*이벤트*/}
        <Route path={"/event"} element={<Event/>} />
        {/*이벤트 - 여름 이벤트*/}
        <Route path={"/summerEvent"} element={<ESummer/>} />
        {/*개인정보확인 및 수정 동의*/}
        <Route path={"/myInfoAgree"} element={<MyInfoAgree/>} />
        {/*개인정보 확인 및 수정 인증*/}
        <Route path={"/myInfoPass"} element={<MIPass/>} />
        {/*개인정보 확인 및 수정*/}
        <Route path={"/myInfo"} element={<MyInfo/>} />
        {/*비밀번호 변경*/}
        <Route path={"/myInfoPassword"} element={<MIPassword/>} />
        {/*MyStopUps 한눈에 보기*/}
        <Route path={"/myStopUps"} element={<MyStopUps/>} />
        {/*서비스 준비중*/}
        <Route path={"/serviceReady"} element={<ServiceReady/>} />
        {/*검색 페이지*/}
        <Route path={"/search"} element={<Search/>} />
        <Route
          path="/payment"
          element={<Payment name={"payment"} />}
        />
        <Route path="/failed" element={<Failed name={"fail"} />} />
        <Route
          path="/success"
          element={<Success name={"success"} />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
