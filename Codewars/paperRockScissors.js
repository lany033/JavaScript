// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    
    if(p1 == "paper"){
      if(p2 == "scissors"){
        return "Player 2 won!"
      }
      else if(p2 == "rock"){
        return "Player 1 won!"
      }
      else if(p2 == "paper"){
        return "Draw!"
      }
    }
    else if(p1 == "rock"){
      if(p2 == "paper"){
        return "Player 2 won!"
      }
      else if(p2 == "scissors"){
        return "Player 1 won!"
      }
      else if(p2 == "rock"){
        return "Draw!"
      }
    }
    else if(p1 == "scissors"){
        if(p2 == "paper"){
          return "Player 1 won!"
        }
        else if(p2 == "rock"){
          return "Player 2 won!"
        }
        else if(p2 == "scissors"){
          return "Draw!"
        }
      }
    
  };

rps("scissors", "paper")
rps("scissors", "rock")
rps("scissors", "scissors")

rps("paper", "scissors")
rps("paper", "rock")
rps("paper", "paper")

rps("rock", "paper")
rps("rock", "scissors")
rps("rock", "rock")