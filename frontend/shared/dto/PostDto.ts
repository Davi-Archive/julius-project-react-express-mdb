export interface IOnePostFormat {
    title: string
    description: string
    imgUrl:string
}

export type JSONPostFormat = {
    data: Array<IOnePostFormat>
}
