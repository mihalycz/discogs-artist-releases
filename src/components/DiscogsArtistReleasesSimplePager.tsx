import * as React from 'react';
import * as _ from 'lodash';
import { darActions } from './../actions/DiscogsArtistReleasesActions';


export interface IDiscogsArtistsReleasesPagerProps {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    artistId: number,
    isLoading: boolean
}

// компонент: упрощенный пейджер
export class DiscogsArtistReleasesSimplePager extends React.Component<IDiscogsArtistsReleasesPagerProps, any> {
    constructor () {
        super();
    }

    render() {
        return (this.props.totalPages && !this.props.isLoading ? <div className="pager">
            { this.props.currentPage === 1 ? <span>first</span> : <a href="#" onClick={ () => { this.getReleasesPage(1);  } }>first</a> }
            { this.props.currentPage === 1 ? <span>previous</span> : <a href="#" onClick={ () => { this.getReleasesPage(this.props.currentPage - 1);  } }>previous</a> }
            { this.props.currentPage === this.props.totalPages ? <span>next</span> : <a href="#" onClick={ () => { this.getReleasesPage(this.props.currentPage + 1);  } }>next</a> }
            { this.props.currentPage === this.props.totalPages ? <span>last</span> : <a href="#" onClick={ () => { this.getReleasesPage(this.props.totalPages);  } }>last</a> }
        </div> : <div></div>)
    }

    getReleasesPage(page: number) {
        if (!this.props.isLoading) {
            darActions.getReleases(this.props.artistId, page, this.props.itemsPerPage);
        }
        return false;
    }
}