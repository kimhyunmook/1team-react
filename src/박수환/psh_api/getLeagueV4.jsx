import axios from "axios";

const getLeagueV4 = async (encryptedSummonerId) => {
    const api_key = "";
    try {
        const response = await axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${api_key}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default getLeagueV4;

