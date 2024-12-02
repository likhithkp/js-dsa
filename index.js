const names = ["Likhith", "Shiba", "Romulus", "Winter"];

const getName = (names, name) => {
    for (let i = 0; i < names.length; i++){
        if(names[i] === name){
            console.log(name)
        };
    };
};

getName(names, "Shib")