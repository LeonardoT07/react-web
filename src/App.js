import React, { useState, useEffect } from 'react';
import api from './services/api';

import FranquiaItem from './components/FranquiaItem/index';
import FranquiaForm from './components/FranquiaForm/index';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [franquias, setFranquias] = useState([]);


  useEffect(() => {
    async function loadFranquias(){
      const response = await api.get('/studios');

      setFranquias(response.data);
    }

    loadFranquias();
  }); //no vídeo o final possui um colchete vazio  }, []);


  async function handleAddFranquia(data){
    const response = await api.post('/studios', data);

    setFranquias([...franquias, response.data]);
  }

  return (
      <div id="app">
          <div id="modelo">
            <aside id="aside">
              <strong>Cadastrar Nova Franquia:</strong>
              <FranquiaForm onSubmit={handleAddFranquia} />
            </aside>
            <main id="main">
              <ul>
                {franquias.map((franquia, index) => (
                  <FranquiaItem key={index} franquia={franquia} />
                ))}
              </ul>
            </main>
          </div>
      </div>
  );
}

export default App;
