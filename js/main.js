$(function () {

    var select = $('select');
    $('.list-btn').on('click', function(e) {
        getList(data[select.val()]);
    });

    $('#listContainer').delegate('a.read-this', 'click', function(e) {
        e.preventDefault();

        getPage($(this).attr('data-source'), $(this).attr('href'));
    });


});

function getList (source) {
    $.ajax({
        url: source.prefix + source.list.url
    }).done(function (result) {
        fillContent(result, source)
    });
}

function fillContent (result, source) {
    var div = $('<div>').html(result),
        items = [];

    div.find(source.list.short).each(function(index, item) {
        items.push({
            title: $(item).find(source.list.header).text(),
            caption: $(item).find(source.list.caption).text(),
            link: source.prefix + $(item).find(source.list.link).attr('href'),
            source: source.name
        });
    });
    $('#listContainer').empty();
    $('#listTmpl').tmpl(items).appendTo('#listContainer');
}

function getPage(source, url) {
    $.ajax({
        url: url
    }).done(function (result) {
        debugger;
        var div = $('<div>').html(result),
            items = [];

        var article = div.find(data[source].page.article);
        article.find('iframe').remove();

        $('#pageContainer').empty();
        $('#pageContainer').append(article);
    });
}