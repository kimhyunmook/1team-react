import axios from "axios";

const getLeagueV4 = async (encryptedSummonerId) => {
    const api_key = "RGAPI-bf62ab80-4906-43b4-8575-9e7505f2495d";
    try {
        const response = await axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${api_key}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default getLeagueV4;

