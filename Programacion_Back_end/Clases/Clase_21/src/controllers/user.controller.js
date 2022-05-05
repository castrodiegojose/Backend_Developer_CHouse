import UserService from "../services/user.service.js"

export default class UserController{
    constructor(){
        this.userService = new UserService();
        this.createUser = this.createUser.bind(this);   /// al instanciar una clase se le asigna el contexto de la clase y los metodos que se van a utilizar
        this.getUsers = this.getUsers.bind(this);
        this.addUser = this.addUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    async createUser(req, res){
        const{cant} = req.query;
        try{
            const response = await this.userService.createUser(cant);
            res.status(200).json({usuarios: response})
        }
        catch(error){
            res.status(500).json({error: error})
        }
    }
    async getUsers(req, res){
        const id = req.params.id;
        try{
            let user = await this.userService.getUsers(id)
            res.status(200).json({user: user})
        }
        catch(error){
            res.status(500).json({error: error})
        }       
        
    }


    async addUser(req, res){
        await this.userService.addUser()
        res.status(200).send("Nuevo Usuario agregado")
    }


    async updateUser(req, res){
        const {id} = req.params;
        const {body} = req;
        try{
            await this.userService.updateUser(id, body)
            res.status(200).send("Usuario actualizado")
        }
        catch (error){
            res.status(500).json({error: error})
        }
    }
    async deleteUser(req, res){
        const {id} = req.params;
        try{
            let respuesta =await this.userService.deleteUser(id)
            console.log(respuesta)
            res.status(200).send(respuesta)
        }
        catch (error){
            res.status(500).json({error: error})
        }

    }
}