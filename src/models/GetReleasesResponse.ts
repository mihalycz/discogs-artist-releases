import * as _ from 'lodash';
import { Release } from './Release';

// контейнер с данными ответа от api-discogs
export class GetReleasesResponse {
    errorMessage: string;

    totalCount: number;

    currentPage: number;

    totalPages: number;

    releases: Array<Release>;

    constructor(response: any) {
        if (response.message) {
            this.errorMessage = String(response.message || '');
        } else {
            this.totalCount = parseInt(String(response.pagination.items || ''), 10) || 0;
            this.currentPage = parseInt(String(response.pagination.page || ''), 10) || 0;
            this.totalPages = parseInt(String(response.pagination.pages || ''), 10) || 0;

            if (response.releases && response.releases.length) {
                this.releases = _.map(response.releases, (item) => {
                    return new Release(item);
                });
            }
        }
    }
}
