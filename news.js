/* Local News Code */
$(document).ready(function() {
    var url = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=dd62e372965a4ad98196b5ed6d371bf6"
    
    function getArticleInfo(res) {
        var description = res.articles[0].description;
        var newDesc = wordWrap(description, 80, "<br/>");
        $("#today-news").html(newDesc);
        $("#news-author").html("<br/>" + "- " + res.articles[0].author);
    }
    
    function wordWrap(article, width, spaceReplacer) {
        if(article.length > width) {
            var p=width;
            for (;p>0 && article[p]!=' ';p--) {
            }
            if (p > 0) {
                var left = article.substring(0, p);
                var right = article.substring(p+1);
                return left + spaceReplacer + wordWrap(right, width, spaceReplacer);
            }
        }
        return article;
    }
    
    function getNews() {
        $.getJSON(url, getArticleInfo);
    }
    
    function makeNewLine(str, res) {
        str = res.articles[0].author;
        console.log(str);
    }
    
    $.getJSON(url, getNews);
    setInterval(function() {
        $.getJSON(url, getNews);
    }, 1000)
});