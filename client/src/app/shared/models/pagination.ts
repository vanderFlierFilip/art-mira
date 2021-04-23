import { IArtwork } from './artwork';

export interface IPagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: IArtwork[];
}
