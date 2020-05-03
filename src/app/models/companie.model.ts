export interface Companies {
    companies : Company[]
}

export interface Company {
    _id: string,
    name: string,
    address: string,
    category: string,
    location: Location
}

export interface Location {
    type: string,
    coordinate: number[]
}