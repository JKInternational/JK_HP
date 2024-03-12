import React, { Component } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import youtube_logo from "./imgs/youtube_logo.png";
import "./Movie.css";

class Movie extends Component {
  state = {
    movies: [],
    thumbnails: {},
    selectedVideo: null,
  };

  componentDidMount() {
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

  selectVideo = (videoId) => {
    // 선택된 동영상이 변경되었을 때 YouTube 동영상을 자동으로 재생
    const selectedVideo = this.state.movies.find(
      (movie) => movie.attributes.video_id === videoId
    );
    this.setState({ selectedVideo }, () => {
      if (this.player) {
        this.player.loadVideoById(selectedVideo.attributes.video_id);
      }
    });
  };

  onReady = (event) => {
    // YouTube 플레이어 객체를 얻음
    this.player = event.target;
    // 선택된 동영상이 있을 경우 해당 동영상을 로드하고 재생
    if (this.state.selectedVideo) {
      this.player.loadVideoById(this.state.selectedVideo.attributes.video_id);
    }
  };

  render() {
    const { movies, thumbnails, selectedVideo } = this.state;

    const movieOpts = {
      height: "360",
      width: "480",
      playerVars: {
        autoplay: 0,
      },
    };

    const movieOpts1 = {
      height: "240",
      width: "320",
      playerVars: {
        autoplay: 0,
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
          {/* 선택된 비디오가 있을 때만 비디오를 렌더링
          {selectedVideo && (
            <div className="video-container">
              <YouTube
                videoId={selectedVideo.attributes.video_id}
                opts={{ width: "560", height: "315" }}
              />
            </div>
          )} */}

          {/* 썸네일 이미지와 해당 영상을 클릭했을 때 영상이 썸네일과 교체되며, 썸네일이 있던 자리에 동일한 크기의 영상이 로드됨 */}
          <div className="groupAlign">
            {Object.entries(groupedMovies).map(
              ([section, moviesInSection], index) => (
                <div key={index} className="container1">
                  <div className="section">{section}</div>
                  <ul className="link">
                    {moviesInSection.map((movie, movieIndex) => (
                      <li key={movieIndex} className="innerLink">
                        <ul className="innerLink1">
                          <li>
                            {selectedVideo &&
                            selectedVideo.attributes.video_id ===
                              movie.attributes.video_id ? (
                              // 선택된 영상일 경우 영상 플레이어로 교체
                              <YouTube
                                videoId={selectedVideo.attributes.video_id}
                                opts={movieOpts}
                                onReady={this.onReady}
                              />
                            ) : (
                              // 선택되지 않은 영상일 경우 썸네일 이미지 표시
                              <img
                                className="thumbnail"
                                src={thumbnails[movie.attributes.video_id]} // 썸네일 이미지 URL 사용
                                alt={movie.attributes.title}
                                onClick={() =>
                                  this.selectVideo(movie.attributes.video_id)
                                } // 이미지를 클릭했을 때 영상을 선택하도록 함
                              />
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

          <div className="groupAlign">
            {Object.entries(groupedMovies).map(
              ([section, moviesInSection], index) => (
                <div key={index} className="container2">
                  <div className="section">{section}</div>
                  <ul className="link">
                    {moviesInSection.map((movie, movieIndex) => (
                      <li key={movieIndex} className="innerLink">
                        <ul className="innerLink1">
                          <li>
                            {selectedVideo &&
                            selectedVideo.attributes.video_id ===
                              movie.attributes.video_id ? (
                              // 선택된 영상일 경우 영상 플레이어로 교체
                              <YouTube
                                videoId={selectedVideo.attributes.video_id}
                                opts={movieOpts1}
                                onReady={this.onReady}
                              />
                            ) : (
                              // 선택되지 않은 영상일 경우 썸네일 이미지 표시
                              <img
                                id="thumbnailImg"
                                className="thumbnail"
                                src={thumbnails[movie.attributes.video_id]} // 썸네일 이미지 URL 사용
                                alt={movie.attributes.title}
                                onClick={() =>
                                  this.selectVideo(movie.attributes.video_id)
                                } // 이미지를 클릭했을 때 영상을 선택하도록 함
                              />
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
