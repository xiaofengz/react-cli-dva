// 不同环境后台接口url文件

const urls = (function() {
  //const ENV = "development";
  const ENV = process.env.NODE_ENV;
  const originUrl = location.href;

  const url = {
    "production": {
      url: "正式上线环境后台接口url",
    },
    "pre-release": {
      url: "预发布环境后台接口url",
    },
    "development": {
      url: "开发环境后台接口url",
    },
    "test": {
      url: "测试环境后台接口url",
    }
  };
  return url[ENV];
})();

export default urls;