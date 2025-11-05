import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";
import { Toaster } from 'react-hot-toast';

function Home() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    nav('/login'); // Redirect to login page after logout
  };

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
        <button onClick={handleLogout}>Logout</button>
      </div>
      <br />
      {isAuthenticated && user && (
        <div className="welcome-message">
          <h2>Welcome, {user.name || "User"}!</h2>
          <p>You are successfully logged in.</p>
        </div>
      )}

      <Toaster />
    </div>
  );
}

export default Home;
