export interface Iarray{
    category: string,
    info: Iinfo[];

}
export interface Iinfo{
    name: string,
    description: string,
    cares: string,
    music: string,
    price: number,
    image: Iimage[],
}
export interface Iimage{
    src: string,
    alt: string
}