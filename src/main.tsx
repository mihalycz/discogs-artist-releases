import * as React from 'react';
import {alt} from "./alt";
import { DiscogsArtistsReleases } from './components/DiscogsArtistReleases'

// точка входа в приложение.
// artistId - идентификатор артиста на discogs
// itemsPerPage - количество релизов на страницу
window["discogsAristReleases"] = (options) => {
    var artistId = parseInt(String(options.artistId || ''), 10) || 0;
    if (artistId) {
        var itemsPerPage = parseInt(String(options.itemsPerPage || ''), 10) || 5;
        React.render(<DiscogsArtistsReleases artistId={ artistId } itemsPerPage={ itemsPerPage } />, document.querySelector(options.contentSelector));
    } else {
        React.render(<div>no artist id selected</div>, document.querySelector(options.contentSelector));
    }
};

