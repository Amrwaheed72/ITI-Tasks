function* generateId() {
    for (let id = 1; id <= 10; id++) {
        yield id;
    }
}

const iterableObject = {
    data: [1, 2, 3, 4, 5],

    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => ({
                value: this.data[index],
                done: index++ >= this.data.length
            })
        };
    }
}
export { generateId, iterableObject };
