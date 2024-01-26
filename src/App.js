import './App.css';
import io from 'socket.io-client'
import Header from './components/header/header'
import Footer from './components/footer/footer';
import { useEffect } from 'react'
import { observer } from 'mobx-react'

import mainStore from './store/mainStore';
import Button from './components/button/button';

const socket = io.connect('http://localhost:2000/', {query: 'username=' + "username"});

const App = observer(() => {
  useEffect(() => {
    socket.on('connect', () => {
      mainStore.connected(socket);
      console.log(mainStore);
    })
    socket.on('score', function(player){
      mainStore.updateScore(player);
    })
  }, [socket])

  return (
    <div className="App">
      <Header/>

      <Button />

      <Footer />
    </div>
  );
})

export default App;
