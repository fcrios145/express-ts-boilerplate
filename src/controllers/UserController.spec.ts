import UserController from "./UserController";
import { Request, Response } from 'express';

describe('UserController tests', () => {
    it(UserController.prototype.getAll.name, async () => {
        const userController = new UserController();
        const send = jest.fn() as any;
        const req = {} as Request;
        const res = { send: send } as Response;
        userController.getAll(req, res);
        expect(res.send).toHaveBeenCalledTimes(1);
    });
});