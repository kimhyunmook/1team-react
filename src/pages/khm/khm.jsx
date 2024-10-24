import { useEffect, useMemo, useState } from "react";
import { webtoonApi } from "./api";
import "./khm.css";

export default function Khm() {
  const spec = {
    이름: "김현묵",
    성별: "남자",
    나이: 30,
    지역: "경기도 부천",
    자기소개:
      "1팀 팀장 김현묵이라고합니다. 웹툰 좋아합니다 api도 그래서 웹툰으로 해봤습니다..",
  };
  const [webtoon, setWebtoon] = useState([]);
  const [webtoonLeng, setWebtoonLeng] = useState(12);
  const [page, setPage] = useState(1);
  const [select, setSelect] = useState("NAVER");

  useEffect(() => {
    webtoonApi(page, webtoonLeng, select).then((res) => {
      setWebtoon([...webtoon, ...res.webtoons]);
    });
    window.addEventListener("scroll", async (e) => {
      e.stopPropagation();
      if (window.innerHeight + window.scrollY === document.body.offsetHeight) {
        setPage(page + 1 * 2);
      }
    });
  }, [page]);

  // const changes = (e) => {
  //   setSelect(e.target.value);
  //   webtoonApi(page, webtoonLeng, select).then((res) => {
  //     console.log("res", res);
  //     setWebtoon([res.webtoons]);
  //   });
  // };
  return (
    <div className="khmContainer">
      {Object.values(spec).map((el, i) => {
        return (
          <Lists
            key={`${el}_${i}`}
            keyValue={Object.keys(spec)[i]}
            value={el}
          />
        );
      })}
      <h2 style={{ marginTop: "30px" }}>이름순 입니다.</h2>
      {/* <select name="" id="" value={select} onChange={changes}>
        <option value="NAVER">네이버</option>
        <option value="KAKAO">카카오</option>
      </select> */}
      <div className="webtoonContainer">
        {webtoon.map((el, i) => {
          return (
            <WebToon
              key={`${el.title}_${i}`}
              provider={el.provider}
              title={el.title}
              url={el.url}
              authors={el.authors ? el.authors : []}
              thumbnail={el.thumbnail ? el.thumbnail[0] : ""}
            />
          );
        })}
      </div>
    </div>
  );
}

function Lists({ keyValue, value }) {
  return (
    <p>
      <span>{keyValue}</span>:{value}
    </p>
  );
}

function WebToon({ provider, title, url, authors, thumbnail }) {
  return (
    <div className="webtoonList">
      <h3 className={provider}>{provider}</h3>
      <h2 className="title">{title}</h2>
      <a href={url}>
        <img src={thumbnail} alt={title} />
        <p className="authors">
          작가:
          {authors.map((v, i) => {
            return (
              <span key={i}>
                {v}
                {i + 1 !== authors.length ? ", " : ""}
              </span>
            );
          })}
        </p>
      </a>
    </div>
  );
}
