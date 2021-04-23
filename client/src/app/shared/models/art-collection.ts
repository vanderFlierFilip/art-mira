import { IArtwork } from './artwork';

export interface IArtCollection {
    id: number;
    name: string;
    artworks: IArtwork[];
    description: string;
    pictureUrl: string;
}
