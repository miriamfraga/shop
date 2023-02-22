export interface Iarray {
 
    category: string,
    info: Iinfo[]
}
export interface Iinfo {
    id: number,
    name: string,
    description: string,
    cares: string,
    music: string,
    price: number,
    image: string
}