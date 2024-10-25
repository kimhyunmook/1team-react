import React, { useState, useEffect } from "react";
import "../박수환/psh_css/psh.css";
import getRiotApiAccount from "../박수환/psh_api/getRiotApiAccount";
import getSummonerByPuuid from "../박수환/psh_api/getSummonerByPuuid";
import getLeagueV4 from "../박수환/psh_api/getLeagueV4";
import api사용 from "../박수환/psh_css/api사용.png";
import getChampionMastery from "../박수환/psh_api/getChampionMastery";

export default function ParkSooHwan() {
  const [apiAccountData, setApiAccountData] = useState([]);
  const [summonerData, setSummonerData] = useState([]);
  const [LeagueV4, setLeagueV4] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [tempId, setTempId] = useState("");
  const [gameName, setId] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [tempTagLine, setTempTagLine] = useState("");
  const [championMasteryData, setChampionMasteryData] = useState([]);

  const RiotAccount = async () => {
    const axiosRiotAccount = await getRiotApiAccount(gameName, tagLine);
    setApiAccountData(axiosRiotAccount);
    console.log("First API Response:", axiosRiotAccount);

    const summoner = await getSummonerByPuuid(axiosRiotAccount.puuid);
    console.log("Second API Response:", summoner);
    setSummonerData(summoner);

    const championMastery = await getChampionMastery(axiosRiotAccount.puuid);
    setChampionMasteryData(championMastery);

    const leagueEntries = await getLeagueV4(summoner.id);
    console.log("Third API Response:", leagueEntries);
    setLeagueV4(leagueEntries);

    const soloQueueEntry = leagueEntries.find(
      (entry) => entry.queueType === "RANKED_SOLO_5x5"
    );

    if (soloQueueEntry) {
      const soloTier = soloQueueEntry.tier;
      console.log("Extracted Solo Queue Tier:", soloTier);
      setLeagueV4(soloQueueEntry);
    } else {
      console.log("정보를 찾을 수 없습니다.");
    }
  };

  useEffect(() => {
    setTempId("");
    setTempTagLine("");
    if (gameName && tagLine) {
      RiotAccount();
      setShowMore1(true);
    }
  }, [gameName, tagLine]);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const onChangeId = (e) => {
    setTempId(e.target.value);
  };
  const onChangeTag = (e) => {
    setTempTagLine(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) onClickSearch();
  };

  const onClickSearch = () => {
    setId(tempId);
    setTagLine(tempTagLine);
  };

  return (
    <div className="pshcover">
      <div className="main">
        <div className="introduce-container">
          {showMore ? <div></div> : <h1 className="title">박수환 자기소개</h1>}
          <p className="intro-text">
            {showMore && (
              <div className="intro-text-div">
                <div className="intro-text-div-div">
                  안녕하세요. 1팀 박수환입니다.
                  <br /> 다른 IT쪽에서 일하다가 개발일을 하고싶어 교육에
                  지원했습니다.
                </div>
                <div>
                  처음 시작할땐 html/css도 잘 몰라서 힘들었는데, 공부하면서
                  몰랐던걸 배우고 배운걸로 웹사이트를 직접 만들면서 보람을
                  느끼는것같습니다.
                </div>
                <div>
                  다들 착하신것같고, 서로 협업하면서 초급프로젝트까지 잘 마무리
                  되었으면 좋겠습니다.
                </div>
              </div>
            )}
          </p>
          <button className="toggle-btn" onClick={handleToggle}>
            {showMore ? "닫기" : "자기소개 보기"}
          </button>
        </div>

        <div className="id-box">
          <h4>Roit API 사용</h4>
          <h3>아이디를 입력하세요</h3>
          <div className="input-box">
            <input
              value={tempId}
              onChange={onChangeId}
              className="all-item-searchBox1"
              placeholder="아이디 입력"
            ></input>
            <input
              value={tempTagLine}
              onChange={onChangeTag}
              onKeyDown={onKeyDown}
              className="all-item-searchBox2"
              placeholder="태그(#뺴고 입력)"
            ></input>
          </div>
          <button className="toggle-btn" onClick={onClickSearch}>
            조회하기
          </button>
          {showMore1 && (
            <div>
              <div>
                닉네임 : {apiAccountData.gameName}#{apiAccountData.tagLine}
              </div>
              <div>Level : {summonerData.summonerLevel}</div>
              <div>tier : {LeagueV4.tier}</div>
              <div>
                승:{LeagueV4.wins} 패:{LeagueV4.losses}
              </div>
              <div>
                승률 :{" "}
                {Math.round(
                  (LeagueV4.wins / (LeagueV4.wins + LeagueV4.losses)) * 100
                )}
                %
              </div>
              <div>
                {championMasteryData.length !== 0 && (
                  <ul className="champion-Data">
                    {championMasteryData.slice(0, 3).map((champion, index) => (
                      <div key={champion.championId}>
                        <div>{index + 1}위</div>
                        <div>챔피언 ID: {champion.championId}</div>
                        <div>챔피언 레벨: {champion.championLevel}</div>
                        <div>
                          최근 플레이:{" "}
                          {new Date(champion.lastPlayTime).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="API-use">
          API사용 사진 league-v4 / summoner-v4 / account-v1 /
          champion-mastery-v4사용
          <img src={api사용} alt="api사용" />
        </div>
      </div>
    </div>
  );
}
