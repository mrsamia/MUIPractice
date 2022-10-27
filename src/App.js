
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Tooltip } from '@mui/material';
import AutoComplete from './Component/AutoComplete';
import TypoGraphy from './Component/TypoGraphy';
import Nav from './Component/Nav';
import CardMaping from './Component/CardMaping';
import Grrid from './Component/Grrid';

const sx = {
  height: 80,
  width: 180
}

function App() {
  function ClickHandler() {
    alert("click me")
  }

  return (
    <div className="App">
      <Nav />
      <TypoGraphy />
      <div className='pt-4'>
        <Tooltip arrow placement='right' title="This is Mui button">
          <Button variant="contained" color='success' size="large" sx={sx} startIcon={<AccessAlarmIcon />}> React App </Button>
        </Tooltip>
      </div>
      <div className='pt-4'>
        <Button variant="contained" color='success' size="large" classes={{ root: "bttn" }} endIcon={<AccountBalanceIcon />} onClick={ClickHandler}> React App </Button><br></br>
      </div>
      <div className='pt-4'>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <div className='pt-4'>
        <TextField label="Filled" />
      </div>
      <AutoComplete />
      <CardMaping />
      <Grrid/>
    </div>
  );
}

export default App;
