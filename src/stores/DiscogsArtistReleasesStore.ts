import { alt } from "../alt";
import { darActions } from './../actions/DiscogsArtistReleasesActions';
import { GetReleasesResponse  } from './../models/GetReleasesResponse';
import { Release } from './../models/Release';

export interface State {
    errorMessage?: string;
    totalCount?: number;
    currentPage?: number;
    totalPages?: number;
    releases?: Array<Release>;
    isLoading?: boolean;
}

// состояние приложения
class DiscogsAristsReleasesStore implements AltJS.StoreModel<State> {
    // сообщение об ошибке от api discogs
    errorMessage: string;
    // общее кол-во релизов артиста
    totalCount: number;
    // текущая страница данных
    currentPage: number;
    // всего страниц
    totalPages: number;
    // релизы артиста
    releases: Array<Release>;
    // происходит ли загрузка данных
    isLoading: boolean;

    bindListeners:(obj:any)=> void;

    constructor () {
        this.bindListeners({
            handleGetReleases: darActions.getReleases,
            handleSetLoadingState: darActions.setLoadingState
        });
    }

    // обработчик получения очередной страницы данных
    handleGetReleases(response) {
        if (response instanceof GetReleasesResponse) {
            this.totalCount = response.totalCount;
            this.currentPage = response.currentPage;
            this.totalPages = response.totalPages;
            this.releases = response.releases;
            this.isLoading = false;
        } else if (typeof response === 'string') {
            this.errorMessage = response;
            this.isLoading = false;
        }
    }

    // обработчик установки состояния получения данных
    handleSetLoadingState(isLoading) {
        this.isLoading = isLoading;
    }
}

export const darStore = alt.createStore<State>(DiscogsAristsReleasesStore);
