import http from 'k6/http';
import { sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.2/index.js'

export const options = {
    stages: [
        { duration: '1m', target: 50 },
        { duration: '15s', target: 1000 },
        { duration: '1m', target: 50 },
        { duration: '45s', target: 0 }
    ],
    summaryTrendStats: ["med", "p(99)", "p(95)"],

};

const metrics_to_exclude = [
    "data_received",
    "data_sent",
    "http_req_blocked",
    "http_req_connecting",
    "http_req_receiving",
    "http_req_sending",
    "http_req_tls_handshaking",
    "http_req_waiting",
    'http_req_duration{expected_response:true}', // would not have guessed this is a metric!
    "vus",
    "vus_max"
]
export function handleSummary(data) {
    const appName = __ENV.PORT == 3000 ? 'express' : 'fastapi'
    const summaryOutputPath = `./summary_output_spike_${appName}.json`
    for (const key in data.metrics) {
        if (metrics_to_exclude.includes(key)) {
            delete data.metrics[key]
        }
    }

    return {
        stdout: textSummary(data, { indent: ' ', enableColors: true }),
        [summaryOutputPath]: JSON.stringify(data)
    }
}

export default function () {
    http.get(`http://127.0.0.1:${__ENV.PORT}/`);
    sleep(1)
}