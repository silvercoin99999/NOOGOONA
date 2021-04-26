// * -------------------------------
// * reset
// * -------------------------------
function reset() {
  var html = document.getElementsByTagName("html")[0];
  var body = document.getElementsByTagName("body")[0];

  // lt IE9
  var getIeInfo = function () {
    var word;
    var agent = navigator.userAgent.toLowerCase();
    var info = { name: "N/A", version: -1 };

    if (navigator.appName == "Microsoft Internet Explorer") {
      word = "msie ";
    } else if (agent.search("trident") > -1) word = "trident/.*rv:";
    else if (agent.search("edge/") > -1) word = "edge/";
    else {
      return info;
    }

    var reg = new RegExp(word + "([0-9]{1,})(\\.{0,}[0-9]{0,1})");
    if (reg.exec(agent) != null) {
      info.version = parseFloat(RegExp.$1 + RegExp.$2);
      info.name = word == "edge/" ? "Edge" : "IE";
    }

    return info;
  };

  var ie_name = getIeInfo().name;
  var ie_version = getIeInfo().version;

  if (!(ie_name == "IE" && ie_version <= 9)) {
    html.classList.add("activeJS");
  } else {
    alert("인터넷 익스플로러 버전을 업그레이드해주세요");
  }

  // outline
  html.classList.add("disable-outline");
  body.addEventListener("keydown", function (e) {
    if (e.key === "Tab") html.classList.remove("disable-outline");
  });
  body.addEventListener("keyup", function (e) {
    if (e.key === "Enter") html.classList.remove("disable-outline");
  });
  body.addEventListener("click", function () {
    html.classList.add("disable-outline");
  });
}
$(document).ready(function () {
  reset();
});