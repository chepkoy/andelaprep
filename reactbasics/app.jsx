function Application() {
  return(
    <div className="scoreboard">
      <div className="header">
        <h1>Scoreboard</h1>
      </div>

      <div className="players">
        <div className="player">
          <div className="player-name">
            Allan Chepkoy
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div classNmae="counter-score"> 31 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>

        <div className="player">
          <div className="player-name">
            Naomi Chepkoy
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div classNmae="counter-score"> 33 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>
      </div>
          
    </div>
  );
}
ReactDOM.render(<Application />, document.getElementById('container'));