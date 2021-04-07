import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState(['USA', 'UK', 'India']);
  return (
    <div className="app">
      <div class="app__header">
        <h1>Covid-19 Tracker</h1>

        <FormControl className="app_dropdown">
          <Select variant="outlined" value="abc">
            {countries.map(country => (
              <MenuItem value={country}>{country}</MenuItem>
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
