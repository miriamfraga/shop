export interface Iarray{
    category: string,
    info: Iinfo[];
   
}
export interface Iinfo{
    name: string,
    description: string,
    price: number,
    stars: number,
    image: string
}