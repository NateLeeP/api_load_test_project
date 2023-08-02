# api_load_test_project
Load testing APIs written in different languages


## Express vs FastAPI latency comparison
APIs were tested running locally. Load test increased the number of users to 100 over a 30 second timespan, then remained at 100 users for 1 minute, then ramped down to 0 users over 30 seconds. Each user waited a second before issuing another request. 

(timeseries_etl/load_test_comparison_timeseries.png)