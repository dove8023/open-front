import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "@/styles/App.css";
import Home from "./pages/Home";
import Line from "./pages/Line";
import Pie from "./pages/Pie";
import Index from "./pages/Gotest";
import Bar from "./pages/Bar";
import Gauge from "./pages/Gauge";
import LineData from "./pages/LineData";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Index />} />
            <Route path="bar" element={<Bar />} />
            <Route path="line" element={<Line />} />
            <Route path="pie" element={<Pie />} />
            <Route path="gauge" element={<Gauge />} />
            <Route path="line-data" element={<LineData />} />

            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
