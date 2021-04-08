import {
  Card,
  FormControl,
  MenuItem,
  Select,
  CardContent,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import InfoBox from './InfoBox';
import Map from './Map';

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
    setCountry(countryCode);
    console.log('Selected Country is', country);
    console.log('Selected Country code is', countryCode);
  };
  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Covid-19 Tracker</h1>

          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
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
        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" cases="123" total="1.2"></InfoBox>
          <InfoBox title="Recovered" cases="1234" total="1.23"></InfoBox>
          <InfoBox title="Deaths" cases="1235" total="1.24"></InfoBox>
        </div>

        {/* map */}
        <Map></Map>
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <h3>Worldwide new deaths</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
