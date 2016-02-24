$(function () {

    var select = $('select'),
        pageContainer = $('#pageContainer').hide();

    $('.list-btn').on('click', function(e) {
        pageContainer.hide();
        getList(data[select.val()]);
        window.scroll(0, 0);
    });

    $('.page-btn').on('click', function(e) {
        $('#pageContainer').toggle();
        window.scroll(0, 0);
    });

    $('.up-btn').on('click', function(e) {
        window.scroll(0, 0);
    });

    $('#listContainer').delegate('a.read-this', 'click', function(e) {
        e.preventDefault();

        getPage($(this).attr('data-source'), $(this).attr('href'));
        window.scroll(0, 0);
    });
});

function getList (source) {
    document.body.style.background = 'yellow';
    $.ajax({
        url: source.prefix + source.list.url
    }).done(function (result) {
        var div = $('<div>').html(result),
            items = [];

        div.find(source.list.short).each(function(index, item) {
            items.push({
                title: $(item).find(source.list.header).text(),
                caption: $(item).find(source.list.caption).text().substring(0, 400),
                link: source.prefix + $(item).find(source.list.link).attr('href'),
                source: source.name
            });
        });
        $('#listContainer').empty();
        $('#listTmpl').tmpl(items).appendTo('#listContainer');

        document.body.style.background = 'white';
    });
}

function getPage(source, url) {
    document.body.style.background = 'yellow';
    $.ajax({
        url: url
    }).done(function (result) {
        result = result.replace(new RegExp('src="/bundles', 'g'), 'src="' + data[source].prefix + '/bundles');

        var div = $('<div>').html(result),
            items = [];

        var article = div.find(data[source].page.article);
        article.find('iframe').remove();
        article.find('script').remove();

        $('#pageContainer').empty()
            .append($('<h4>').html(div.find(data[source].page.header).text()))
            .append($('<h7>').html(div.find(data[source].page.date).text()))
            .append(div.find(data[source].page.img))
            .append(article)
            .show();
        document.body.style.background = 'white';
    });
}