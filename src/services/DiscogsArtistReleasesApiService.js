var rest = require('rest');
var mime = require('rest/interceptor/mime');
var errorCode = require('rest/interceptor/errorCode');
var GetReleasesResponse_1 = require('./../models/GetReleasesResponse');
// сервис для получения данных от api discogs
var DiscogsArtistReleasesApiService = (function () {
    function DiscogsArtistReleasesApiService(artistId) {
        this.url = 'https://api.discogs.com/artists/' + artistId + '/releases';
    }
    DiscogsArtistReleasesApiService.prototype.call = function (page, itemsPerPage) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var client = rest.wrap(mime).wrap(errorCode, { code: 500 });
            client({
                path: _this.url,
                params: {
                    page: page,
                    per_page: itemsPerPage
                }
            }).then(function (response) {
                var releaseResponse = new GetReleasesResponse_1.GetReleasesResponse(response.entity);
                if (releaseResponse.errorMessage) {
                    reject(releaseResponse.errorMessage);
                }
                else {
                    resolve(releaseResponse);
                }
            }, function (error) {
                reject(error.error);
            });
        });
    };
    return DiscogsArtistReleasesApiService;
})();
exports.DiscogsArtistReleasesApiService = DiscogsArtistReleasesApiService;
