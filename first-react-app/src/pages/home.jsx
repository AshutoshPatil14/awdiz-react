import { useNavigate } from "react-router-dom";

function Home() {
  let nav = useNavigate();

  return (
    <div>
      <h1>This is the Homepage</h1>
      <p>Welcome to the web application</p>
      <div className="sel-btn">
        <button onClick={() => nav("/useEffect")}>useEffect</button>
        <button onClick={() => nav("/useState")}>useState</button>
        <button onClick={() => nav("/useParams")}>useParams</button>
      </div>
    </div>
  );
}

export default Home;
