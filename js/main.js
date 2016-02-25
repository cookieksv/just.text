$(function () {

    var select = $('select'),
        pageContainer = $('#pageContainer').hide();

    $('.list-btn').on('click', function(e) {
        pageContainer.hide();
        getList(data[select.val()], $(this)[0]);
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

        getPage($(this).attr('data-source'), $(this).attr('href'), $(this).parent('.list-item')[0]);
    });
});

function getList (source, btn) {
    btn.style.background = 'yellow';

    var skip = parseInt($('#skip').val()) || 0;
    $.ajax({
        url: source.prefix + source.list.url + source.list.skip + skip + '/10'
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

        btn.style.background = '';
    });
}

function getPage(source, url, listItem) {
    listItem.style.background = 'antiquewhite';
    $.ajax({
        url: url
    }).done(function (result) {
        result = result.replace(new RegExp('src="/bundles', 'g'), 'src="' + data[source].prefix + '/bundles');

        var div = $('<div>').html(result),
            items = [];

        var article = div.find(data[source].page.article);
        article.find('iframe').remove();
        article.find('script').remove();
        article.find('a').attr('target', '_blank');

        $('#pageContainer').empty()
            .append($('<h4>').html(div.find(data[source].page.header).text()))
            .append($('<h7>').html(div.find(data[source].page.date).text()))
            .append(div.find(data[source].page.img))
            .append(article)
            .show();
        window.scroll(0, 0);
        listItem.style.background = 'white';
    });
}