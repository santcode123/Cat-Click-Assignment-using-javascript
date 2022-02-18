import { cats } from "./catData";
import { cat } from "./cat";

export class model {
  constructor() {
    this.cats = cats.map(
      (catData) => new cat(catData.id, catData.name, catData.imageUrl)
    );
  }

  getCats() {
    return this.cats;
  }
  getCat(catId) {
    const index = this.cats.findIndex((ele) => ele.id === catId);
    return index > -1 ? this.cats[index] : null;
  }

  incrementCount(catId) {
    this.cats = this.cats.map((cat) => {
      if (cat.id === catId) {
        cat.updateCat(cat.id, cat.name, cat.url, cat.count + 1);
      }
      return cat;
    });
  }
  getCount(catId) {
    this.cats.forEach(function (cat) {
      if (cat.id === catId) return cat.count;
    });
  }
  updateCurrentCatField(catId, name, imgUrl, count) {
    this.cats = this.cats.map((cat) => {
      if (cat.id === catId) {
        cat.updateCat(cat.id, name, imgUrl, parseInt(count, 10));
      }
      return cat;
    });
  }
}
