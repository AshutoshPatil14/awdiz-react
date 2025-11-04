import { useNavigate } from "react-router-dom";


function Home() {
  let nav = useNavigate();

  return (
    <div>
      <br />
      <h1>This is the Homepage</h1>
      <p>Welcome to the web application</p>
      <br />
      <div className="sel-btn">
        <button onClick={() => nav("/useEffect")}>useEffect</button>
        <button onClick={() => nav("/useState")}>useState</button>
        <button onClick={() => nav("/useParams")}>useParams</button>
        <button onClick={() => nav("/conditionalRendering")}>Coditional Renderring</button>
        <button onClick={() => nav("/styled-component")}>Styled Component</button>
        <button onClick={() => nav("/greeting")}>Greeting</button>
        <button onClick={() => nav("/fruits")}>Fruits list</button>
        <button onClick={() => nav("/dynamic-styling")}>Dynamic Styling</button>
        <button onClick={() => nav("/fake-store-api")}>FakeStoreApi</button>
        <button onClick={() => nav("/useMemo")}>useMemo</button>
        <button onClick={() => nav("/useRef")}>useRef</button>
        <button onClick={() => nav("/useCallback")}>useCallback</button>
        <button onClick={() => nav("/useReducer")}>useReducer</button>
        <button onClick={() => nav("/mypractice/CardBox")}>CardBox</button>
        

      </div>
    </div>
  );
}

export default Home;
