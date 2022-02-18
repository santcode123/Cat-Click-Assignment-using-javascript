export class admin {
  constructor(updateCatFields, getCat) {
    this.isAdminVisible = false;
    this.adminContainer = document.querySelector(".admin-container");
    this.getCat = getCat;
    this.updateCatFields = updateCatFields;
    this.renderAdminDom();
    this.adminBtnEle = document.querySelector(".admin-btn");
    this.adminFormEle = document.querySelector(".admin-form");
    this.nameInputEle = document.querySelector("#name-input");
    this.imageUrlEle = document.querySelector("#image-url");
    this.clickEle = document.querySelector("#clicks");
    this.saveBtn = document.querySelector(".save-btn");
    this.render();
    this.formSubmit();
    this.bindAdminAction();
  }
  renderAdminDom() {
    const adminBtnEle = document.createElement("button");
    adminBtnEle.textContent = "Admin";
    adminBtnEle.classList.add("admin-btn");
    this.adminContainer.appendChild(adminBtnEle);

    const adminFormEle = document.createElement("form");
    adminFormEle.classList.add("admin-form", "hide-form");
    this.adminContainer.appendChild(adminFormEle);

    const nameLabelEle = document.createElement("label");
    nameLabelEle.textContent = "Name";
    nameLabelEle.setAttribute("for", "name-input");
    adminFormEle.appendChild(nameLabelEle);

    const nameInputEle = document.createElement("input");
    nameInputEle.setAttribute("id", "name-input");
    adminFormEle.appendChild(nameInputEle);

    const imgLabelEle = document.createElement("label");
    imgLabelEle.textContent = "ImageUrl";
    imgLabelEle.setAttribute("for", "image-url");
    adminFormEle.appendChild(imgLabelEle);

    const imgUrlEle = document.createElement("input");
    imgUrlEle.setAttribute("id", "image-url");
    adminFormEle.appendChild(imgUrlEle);

    const clicksLabelEle = document.createElement("label");
    clicksLabelEle.textContent = "Clicks";
    clicksLabelEle.setAttribute("for", "clicks");
    adminFormEle.appendChild(clicksLabelEle);

    const clicksInputEle = document.createElement("input");
    clicksInputEle.setAttribute("id", "clicks");
    adminFormEle.appendChild(clicksInputEle);

    const saveBtnEle = document.createElement("button");
    saveBtnEle.classList.add("save-btn");
    saveBtnEle.textContent = "Save";
    saveBtnEle.setAttribute("type", "submit");
    adminFormEle.appendChild(saveBtnEle);
  }
  handleSubmit(e) {
    e.preventDefault();
    const _name = e.target[0].value;
    const _imgUrl = e.target[1].value;
    const _count = e.target[2].value;
    this.updateCatFields(_name, _imgUrl, _count);
  }
  formSubmit() {
    this.adminFormEle.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  bindAdminAction() {
    this.adminBtnEle.addEventListener("click", () => {
      this.isAdminVisible = !this.isAdminVisible;
      if (this.isAdminVisible) {
        this.adminFormEle.classList.remove("hide-form");
      } else {
        this.adminFormEle.classList.add("hide-form");
      }
    });
  }

  render() {
    const currentCat = this.getCat();
    this.nameInputEle.value = currentCat.name;
    this.imageUrlEle.value = currentCat.url;
    this.clickEle.value = currentCat.count;
  }
}
