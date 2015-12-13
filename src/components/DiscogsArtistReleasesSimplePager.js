var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var DiscogsArtistReleasesActions_1 = require('./../actions/DiscogsArtistReleasesActions');
// компонент: упрощенный пейджер
var DiscogsArtistReleasesSimplePager = (function (_super) {
    __extends(DiscogsArtistReleasesSimplePager, _super);
    function DiscogsArtistReleasesSimplePager() {
        _super.call(this);
    }
    DiscogsArtistReleasesSimplePager.prototype.render = function () {
        var _this = this;
        return (this.props.totalPages && !this.props.isLoading ? React.createElement("div", {"className": "pager"}, this.props.currentPage === 1 ? React.createElement("span", null, "first") : React.createElement("a", {"href": "#", "onClick": function () { _this.getReleasesPage(1); }}, "first"), this.props.currentPage === 1 ? React.createElement("span", null, "previous") : React.createElement("a", {"href": "#", "onClick": function () { _this.getReleasesPage(_this.props.currentPage - 1); }}, "previous"), this.props.currentPage === this.props.totalPages ? React.createElement("span", null, "next") : React.createElement("a", {"href": "#", "onClick": function () { _this.getReleasesPage(_this.props.currentPage + 1); }}, "next"), this.props.currentPage === this.props.totalPages ? React.createElement("span", null, "last") : React.createElement("a", {"href": "#", "onClick": function () { _this.getReleasesPage(_this.props.totalPages); }}, "last")) : React.createElement("div", null));
    };
    DiscogsArtistReleasesSimplePager.prototype.getReleasesPage = function (page) {
        if (!this.props.isLoading) {
            DiscogsArtistReleasesActions_1.darActions.getReleases(this.props.artistId, page, this.props.itemsPerPage);
        }
        return false;
    };
    return DiscogsArtistReleasesSimplePager;
})(React.Component);
exports.DiscogsArtistReleasesSimplePager = DiscogsArtistReleasesSimplePager;
