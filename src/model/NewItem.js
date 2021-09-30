
class NewItem {

    constructor(firstname, lastname, number, activeItem, date) {
        this.id = Math.random().toString(36).substring(7);
        this.firstname = firstname;
        this.lastname = lastname;
        this.number = number;
        this.activeItem = true;
        this.date = date;
    }


    static fromJSON (json) {
        let phonebookItem = new NewItem();
        phonebookItem.id = json.id;
        phonebookItem.firstname = json.firstname;
        phonebookItem.lastname = json.lastname;
        phonebookItem.number = json.number;
        phonebookItem.date = json.date;

        return phonebookItem;
    }
}

export default NewItem;
