import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main/Main";
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
import ScrollToTop from "./utils/ScrollToTop";
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
import UserDelete from "./pages/MyInfo/UserDelete";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {user?.email !== "" ? (
            <>
              <Route path="/" element={<Main />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/cart"} element={<Cart />} />
              <Route path={"/favorite"} element={<Favorite />} />
              <Route path={"/notice"} element={<Notice />} />
              <Route
                path={"/notice/:id"}
                element={<NoticeInnerText />}
              />
              <Route path={"/event/:id"} element={<Event />} />
              <Route
                path={"/event/all/:id"}
                element={<EInnerText />}
              />
              {/*<Route path={"/event/stopUpsCard/:id"} element={<EInnerText />} />*/}
              {/*<Route path={"/event/stopUpsReward/:id"} element={<EInnerText />} />*/}
              {/*<Route path={"/event/online/:id"} element={<EInnerText />} />*/}
              <Route
                path={"/myInfoAgree"}
                element={<MyInfoAgree />}
              />
              <Route path={"/myInfoPass"} element={<MIPass />} />
              <Route
                path={"/myInfoPassPassword"}
                element={<MIPassPassword />}
              />
              <Route path={"/myInfo"} element={<MyInfo />} />
              <Route
                path={"/myInfoPassword"}
                element={<MIPassword />}
              />
              <Route path={"/myStopUps"} element={<MyStopUps />} />
              <Route
                path={"/serviceReady"}
                element={<ServiceReady />}
              />
              <Route path={"/search"} element={<Search />} />
              <Route path={"/map"} element={<Map />} />
              <Route path={"/selectMap"} element={<Map />} />
              <Route path={"/menu/:Category"} element={<Menu />} />
              <Route
                path={"/menu/:Category/:item"}
                element={<MenuEach />}
              />
              <Route path={"/introduce"} element={<Introduce />} />
              <Route
                path="/payment"
                element={<Payment name={"payment"} />}
              />
              <Route
                path="/failed"
                element={<Failed name={"fail"} />}
              />
              <Route
                path="/success"
                element={<Success name={"success"} />}
              />
              <Route path="/menu/*" element={<NotFound />} />
              <Route path="/redirect" element={<Redirect />} />
              <Route path="/userdelete" element={<UserDelete />} />
              <Route path="/*" element={<NotFound />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path={"/joinAgree"} element={<JoinAgree />} />
              <Route path={"/joinPass"} element={<JPass />} />
              <Route path={"/join"} element={<Join />} />
              <Route
                path={"/joinSuccess"}
                element={<JoinSuccess />}
              />
              <Route path={"/loginPlease"} element={<LPlease />} />
              <Route
                path={"/findIdAgree"}
                element={<LFindIdAgree />}
              />
              <Route path={"/idPass"} element={<LIdPass />} />
              <Route path={"/findId"} element={<LFindId />} />
              <Route path={"/findPw"} element={<LFindPw />} />
              <Route
                path={"/findPwAgree"}
                element={<LFindPwAgree />}
              />
              <Route path={"/pwPass"} element={<LPwPass />} />
              <Route path="/*" element={<Main />} />
            </>
          )}
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
