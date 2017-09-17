import { PlayerVO } from '../scenes/game/mainTable/PlayerVO';

export class Model {
  private static _start_amount: number; 
  private static _start_amount_max: number;
  private static _start_amount_min: number;
  private static _start_amount_step: number;
  private static _number_of_players: number;
  private static _number_of_players_max: number;
  private static _number_of_players_min: number;
  private static _number_of_players_step: number;
  private static _player_1_name: string;
  private static _player_2_name: string;
  private static _players: PlayerVO[] = [];
  private static _currentPlayerIndex: number;
  private static _currentPlayerPosition: number;

  static get start_amount(){
    return Model._start_amount;
  }

  static set start_amount(_start_amount){
    Model._start_amount = _start_amount;
  }

  static get start_amount_max(){
    return Model._start_amount_max;
  }

  static set start_amount_max(_start_amount_max){
    Model._start_amount_max = _start_amount_max;
  }

  static get start_amount_min(){
    return Model._start_amount_min;
  }

  static set start_amount_min(_start_amount_min){
    Model._start_amount_min = _start_amount_min;
  }

  static get start_amount_step(){
    return Model._start_amount_step;
  }

  static set start_amount_step(_start_amount_step){
    Model._start_amount_step = _start_amount_step;
  }

  static get number_of_players(){
    return Model._number_of_players;
  }

  static set number_of_players(_number_of_players){
    Model._number_of_players = _number_of_players;
  }

  static get number_of_players_max(){
    return Model._number_of_players_max;
  }

  static set number_of_players_max(_number_of_players_max){
    Model._number_of_players_max = _number_of_players_max;
  }

  static get number_of_players_min(){
    return Model._number_of_players_min;
  }

  static set number_of_players_min(_number_of_players_mi){
    Model._number_of_players_min = _number_of_players_mi;
  }

  static get number_of_players_step(){
    return Model._number_of_players_step;
  }

  static set number_of_players_step(_number_of_players_step){
    Model._number_of_players_step = _number_of_players_step;
  }

  static get player_1_name(){
    return Model._player_1_name;
  }

  static set player_1_name(_player_1_name){
    Model._player_1_name = _player_1_name;
  }

  static get player_2_name(){
    return Model._player_2_name;
  }

  static set player_2_name(_player_2_name){
    Model._player_2_name = _player_2_name;
  }

  static get players():PlayerVO[]{
    return this._players;
  }

  static set players(_players){
    this._players = _players;
  }

  static get currentPlayerIndex():number{
    return this._currentPlayerIndex;
  }

  static set currentPlayerIndex(_currentPlayerIndex){
    this._currentPlayerIndex = _currentPlayerIndex;
  }

  static get currentPlayerPosition():number{
    return this._currentPlayerPosition;
  }

  static set currentPlayerPosition(_currentPlayerPosition){
    this._currentPlayerPosition = _currentPlayerPosition;
  }

}