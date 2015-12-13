var _ = require('lodash');
var Release_1 = require('./Release');
// контейнер с данными ответа от api-discogs
var GetReleasesResponse = (function () {
    function GetReleasesResponse(response) {
        if (response.message) {
            this.errorMessage = String(response.message || '');
        }
        else {
            this.totalCount = parseInt(String(response.pagination.items || ''), 10) || 0;
            this.currentPage = parseInt(String(response.pagination.page || ''), 10) || 0;
            this.totalPages = parseInt(String(response.pagination.pages || ''), 10) || 0;
            if (response.releases && response.releases.length) {
                this.releases = _.map(response.releases, function (item) {
                    return new Release_1.Release(item);
                });
            }
        }
    }
    return GetReleasesResponse;
})();
exports.GetReleasesResponse = GetReleasesResponse;
