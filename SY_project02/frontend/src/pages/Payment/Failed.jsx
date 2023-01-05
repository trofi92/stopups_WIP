import React from "react";
import { Link } from "react-router-dom";
import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import * as styled_Success from "../../styled/Payment/Success";
import * as styled_F from "../../styled/Favorite";
import FailedTitle from "../../image/Payment/FailedTitle.png"
import * as styled_Payment from "../../styled/Payment/Payment";
import {Footer} from "../../components/Footer/Footer";
import SuccessTitle from "../../image/Payment/SuccessTitle.png";
import * as styled_C from "../../styled/Cart";
import {STest, STest2, STestFlex, STF2} from "../../styled/Payment/Success";

export const Failed = () => {
  return (
      // 결제 성공
      <styled_AB.AllBox>
          <Header/>

          <styled_Success.SBox>
              {/*성공 헤더*/}
              <styled_F.FHeader>
                  <styled_F.FHTitle>
                      <styled_F.FHTInner>
                          <styled_F.FHTInnerH4>
                              <img src={SuccessTitle} alt={"SuccessTitle"} />
                          </styled_F.FHTInnerH4>
                      </styled_F.FHTInner>
                  </styled_F.FHTitle>
              </styled_F.FHeader>

              <styled_F.FContentsAllBox>
                  {/*매장 및 준비 중*/}
                  <styled_Payment.PSection1>
                      <styled_Success.STitleBox>
                          <styled_Success.STitle1>
                              {/*매장 이름*/}
                              <span>OOO점</span>에서
                          </styled_Success.STitle1>
                          {/*n은 db id값..? A-1도 순차적으로 값 변하게*/}
                          <styled_Success.STitle2>
                              n번째 메뉴로 준비 중입니다(A-1)
                          </styled_Success.STitle2>
                      </styled_Success.STitleBox>
                      <styled_Success.STitle3>
                          주문 승인 즉시 메뉴 준비가 시작됩니다. 완성 후, 빠르게 픽업해 주세요.
                      </styled_Success.STitle3>
                      {/*결제 완료, 주문 요청, 주문 승인, 준비 완료*/}
                      <styled_Success.STitle4>
                          <styled_Success.STestFlex>
                              <styled_Success.STF2>
                                  <styled_Success.STest>
                                      결제 완료
                                  </styled_Success.STest>
                                  <STest2/>
                              </styled_Success.STF2>
                              <styled_Success.STF2>
                                  <styled_Success.STest>
                                      주문 요청
                                  </styled_Success.STest>
                                  <STest2/>
                              </styled_Success.STF2>
                              <styled_Success.STF2>
                                  <styled_Success.STest>
                                      주문 승인
                                  </styled_Success.STest>
                                  <STest2/>
                              </styled_Success.STF2>
                              <styled_Success.STF2>
                                  <styled_Success.STest>
                                      준비 완료
                                  </styled_Success.STest>
                                  <STest2/>
                              </styled_Success.STF2>
                          </styled_Success.STestFlex>
                      </styled_Success.STitle4>
                  </styled_Payment.PSection1>

                  {/*주문 내역*/}
                  <styled_Success.SSection>
                      <div>
                          {/*()안에 주문한 메뉴 갯수*/}
                          <styled_Success.SSTitle>
                              주문내역 (1)
                          </styled_Success.SSTitle>
                      </div>
                      {/*포장 => 포장 // 포장 X => 포장 안함 // 둘다 => 부분 포장*/}
                      <styled_Success.SSTakeOut>
                          포장 옵션 : 포장 안함
                      </styled_Success.SSTakeOut>
                      {/*결제 완료한 메뉴들 map 사용*/}
                      <styled_Payment.PSMenuBox>
                          <styled_Payment.PSMBox>
                              {/*이미지*/}
                              <styled_Payment.PSMBImg/>
                              {/*메뉴 이름*/}
                              <styled_Payment.PSMBText>
                                  <styled_C.CFMTitle>
                                      메뉴 이름
                                  </styled_C.CFMTitle>
                                  {/*옵션*/}
                                  <styled_C.CFMOption>
                                      <styled_C.CFMIceHot>
                                          ICED
                                      </styled_C.CFMIceHot>
                                      <styled_C.CFMSize>
                                          사이즈
                                      </styled_C.CFMSize>
                                      <styled_C.CFMSize>
                                          일회용 컵
                                      </styled_C.CFMSize>
                                      <styled_C.CFMCup>
                                          양
                                      </styled_C.CFMCup>
                                  </styled_C.CFMOption>
                              </styled_Payment.PSMBText>
                          </styled_Payment.PSMBox>
                      </styled_Payment.PSMenuBox>
                  </styled_Success.SSection>
              </styled_F.FContentsAllBox>

              {/*<div>success</div>*/}
              {/*<Link to="/">*/}
              {/*  <button>to main</button>*/}
              {/*</Link>*/}
          </styled_Success.SBox>

          <Footer/>
      </styled_AB.AllBox>

      // 결제 실패
      // <styled_AB.AllBox>
      //     <Header/>
      //
      //     <styled_Success.SBox>
      //         {/*실패 헤더*/}
      //         <styled_F.FHeader>
      //             <styled_F.FHTitle>
      //                 <styled_F.FHTInner>
      //                     <styled_F.FHTInnerH4>
      //                         <img src={FailedTitle} alt={"FailedTitle"} />
      //                     </styled_F.FHTInnerH4>
      //                 </styled_F.FHTInner>
      //             </styled_F.FHTitle>
      //         </styled_F.FHeader>
      //
      //         <styled_F.FContentsAllBox>
      //             {/*결제 실패*/}
      //             <styled_Payment.PSection1>
      //                 <styled_Success.STitleBox>
      //                     <styled_Success.STitle1>
      //                     </styled_Success.STitle1>
      //                     <styled_Success.STitle2>
      //                         결제에 실패했습니다.
      //                     </styled_Success.STitle2>
      //                     <styled_Success.STitle3>
      //                         현재 시스템에 기술 문제가 발생하였습니다.
      //                         다시 시도해 주세요.
      //                     </styled_Success.STitle3>
      //                 </styled_Success.STitleBox>
      //                 {/*버튼*/}
      //                 <styled_Success.SButtonBox>
      //                     <Link to={"/"} style={{textDecoration: "none"}}>
      //                         <styled_Success.SButton2>
      //                             홈페이지로 돌아가기
      //                         </styled_Success.SButton2>
      //                     </Link>
      //                 </styled_Success.SButtonBox>
      //             </styled_Payment.PSection1>
      //         </styled_F.FContentsAllBox>
      //     </styled_Success.SBox>
      //
      //     <Footer/>
      // </styled_AB.AllBox>
  );
};
