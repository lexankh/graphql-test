class List {
    constructor(title, subtitle, image) {
        this.title = title;
        this.subtitle = subtitle;
        this.image = image;
    }
    
    create() {
        this.template = document.querySelector("#list").content;
        this.list = this.template.cloneNode(true);
        this.list.querySelector('.lists__title').textContent = this.title;
        this.list.querySelector('.lists__subtitle').textContent = this.subtitle;
        this.list.querySelector('.lists__image').src = this.image;
        return this.list;

    }
}