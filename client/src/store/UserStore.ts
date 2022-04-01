import {IUser} from "../types";
import {makeAutoObservable} from "mobx";


export class UserStore {
    private _isAuth: boolean = false;
    private _user: IUser | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    setIsAuth(auth: boolean) {
        this._isAuth = auth
    }
    setUser(user: IUser) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}