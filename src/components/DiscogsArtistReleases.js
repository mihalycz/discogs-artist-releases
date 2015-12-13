var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var DiscogsArtistReleasesActions_1 = require('./../actions/DiscogsArtistReleasesActions');
var DiscogsArtistReleasesStore_1 = require('./../stores/DiscogsArtistReleasesStore');
var DiscogsArtistReleasesList_1 = require('./DiscogsArtistReleasesList');
var DiscogsArtistReleasesSimplePager_1 = require('./DiscogsArtistReleasesSimplePager');
// основной компонент приложения
var DiscogsArtistsReleases = (function (_super) {
    __extends(DiscogsArtistsReleases, _super);
    function DiscogsArtistsReleases() {
        var _this = this;
        _super.call(this);
        this.onStoreChange = function (state) {
            _this.setState(state);
        };
        this.state = {
            releases: []
        };
        this.componentDidMount = function () {
            DiscogsArtistReleasesStore_1.darStore.listen(_this.onStoreChange);
            DiscogsArtistReleasesActions_1.darActions.getReleases(_this.props.artistId, 1, _this.props.itemsPerPage);
        };
        this.componentWillUnmount = function () {
            DiscogsArtistReleasesStore_1.darStore.unlisten(_this.onStoreChange);
        };
    }
    DiscogsArtistsReleases.prototype.render = function () {
        return !this.state.errorMessage ? React.createElement("div", {"className": "discogs-artist-releases"}, React.createElement(DiscogsArtistReleasesList_1.DiscogsArtistReleasesList, {"releases": this.state.releases, "isLoading": this.state.isLoading}), React.createElement(DiscogsArtistReleasesSimplePager_1.DiscogsArtistReleasesSimplePager, {"artistId": this.props.artistId, "currentPage": this.state.currentPage, "totalPages": this.state.totalPages, "itemsPerPage": this.props.itemsPerPage, "isLoading": this.state.isLoading})) : React.createElement("div", null, "An error has occurred!");
    };
    return DiscogsArtistsReleases;
})(React.Component);
exports.DiscogsArtistsReleases = DiscogsArtistsReleases;
