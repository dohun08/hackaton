cstElementArr = [
  ["shop-article", "component/shop-article.html"],
  ["input-article", "component/input-article.html"]
];

cstElementArr.forEach(([componentName, componentPath]) => {
  customElements.define(
    componentName,
    class extends HTMLElement {
      constructor() {
        super();
        fetch(componentPath)
          .then((response) => response.text())
          .then((html) => {
            this.innerHTML = html;
            if(componentName == 'shop-article'){
            this.querySelector(".text-part > h4").innerHTML = this.getAttribute("title");
            this.querySelector(".text-part > p").innerHTML = '포인트 ' + this.getAttribute("point");
            this.querySelector(".shop-box > button").style.display = this.getAttribute("disabled");
            this.querySelector(".shop-box > img").style.display = this.getAttribute("pattern");
            this.querySelector(".shop-box > button").setAttribute('name', this.getAttribute('pk'));
            }else if(componentName == 'input-article'){
              this.querySelector(".text-part > h4").innerHTML = this.getAttribute("title");
            }
          })
          .catch((error) => {
            console.error(`Error fetching ${componentPath}:`, error);
          });
      }
    }
  );
});