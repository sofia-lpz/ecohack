document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    
    const fetchButton = document.getElementById('fetchButton');
    const calculateButton = document.getElementById('calculateButton');
    
    fetchButton.addEventListener('click', function () {
        console.log('Fetch button click event triggered');
        
        const country = document.getElementById('country').value;
        const yearStart = document.getElementById('year_start').value;
        const yearEnd = document.getElementById('year_end').value;
        
        console.log('Country:', country);
        console.log('Year Start:', yearStart);
        console.log('Year End:', yearEnd);
        
        if (yearStart && yearEnd) {
            if (country === "all") {
                fetchAllCountriesData(yearStart, yearEnd);
            } else {
                fetchCountryData(country, yearStart, yearEnd);
            }
        } else {
            alert('Please select year start and year end.');
        }
    });
    
    calculateButton.addEventListener('click', function () {
        console.log('Calculate button click event triggered');
        
        const kg = document.getElementById('kg').value;
        const nitrogen = document.getElementById('nitrogen').value;
        
        console.log('Kg:', kg);
        console.log('Nitrogen:', nitrogen);
        
        if (kg && nitrogen) {
            calculateData(kg, nitrogen);
        } else {
            alert('Please enter kg of fertilizer used and nitrogen per kg of fertilizer.');
        }
    });
  });
  
  function fetchAllCountriesData(yearStart, yearEnd) {
    const apiUrl = `http://localhost:3000/api/historic/range/${yearStart}/${yearEnd}`;
    
    console.log('Fetching data from API for all countries:', apiUrl);
    
    fetch(apiUrl)
        .then(response => {
            console.log('Response received:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(responseData => {
            if (!responseData.data || responseData.data.length === 0) {
                throw new Error('No data received or data is empty');
            }
            console.log('Data fetched:', responseData.data);
            downloadCSV(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('result').innerText = 'Error fetching data. Please try again later.';
        });
  }
  
  function fetchCountryData(country, yearStart, yearEnd) {
    const apiUrl = `http://localhost:3000/api/historic/range/${encodeURIComponent(country)}/${yearStart}/${yearEnd}`;
    
    console.log('Fetching data from API for country:', apiUrl);
    
    fetch(apiUrl)
        .then(response => {
            console.log('Response received:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(responseData => {
            if (!responseData.data || responseData.data.length === 0) {
                throw new Error('No data received or data is empty');
            }
            console.log('Data fetched:', responseData.data);
            downloadCSV(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('result').innerText = 'Error fetching data. Please try again later.';
        });
  }
  
  function calculateData(kg, nitrogen) {
    const apiUrl = `http://localhost:3000/api/calculate/${kg}/${nitrogen}`;
    
    console.log('Calculating data using API:', apiUrl);
    
    fetch(apiUrl)
        .then(response => {
            console.log('Response received:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(responseData => {
            if (!responseData.data || responseData.data.length === 0) {
                throw new Error('No data received or data is empty');
            }
            console.log('Calculation result:', responseData.data);
            displayResult(responseData.data);
        })
        
  }
  
  function downloadCSV(data) {
    const csv = convertToCSV(data);
    if (!csv) {
        console.error('Error converting data to CSV');
        return;
    }
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'data.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  function convertToCSV(data) {
    if (!data || !Array.isArray(data) || data.length === 0) {
        console.error('Invalid data for CSV conversion');
        return null;
    }
    const array = [Object.keys(data[0])].concat(data);
    return array.map(row => {
        return Object.values(row).map(value => {
            return typeof value === 'string' ? JSON.stringify(value) : value;
        }).join(',');
    }).join('\n');
  }
  
  function displayResult(data) {
    const resultDiv = document.getElementById('resultcalc');
    resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)} CO<sub>2e</sub></pre>`;
    console.log('Displayed data:', data);
  }
  