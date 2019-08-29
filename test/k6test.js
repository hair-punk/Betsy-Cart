import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 1000,
  duration: "60s"
}

export default function () {
  var index = Math.floor(Math.random() * 10000000)
  let res = http.get("http://54.183.254.92:3010/items/" + index);
  check(res, {

  })
  sleep(1);
}
