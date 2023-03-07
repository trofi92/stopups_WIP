import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import * as styled_Notice from "../../styled/Notice/Notice";
import NTitleImg from "../../image/Notice/Ntitle.jpg";
import { Footer } from "../../components/Footer/Footer";
import { NoticeInner } from "./NoticeInner";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { API } from "../../utils/urls";

const Notice = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onClickSearch = (e) => {
    e.preventDefault();
    if (search === "") {
      alert("검색어를 입력하세요.");
    } else {
      setResult(search);
    }
  };

  const [notice, setNotice] = useState([]);

  useEffect(() => {
    const notice = async () => {
      await axios
        .get(`${API}&Notice=ALL&Title=&writeId=`)
        .then((res) => {
          setNotice(res.data);
        });
    };
    notice();
  }, []);

  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;

  const postsData = (posts) => {
    if (posts) {
      return posts.slice(offset, offset + limit);
    }
  };

  return (
    <styled_AB.AllBox>
      <Header />
      <styled_Notice.NTitleBox>
        <styled_Notice.NTInner>
          <styled_Notice.NTIH2>
            <styled_Notice.NTIImg src={NTitleImg} alt={"NTitleImg"} />
          </styled_Notice.NTIH2>
        </styled_Notice.NTInner>
      </styled_Notice.NTitleBox>
      <styled_Notice.NB>
        <styled_Notice.NBPosition>
          <styled_Notice.NInput>
            <styled_Notice.NIP>
              <styled_Notice.NIPInput
                type={"text"}
                value={search}
                onChange={onChangeSearch}
                placeholder={"검색어를 입력해 주세요."}
              />
              <styled_Notice.NIPA
                href={"#"}
                type={"submit"}
                onClick={onClickSearch}
              >
                검색
              </styled_Notice.NIPA>
            </styled_Notice.NIP>
          </styled_Notice.NInput>
          <styled_Notice.NTable>
            <styled_Notice.NColgroup>
              <col width={"5.45454%"} />
              <col width={"74.5454%"} />
              <col width={"10.90909%"} />
              <col width={"*"} />
            </styled_Notice.NColgroup>
            <styled_Notice.NThead>
              <styled_Notice.NTr>
                <styled_Notice.NTh scope={"col"}>
                  NO
                </styled_Notice.NTh>
                <styled_Notice.NTh scope={"col"}>
                  제목
                </styled_Notice.NTh>
                <styled_Notice.NTh scope={"col"}>
                  날짜
                </styled_Notice.NTh>
                <styled_Notice.NTh scope={"col"}>
                  조회수
                </styled_Notice.NTh>
              </styled_Notice.NTr>
            </styled_Notice.NThead>
            <styled_Notice.NTbody>
              <NoticeInner
                result={result}
                notice={postsData(notice)}
              />
            </styled_Notice.NTbody>
          </styled_Notice.NTable>
          <styled_Notice.NPagination>
            <Pagination
              limit={limit}
              page={page}
              totalPosts={notice.length}
              setPage={setPage}
            />
          </styled_Notice.NPagination>
        </styled_Notice.NBPosition>
      </styled_Notice.NB>

      <Footer />
    </styled_AB.AllBox>
  );
};

export default Notice;
