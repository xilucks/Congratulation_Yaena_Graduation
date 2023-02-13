import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./layout/DefaultLayout";
import Gallery from "./pages/Gallery";
import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Autumn from "./pages/Autumn";
import Winter from "./pages/Winter";
import Ending from "./pages/Ending";
import Comments from "./pages/Comments";
import WriteComment from "./pages/WriteComment";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/spring" element={<Spring />} />
        <Route path="/gallery/summer" element={<Summer />} />
        <Route path="/gallery/autumn" element={<Autumn />} />
        <Route path="/gallery/winter" element={<Winter />} />
        <Route path="/comment" element={<Comments />} />
        <Route path="/comment/new" element={<WriteComment />} />
        <Route path="/end" element={<Ending />} />
      </Route>
    </Routes>
  );
}

export default App;
