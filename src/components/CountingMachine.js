import React, { Component } from "react";
import axios from "axios";

class CountingMachine extends Component {
  state = {
    dailyVisitors: 0,
    weeklyVisitors: 0,
    monthlyVisitors: 0,
    yearlyVisitors: 0,
    totalVisitors: 0,
  };

  componentDidMount() {
    this.fetchVisitorCounts(); // 페이지가 로드될 때 방문자 수 호출
  }

  fetchVisitorCounts = () => {
    axios
      .get("http://jkintl.co.kr:10337/api/admins")
      .then((response) => {
        const { day, week, month, year, total } =
          response.data.data[0].attributes;
        this.setState({
          dailyVisitors: parseInt(day),
          weeklyVisitors: parseInt(week),
          monthlyVisitors: parseInt(month),
          yearlyVisitors: parseInt(year),
          totalVisitors: parseInt(total),
        });
      })
      .catch((error) => console.error("Error fetching visitor counts:", error));
  };

  handleCheckButton = () => {
    this.fetchVisitorCounts(); // 데이터 다시 호출
  };

  render() {
    const {
      dailyVisitors,
      weeklyVisitors,
      monthlyVisitors,
      yearlyVisitors,
      totalVisitors,
    } = this.state;

    const currentMonth = new Date().getMonth() + 1; // 현재 월
    const currentYear = new Date().getFullYear(); // 현재 년도

    return (
      <div>
        <h2>방문자 수</h2>
        <p>1일 방문자: {dailyVisitors}</p>
        <p>1주일 방문자: {weeklyVisitors}</p>
        <p>
          {currentMonth}월 방문자: {monthlyVisitors}
        </p>
        <p>
          {currentYear}년 방문자: {yearlyVisitors}
        </p>
        <p>총 누적 방문자: {totalVisitors}</p>
        <button onClick={this.handleCheckButton}>확인하기</button>
      </div>
    );
  }
}

export default CountingMachine;
