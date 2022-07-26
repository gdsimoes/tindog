// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data);
    }

    populateElement() {
        const img = document.querySelector(".dog-img");
        const header = document.querySelector(".dog-header");

        img.src = this.avatar;

        const h1 = document.createElement("h1");
        h1.textContent = `${this.name}, ${this.age}`;

        const p = document.createElement("p");
        p.textContent = this.bio;

        header.replaceChildren(h1, p);
    }
}

export default Dog;
