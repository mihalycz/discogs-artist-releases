var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var _ = require('lodash');
// компонент: список очередной страницы релизов
var DiscogsArtistReleasesList = (function (_super) {
    __extends(DiscogsArtistReleasesList, _super);
    function DiscogsArtistReleasesList() {
        _super.call(this);
    }
    DiscogsArtistReleasesList.prototype.render = function () {
        return !this.props.isLoading ? React.createElement("div", {"className": "list"}, _.map(this.props.releases, function (item) {
            return React.createElement("div", {"className": "release-container"}, React.createElement("a", {"href": item.link, "target": "blank"}, item.title + ' (' + item.year + ')'), React.createElement("p", null, React.createElement("strong", null, "label:"), " ", React.createElement("em", null, item.label || 'none')), React.createElement("p", null, React.createElement("strong", null, "format:"), " ", React.createElement("em", null, item.format || 'none')));
        })) : React.createElement("div", null, "loading ...");
    };
    return DiscogsArtistReleasesList;
})(React.Component);
exports.DiscogsArtistReleasesList = DiscogsArtistReleasesList;
