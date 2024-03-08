import React, { Component } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import youtube_logo from "./imgs/youtube_logo.png";
import "./Movie.css";

class Movie extends Component {
  state = {
    movies: [], // Strapi에서 받아온 영화 데이터를 저장할 배열
  };

  componentDidMount() {
    axios
      .get("http://jkintl.co.kr:10337/api/movies?populate=*")
      .then((response) => {
        // Strapi에서 받아온 데이터를 movies 상태에 저장합니다.
        this.setState({ movies: response.data.data });
      })
      .catch((error) => {
        console.error("Error fetching movies: ", error);
      });
  }

  render() {
    const { movies } = this.state;

    const movieOpts = {
      height: "288",
      width: "512",
      playerVars: {
        autoplay: 0,
      },
    };

    const movieOpts1 = {
      height: "180",
      width: "320",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    // Enumeration 값에 대한 한글 표시 딕셔너리
    const sectionMap = {
      power: "티찹 전동공구",
      comp: "티찹 컴프레서",
      etc: "기타",
    };

    // 영문 enumeration 값을 한글로 변환하는 함수. strapi enumeration에서 한글 입력 안 됨.
    const getKoreanSection = (englishSection) => {
      return sectionMap[englishSection] || englishSection; // 해당하는 한글 값이 없을 경우 기본값으로 영어 값을 반환
    };

    // section 별로 그룹화된 영화 객체 배열 생성
    const groupedMovies = {};
    movies.forEach((movie) => {
      const section = getKoreanSection(movie.attributes.section);
      if (!groupedMovies[section]) {
        groupedMovies[section] = [];
      }
      groupedMovies[section].push(movie);
    });

    // 영상 우선순위 적용을 위해 그룹화된 영화 객체 배열 내 각 섹션의 영상을 내림차순으로 정렬
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
          {/* 그룹화된 영화 객체 배열을 기반으로 섹션별로 렌더링 */}
          <div className="groupAlign">
            {Object.entries(groupedMovies).map(
              ([section, moviesInSection], index) => (
                <div key={index} className="container1">
                  <div className="section">{section}</div>
                  <ul className="link">
                    {moviesInSection.map((movie, movieIndex) => (
                      <li key={movieIndex} className="innerLink">
                        <ul className="innerLink1">
                          <li id={`moviePadding-${index}-${movieIndex}`}>
                            <YouTube
                              id={`flexMovieReview-${index}-${movieIndex}`}
                              videoId={movie.attributes.video_id}
                              opts={movieOpts}
                            />
                          </li>
                          <li>
                            <ul className="link_title">
                              <li>
                                <img className="ytb_logo" src={youtube_logo} />
                              </li>
                              <li>
                                <h4 id={`hv_title1-${index}-${movieIndex}`}>
                                  {movie.attributes.title}
                                </h4>
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
                          <li id={`moviePadding-${index}-${movieIndex}`}>
                            <YouTube
                              id={`flexMovieReview-${index}-${movieIndex}`}
                              videoId={movie.attributes.video_id}
                              opts={movieOpts1}
                            />
                          </li>
                          <li>
                            <ul className="link_title">
                              <li>
                                <img className="ytb_logo" src={youtube_logo} />
                              </li>
                              <li>
                                <h4 id={`hv_title1-${index}-${movieIndex}`}>
                                  {movie.attributes.title}
                                </h4>
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
