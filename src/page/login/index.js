import React, { Component } from "react";
import "./index.scss";
import MUtil from "../../util/mm.jsx";
import User from "../../service/userService";

const _mm = new MUtil();
const _user = new User();

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: _mm.getUrlParam('redirect') || "/",
    };
  }
  // 当用户名发生改变
  onInputChange(e) {
    let inputValue = e.target.value,
      inputName = e.target.name;
    this.setState({
      [inputName]: inputValue,
    });
  }

  onSumbit() {
      let loginInfo = {
          username: this.state.username,
          password: this.state.password
      },
      checkResult = _user.checkLoginInfo(loginInfo);
      //验证通过
    if (checkResult.status) {
        _user.login(loginInfo)
          .then(
            (res) => {
              debugger;
              // console.log(this.state.redirect);
              _mm.setStorage('userInfo', res);
              console.log(this.state.redirect);
              this.props.history.push(this.state.redirect);
              
            },
            (errMsg) => {
              _mm.errorTips(errMsg);
            }
        );
    }
    else {
        _mm.errorTips(checkResult.msg);
    }
  }
  render() {
    return (
      <div className="col-md-4 col-md col-md-offset-4">
        <div className="panel panel-default login-panel">
          <div className="panel-heading">欢迎登录</div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Unser Name</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => this.onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="text"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => this.onInputChange(e)}
                />
              </div>

              <button
                className="btn btn-lg btn-block btn-primary"
                onClick={(e) => {
                  this.onSumbit();
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
