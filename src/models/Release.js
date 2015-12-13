// контейнер с данными о релизе
var Release = (function () {
    function Release(release) {
        this.id = parseInt(String(release.id || ''), 10) || 0;
        this.year = parseInt(String(release.year || ''), 10) || 0;
        this.title = String(release.title || '');
        this.format = String(release.format || '');
        this.label = String(release.label || '');
        this.artist = String(release.artist || '');
    }
    Object.defineProperty(Release.prototype, "link", {
        // ссылка на релиз
        get: function () {
            return (this.artist && this.title && this.id) ? 'http://www.discogs.com/' + this.artist + '-' + this.title.replace(' ', '-') + '/release/' + this.id : '';
        },
        enumerable: true,
        configurable: true
    });
    return Release;
})();
exports.Release = Release;
