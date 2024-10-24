import axios from "axios";

const getRiotApiAccount = async (gameName, tagLine) => {
    const api_key = "RGAPI-bf62ab80-4906-43b4-8575-9e7505f2495d";
    try {
        const response = await axios.get(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${api_key}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default getRiotApiAccount;