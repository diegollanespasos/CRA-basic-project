import React from 'react';
import './App.css';
import User from './components/User/User';
import Hobbies from './components/Hobbies/Hobbies';
import { arrayHobbies } from './components/Hobbies/Hobbies.data';
import { countActiveHobbies } from './components/Hobbies/Hobbies.utils';

class App extends React.Component {
  render(){
    return (
      <div className='App'>
          <User avatar={<Avatar />} name='Walter White' description='Chemistry Teacher' age={50} />
          <Hobbies hobbies={arrayHobbies} showHobbies={true} count={countActiveHobbies} />
      </div>
    )
  }
}

function Avatar () {
  return (
    <img src='https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png' style={avatarStyles} alt='Avatar' />
  )
}

const avatarStyles = {
  borderRadius: '12px',
  width: '150',
  height: 'auto',
}

export default App;