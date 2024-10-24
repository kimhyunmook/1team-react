import axios from "axios";

const getSummonerByPuuid = async (puuid) => {
    const api_key = "RGAPI-bf62ab80-4906-43b4-8575-9e7505f2495d";
    try {
        const response = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${api_key}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default getSummonerByPuuid;

