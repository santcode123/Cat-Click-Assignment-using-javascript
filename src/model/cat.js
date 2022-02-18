export class cat {
  constructor(id, name, imageUrl) {
    this.id = id;
    this.name = name;
    this.url = imageUrl;
    this.count = 0;
  }

  updateCat(id, name, imageUrl, count) {
    this.id = id;
    this.name = name;
    this.url = imageUrl;
    this.count = count;
  }
}
