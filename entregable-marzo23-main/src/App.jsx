
import React, { useState } from 'react';
import Card from './Card';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 3 || name.trim() !== name) {
      setErrorMessage('Por favor chequea que la información sea correcta');
      return;
    }
    if (description.length < 6) {
      setErrorMessage('Por favor chequea que la información sea correcta');
      return;
    }

    setErrorMessage('');
    setShowCard(true);

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del animal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción del animal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {showCard && <Card name={name} description={description} />}

      
    </div>
  );
}

export default App;
