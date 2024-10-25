export default function RestorantInfo({ title, category, tel, address }) {
  return (
    <div>
      <div>이름 : {title}</div>
      <div>종류 : {category}</div>
      <div>tel : {tel}</div>
      <div>주소 : {address}</div>
    </div>
  );
}
