 /**
     * Search
     */  
    function Search() {
        var self = this,
            input = $('#search_input'),
            result = $('.search_result');
        
        input.focus(function() {
            $('.icon-search').css('color', '#3199DB');
            result.show();
        });

        input.keyup(debounce(this.autoComplete));

        $(document).click(function(e) {
            if(e.target.id === 'search_input' || e.target.className === 'search_result' || e.target.className === 'search_item') {
                return;
            }
            $('.icon-search').css('color', '#CAD3DC');
            result.hide();
        });
    }

    Search.prototype.autoComplete = function() {
        var keywords = this.value.toLowerCase();
        
        if(keywords.length) {
            $('.icon-search').css('color', '#3199DB');
        }else{
            $('.icon-search').css('color', '#CAD3DC');
        }

        $.getJSON('../../search.json').done(function(data) {
            var html = '';
            for (var i in data) {
                var item = data[i],
                    title = item.title,
                    tags = item.tags,
                    url = item.url;

                var k = title + tags;
                if(keywords !== '' && k.toLowerCase().indexOf(keywords) >= 0) {
                    html += '<a class="search_item" href="' + item.url + '">' + item.title + '</a>';
                }
            }
            $('.search_result').html(html);
        });
    };

    function debounce(fn, delay) {
        var timer;
        delay = delay || 120;

        return function() {
            var ctx = this,
                args = arguments,
                later = function() {
                    fn.apply(ctx, args);
                };
            clearTimeout(timer);
            timer = setTimeout(later, delay);
        };
    }

    new Search();
