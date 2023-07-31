import pandas as pd

def load_timeseries_from_csv(path_to_csv: str):
    """
    Return pandas DF with metrics http_req_duration, http_req_failed, http_reqs (iteration)
    
    Arguments: String with path to CSV

    Columns: http_req_duration, time. 

    """
    raw_timeseries_df = pd.read_csv(path_to_csv)
    # Filter out by metric values
    return raw_timeseries_df

def main():
    df = load_timeseries_from_csv('/home/npruitt/repos/csv_files/express_app_load_test_timeseries_data.csv')
    print(df.head())

if __name__ == "__main__":
    main()