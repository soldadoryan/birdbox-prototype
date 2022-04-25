import { useState } from "react";
import AnimationBlockchain from "./components/AnimationBlockchain";
import Config from "./components/Config";
import Erro404 from "./components/Erro404";
import ListRecording from "./components/ListRecording";
import Login from "./components/Login";
import Recording from "./components/Recording";
import Register from "./components/Register";
import RegisterRecording from "./components/RegisterRecording";
import Structure from "./components/Structure";

function App() {
  const [page, setPage] = useState('login');

  return (
    <Structure>
      {page === 'login' && <Login setPage={setPage} />}
      {page === 'recording' && <Recording setPage={setPage} />}
      {page === 'listRecording' && <ListRecording setPage={setPage} />}
      {page === 'registerRecording' && <RegisterRecording setPage={setPage} />}
      {page === 'blockchain' && <AnimationBlockchain setPage={setPage} />}
      {page === '404' && <Erro404 setPage={setPage} />}
      {page === 'register' && <Register setPage={setPage} />}
      {page === 'config' && <Config setPage={setPage} />}
    </Structure>
  );
}

export default App;
