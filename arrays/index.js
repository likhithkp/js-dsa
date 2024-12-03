// Custom array

class ArrayClass {
    constructor(){
        this.length = 0;
        this.data = {};
    };

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    };

    get(index){
        return this.data[index];
    };

    pop(){
        delete this.data[this.length - 1];
        return this.length--;
    };

    shift(){
        for(let i = 0; i < this.length; i++){
            this.data[i] = this.data[i + 1];
        };

        delete this.data[this.length - 1];
        return this.length--;
    }

    deleteByIndex(index){
        const item =  this.data[index];

        for(let i = 0; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
        return item;
    }
};
