import generateUser from "../utils/user.utils.js";


export default class UserService {
    constructor(){
        this.users= [];
        this.lastId= 0;
    }    
    async createUser(cant = 50){
        this.user = []
        for (let i = 0; i < Number(cant); i++) {
            let user= generateUser();
            user.id = i +1
            this.users.push(user);
            
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
        const user = generateUser();
        user.id = this.lastId + 1;
        this.lastId ++ ;
        this.users.push(user);

    }
    async updateUser(id, data){
        if(this.users.length == 0 ) throw new Error("No hay usuarios");
        let index = null;
        try{
            let user = this.users.filter((user, i) => {
                if(user.id == Number(id)){
                    index = i;
                    return user;
                }
            })[0];

            console.log(data)

            Object.assign(user, data);

            console.log(user)
            this.users[index] = user;
        }
        catch(err){
            throw new Error(err);
        }


    }
    async deleteUser(id)  {
    
        try{
            const index = await this.users.findIndex(user => user.id == Number(id));
            console.log(index)
            if(index != -1){
                this.users.splice(index, 1);
                return (`usuario con id ${id} borrado`)
            }
            else{
                return "No existe el ID"
            }
        }
        catch(err){
            throw new Error(err);
        }


    }
}