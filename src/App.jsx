import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import Header from "./components/heroSection/header/Header";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getApiConfig();
  }, []);
  const getApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
}

export default App;
