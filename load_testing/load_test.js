import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 20 },
        { duration: '1m', target: 10 },
        { duration: '20s', target: 0 },
    ],
    summaryTrendStats: ["med", "p(99)", "p(95)"]
};

export default function () {
    http.get('http://127.0.0.1:8000/person/1');
}