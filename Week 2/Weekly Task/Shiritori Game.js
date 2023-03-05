
class Shiritori {
	words = [];
	game_over = false;

	play(str){
		if(this.words.length != 0){
			if(!this.words.includes(str) && str[0] == this.words[this.words.length - 1].slice(-1) ){
				this.words.push(str);
				return this.words;
			}
			else{
				this.game_over = true;
				return "game over";		
			}
		}
		
		else{
			this.words.push(str);
			return this.words;
		}
	}
	
	restart(){
		this.words = [];
		this.game_over= false;
		return "game restarted";
	}
	
}