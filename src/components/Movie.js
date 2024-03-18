import React, { Component } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import youtube_logo from "./imgs/youtube_logo.png";
import "./Movie.css";

class Movie extends Component {
  state = {
    movies: [],
    thumbnails: {},
    selectedVideoId: null,
    player: null,
    isMobile: window.innerWidth <= 768, // 초기 모바일 환경 여부 확인
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize); // resize 이벤트 리스너 추가

    axios
      .get("http://jkintl.co.kr:10337/api/movies?populate=*")
      .then((response) => {
        const movies = response.data.data;
        const thumbnails = {};

        movies.forEach((movie) => {
          const videoId = movie.attributes.video_id;
          const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          thumbnails[videoId] = thumbnailUrl;
        });

        this.setState({ movies, thumbnails });
      })
      .catch((error) => {
        console.error("Error fetching movies: ", error);
      });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize); // 컴포넌트 언마운트 시 리스너 제거
  }

  handleResize = () => {
    // 화면 크기 변경 시 모바일 환경 여부 업데이트
    this.setState({ isMobile: window.innerWidth <= 768 });
  };

  selectVideo = (videoId) => {
    this.setState({ selectedVideoId: videoId });
  };

  onReady = (event) => {
    this.setState({ player: event.target });
  };

  render() {
    const { movies, thumbnails, selectedVideoId, isMobile } = this.state;

    const movieOpts = {
      height: "270",
      width: "480",
      playerVars: {
        autoplay: 1,
      },
    };

    const movieOpts1 = {
      height: "180",
      width: "320",
      playerVars: {
        autoplay: 1,
      },
    };

    const sectionMap = {
      power: "티찹 전동공구",
      comp: "티찹 컴프레서",
      etc: "기타",
    };

    const getKoreanSection = (englishSection) => {
      return sectionMap[englishSection] || englishSection;
    };

    const groupedMovies = {};
    movies.forEach((movie) => {
      const section = getKoreanSection(movie.attributes.section);
      if (!groupedMovies[section]) {
        groupedMovies[section] = [];
      }
      groupedMovies[section].push(movie);
    });

    for (const section in groupedMovies) {
      groupedMovies[section].sort((a, b) => {
        const aPriority = parseInt(a.attributes.new);
        const bPriority = parseInt(b.attributes.new);
        return bPriority - aPriority;
      });
    }

    return (
      <div className="Movie">
        <div className="container">
          <div className="innerContainer1">
            <div className="category">
              <span>Home</span>
              <span>></span>
              <span>제품리뷰</span>
              <span>></span>
              <span>동영상리뷰</span>
            </div>
            <p>
              <h1>동영상리뷰</h1>
            </p>
            <div id="line" />
          </div>
        </div>

        <div className="fix_width">
          <div className="groupAlign">
            {Object.entries(groupedMovies).map(
              ([section, moviesInSection], index) => (
                <div
                  key={index}
                  className={isMobile ? "container2" : "container1"}
                >
                  <div className="section">{section}</div>
                  <ul className="link">
                    {moviesInSection.map((movie, movieIndex) => (
                      <li key={movieIndex} className="innerLink">
                        <ul className="innerLink1">
                          <li>
                            {selectedVideoId === movie.attributes.video_id ? (
                              <YouTube
                                videoId={selectedVideoId}
                                opts={isMobile ? movieOpts1 : movieOpts}
                                onReady={this.onReady}
                              />
                            ) : (
                              <div
                                className="thumbnail"
                                onClick={() =>
                                  this.selectVideo(movie.attributes.video_id)
                                }
                              >
                                <img
                                  src={thumbnails[movie.attributes.video_id]}
                                  alt={movie.attributes.title}
                                  style={{
                                    objectFit: "cover",
                                    width: isMobile ? "320px" : "480px",
                                    height: isMobile ? "180px" : "270px",
                                  }}
                                />
                              </div>
                            )}
                          </li>
                          <li>
                            <ul className="link_title">
                              <li>
                                <img
                                  className="ytb_logo"
                                  src={youtube_logo}
                                  alt="YouTube Logo"
                                />
                              </li>
                              <li>
                                <h4>{movie.attributes.title}</h4>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
