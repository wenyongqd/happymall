import MUtil from "../util/mm.jsx";
import $ from "jquery";

const mm = new MUtil();

class User {
  login(loginInfo) {
    return mm.request({
      type: "post",
      url: "manage/user/login.do",
      data: loginInfo,
    });
  }

  checkLoginInfo(loginInfo) {
    let username = $.trim(loginInfo.username),
      password = $.trim(loginInfo.password);
    //判断用户名是否为空
    if (typeof username !== "string" || username.length === 0) {
      return {
        status: false,
        msg: "用户名不能为空",
      };
    }

    if (typeof password !== "string" || password.length === 0) {
      return {
        status: false,
        msg: "用户名不能为空",
      };
    }

    return {
      status: true,
      msg: "验证通过",
    };
  }

  logout() {
    return mm.request({
      type: "post",
      url: "http://admintest.happymmall.com/user/logout.do",
    });
  }

  getUserList(pageNum) {
    return mm.request({
      type: "post",
      url: "/manage/user/list.do",
      data: {
        pageNum: pageNum,
      },
    });
  }
}

export default User;
