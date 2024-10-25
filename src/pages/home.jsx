import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="home">
      <ul>
        <li className="nob">
          <h1>1Team(이름순)</h1>
        </li>
        <List title={"김현묵"} href={"/khm"} />
        <List title={"박수환"} href={"/psh"} />
        <List title={"이동재"} href={"/"} />
        <List title={"전준기"} href={"/jjg"} />
        <List title={"하신혜"} href={"/"} />
      </ul>
    </div>
  );
}

function List({ href, title }) {
  return (
    <li>
      <div className="door"></div>
      <Link to={href}>{title}</Link>
    </li>
  );
}
