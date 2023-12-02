/* eslint-disable no-unused-vars */
import { Box, Button, TextField, Typography } from "@mui/material";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Img from "../lazyLoadImage/Img";
import "./style.scss";
const HeroSection = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data, url]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <Box sx={{height:"600px",overflow:'hidden',position:"relative"}}>
      {/* Random Backgroun Image */}
      <Box className="backdrop-img">
        <Img src={background} />
      </Box>

      {/* opacity layer */}
      <Box
        sx={{
          width: "100%",
          height: "250px",
          background:
            "linear-gradient(180deg,rgba(4, 21, 45, 0) 0%,#04152d 79.17%)",
          position:"absolute",
          bottom:0,
          left:0,
          zIndex:-2
        }}
      ></Box>

      {/* Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          my: 16,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "4rem", sm: "6rem", md: "8rem" } }}
          >
            Welcome
          </Typography>
          <Typography>
            Millions of movies, TV shows and people to dis`cover. Explore now.
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: "25px",
            overflow: "hidden",
            backgroundColor: "white",
            width: { xs: "90%", sm: "80%", md: "60%" },
            my: 4,
          }}
        >
          <input
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            placeholder="Search.."
            className="search-input"
          />
          <Button
            variant="contained"
            sx={{
              padding: "1rem 0.5rem",
              borderRadius: "0px",
              height: "100%",
              width: "20%",
              background: "var(--gradient)",
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
