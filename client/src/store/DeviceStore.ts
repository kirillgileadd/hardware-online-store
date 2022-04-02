import {IBrand, IDevice, IType} from "../types";
import {makeAutoObservable} from "mobx";

export class DeviceStore {
    private _types: IType[] = [
        {id: 1, name: 'Phones'},
        {id: 2, name: 'Laptops'},
        {id: 3, name: 'PDA'},
        {id: 4, name: 'Camera'},
        {id: 5, name: 'USB flash'},
    ]
    private _brands: IBrand[] = [
        {id: 1, name: 'Apple'},
        {id: 2, name: 'Huawei'},
        {id: 3, name: 'Lenovo'},
        {id: 4, name: 'Asus'},
    ]
    private _devices: IDevice[] = [
        {id: 1, name: 'Pro MAX', price: 10000, img: 'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-pink-select-2021.png', rating: 5},
        {id: 2, name: 'BLabla', price: 70000, img: 'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-pink-select-2021.png', rating: 2},
        {id: 3, name: 'Honor magicbook', price: 20000, img: 'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-pink-select-2021.png', rating: 3},
        {id: 4, name: 'HP phone', price: 80000, img: 'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-pink-select-2021.png', rating: 4},
    ]
    private _selectedType: IType | null = null
    private _selectedBrand: IBrand | null = null

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

    setSelectedType(type: IType) {
        this._selectedType = type
    }

    setSelectedBrand(brand: IBrand) {
        this._selectedBrand = brand
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

    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}