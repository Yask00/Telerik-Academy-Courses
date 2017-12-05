const idGenerator = (function(){
    let id = 0;

    return function () {
        id += 1;
        return id;
    };
})();

class Member {
    constructor(name, id){
        this.name = name;
        this.id = idGenerator();
    }
}

class All {
    constructor(){
        this.array = [];
    }

    addMember(member){
        this.array.push(member);
        return this;
    }

    deleteMemberById(id){
        let index = this.array.findIndex(pr => pr.id === id);

        if (index < 0) {
            throw new Error (`No such id`);
        }

        this.array.splice(index, 1);

        return this;
    }

    getMembers(){
        this.array.forEach(mem => {
            console.log(mem);
            console.log(`${mem.name} with id ${mem.id}`);
        });
    }
}

let fMember = new Member('Jorkata');
let sMember = new Member('Goshka');

let f = new All();
f.addMember(fMember).addMember(sMember);
f.getMembers();
console.log('-----------------------');
f.deleteMemberById(2);
f.getMembers();
