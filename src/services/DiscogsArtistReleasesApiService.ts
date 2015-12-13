import * as rest from 'rest'
import * as mime from 'rest/interceptor/mime'
import * as errorCode from 'rest/interceptor/errorCode';
import { GetReleasesResponse  } from './../models/GetReleasesResponse';

// сервис для получения данных от api discogs
export class DiscogsArtistReleasesApiService {
    url: string;

    constructor (artistId: number) {
        this.url = 'https://api.discogs.com/artists/' + artistId + '/releases';
    }

    call(page: number, itemsPerPage: number): Promise<GetReleasesResponse> {
        return new Promise<GetReleasesResponse>((resolve, reject) => {
            var client = rest.wrap(mime).wrap(errorCode, { code: 500 });
            client({
                path: this.url,
                params: {
                    page: page,
                    per_page: itemsPerPage
                }
            }).then(
                (response) => {
                    var releaseResponse = new GetReleasesResponse(response.entity);
                    if (releaseResponse.errorMessage) {
                        reject(releaseResponse.errorMessage);
                    } else {
                        resolve(releaseResponse);
                    }
                },
                (error) => {
                    reject(error.error);
                }
            );
        });
    }

}
