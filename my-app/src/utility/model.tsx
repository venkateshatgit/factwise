export interface CelebInterface{
    id: number,
    first: string,
    last: string,
    dob: string,
    gender: string,
    email: string,
    picture: string,
    country: string,
    description: string
}


export interface CelebContextInterface{
    celebData: CelebInterface[],
    setCelebData: (celebData: CelebInterface[]) => void
}