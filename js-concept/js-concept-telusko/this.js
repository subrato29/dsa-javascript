let laptop = {
    name : 'mac',
    ram : '4gb',
    cpu : 'i7',

    getCongig: function() {
        console.log(this.ram);
    }
}
console.log(laptop.getCongig())