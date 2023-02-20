export interface Icoffee{
    category: string,
    types: Itypes[]
}
export interface Itypes{
    name: string,
    description: string,
    image: string,
    price: number
}