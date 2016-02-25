var data = {
    pm: {
        name: 'pm',
        prefix: 'http://petrimazepa.com',
        list: {
            url: '/ajax/articles',
            skip: '/',
            short: '.caption',
            header: 'h4',
            caption: 'p',
            link: 'a'
        },
        page: {
            header: '.heading > h1',
            img: '.article-image',
            article: '.mainContent',
            date: '.mainblockDatetime'
        }
    },
    gorkylook: {
        name: 'gorkylook',
        prefix: '',
        list: {
            url: 'http://gorky-look.livejournal.com',
            skip: '/?skip=',
            short: '.entryunit',
            header: '.entryunit__title',
            caption: '.entryunit__text',
            link: '.entryunit__title>a'
        },
        page: {
            header: '.b-singlepost-title',
            img: '.u-photo > img',
            article: 'article.b-singlepost-body',
            date: '.b-singlepost-author-userinfo-print time'
        }
    },
    dolboeb: {
        name: 'dolboeb',
        prefix: '',
        list: {
            url: 'http://dolboeb.livejournal.com',
            skip: '/?skip=',
            short: '.entryunit',
            header: '.entryunit__title',
            caption: '.entryunit__text',
            link: '.entryunit__title>a'
        },
        page: {
            header: '.b-singlepost-title',
            img: '.u-photo > img',
            article: 'article.b-singlepost-body',
            date: '.b-singlepost-author-userinfo-print time'
        }
    }
    /*gorkylook: {
        name: 'gorkylook',
        prefix: '',
        list: {
            url: 'http://gorky-look.livejournal.com',
            short: '.entry',
            header: '.entry-title',
            caption: '.entry-text',
            link: '.entry-title>a'
        },
        page: {
            header: '.b-singlepost-title',
            img: '.u-photo > img',
            article: 'article.b-singlepost-body',
            date: '.b-singlepost-author-userinfo-print time'
        }
    },
    dolboeb: {
        name: 'dolboeb',
        prefix: '',
        list: {
            url: 'http://dolboeb.livejournal.com/',
            short: '.entryHolderBg > table',
            header: '.entryHeader',
            caption: '.entry-content',
            link: '.entryHeader>a'
        },
        page: {
            header: '.b-singlepost-title',
            img: '.u-photo > img',
            article: 'article.b-singlepost-body',
            date: '.b-singlepost-author-userinfo-print time'
        }
    }*/
};
