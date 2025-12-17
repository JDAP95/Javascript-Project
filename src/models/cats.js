export class Cats {
    constructor(data) {
        this.id = data.id;
        this.url = data.url;
        this.width = data.width;
        this.height = data.height;

        this.breeds = (data.breeds ? data.breeds : []).map(breed => new Breed(breed));
        this.categories = (data.categories ? data.categories : []).map(category => new Category(category));
    }
}

export class Category {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
    }
}

export class Breed {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.image = data.image ? new ImageCat(data.image) : null;
        this.country_code = data.country_code;
        this.temperament = data.temperament;
        this.origin = data.origin;
        this.description = data.description;
        this.life_span = data.life_span;
        this.dog_friendly = data.dog_friendly;
    }
}


export class ImageCat {
    constructor(data) {
        this.id = data.id;
        this.url = data.url;
    }
}