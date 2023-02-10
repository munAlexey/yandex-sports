import React from "react";
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
import Aside from "./Aside";

function App() {
  const [adInfo, setAdInfo] = React.useState([]);
  const [matchInfo, setMatchInfo] = React.useState([]);
  const [mainInfo, setMainInfo] = React.useState([]);
  const [hockeyInfo, setHockeyInfo] = React.useState([]);
  const [skyInfo, setSkyInfo] = React.useState([]);
  const [biathlonInfo, setBiathlonInfo] = React.useState([]);
  const [ufcInfo, setUfcInfo] = React.useState([]);
  const [basketballInfo, setBasketballInfo] = React.useState([]);
  const [tennisInfo, setTennisInfo] = React.useState([]);
  const [autoInfo, setAutoInfoInfo] = React.useState([]);
  const [volleyballInfo, setColleyballInfo] = React.useState([]);
  const [cybersportInfo, setCybersportInfo] = React.useState([]);
  const [isActive, setIsActive] = React.useState(false);

  function handleClickActive() {
    setIsActive(true);
  }

  React.useEffect(() => {
    api
      .getAsideInfo("autosport")
      .then((res) => {
        return res.articles;
      })
      .then((res) => {
        setAutoInfoInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAdInfo]);

  React.useEffect(() => {
    api
      .getAsideInfo("games")
      .then((res) => {
        return res.articles;
      })
      .then((res) => {
        setCybersportInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAdInfo]);

  React.useEffect(() => {
    api
      .getAsideInfo("volleyball")
      .then((res) => {
        return res.articles;
      })
      .then((res) => {
        setColleyballInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAdInfo]);

  React.useEffect(() => {
    api
      .getAsideInfo("tennis")
      .then((res) => {
        return res.articles;
      })
      .then((res) => {
        setTennisInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAdInfo]);

  React.useEffect(() => {
    api
      .getAsideInfo("basketball")
      .then((res) => {
        return res.articles;
      })
      .then((res) => {
        setBasketballInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAdInfo]);

  React.useEffect(() => {
    api
      .getAsideInfo("UFC")
      .then((res) => {
        return res.articles;
      })
      .then((res) => {
        setUfcInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAdInfo]);

  React.useEffect(() => {
    api
      .getAsideInfo("biathlon")
      .then((res) => {
        return res.articles;
      })
      .then((res) => {
        setBiathlonInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAdInfo]);

  React.useEffect(() => {
    api
      .getAsideInfo("figure-skating")
      .then((res) => {
        return res.articles;
      })
      .then((res) => {
        setSkyInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAdInfo]);

  React.useEffect(() => {
    api
      .getAsideInfo("football")
      .then((res) => {
        return res.articles;
      })
      .then((res) => {
        setMatchInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAdInfo]);

  React.useEffect(() => {
    api
      .getAsideInfo("hockey")
      .then((res) => {
        return res.articles;
      })
      .then((res) => {
        setHockeyInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAdInfo]);

  React.useEffect(() => {
    api
      .getAsideInfo("youtube")
      .then((res) => {
        return res.articles;
      })
      .then((res) => {
        setAdInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAdInfo]);

  React.useEffect(() => {
    api
      .getAsideInfo("sports")
      .then((res) => {
        return res.articles;
      })
      .then((res) => {
        setMainInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAdInfo]);

  return (
    <div className="App">
      <div className="page">
        <Header state={isActive} onClick={handleClickActive} />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Main info={mainInfo} />} />
            <Route path="/match" element={<Match info={matchInfo} />} />
            <Route path="/football" element={<Football info={matchInfo} />} />
            <Route path="/hockey" element={<Hoсkey info={hockeyInfo} />} />
            <Route path="/skating" element={<Skating info={skyInfo} />} />
            <Route path="/biathlon" element={<Biathlon info={biathlonInfo}/>} />
            <Route path="/fighting" element={<Fighting info={ufcInfo} />} />
            <Route path="/basketball" element={<Basketball info={basketballInfo}/>} />
            <Route path="/tennis" element={<Tennis info={tennisInfo}/>} />
            <Route path="/autosport" element={<Autosport info={autoInfo}/>} />
            <Route path="/volleyball" element={<Volleyball info={volleyballInfo}/>} />
            <Route path="/cybersport" element={<Cybersport info={cybersportInfo}/>} />
          </Routes>
          <Aside info={adInfo} />
        </div>
      </div>
    </div>
  );
}

export default App;
