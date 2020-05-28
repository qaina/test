function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPositionAndReload);
  }
}

function getPositionAndReload(position) {
  var curloc = getCookie('cl_location');
  console.log('cur loc is' + curloc);
  if (curloc != undefined) {} else {
    setCookie('cl_location', '[' + position.coords.latitude + ',' + position.coords.longitude + ']', 365);
    window.location = "https://ml.qaina.net";
  }
}
getLocation();

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
