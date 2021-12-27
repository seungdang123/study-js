export type Name = string;
export type YesOrNo = "Y" | "N";
export type fooFunction = () => string;

export interface IUser {
    readonly id: number;
    readonly name: Name;
    email: string;
    receiveInfo: boolean;
    active: YesOrNo;
}

const iUser: IUser = {
    id: 1,
    name: "Lee",
    email: "lee@gmail.com",
    receiveInfo: false,
    active: "Y"
}

export interface IUser {
    // ? means : Optional
    address?: string;
}

export type TUser  = {
    readonly id: number;
    readonly name: Name;
    email: string;
    receiveInfo: boolean;
    active: YesOrNo;
}

// Extending.
export interface IUserProfile extends IUser {
    profileImage: string;
    github?: string;
    twitter?: string;
}

export type TUserProfile = IUser & {
    profileImage: string;
    github?: string;
    twitter?: string;
}


export interface Color {
    fontColor: string;
    strokeColor: string;
    borderColor: string;
    backgroundColor: string;
}

export type Display = {
    display: "none" | "block";
    visiblity: boolean;
    opacity: number;
}

export type Geometry = {
    width: number;
    height: number;
    padding: number;
    margin: number;
}

export interface IStyle extends Color, Display, Geometry {
    tagName: string;
}

export type TStyle = Color & Display & Geometry & {
    tagName: string;
}  


// key: string, value: only number.
export interface IOnlyNumberValueObject {
    [key: string] : number;
}

const iStyle: IOnlyNumberValueObject = {
    borderWidth: 5,
    width: 300,
    height: 100,
};

// key: string, value: only boolean.
export type TOnlyBooleanValueObject = {
    [key: string] : boolean;
}

const TStyle: TOnlyBooleanValueObject = {
    border: true,
    visible: false,
    display: true,
};

export interface IGetApi {
    (url: string, search?: string): Promise<string>;
}

const getApi: IGetApi = (url, serach='') => {
     return new Promise(resolve => resolve("OK"));
};

export type TGetApi = {
    (url: string, search?: string): Promise<string>;
}

export interface IRect {
    id: number;
    x: number;
    y: number;
}

// Constructor
export interface IRectConstructor {
    new(x: number, y: number): IRect;
}
