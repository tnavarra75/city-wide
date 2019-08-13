return this.sellerList.sort((a, b) => {
    let modifier = 1;
    if (this.currentSortDir === "desc") modifier = -1;

    if (this.currentSort === "address") {
        if (a.address.streetName < b.address.streetName) return -1 * modifier;
        if (a.address.streetName > b.address.streetName) return 1 * modifier;
        return 0;
    } else {
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
    }
});


// after array is sorted to have streets in alphabetical order
.sort((a, b) => {
    if (a.address.streetName === b.address.streetName) {

    }
});