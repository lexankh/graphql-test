class ListRoll {
    constructor(container, serverApi, listCallback) {
        this.container = container; 
        this.serverApi = serverApi;
        this.listCallback = listCallback;
    }

    addCard(title, subtitle, image) {
        this.container.append(this.listCallback(title, subtitle, image).create());
    }
    render() {
        this.serverApi.getCards().then((res) => {
            res.data.lists.forEach(item => 
                this.addCard(item.title, item.subtitle, item.image))
        })
    }
}