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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/loginPlease"} element={<LPlease />} />
        <Route path={"/joinAgree"} element={<JoinAgree />} />
        <Route path={"/join"} element={<Join />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/joinSuccess"} element={<JoinSuccess />} />
        <Route path={"/favorite"} element={<Favorite />} />
        <Route path={"/notice"} element={<Notice />} />
        <Route path={"/event"} element={<Event />} />
        <Route path={"/summerEvent"} element={<ESummer />} />
        <Route path={"/joinPass"} element={<JPass />} />
        <Route path={"/myInfoAgree"} element={<MyInfoAgree />} />
        <Route path={"/myInfo"} element={<MyInfo />} />
        <Route path={"/myInfoPass"} element={<MIPass />} />
        <Route path={"/myInfoPassword"} element={<MIPassword />} />
        <Route path={"/myStopUps"} element={<MyStopUps />} />
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
