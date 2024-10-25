import axios from "axios";

const getChampionMastery = async (puuid) => {
    const api_key = "";
    try {
        const response = await axios.get(`https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}?api_key=${api_key}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default getChampionMastery;

