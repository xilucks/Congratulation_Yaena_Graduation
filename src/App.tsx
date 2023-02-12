import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./layout/DefaultLayout";
import Gallery from "./pages/Gallery";
import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Autumn from "./pages/Autumn";
import Winter from "./pages/Winter";
import Ending from "./pages/Ending";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase-config.js";

function App() {
  const usersCollectionRef = collection(db, "comments");

  useEffect(() => {
    const getUser = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(usersCollectionRef);
      console.log(data);
    };
    getUser();
  }, []);
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/spring" element={<Spring />} />
        <Route path="/gallery/summer" element={<Summer />} />
        <Route path="/gallery/autumn" element={<Autumn />} />
        <Route path="/gallery/winter" element={<Winter />} />
        <Route path={"/end"} element={<Ending />} />
      </Route>
    </Routes>
  );
}

export default App;
