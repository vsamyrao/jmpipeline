import { sleep } from"k6";
import http from "k6/http";

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { jUnit } from 'https://jslib.k6.io/k6-summary/0.0.2/index.js';


export let options = {
  duration: "1m",
  vus: 50,
  thresholds: {
    http_req_duration: [{ threshold: 'p(90) < 10', abortOnFail: false }]
  }
};

export default function() {
  http.get("http://test.k6.io/contacts.php");
  sleep(3);
};

export function handleSummary(data) {
  console.log('Preparing the end-of-test summary...');

  return {
	"./report/summary.html": htmlReport(data),
    './report/junit.xml': jUnit(data),
  };
}
