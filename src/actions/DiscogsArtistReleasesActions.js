var alt_1 = require("../alt");
var DiscogsArtistReleasesApiService_1 = require('./../services/DiscogsArtistReleasesApiService');
// создатель событий приложения
var DiscogsArtistsReleasesActions = (function () {
    function DiscogsArtistsReleasesActions() {
    }
    // получить очередную страницу релизов
    DiscogsArtistsReleasesActions.prototype.getReleases = function (artistId, page, itemsPerPage) {
        var _this = this;
        this['actions'].setLoadingState();
        new DiscogsArtistReleasesApiService_1.DiscogsArtistReleasesApiService(artistId).call(page, itemsPerPage).then(function (response) {
            _this.dispatch(response);
        }, function (error) {
            _this.dispatch(error);
        });
    };
    // установить состояние получения данных
    DiscogsArtistsReleasesActions.prototype.setLoadingState = function () {
        this.dispatch(true);
    };
    return DiscogsArtistsReleasesActions;
})();
exports.darActions = alt_1.alt.createActions(DiscogsArtistsReleasesActions);
