import React, { useState } from 'react';
import SmileCard from './components/SmileCard';
import './App.css';

function App() {
  const [smileys, setSmileys] = useState([
    { id: 1, name: 'Joy', emoji: '😄', votes: 0 },
    { id: 2, name: 'Sad', emoji: '😢', votes: 0 },
    { id: 3, name: 'Confuse', emoji: '😕', votes: 0 },
  ]);

  const [winningSmiley, setWinningSmiley] = useState(null);

  const handleVote = (id) => {
    setSmileys((prevSmileys) =>
      prevSmileys.map((smiley) =>
        smiley.id === id ? { ...smiley, votes: smiley.votes + 1 } : smiley
      )
    );
  };

  const showResults = () => {
    const winner = smileys.reduce((prev, current) =>
      prev.votes > current.votes ? prev : current
    );
    setWinningSmiley(winner);
  };

  return (
    <div className="App">
      <div className="wrapper">
        {smileys.map((smiley) => (
          <SmileCard key={smiley.id} smiley={smiley} onVote={handleVote} />
        ))}
      </div>
     
        <button className='btnRes' onClick={showResults}>Show Results</button>
        {winningSmiley && (
          <div className="results">
            The winning smiley is {winningSmiley.name} with {winningSmiley.votes} votes! {winningSmiley.emoji}
          </div>
    
      )}
    </div>
  );
}

export default App;
