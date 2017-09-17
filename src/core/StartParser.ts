import { Model } from './Model';

export class StartParser {
  public start_amount: number;
  public start_amount_max: number;
  public start_amount_min: number;
  public start_amount_step: number;
  public number_of_players: number;
  public number_of_players_max: number;
  public number_of_players_min: number;
  public number_of_players_step: number;
  public player_1_name: string;
  public player_2_name: string;

  constructor(dataConfig: any) {
    Model.start_amount = dataConfig.start_amount.default_value;
    Model.start_amount_max = dataConfig.start_amount.max_value;
    Model.start_amount_min = dataConfig.start_amount.min_value;
    Model.start_amount_step = dataConfig.start_amount.step;

    Model.number_of_players = dataConfig.number_of_players.default_value;
    Model.number_of_players_max = dataConfig.number_of_players.max_value;
    Model.number_of_players_min = dataConfig.number_of_players.min_value;
    Model.number_of_players_step = dataConfig.number_of_players.step;

    Model.player_1_name = dataConfig.name_of_player.player_1;
    Model.player_2_name = dataConfig.name_of_player.player_2;
  }
}