var alt_1 = require("../alt");
var DiscogsArtistReleasesActions_1 = require('./../actions/DiscogsArtistReleasesActions');
var GetReleasesResponse_1 = require('./../models/GetReleasesResponse');
// состояние приложения
var DiscogsAristsReleasesStore = (function () {
    function DiscogsAristsReleasesStore() {
        this.bindListeners({
            handleGetReleases: DiscogsArtistReleasesActions_1.darActions.getReleases,
            handleSetLoadingState: DiscogsArtistReleasesActions_1.darActions.setLoadingState
        });
    }
    // обработчик получения очередной страницы данных
    DiscogsAristsReleasesStore.prototype.handleGetReleases = function (response) {
        if (response instanceof GetReleasesResponse_1.GetReleasesResponse) {
            this.totalCount = response.totalCount;
            this.currentPage = response.currentPage;
            this.totalPages = response.totalPages;
            this.releases = response.releases;
            this.isLoading = false;
        }
        else if (typeof response === 'string') {
            this.errorMessage = response;
            this.isLoading = false;
        }
    };
    // обработчик установки состояния получения данных
    DiscogsAristsReleasesStore.prototype.handleSetLoadingState = function (isLoading) {
        this.isLoading = isLoading;
    };
    return DiscogsAristsReleasesStore;
})();
exports.darStore = alt_1.alt.createStore(DiscogsAristsReleasesStore);
