const kaikeba={
    info:{
        name:'sofiya',
        desc:'开课吧6666'
    },

    get name(){
        console.log('get...');
        return this.info.name;
    },

    set name(val) {
        console.log('set...');
        this.info.name=val;
    }
}

console.log(kaikeba.name);
kaikeba.name='qiaoxu';
console.log(kaikeba.name);
// get...
// sofiya
// set...
// get...
// qiaoxu