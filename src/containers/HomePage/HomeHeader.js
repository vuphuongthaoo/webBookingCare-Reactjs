import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/logo.svg";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils";
import { withRouter } from "react-router";
import { changeLanguageApp } from "../../store/actions";

class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
  returnToHome = () => {
    if (this.props.history) {
      //console.log("vuthao view infor: ", doctor);
      this.props.history.push(`/home`);
    }
  };

  render() {
    let language = this.props.language;
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <img
                className="header-logo"
                src={logo}
                onClick={() => this.returnToHome()}
              />
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  {/* <b>Chuyên khoa</b> */}
                  <b>
                    <FormattedMessage id="homeheader.speciality" />
                  </b>
                </div>
                {/* <div className="subs-titlle">Tìm bác sĩ theo chuyên khoa</div> */}
                <div className="subs-titlle">
                  <FormattedMessage id="homeheader.searchdoctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  {/* <b>Cơ sở y tế</b> */}
                  <b>
                    <FormattedMessage id="homeheader.health-facility" />
                  </b>
                </div>
                {/* <div className="subs-titlle">Chọn bệnh viện phòng khám</div> */}
                <div className="subs-titlle">
                  <FormattedMessage id="homeheader.select-room" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  {/* <b>Bác sĩ</b> */}
                  <b>
                    <FormattedMessage id="homeheader.doctor" />
                  </b>
                </div>
                {/* <div className="subs-titlle">Chọn bác sĩ giỏi</div> */}
                <div className="subs-titlle">
                  <FormattedMessage id="homeheader.select-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  {/* <b>Gói khám</b> */}
                  <b>
                    <FormattedMessage id="homeheader.fee" />
                  </b>
                </div>
                {/* <div className="subs-titlle">Khám sức khỏe tổng quát</div> */}
                <div className="subs-titlle">
                  <FormattedMessage id="homeheader.check-health" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                {/* <i className="fas fa-question-circle"></i> Hỗ trợ */}
                <i className="fas fa-question-circle"></i>
                <FormattedMessage id="homeheader.support" />
              </div>
              <div
                className={
                  language === LANGUAGES.VI
                    ? "language-vi active"
                    : "language-vi"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                  VN
                </span>
              </div>
              <div
                className={
                  language === LANGUAGES.EN
                    ? "language-en active"
                    : "language-en"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
        {this.props.isShowBanner === true && (
          <div className="home-header-banner">
            <div className="content-up">
              {/* <div className="title1">NỀN TẢNG Y TẾ</div> */}
              <div className="title1">
                <FormattedMessage id="banner.title1" />
              </div>
              <div className="title2">
                {/* <b>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</b> */}
                <b>
                  <FormattedMessage id="banner.title2" />
                </b>
              </div>
              <div className="search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
              </div>
            </div>

            <div className="content-down">
              <div className="options">
                <div className="option-child">
                  <div className="icon-child">
                    <i className="far fa-hospital"></i>
                  </div>
                  {/* <div className="text-child">Khám chuyên khoa</div> */}
                  <div className="text-child">
                    <FormattedMessage id="banner.child1" />
                  </div>
                </div>

                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  {/* <div className="text-child">Khám từ xa</div> */}
                  <div className="text-child">
                    <FormattedMessage id="banner.child2" />
                  </div>
                </div>

                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-hospital-alt"></i>
                  </div>
                  {/* <div className="text-child">Khám tổng quát</div> */}
                  <div className="text-child">
                    <FormattedMessage id="banner.child3" />
                  </div>
                </div>

                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-file-medical-alt"></i>
                  </div>
                  {/* <div className="text-child">Xét nghiệm y học</div> */}
                  <div className="text-child">
                    <FormattedMessage id="banner.child4" />
                  </div>
                </div>

                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-user-md"></i>
                  </div>
                  {/* <div className="text-child">Sức khỏe tinh thần</div> */}
                  <div className="text-child">
                    <FormattedMessage id="banner.child5" />
                  </div>
                </div>

                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-briefcase-medical"></i>
                  </div>
                  {/* <div className="text-child">Khám nha khoa</div> */}
                  <div className="text-child">
                    <FormattedMessage id="banner.child6" />
                  </div>
                </div>

                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-procedures"></i>
                  </div>
                  {/* <div className="text-child">Gói phẫu thuật</div> */}
                  <div className="text-child">
                    <FormattedMessage id="banner.child7" />
                  </div>
                </div>

                <div className="option-child">
                  <div className="icon-child">
                    <i className="fas fa-ambulance"></i>
                  </div>
                  {/* <div className="text-child">Sản phẩm y tế</div> */}
                  <div className="text-child">
                    <FormattedMessage id="banner.child8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
