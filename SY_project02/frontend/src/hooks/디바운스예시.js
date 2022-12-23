// import React from "react";
// import { useDebounce } from "./use-debounce";

// const DATA = [
//   "세상",
//   "마상",
//   "선생님",
//   "프로젝트",
//   "버스",
//   "피곤",
//   "cu편의점",
//   "custom",
// ];

// export default function 디바운스예시() {
//   const [results, setResults] = React.useState([]);
//   const [text, setText] = React.useState("");
//   // text = val
//   // 500 = delay
//   const deb = useDebounce(text, 500);

//   React.useEffect(() => {
//     const searchData = DATA.filter((el) =>
//       el.toLowerCase().includes(deb)
//     );
//     setResults(searchData);
//   }, [deb]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       {results.length > 0 ? (
//         results.map((el, idx) => <div key={idx}>{el}</div>)
//       ) : (
//         <div>no results</div>
//       )}
//     </div>
//   );
// }
