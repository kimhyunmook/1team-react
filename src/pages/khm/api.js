import axios from "axios";
export async function webtoonApi(page, perPage, provider) {
  const response = await axios.get(
    `https://korea-webtoon-api-cc7dda2f0d77.herokuapp.com/webtoons?provider=${provider}&page=${page}&perPage=${perPage}&sort=ASC`
  );
  return await response.data;
}
