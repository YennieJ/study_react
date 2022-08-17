import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/voca/header";
import DayList from "./component/voca/dayList";
import DayDetail from "./component/voca/dayDetail";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<DayDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
