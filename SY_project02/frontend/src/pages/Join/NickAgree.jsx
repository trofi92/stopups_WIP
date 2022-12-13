import * as styled_JoinAB from "../../styled/Join/JoinAgreeBox";
import "./css/homePageAgree.css"

export const NickAgree = () => {
    return (
        <>
            <styled_JoinAB.ABox>
                <styled_JoinAB.ABSBox>
                    <styled_JoinAB.ABSInnerBox>
                        <styled_JoinAB.ABSIBP>
                            <div>
                                <div className="privacy_cont">
                                    <p className="mb15">
                                        본인은 스타벅스 코리아를 운영하는 주식회사 에스씨케이컴퍼니(이하 “회사”라 합니다)가 제공하는 콜 마이 네임 서비스(이하 “서비스”라 합니다)를
                                        이용하기 위해, 다음과 같이 “회사”가 본인의 개인정보를 수집·이용하는 것에 동의합니다.</p>
                                    <p className="mb15 fontBold underLine">※ 귀하께서는 개인정보 수집·이용에 대한 동의를 거부하실 수 있으나, 동의를 거부하실
                                        경우 서비스 이용을 하실 수 없습니다.</p>
                                    <ul className="pri_con mb40">
                                        <li>
                                            <span className="fontBold">1. 개인정보 항목·목적·보유기간</span>
                                            <table className="vod_tb_ag mb20 mt10">
                                                <caption className="hid">수집하는 개인정보에 대한 항목, 목적, 보유기간 안내 테이블</caption>
                                                <colgroup>
                                                    <col width=""/>
                                                    <col width="80%"/>
                                                </colgroup>
                                                <thead>
                                                <tr>
                                                    <th scope="col">구분</th>
                                                    <th scope="col">내역</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row"><span className="fontBold">항목</span></th>
                                                    <td className="taLeft">닉네임</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><span className="fontBold">목적</span></th>
                                                    <td>
                                                        콜 마이 네임 서비스
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><span className="fontBold">보유 및 <br/>이용기간</span></th>
                                                    <td className="pointFont"><span className="underLine">회원 탈퇴 시 까지 또는 관계법령에 의한 별도 보존기간 </span> (2.
                                                        관계법령에 의한 개인정보 보존기간 참고)
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </li>
                                        <li>
                                            <span className="fontBold">2. 관계법령에 의한 개인정보 보존기간</span>
                                            <ul>
                                                <li className="pointFont">- 서비스이용기록, 접속로그, 접속IP정보 (통신비밀보호법 : 3개월)</li>
                                                <li className="pointFont">- 표시/광고에 관한 기록 (전자상거래법 : 6개월)</li>
                                                <li className="pointFont">- 계약 또는 청약철회 등에 관한 기록 (전자상거래법 : 5년)</li>
                                                <li className="pointFont">- 대금결제 및 재화 등의 공급에 관한 기록 (전자상거래법 : 5년)</li>
                                                <li className="pointFont">- 소비자의 불만 또는 분쟁처리에 관한 기록 (전자상거래법 : 3년)</li>
                                            </ul>
                                        </li>

                                        <li className="mt20">
                                            <span className="fontBold">3. 서비스 이용과정 및 사업 처리과정에서 수집될 수 있는 개인정보의 범위 </span>
                                            <p className="pl20">서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보, 결제기록</p>
                                            <p className="pl20">* 쿠키의 경우 구체적인 운영 내역과 설정 거부 방법 등은 본 홈페이지 개인정보처리방침 “개인정보 자동수집
                                                장치의 설치, 운영 및 그 거부에 관한 사항”에서 확인하실 수 있습니다.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </styled_JoinAB.ABSIBP>
                    </styled_JoinAB.ABSInnerBox>
                </styled_JoinAB.ABSBox>
            </styled_JoinAB.ABox>
        </>
    );
};