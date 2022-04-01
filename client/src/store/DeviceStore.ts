import {IBrand, IDevice, IType} from "../types";
import {makeAutoObservable} from "mobx";

export class DeviceStore {
    private _types: IType[] = [
        {id: 1, name: 'Phones'},
        {id: 2, name: 'Laptops'}
    ]
    private _brands: IBrand[] = [
        {id: 1, name: 'Apple'},
        {id: 2, name: 'Huawei'}
    ]
    private _devices: IDevice[] = [
        {id: 1, name: 'Pro MAX', price: 10000, img: 'https://i.pravatar.cc/290', rating: 5},
        {id: 2, name: 'BLabla', price: 70000, img: 'https://i.pravatar.cc/290', rating: 2},
        {id: 3, name: 'Honor magicbook', price: 20000, img: 'https://i.pravatar.cc/290', rating: 3},
        {id: 4, name: 'HP phone', price: 80000, img: 'https://i.pravatar.cc/290', rating: 4},
    ]

    constructor() {
        makeAutoObservable(this)
    }

    setTypes(types: IType[]) {
        this._types = types
    }

    setBrands(brands: IBrand[]) {
        this._brands = brands
    }

    setDevices(devices: IDevice[]) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}