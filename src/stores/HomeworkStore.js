import { observable, action } from 'mobx';

class HomeworkStore {
  @observable
  homework = 'Homework';

  @action
  changeHomework = data => {
    this.homework = data;
  };

  @action
  changetoFinish = () => {
    this.homework = 'Finish';
  };
}
export default HomeworkStore;
