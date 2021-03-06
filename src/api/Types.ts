export interface ProductType {
    _id: string,
    category?: string,
    title?: string,
    value?: number,
    description?: string,
    photos?: string[],
    htmlColor?: string[],
    valueOfNikotin?: string,
    color?: string,
    valueKlimoaiser?: string,
    weight?: string,
    kit?:string,
    best?: string,
    isCapsula?: boolean,
    smell?: string,
    complection?:string,
    compatibility?: string,
    amountIn?: string,
    dirPhotoName?: string
}


export type RegisterType = {
    password:string,
    email:string
}