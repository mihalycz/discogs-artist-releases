import * as React from 'react';
import * as _ from 'lodash';
import { darActions } from './../actions/DiscogsArtistReleasesActions';
import { darStore, State } from './../stores/DiscogsArtistReleasesStore';
import { DiscogsArtistReleasesList } from './DiscogsArtistReleasesList';
import { DiscogsArtistReleasesSimplePager } from './DiscogsArtistReleasesSimplePager';

export interface IDiscogsArtistsReleasesProps {
    artistId: number,
    itemsPerPage: number
}

// основной компонент приложения
export class DiscogsArtistsReleases extends React.Component<IDiscogsArtistsReleasesProps, State> {

    componentDidMount: () => any;
    componentWillUnmount: () => any;
    componentDidUpdate: (prevProps: any, prevState: any) => any;

    constructor () {
        super();
        this.state = {
            releases: []
        };

        this.componentDidMount = () => {
            darStore.listen(this.onStoreChange);
            darActions.getReleases(this.props.artistId, 1, this.props.itemsPerPage);
        };

        this.componentWillUnmount = () => {
            darStore.unlisten(this.onStoreChange);
        }
    }

    onStoreChange = (state) => {
        this.setState(state);
    };

    render() {
        return !this.state.errorMessage ? <div className="discogs-artist-releases">
            <DiscogsArtistReleasesList
                releases={ this.state.releases }
                isLoading={ this.state.isLoading }
            />
            <DiscogsArtistReleasesSimplePager
                artistId={ this.props.artistId }
                currentPage={ this.state.currentPage }
                totalPages={ this.state.totalPages }
                itemsPerPage={ this.props.itemsPerPage }
                isLoading={ this.state.isLoading }
            />
        </div> : <div>An error has occurred!</div>
    }
}



