export async function getData(keyword = "일식") {
  const response = await fetch(
    `http://api.kcisa.kr/openapi/API_TOU_052/request?serviceKey=7d33f4e1-9a96-40a6-a188-90f3de177526&numOfRows=4&pageNo=1&keyword=${keyword}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    }
  );
  const data = await response.json();
  const items = data.response.body.items.item;
  return items || []; // 없으면 빈 배열 반환
}
