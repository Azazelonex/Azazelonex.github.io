function getRandomGame(userNumber, randomNum){ 
    randomNum = Math.floor((Math.random() * 100)+1); 
      for (;userNumber!== null;) { 
        userNumber = +prompt('Enter number 1-100','50'); 
        if (userNumber <1 || userNumber >100){
          alert('entered number is not supported ');
          } else if (userNumber > randomNum) {
          alert("Много"); 
          } else if (userNumber < randomNum) {
          alert("Мало"); 
          } else { 
          break; 
        } 
      } 
    }; 
    getRandomGame();
      while(true){
      const gameAsk = confirm('You win, try again?');
      if (gameAsk) {
        getRandomGame();
      } else {
        break
      }
    };