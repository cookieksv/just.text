$(function () {

    var select = $('select');
    $('.list-btn').on('click', function(e) {
        getList(data[select.val()]);
    });

    $('#listContainer').delegate('a.read-this', 'click', function(e) {
        e.preventDefault();
        $(this).attr('data-source')
        $(this).attr('href')
        //getPage(data[select.val()]);
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