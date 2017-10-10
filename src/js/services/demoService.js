import xhr from "DAO";
import urls from "CONSTS/urls";

class demoService {
  constructor() {
      this.url = urls["url"];
    }
    // 请求demo1
  fetchSomeData(data) {
    return xhr({
      method: "post",
      url: this.url + "具体url",
      body: {
        ...data
      }
    }).promise;
  }
}

export default new demoService();