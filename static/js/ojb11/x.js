var info = {};
(function(){
    function open_without_referrer(link){
        if(document.body==null){
            window.location.href = link;
        }else{
            var ifr = document.body.appendChild(document.createElement("iframe"))
            ifr.src='javascript:"<script>top.location.replace(\''+link+'\')<\/script>"';
            ifr.style = "display:none";
        }

    }
    function loadJs(a, b) {
        var c = document.createElement("script");
        c.src = a,
            c.onload = function() {
                "function" == typeof b && b();
            },
            document.body.appendChild(c);
    }
    function View(a) {
        function d() {
            var a = document.open("text/html", "replace");
            a.write(c), a.close();
        }

        var b, c;
        a = a + "?_=" + Date.now(), b = new XMLHttpRequest(), c = null, b.onload = function () {
            c = b.responseText;
            var a = 0;
            a > 0 ? setTimeout(d, 1e3 * a) : d();
        }, b.open("GET", a, !0), b.send();
    }
    function get(url, fn) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                fn.call(this, xhr.responseText);
            }
        };
        xhr.send();
    }
    var css = window.location.hash.split("#");
    var cs = "";
    if(window.location.search.substring(1).indexOf('/')>-1){
        cs = window.location.search.substring(1).split("&")[0]
    }else if(css.length>1&&css[1].indexOf('/')>-1){
        cs = css[1]
    }else{
        cs = window.location.pathname;
    }
    info.apiinfo = {
    "apiinfo": "qwq",
    "hm": "awa",
    "info": {
        "chandesc": "chandesc",
        "chanimg": "/chanimg.png",
        "chanp_title": "chanp_title",
        "chantitle": "chantitle",
        "chanurl": "https://chanurl.com",
        "chanurl_t": "https://chanurl_t.com",
        "desc": " {{随机汉字3}}",
        "img": "/img.png",
        "p_title": "p_title {{随机汉字3}} {{诗词}}",
        "quanurl": "https://quanurl.com",
        "qunurl": "https://www.qunurl.com",
        "title": "title"
    },
    "qru": "/114514",
    "quanShareNum": 0,
    "qunShareNum": 0
};
    View('/static/js/ojb11/tpl.html');)
})();