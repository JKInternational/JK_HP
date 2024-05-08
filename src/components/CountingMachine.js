import React, { Component } from "react";

class CountingMachine extends Component {
  state = {
    dailyVisitors: 0,
    weeklyVisitors: 0,
    monthlyVisitors: 0,
    yearlyVisitors: 0,
    totalVisitors: 0,
  };

  componentDidMount() {
    this.fetchVisitorCounts();
  }

  fetchVisitorCounts = () => {
    fetch("http://jkintl.co.kr:10337/api/admins")
      .then((response) => response.json())
      .then((data) => {
        const { day, week, month, year, total } = data.data[0].attributes;
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

  updateVisitorCounts = () => {
    const { dailyVisitors } = this.state;

    fetch("http://jkintl.co.kr:10337/api/admins/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ day: dailyVisitors + 1 }),
    })
      .then(() => {
        // API에 성공적으로 업데이트된 후, 다시 방문자 수를 가져옴
        this.fetchVisitorCounts(); // 업데이트 후에 호출
      })
      .catch((error) => console.error("Error updating visitor counts:", error));
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

        {/* 방문자 수 업데이트 버튼 */}
        <button onClick={this.updateVisitorCounts}>방문자 수 업데이트</button>
      </div>
    );
  }
}

export default CountingMachine;
