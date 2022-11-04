let store = {
    state: {
        mainMenuPage: {
            itemsCount: '2'
        }
    },
    getState() {
        return this.state;
    }
}

window.state = store;

export default store;