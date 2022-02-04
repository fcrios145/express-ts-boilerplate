import { Express } from "express"
import UserController from "./controllers/UserController";

export = function(app: Express) {
    const userController = new UserController();
    
    app.get('/api/users', userController.getAll)
}