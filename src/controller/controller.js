import { model } from "../model/model";
import { view } from "../view/view";
import { catList } from "../view/catList";
import { admin } from "../view/admin";

class controllerClass {
  constructor() {
    this.currentCatId = 1;
  }

  init() {
    this.getAllCats = () => {
      return this.getCats();
    };
    this.updateCat = (name, imgUrl, count) => {
      return this.updateCurrentCatField(this.currentCatId, name, imgUrl, count);
    };
    this.updateCurrentCat = (catId) => {
      this.updateCurrentCatId(catId);
    };
    this.increaseCount = () => {
      this.incrementCount();
    };

    this.model = new model();
    this.view = new view(this.increaseCount, this.currentCat.bind(this));
    this.catList = new catList(this.updateCurrentCat, this.getAllCats);
    this.admin = new admin(this.updateCat, this.currentCat.bind(this));
  }

  getCats() {
    return this.model.getCats();
  }

  updateCurrentCatId(catId) {
    this.currentCatId = parseInt(catId, 10);
    this.view.render();
    this.catList.render();
    this.admin.render();
  }
  updateCurrentCatField(catId, name, imgUrl, count) {
    if (count < 0 || name.length > 20) {
      alert(
        "please enter valid input: name should be less then 20 characters and count should not be negative"
      );
    } else {
      this.model.updateCurrentCatField(catId, name, imgUrl, count);
    }
    this.catList.render();
    this.admin.render();
    this.view.render();
  }

  currentCat() {
    return this.model.getCat(this.currentCatId);
  }

  incrementCount() {
    this.model.incrementCount(this.currentCatId);
    this.admin.render();
    this.view.render();
  }
  getCount() {
    return this.model.getCount(this.currentCatId);
  }
}

export const controller = new controllerClass();
