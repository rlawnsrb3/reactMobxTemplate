import { observable, action } from 'mobx';

class BingoStore {
  @observable
  size = 5;

  @action
  changeSize = (data) => {
    this.size = data;
  };

  @observable
  totalBingo = 0;

  @action
  changeTotalBingo = (data) => {
    this.totalBingo = data;
  };
}
export default BingoStore;
export const bingoStore = new BingoStore();
