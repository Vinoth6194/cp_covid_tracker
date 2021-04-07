import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then(response => response.json())
        .then(data => {
          const countries = data.map(country => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async e => {
    const countryCode = e.target.value;
    console.log(countryCode);
  };
  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>

        <FormControl className="app_dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="worldwide">WorldWide</MenuItem>
            {countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* header */}
      {/* title + country dropdown */}

      {/* infoboxes
      infoboxes
      infoboxes */}

      {/* table */}
      {/* graph */}

      {/* map */}
    </div>
  );
}

export default App;
