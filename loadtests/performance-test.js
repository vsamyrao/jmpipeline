import { sleep } from"k6";
import http from "k6/http";

import { jUnit } from 'https://jslib.k6.io/k6-summary/0.0.2/index.js';


export let options = {
  duration: "1m",
  vus: 50,
  thresholds: {
    http_req_duration: ["p(95)<100"] // 95 percent of response times must be below 500ms
  }
};

export default function() {
  http.get("http://test.k6.io/contacts.php");
  sleep(3);
};

export function handleSummary(data) {
  console.log('Preparing the end-of-test summary...');

  return {
    'junit.xml': jUnit(data), // Transform summary and save it as a JUnit XML...
  };
}
