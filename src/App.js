import { FormControl, MenuItem, Select } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="app">
      <div class="app__header">
        <h1>Covid-19 Tracker</h1>

        <FormControl className="app_dropdown">
          <Select variant="outlined" value="abc">
            <MenuItem value="worldwide">worldwide</MenuItem>
            <MenuItem value="worldwide">Option 2</MenuItem>
            <MenuItem value="worldwide">option 3</MenuItem>
            <MenuItem value="worldwide">hey</MenuItem>
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
