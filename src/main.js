var React = require('react');
var DiscogsArtistReleases_1 = require('./components/DiscogsArtistReleases');
// точка входа в приложение.
// artistId - идентификатор артиста на discogs
// itemsPerPage - количество релизов на страницу
window["discogsAristReleases"] = function (options) {
    var artistId = parseInt(String(options.artistId || ''), 10) || 0;
    if (artistId) {
        var itemsPerPage = parseInt(String(options.itemsPerPage || ''), 10) || 5;
        React.render(React.createElement(DiscogsArtistReleases_1.DiscogsArtistsReleases, {"artistId": artistId, "itemsPerPage": itemsPerPage}), document.querySelector(options.contentSelector));
    }
    else {
        React.render(React.createElement("div", null, "no artist id selected"), document.querySelector(options.contentSelector));
    }
};
