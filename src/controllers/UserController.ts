import { Request, Response } from "express";

export default class UserController {
    getAll(req: Request, res: Response) {
        res.send('Hola mundo');
    }
}