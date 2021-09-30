import NewItem from "./NewItem";

class AddNew {

    constructor() {
        this.items = this.loadFromLocalStorage();
    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage();

        return this.items;
    }

    delete(item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.saveToLocalStorage();

        return this.items;
    }

    saveToLocalStorage() {
        localStorage.setItem('phonebook-data', JSON.stringify(this.items));
    }

    loadFromLocalStorage() {
        var json = localStorage.getItem('phonebook-data');

        if (json === null)
            return [];

        let jsonParsed = JSON.parse(json, (key, value) => {
            if (key === "date") {
                value = new Date(value);
            }
            return value;
        });

        if (jsonParsed.length === 0)
            return [];

        let addNewItems = [];

        for (let i = 0; i < jsonParsed.length; i++) {
            addNewItems.push(NewItem.fromJSON(jsonParsed[i]));
        }

        return addNewItems;

    }

}


export default AddNew;
