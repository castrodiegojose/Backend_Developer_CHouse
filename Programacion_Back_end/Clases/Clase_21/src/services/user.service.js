import generateUser from "../utils/user.utils.js";


export default class UserService {
    constructor(){
        this.users= [];
        this.lastId= 0;
    }    
    async createUser(cant = 50){
        this.user = []
        for (let i = 0; i < Number(cant); i++) {
            this.users.push(generateUser());
        }
        this.lastId = cant;
        return this.users;
    }
    async getUsers(id=null){
        if(id == null){
            return this.users;
        }
        else{
            return this.users.filter(user => user.id == Number(id))
        }

    }
    async addUser() {
        const user = createUser();
        user.id = this.lastId + 1;
        this.lastId ++ ;
        this.users.push(user);

    }
    async updateUser(id, data){
        if(this.users.length == 0 ) throw new Error("No hay usuarios");
        let index = null;
        try{
            const user = this.users.filter((user, i) => {
                if(user.id == Number(id)){
                    index = i;
                    return user;
                }
            })[0];

            Object.assign(user, data);
            this.users[index] = user;
        }
        catch(err){
            throw new Error(err);
        }


    }
    async deleteUser(id)  {
    
        try{
            const index = await this.users.findIndex(user => user.id == Number(id));
            if(index)this.users.splice(index, 1);
            else{
                return {Error: "No existe el ID"}
            }
        }
        catch(err){
            throw new Error(err);
        }


    }
}