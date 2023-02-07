import api from "./Api";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Main from "./nav-menu/Main";
import Match from "./nav-menu/Match";
import Fighting from "./nav-menu/Fighting";
import Football from "./nav-menu/Football";
import Hoсkey from "./nav-menu/Hockey";
import Skating from "./nav-menu/Skating";
import Cybersport from "./nav-menu/Cybersport";
import Autosport from "./nav-menu/Autosport";
import Biathlon from "./nav-menu/Biathlon";
import Basketball from "./nav-menu/Bascketball";
import Tennis from "./nav-menu/Tennis";
import Volleyball from "./nav-menu/Volleyball";

function App() {
  api.getCyberSportInfo().then((res) => {
    return res;
  });

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/match" element={<Match />}></Route>
          <Route path="/football" element={<Football />}></Route>
          <Route path="/hockey" element={<Hoсkey />}></Route>
          <Route path="/skating" element={<Skating />}></Route>
          <Route path="/biathlon" element={<Biathlon />}></Route>
          <Route path="/fighting" element={<Fighting />}></Route>
          <Route path="/basketball" element={<Basketball />}></Route>
          <Route path="/tennis" element={<Tennis />}></Route>
          <Route path="/autosport" element={<Autosport />}></Route>
          <Route path="/volleyball" element={<Volleyball />}></Route>
          <Route path="/cybersport" element={<Cybersport />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
