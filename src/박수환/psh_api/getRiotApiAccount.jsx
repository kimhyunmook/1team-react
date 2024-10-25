import axios from "axios";

const getRiotApiAccount = async (gameName, tagLine) => {
    const api_key = "";
    try {
        const response = await axios.get(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${api_key}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default getRiotApiAccount;
