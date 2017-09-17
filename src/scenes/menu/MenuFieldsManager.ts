import { Model } from '../../core/Model';
import { GlobalDispatcher } from '../../core/GlobalDispatcher';
import { Constants } from '../../core/Constants';
import { SimpleBox} from '../../ui/SimpleBox';
import { PlayerVO } from '../../scenes/game/mainTable/PlayerVO';

export class MenuFieldsManager extends PIXI.Sprite{
  public playerBoxes: SimpleBox[] = [];

  constructor(){
    super();
    this.createBoxesByDefault();
    this.addInputBox();
    this.changeName();
    this.removeInputBox();
  }

  public createPlayer(boxYPosition:number, event:string, color:any, name:string){
    var playerVO = new PlayerVO();
        playerVO.name = name;
        playerVO.color = color;
    Model.players.push(playerVO);
    var playerBox = new SimpleBox(10, boxYPosition, 350, 60, playerVO.color, playerVO.name);
        playerBox.buttonMode = true;
        playerBox.interactive = true;
        playerBox.on('mousedown', () => {GlobalDispatcher.dispatch(event);});
    this.playerBoxes.push(playerBox);
    this.addChild(playerBox);
  }

  public createBoxesByDefault(){
    this.createPlayer(330, Constants.MENU_PLAYER_1_PRESSED, 0x00ff00, Model.player_1_name);
    this.createPlayer(420, Constants.MENU_PLAYER_2_PRESSED, 0xffff00, Model.player_2_name);
  }

  public addInputBox(){
    GlobalDispatcher.addEventListener(Constants.PLAYER_BAR_PLUS_PRESSED, this.onPlusButtonPressed.bind(this));
  }

  public removeInputBox(){
    GlobalDispatcher.addEventListener(Constants.PLAYER_BAR_MINUS_PRESSED, this.onMinusButtonPressed.bind(this));
  } 

  public changeName(){
    GlobalDispatcher.addEventListener(Constants.MENU_PLAYER_1_PRESSED, () => {
      Model.players[0].name = prompt("Please, enter your name");
      this.playerBoxes[0].inputText.text = Model.players[0].name;
    });
    GlobalDispatcher.addEventListener(Constants.MENU_PLAYER_2_PRESSED, () => {
      Model.players[1].name = prompt("Please, enter your name");
      this.playerBoxes[1].inputText.text = Model.players[1].name;
    });
    GlobalDispatcher.addEventListener(Constants.MENU_PLAYER_3_PRESSED, () => {
      Model.players[2].name = prompt("Please, enter your name");
      this.playerBoxes[2].inputText.text = Model.players[2].name;
    });
     GlobalDispatcher.addEventListener(Constants.MENU_PLAYER_4_PRESSED, () => {
      Model.players[3].name = prompt("Please, enter your name");
      this.playerBoxes[3].inputText.text = Model.players[3].name;
    });
  }

  public onPlusButtonPressed(){
    for (let i: number = Model.number_of_players -1; i < Model.number_of_players; i++){
      if(Model.players.length == 2){
        this.createPlayer(510, Constants.MENU_PLAYER_3_PRESSED, 0x0066ff, "        ");
      } 
      else 
        if (Model.players.length == 3) { 
          this.createPlayer(600, Constants.MENU_PLAYER_4_PRESSED, 0xff0000, "        ");
        }
            else {return;}
    }
  }

  public onMinusButtonPressed(){
    if(this.children.length > Model.number_of_players_min){
      if(Model.number_of_players >= Model.number_of_players_min){
        this.children.pop();
      }
    }
  } 

}