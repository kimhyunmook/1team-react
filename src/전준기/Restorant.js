import { getData } from "./api.mjs";
import { useState, useEffect } from "react";
import RestorantInfo from "./RestorantInfo";

export default function Restorant() {
  const [keyword, setKeyword] = useState("");
  const [restorants, setRestorants] = useState([]);

  const handleClick = async () => {
    const data = await getData(keyword);
    setRestorants(data);
  };

  return (
    <div className="restorantCon">
      <h3>식당 검색하기 </h3>
      <div className="inputDiv">
        <input
          className="input"
          placeholder="식당을 찾아보세요"
          onChange={(e) => setKeyword(e.target.value)}
        ></input>
        <button onClick={handleClick}>검색</button>
      </div>
      <div className="restorantInfoCon">
        {restorants.length > 0 ? (
          restorants.map((item, index) => (
            <RestorantInfo
              key={index}
              title={item.title}
              category={item.category2}
              tel={item.tel}
              address={item.address}
            />
          ))
        ) : (
          <p>결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
