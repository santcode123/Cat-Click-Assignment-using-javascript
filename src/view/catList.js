export class catList {
  constructor(onClick, getCats) {
    this.catListContainerEle = document.querySelector(".cat-list-container");
    this.onClick = onClick;
    this.getCats = getCats;
    this.renderCatListDom();
    this.render();
  }
  renderCatListDom() {
    for (let i = 1; i <= 5; i++) {
      const catEle = document.createElement("button");
      catEle.classList.add("cat-" + i);
      catEle.addEventListener("click", (e) => this.handleClick(e));
      this.catListContainerEle.appendChild(catEle);
    }
  }
  handleClick(e) {
    const catId = e.target.classList[0].split("-").pop();
    this.onClick(catId);
  }

  render() {
    const cats = this.getCats();
    cats.forEach(function (cat) {
      const catEle = document.querySelector(".cat-" + cat.id);
      catEle.textContent = cat.name;
    });
  }
}
