import React, { Component } from "react";
import axios from "axios";

class Test extends Component {
  state = {
    inputValue: "",
    previousValue: 0, // 이전에 전송된 값 유지
    errorMessage: "", // 오류 메시지
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleButtonClick = () => {
    const { inputValue, previousValue } = this.state;
    const newValue = parseFloat(inputValue.trim());

    if (!isNaN(newValue)) {
      const requestData = {
        data: {
          day: previousValue + newValue, // 기존 값에 새로운 값 추가
        },
      };

      axios
        .put("http://jkintl.co.kr:10337/api/admins/1", requestData)
        .then(() => {
          console.log("Data sent successfully");
          this.setState({ previousValue: previousValue + newValue }); // 이전 값 업데이트
        })
        .catch((error) => {
          console.error("Error sending data:", error);

          // 오류 유형에 따라 다른 오류 메시지 출력
          let errorMessage = "";
          if (error.response) {
            // 서버에서 상태 코드를 반환한 경우
            errorMessage = `Failed to send data: ${error.response.data.message}`;
          } else if (error.request) {
            // 요청이 만들어졌지만 응답을 받지 못한 경우
            errorMessage =
              "Failed to send data: No response received from the server";
          } else {
            // 오류가 발생한 경우
            errorMessage =
              "Failed to send data: Network error or server is unreachable";
          }

          this.setState({ errorMessage });
        });
    } else {
      console.error("Invalid number entered");
      this.setState({ errorMessage: "Please enter a valid number" });
    }
  };

  render() {
    const { inputValue, errorMessage } = this.state;

    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
          placeholder="Enter data to send"
        />
        <button onClick={this.handleButtonClick}>Send Data</button>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  }
}

export default Test;
