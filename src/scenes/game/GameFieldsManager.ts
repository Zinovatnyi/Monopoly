import { Model } from '../../core/Model';
import { SimpleBox} from '../../ui/SimpleBox';
import { GlobalDispatcher} from '../../core/GlobalDispatcher';

export class GameFieldsManager extends PIXI.Sprite{
  public playerBoxes: SimpleBox[] = [];
  public currentPlayerIndex:number = 0;

  constructor(public parent:PIXI.Container){
    super();
    this.setPlayerBoxes();
    this.setBoxOutLine(this.currentPlayerIndex);
    this.setNewPlayerAmount();
  }

  public setPlayerBoxes(){
    for (let i:number = 0; i < Model.players.length; i++){
      Model.players[i].money = Model.start_amount;
      var playerBox = new SimpleBox(190, 200+100*i, 300, 80, Model.players[i].color, "Player "+Model.players[i].name+"\n money - "+Model.players[i].money);
      this.parent.addChild(playerBox);
      this.playerBoxes.push(playerBox);
    }
  }

  public setBoxOutLine(_currentPlayerIndex:number){
    GlobalDispatcher.addEventListener('active_player', (_currentPlayerIndex:number) => {
      for(let i:number = 0; i < Model.players.length; i++){
        this.playerBoxes[i].outLineClear();
      }
      this.playerBoxes[_currentPlayerIndex].boxOutLine();
    })
  }

  public setPlayerQueue(){
    if(this.currentPlayerIndex > Model.players.length - 1){
      this.currentPlayerIndex = 0;
    }
    GlobalDispatcher.dispatch('active_player', this.currentPlayerIndex);
    this.currentPlayerIndex ++;
  }

  public setNewPlayerAmount(){
    GlobalDispatcher.addEventListener('player_money', (currentPlayerMoney:number) => {
      this.playerBoxes[this.currentPlayerIndex - 1].inputText.text = "Player "+Model.players[this.currentPlayerIndex - 1].name+"\n money - "+currentPlayerMoney;
    });
  }

}