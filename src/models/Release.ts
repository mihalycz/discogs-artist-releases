// контейнер с данными о релизе
export class Release {
    // идентификатор релиза
    id: number;
    // наименование
    title: string;
    // формат (cd, vinyl etc)
    format: string;
    // фирма грам записи
    label: string;
    // год выпуска
    year: number;
    // артист
    artist: string;
    // ссылка на релиз
    get link(): string {
        return (this.artist && this.title && this.id) ? 'http://www.discogs.com/' + this.artist + '-' + this.title.replace(' ', '-') + '/release/' + this.id  : '';
    }

    constructor(release: any) {
        this.id = parseInt(String(release.id || ''), 10) || 0;
        this.year = parseInt(String(release.year || ''), 10) || 0;
        this.title = String(release.title || '');
        this.format = String(release.format || '');
        this.label = String(release.label || '');
        this.artist = String(release.artist || '');
    }
}



