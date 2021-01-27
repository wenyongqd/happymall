import MUtil from "../util/mm.jsx";
import $ from "jquery";

const mm = new MUtil();

class Statistic {
  getHomeCount() {
    return mm.request({
      url: "/manage/statistic/base_count.do"
    });
  }
}

export default Statistic;
