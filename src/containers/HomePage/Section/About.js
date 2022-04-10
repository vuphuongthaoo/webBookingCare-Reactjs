import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          BookingCare: Hệ thống đặt khám trực tuyến
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              //   width="900"
              //   height="506"
              src="https://www.youtube.com/embed/OASGscJQXp0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              Nền tảng Y tế chăm sóc sức khoẻ toàn diện kết nối người dùng đến
              với Bác sĩ, cơ sở và dịch vụ y tế uy tín tin cậy hàng đầu Việt Nam
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
