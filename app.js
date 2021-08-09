const Header = (props) =>{
    
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats"> Players: {props.totalPlayer}</span>
        </header>
    );
}

const Player = (props) =>{
    return (
        <div className="player">
            <span className="player-name"> 
            <button className="remove-player" onClick={() => props.removePlayer(props.id) }>✖</button>
                {props.name}
            </span>

            <Counter />
        </div>
    );
}

class Counter extends React.Component{
        state = {
            score:0
        };

        incrementScore(){
            this.setState(prevState => ({
                score: prevState.score+1
            }));
        }
        decrementScore = () =>{
            this.setState(prevState => ({
                score: prevState.score > 0 ? prevState.score-1 : prevState.score=0
            }));
        }

        render(){
        return (
            <div className="counter">
                    <button className="counter-action-decrement" onClick={this.decrementScore}> - </button>
                    <span className="counter-score">{this.state.score}</span>
                    <button className="counter-action-increment" onClick={() => this.incrementScore()}> + </button>
    
    
                </div>
        );

    }
}


class App  extends React.Component{

    state={
        players: [

            {
                name: "Candice",
                id: 1
              },
              {
                name: "Joe",
                
                id: 2
              },
              {
                name: "dixie Normus",
                
                id: 3
              },
              {
                name: "Mike hawk",
                
                id: 4
              }

        ]
    };


    handleRemovePlayer= (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        })

    }


    
    render(){
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayer={this.state.players.length} />
                {/* PLayers list */}
                {this.state.players.map(player =>
                    <Player
                        name={player.name}
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
    
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);




//IF RECEIVING INPUT => function (statless functional component)
    //IF dyanmic use class (statefull component)




    //arrow functions automatically bind them to the spec to which they're defined  (lexical this bind)