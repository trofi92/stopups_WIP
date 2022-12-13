import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <div>문제가 발생했어요!</div>;
      <button>
        <Link to="/">메인 페이지로 이동</Link>
      </button>
    </>
  );
};
