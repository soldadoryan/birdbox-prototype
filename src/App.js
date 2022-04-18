import { useState } from "react";
import ListRecording from "./components/ListRecording";
import Login from "./components/Login";
import Recording from "./components/Recording";
import Structure from "./components/Structure";

function App() {
  const [page, setPage] = useState('listRecording');

  return (
    <Structure>
      {page === 'login' && <Login />}
      {page === 'recording' && <Recording />}
      {page === 'listRecording' && <ListRecording />}
    </Structure>
  );
}

export default App;
