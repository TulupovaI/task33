
function SmileCard({ smiley, onVote }) {
  return (
    <div className={`card ${smiley.name.toLowerCase()}`} key={smiley.id}>
      <span className="smile">{smiley.emoji}</span>
      <div className="content">
        <p>{smiley.name}</p>
        <button className="btn" onClick={() => onVote(smiley.id)}>Vote</button>
        <p>Votes: {smiley.votes}</p>
        
      </div>
    </div>
  );
}

export default SmileCard;
