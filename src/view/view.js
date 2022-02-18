export class view {
  constructor(onClick, getCurrentCat) {
    this.onClick = onClick;
    this.getCurrentCat = getCurrentCat;
    this.catMainBodyEle = document.querySelector(".main-body");
    this.countContainerEle = document.querySelector(".count-container");
    this.renderViewDom();
    this.catImgEle = document.querySelector(".cat-image");
    this.clickCountEle = document.querySelector(".click-count");
    this.catNameEle = document.querySelector(".cat-name");
    this.catViewAction();
    this.render();
  }
  renderViewDom() {
    const imgEle = document.createElement("img");
    imgEle.classList.add("cat-image");
    imgEle.setAttribute("alt", "cat");
    this.catMainBodyEle.firstChild.before(imgEle);

    const catNameEle = document.createElement("span");
    catNameEle.classList.add("cat-name");
    this.countContainerEle.appendChild(catNameEle);

    const countEle = document.createElement("span");
    countEle.classList.add("click-count");
    this.countContainerEle.appendChild(countEle);
  }
  handleClick(e) {
    this.onClick();
  }
  catViewAction() {
    this.catImgEle.addEventListener("click", (e) => this.handleClick(e));
  }
  render() {
    const currentCat = this.getCurrentCat();
    this.catImgEle.src = currentCat.url;
    this.clickCountEle.textContent = currentCat.count;
    this.catNameEle.textContent = currentCat.name + ":";
  }
}
