/* utils.js */
export var setCookie = function setCookie(key, value) {
  document.cookie = key + "=" + value + ";";
};
export var getCookie = function getCookie(key) {
  var items = document.cookie.split('; ');

  for (var i = 0; i < items.length; i += 1) {
    var item = items[i].split('=');

    if (key === item[0] && item.length === 2) {
      return decodeURIComponent(item[1]);
    }
  }

  return '';
};