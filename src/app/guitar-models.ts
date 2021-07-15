export interface Guitar {
    objectId: string; 
    make: string;
    model: string;
    strings: number;
    colour: string; 
    pickups: Pickup[] 
}

export interface Pickup {
    make: string;
    model: string; 
    position: string;
    colour: string;
    resistance: number;
}