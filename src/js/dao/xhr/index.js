import urls from "CONSTS/urls";
// 请求集中处理
const xhr = ({
  url,
  body = null,
  method = 'get',
  contentType = "application/x-www-form-urlencoded; charset=UTF-8"
}) => {
  const defer = $.Deferred();

  const request = $.ajax({
      type: method,
      url: url,
      data: body,
      contentType: contentType,
      dataType: "json",
      xhrFields: {
        withCredentials: true
      }
    })
    .done((data) => {
      if (data && data.errcode === 0) {
        defer.resolve(data.data);
      } else {
        defer.reject(data.errmsg);
      }
    })
    .fail((data) => {
      defer.reject(data.errmsg);
    });

  return {
    request: request,
    promise: defer.promise()
  };
};

export default xhr;