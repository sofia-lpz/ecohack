import pandas as pd
import mysql.connector
from mysql.connector import Error

# Load the CSV file
file_path = 'us.csv'  # Update this to your actual file path
data = pd.read_csv(file_path, skiprows=3, delimiter=',', quotechar='"', error_bad_lines=False)

# Database connection details
db_config = {
    'host': "echohack.c3coace2uz12.us-east-2.rds.amazonaws.com",
    'user': "admin",
    'password': "echo123..",
    'database': "fertex"
}

# Connect to MySQL
try:
    connection = mysql.connector.connect(
        host=db_config['host'],
        user=db_config['user'],
        password=db_config['password']
    )
    if connection.is_connected():
        cursor = connection.cursor()

        # Drop the database if it exists and create a new one
        cursor.execute("DROP DATABASE IF EXISTS fertex")
        cursor.execute("CREATE DATABASE fertex")
        connection.database = db_config['database']

        # Create tables
        cursor.execute("""
            CREATE TABLE fertilizer (
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL,
                N INT NOT NULL,
                PCG INT NOT NULL,
                gases VARCHAR(255) NOT NULL,
                PRIMARY KEY (id)
            )
        """)
        cursor.execute("""
            CREATE TABLE historicEmissions (
                id INT AUTO_INCREMENT PRIMARY KEY,
                category VARCHAR(255),
                year INT,
                emissionsKTCO2 FLOAT,
                country VARCHAR(255)
            )
        """)

        # Insert data into historicEmissions table
        country = "United States of America"  # As per the CSV file information
        for index, row in data.iterrows():
            for year in range(1990, 2021):
                year_str = str(year)
                if year_str in row and pd.notna(row[year_str]):
                    insert_query = """
                    INSERT INTO historicEmissions (category, year, emissionsKTCO2, country)
                    VALUES (%s, %s, %s, %s)
                    """
                    cursor.execute(insert_query, (row['Category'], year, row[year_str], country))

        connection.commit()
        print("Data inserted successfully into the historicEmissions table")
except Error as e:
    print(f"Error: {e}")
finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection is closed")