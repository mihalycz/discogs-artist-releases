import * as React from 'react';
import * as _ from 'lodash';
import { Release } from './../models/Release';

export interface IDiscogsArtistsReleasesListProps {
    releases: Array<Release>;
    isLoading: boolean;
}

// компонент: список очередной страницы релизов
export class DiscogsArtistReleasesList extends React.Component<IDiscogsArtistsReleasesListProps,any> {
    constructor () {
        super();
    }

    render() {
       return !this.props.isLoading ? <div className="list">
           {
               _.map(this.props.releases, (item: Release) => {
                   return <div className="release-container">
                       <a href={ item.link } target="blank">{ item.title + ' (' + item.year + ')' }</a>
                       <p><strong>label:</strong> <em>{ item.label || 'none' }</em></p>
                       <p><strong>format:</strong> <em>{ item.format || 'none' }</em></p>
                   </div>
               })}
       </div> : <div>loading ...</div>
    }
}