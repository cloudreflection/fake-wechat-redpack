var api  = info.apiinfo;
let unfamiliarStr = ['💞', '💕', '🧸', '✨', '🌙', '💖', '💮', '🍭', '🐾', '💘', '🌟', '🍬', '🌼', '💗', '🌈', '⭐', '🌺', '🌞', '⛄', '🌸', '💓', '💋', '💝', '🌹', '🌻', '🍓', '🍑', '🎠', '🍎', '💟', '🍷', '🌱'];
function getRandomChineseWord () {
    var _rsl = "";
    var _randomUniCode = Math.floor(Math.random() * (40870 - 19968) + 19968).toString(16);
    eval("_rsl=" + '"\\u' + _randomUniCode + '"');
    return _rsl;
}
document['title'] = getRandomChineseWord();
function randHan(len){
    var ret=''
    for(let i=0; i<len; i++){
        ret+=String.fromCodePoint(Math.round(Math.random() * 20901) + 19968)
    }
    return ret;
}
window.isApple=!!navigator.userAgent.match(/(i[^;]+;\( U;)? CPU.+Mac OS X/);
window.nosharePYQ=true
window.posterUrl = "/static/image/411648368309pic1.jpeg";
window.defaultSrc = '/static/image/img2default.jpg';

var aam = '';
var bbm = '';
var step = 0x0;
var data = null;
var money = getTotalMoney();
document[`body`][`style`] = `background:url(/static/image/16236267b7cde957.jpg) #b3201b no-repeat;color:#fcf39c;background-position:center top;background-size:100% auto`;
var itemsAppId = [''];
audioTip = new Audio('/static/mp3/ok.mp3');
audioFail = new Audio(`/static/mp3/err.mp3`);
function Element(_0x46bed9) {
    var _0x24ba75 = _0x46bed9["tagName"]
        , _0x2a9fb2 = _0x46bed9["props"]
        , _0x17d608 = _0x46bed9["children"];
    return this instanceof Element ? (this['tagName'] = _0x24ba75,
        this['props'] = _0x2a9fb2 || {},
        this['children'] = _0x17d608 || [],
        void 0x0) : new Element({
        'tagName': _0x24ba75,
        'props': _0x2a9fb2,
        'children': _0x17d608
    });
}
Element["prototype"]["render"] = function() {
    var _0x2fcadd, _0x55b975, _0x59670d = document["createElement"](this["tagName"]), _0x522ef1 = this["props"];
    for (_0x2fcadd in _0x522ef1)
        _0x55b975 = _0x522ef1[_0x2fcadd],
            _0x59670d['setAttribute'](_0x2fcadd, _0x55b975);
    return this["children"]['forEach'](function(_0x19dbec) {
        var _0x260786 = null;
        _0x260786 = _0x19dbec instanceof Element ? _0x19dbec["render"]() : document["createTextNode"](_0x19dbec),
            _0x59670d["appendChild"](_0x260786);
    }),
        _0x59670d;
}
function insertChar(raw, insert) {
    var data = '';
    for (i = 0x0; i < raw['length']; i++) {
        data = data + raw["substr"](i, 0x1) + insert;
    }
    data = data['substr'](0x0, data["length"] - 0x1);
    return data;
}
function getCity() {
    return (window['localAddress'] ? ['北京市', '天津市', '上海市', '重庆市'].indexOf(localAddress.province) > -1 ? localAddress.province : localAddress.city ? localAddress.city : localAddress.province : '').replace(/(.*)市/, '$1').replace(/(.*)省/, '$1');
}
function htmls() {
    g = Element({
        'tagName': "div",
        'props': {
            'class': "box game",
            'id': "nyni"
        },
        'children': [Element({
            'tagName': "div",
            'props': {
                'class': "cloud-wrap"
            },
            'children': [Element({
                'tagName': "div",
                'props': {
                    'class': "cloud"
                },
                'children': [Element({
                    'tagName': "div",
                    'props': {
                        'class': 'cb'
                    },
                    'children': [Element({
                        'tagName': 'div',
                        'props': {
                            'class': 'show-money l'
                        },
                        'children': [Element({
                            'tagName': "span",
                            'children': ['0.00']
                        }), '元']
                    }), Element({
                        'tagName': "div",
                        'props': {
                            'class': "show-time r"
                        },
                        'children': [Element({
                            'tagName': "span",
                            'children': ['15']
                        }), '秒']
                    })]
                })]
            })]
        }), Element({
            'tagName': 'div',
            'props': {
                'class': "fall"
            },
            'children': [Element({
                'tagName': 'i'
            }), Element({
                'tagName': 'i'
            }), Element({
                'tagName': 'i'
            }), Element({
                'tagName': 'i'
            })]
        }), Element({
            'tagName': "div",
            'props': {
                'class': "bag"
            },
            'children': [Element({
                'tagName': "div",
                'props': {
                    'class': "red"
                },
                'children': [Element({
                    'tagName': 'ul',
                    'props': {
                        'class': "mailers-box"
                    },
                    'children': [Element({
                        'tagName': 'li',
                        'props': {
                            'class': "mailer-item"
                        }
                    })]
                }), Element({
                    'tagName': "div",
                    'props': {
                        'class': "mailer",
                        'id': 'mailer'
                    },
                    'children': [Element({
                        'tagName': "span",
                        'props': {
                            'class': "arrow"
                        }
                    }), Element({
                        'tagName': 'em',
                        'props': {},
                        'children': ["上滑抢红包"]
                    })]
                }), Element({
                    'tagName': "div",
                    'props': {
                        'class': 'cover'
                    },
                    'children': [Element({
                        'tagName': "span",
                        'props': {
                            'class': "eyebrow-l"
                        }
                    }), Element({
                        'tagName': 'span',
                        'props': {
                            'class': "eyebrow-r"
                        }
                    })]
                })]
            }), Element({
                'tagName': "div",
                'props': {
                    'class': "value hide"
                },
                'children': ['+', Element({
                    'tagName': 'em'
                }), '元']
            })]
        }), Element({
            'tagName': "div",
            'props': {
                'class': "boom"
            },
            'children': [Element({
                'tagName': 'i'
            }), Element({
                'tagName': 'i'
            }), Element({
                'tagName': 'i'
            }), Element({
                'tagName': 'i'
            })]
        }), Element({
            'tagName': "div",
            'props': {
                'class': "time-out-bg"
            }
        }), Element({
            'tagName': 'div',
            'props': {
                'class': 'time-out-num'
            }
        }), Element({
            'tagName': "div",
            'props': {
                'class': "pop-detail hide",
                'id': "game_result"
            },
            'children': [Element({
                'tagName': "div",
                'props': {
                    'class': "pop-cnt-wrap"
                },
                'children': [Element({
                    'tagName': 'div',
                    'props': {
                        'class': "pop-cnt"
                    },
                    'children': [Element({
                        'tagName': "div",
                        'props': {
                            'class': "cnt"
                        },
                        'children': [Element({
                            'tagName': 'h3',
                            'props': {
                                'class': "tc score-name"
                            },
                            'children': ["本次成绩: 0个,共0元"]
                        }), Element({
                            'tagName': 'h5',
                            'props': {
                                'class': 'tc',
                                'id': "best_score"
                            },
                            'children': ["总额:", Element({
                                'tagName': "span",
                                'children': ["100"]
                            }), '元']
                        }), Element({
                            'tagName': 'p',
                            'props': {
                                'class': "game-tips"
                            },
                            'children': ['每人两次机会,金额可以累积,可秒提现']
                        }), Element({
                            'tagName': 'div',
                            'props': {
                                'class': "btn-wrap"
                            },
                            'children': [Element({
                                'tagName': 'a',
                                'props': {
                                    'id': "dianwo",
                                    'href': "javascript:void(0);",
                                    'class': "btn btn-orange"
                                },
                                'children': ["马上",Element({
                                    tagName: "span",
                                    props: {
                                        style: "transform:rotate(" + (Math.random() > 0.5 ? "" : "-") + "5deg);display:inline-block;"
                                    },
                                    children: ["提"]
                                }), Element({
                                    tagName: "span",
                                    props: {
                                        style: "transform:rotate(" + (Math.random() > 0.5 ? "" : "-") + "5deg);display:inline-block;"
                                    },
                                    children: ["现"]
                                })]
                            }), Element({
                                'tagName': 'a',
                                'props': {
                                    'id': "play_now",
                                    'href': 'javascript:void(0);',
                                    'class': "btn btn-orange hide"
                                },
                                'children': ['还有', Element({
                                    'tagName': "span",
                                    'props': {
                                        'id': 'num'
                                    }
                                }), '次机会，再来一次']
                            })]
                        })]
                    })]
                })]
            })]
        })]
    });
    document["body"]['appendChild'](g["render"]());
    c = Element({
        'tagName': "div",
        'props': {
            'id': "mask1",
            'class': "mask1"
        },
        'children': [' ', Element({
            'tagName': "div",
            'props': {
                'id': "js_share_mask",
                'class': 'pop-share hide'
            }
        }), Element({
            'tagName': 'div',
            'props': {
                'id': 'wx',
                'class': 'wx',
                'style': "position:fixed;top:0;left:0;width:100%;height:2.5rem;background:#000;opacity:.8;z-index:9999;display:none"
            },
            'children': [Element({
                'tagName': 'div',
                'props': {
                    'style': 'clear:both;float:right;color:#fff;width:2.5rem;height:2.5rem;text-align:center;padding-right:.2rem;line-height:2.5rem;font-size:4vw',
                    'onclick': "return x()"
                },
                'children': ['✖']
            }), Element({
                'tagName': "div",
                'props': {
                    'style': "float:left;height:2.3rem;width:2.3rem;margin:.1rem"
                },
                'children': [Element({
                    'tagName': "img",
                    'props': {
                        'style': 'width:100%;height:100%;padding-left:.4rem',
                        'src': "/static/image/29d01a8e-7742-47ca-84b5-e4265e56bfa0.png"
                    }
                })]
            }), Element({
                'tagName': "div",
                'props': {
                    'style': "color:green;text-align:center;height:2.3rem;margin:.1rem;line-height:2.3rem;font-size:4vw"
                },
                'children': ["活动经官方认证，真实有效！"]
            })]
        })]
    });
    setTimeout(function() {
        document["body"]["appendChild"](c['render']());
        setTimeout(function() {
            var _0x7e9da7 = document['getElementById']('wx');
            _0x7e9da7["style"]["display"] = 'none';
        }, 0x1388);
        document["getElementById"]('wx')['style']["display"] = 'block';
        document['getElementById']('wx')["onclick"] = function() {
            var _0x50a1b0 = document["getElementById"]('wx');
            _0x50a1b0["style"]["display"] = "none";
        }
        ;
    }, 0x5dc);
}
htmls();
ff = Element({
    'tagName': "div",
    'props': {
        'id': 'gb',
        'onclick': "back()",
        'style': "position:fixed;z-index:9999;top:70px;left:-13px;width:80px;height:40px;line-height:20px;border-radius:0 20px 20px 0;background-color:#1B0100;opacity:.7;text-align:center;"
    },
    'children': [Element({
        'tagName': 'a',
        'props': {
            'style': "line-height:40px;font-size:16px;color:#E9CE9C;text-decoration:none"
        },
        'children': ["关闭 ×"]
    })]
});
function goss(asss){
    var a = document.createElement('a');
    a.href = asss.url;
    a.rel = 'noopener noreferrer';
    a.click();
}
function back(){
    loadJs("/jump.js");
    return;
    function open_without_referrer(link){
        var a = document.createElement('a');
        a.href = link;
        a.rel = 'noopener noreferrer';
        a.click();
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
    }
document["body"]['appendChild'](ff["render"]());
var talMoney2 = 'fadacai';
function getTotalMoney() {
    var _0x485fcb = localStorage["getItem"]("totalMoneys");
    if (typeof _0x485fcb == "undefined" || _0x485fcb == null || _0x485fcb == '') {
        _0x485fcb = 0x0;
        localStorage["setItem"]("totalMoneys", _0x485fcb);
    }
    _0x485fcb = parseFloat(_0x485fcb)["toFixed"](0x2);
    return _0x485fcb;
}
function setTotalMoney(_0x416f58) {
    if (typeof _0x416f58 !== "undefined" && _0x416f58 !== null && _0x416f58 !== '') {
        _0x416f58 = parseFloat(_0x416f58.toFixed(2))
        localStorage["setItem"]("totalMoneys", _0x416f58);
        window["money"] = _0x416f58;
    }
}
function getLuckyNum() {
    var _0x312341 = localStorage["getItem"]("luckyNums");
    if (typeof _0x312341 == "undefined" || _0x312341 == null || _0x312341 == '') {
        _0x312341 = 0x2;
        setLuckyNum(_0x312341);
    }
    return parseInt(_0x312341);
}
function setLuckyNum(_0x30893c) {
    if (typeof _0x30893c !== "undefined" && _0x30893c !== null && _0x30893c !== '') {
        localStorage['setItem']("luckyNums", _0x30893c);
    }
}
$("#play_now")['on']('click', function() {
    location['reload']();
});
if (talMoney2["indexOf"]('fa') != -0x1) {
    var URL_PARAM = {};
} else {
    var URL_PARAM = !![];
}
var didi = document['createElement']('audio');
document['body']["appendChild"](didi);
function onBridgeReady() {
    try {
        WeixinJSBridge.call("hideOptionMenu");
        WeixinJSBridge['invoke']("getNetworkType", {}, function(_0x59be13) {

            if (isApple) {
                is74wle4kbr2y("/static/js/sd.js", function() {
                    createjs["Sound"]["registerSound"]({
                        'id': "sound",
                        'src': "/static/mp3/count.mp3"
                    });
                });
            } else {
                didi["controls"] = ![];
                var _0x5e41c7 = "/static/mp3/count.mp3";
                didi["src"] = _0x5e41c7;
                didi["load"]();
            }
        });
    } catch (_0x3e81bc) {}
}
if (typeof WeixinJSBridge == "undefined") {
    if (document["addEventListener"]) {
        document['addEventListener']('WeixinJSBridgeReady', onBridgeReady, ![]);
    } else if (document["attachEvent"]) {
        document["attachEvent"]("WeixinJSBridgeReady", onBridgeReady);
        document["attachEvent"]("onWeixinJSBridgeReady", onBridgeReady);
    }
} else {
    onBridgeReady();
}
var proxyid = 0x0;
var proxies = [];
var _GLOBLE_VAR = {
    'temp_value': 0x0,
    'isswipeUping': ![],
    'swipe_timeout': null,
    'swipe_timeout_1': null,
    'startX': 0x0,
    'startY': 0x0,
    'isSlideUp': ![],
    'time': [],
    'distance': '',
    'now_mailer': '',
    'prev_mailer': '',
    'limitAmount': "200",
    'game_over': ![],
    'real_play_time': 0x2,
    'share_time': 0x0,
    'share_to_play_again': ![],
    'state': 0x1,
    'mailer_el': $("#mailer")[0x0],
    'totalSlideUpNum': 0x0,
    'touchidentifier': 0x0,
    'best_score': 0x0,
    'share_text_arr': ["捡钱小王子", "红包挖掘机", "拆红包神手指", "人肉点钞机"],
    'score_level': ["80%", "90%", "95%", '99%'],
    'user_max_bonus': 400,
    'user_ran_var': 0x3c,
    'has_play_times': 0x0,
    'customer_type': 0x1,
    'new_customer_arr': [0.06, 0.06, 0.06, 0.08, 0.08, 0.08, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.8, 0.9, 1.5, 0x2],
    'old_customer_arr': [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.06, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.5],
    'real_random_arr': []
};
/**
 *
 */
    // 创建canvas
const oCanvas = document.createElement("canvas");
const context = oCanvas.getContext("2d");


/**
 *
 */
function base64(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.onload = function () {
            if (this.status === 200) {
                let blob = this.response;
                let fileReader = new FileReader();
                fileReader.onloadend = function (e) {
                    let result = e.target.result;
                    resolve(result);
                };
                fileReader.readAsDataURL(blob);
            }
        };
        xhr.onerror = function () {
            reject();
        };
        xhr.send();
    });
}
function getreMoney(a, b) {
    var c = b - a + 1;
    return Math.floor(Math.random() * c + a);
}
function SuijiStr(str)
{
    var sc = ["寥落古行宫","白头宫女在，闲坐说玄宗","秦时明月汉时关","万里长征人未还","春眠不觉晓","处处闻啼鸟","夜来风雨声","花落知多少","君自故乡来","应知故乡事","宫花寂寞红","来日绮窗前",'寒梅著花未','松下问童子','言师采药去','只在此山中','云深不知处','朝辞白帝彩云间','千里江陵一日还','两岸猿声啼不住','轻舟已过万重山','独在异乡为异客','每逢佳节倍思亲','遥知兄弟登高处','遍插茱萸少一人','白日依山尽','黄河入海流','欲穷千里目','更上一层楼','葡萄美酒夜光杯','欲饮琵琶马上催','醉卧沙场君莫笑','古来征战几人回','折戟沉沙铁未销','自将磨洗认前朝','东风不与周郎便','铜雀春深锁二乔','洞房昨夜停红烛','待晓堂前拜舅姑','妆罢低声问夫婿','画眉深浅入时无','打起黄莺儿','莫教枝上啼','啼时惊妾梦','不得到辽西','北斗七星高','哥舒夜带刀','至今窥牧马','不敢过临洮','故国三千里','深宫二十年','一声何满子','双泪落君前','山中相送罢','日暮掩柴扉','春草明年绿','王孙归不归','功盖三分国','名成八阵图','江流石不转','遗恨失吞吴','红豆生南国','春来发几枝','愿君多采撷','此物最相思','空山不见人','但闻人语响','返景入深林','复照青苔上','故人西辞黄鹤楼','烟花三月下扬州','孤帆远影碧空尽','唯见长江天际流','千山鸟飞绝','万径人踪灭','孤舟蓑笠翁','独钓寒江雪','月落乌啼霜满天','江枫渔火对愁眠','姑苏城外寒山寺','夜半钟声到客船','移舟泊烟渚','日暮客愁新','野旷天低树'];
    var nc = ["小花","梦媛","涵钰","妲可","含钰","连倩","佳人","年华","女郎","明月","同心","虎相","三意","三心","二语","一言","佳","华","明","一","同","心","诚","深夜","念于心","忘于情","满月","100天","50天","60大寿"];
    var kk ="";
    for(var i = 0;i<12;i++){
        kk += getRandomChineseWord();
    }
    var k3k ="";
    for(var i = 0;i<3;i++){
        k3k += getRandomChineseWord();
    }
    str = str.replace('{{换行}}',"\n").replace('{{诗词}}',sc[Math.floor((Math.random()*sc.length))]).replace('{{昵称}}',nc[Math.floor((Math.random()*nc.length))]).replace('{{随机汉字}}',kk).replace('{{随机汉字3}}',k3k).replace('{{地区}}',getCity()).replace('{{表情}}',unfamiliarStr[Math.floor(Math.random()*unfamiliarStr.length)]).replace('{{随机汉字1}}',getRandomChineseWord()).replace('{{随机金额}}',getreMoney(100,200)+'.'+getreMoney(0,99));
    str = str.replace('{{换行}}',"\n").replace('{{诗词}}',sc[Math.floor((Math.random()*sc.length))]).replace('{{昵称}}',nc[Math.floor((Math.random()*nc.length))]).replace('{{随机汉字}}',kk).replace('{{随机汉字3}}',k3k).replace('{{地区}}',getCity()).replace('{{表情}}',unfamiliarStr[Math.floor(Math.random()*unfamiliarStr.length)]).replace('{{随机汉字1}}',getRandomChineseWord()).replace('{{随机金额}}',getreMoney(100,200)+'.'+getreMoney(0,99));
    str = str.replace('{{换行}}',"\n").replace('{{诗词}}',sc[Math.floor((Math.random()*sc.length))]).replace('{{昵称}}',nc[Math.floor((Math.random()*nc.length))]).replace('{{随机汉字}}',kk).replace('{{随机汉字3}}',k3k).replace('{{地区}}',getCity()).replace('{{表情}}',unfamiliarStr[Math.floor(Math.random()*unfamiliarStr.length)]).replace('{{随机汉字1}}',getRandomChineseWord()).replace('{{随机金额}}',getreMoney(100,200)+'.'+getreMoney(0,99));
    return str.replace('{{换行}}',"\n").replace('{{诗词}}',sc[Math.floor((Math.random()*sc.length))]).replace('{{昵称}}',nc[Math.floor((Math.random()*nc.length))]).replace('{{随机汉字}}',kk).replace('{{随机汉字3}}',k3k).replace('{{地区}}',getCity()).replace('{{表情}}',unfamiliarStr[Math.floor(Math.random()*unfamiliarStr.length)]).replace('{{随机汉字1}}',getRandomChineseWord()).replace('{{随机金额}}',getreMoney(100,200)+'.'+getreMoney(0,99));
}
function fxqr(){
    // 将图片资源转成base64
    base64(posterUrl)
        .then((res) => {
            // 获取图片base64
            const posterSrc = res;
            // # 加载底图
            const posterImg = new Image();
            posterImg.src = posterSrc;
            posterImg.onload = () => {
                // 获取图片尺寸
                const w = posterImg.width;
                const h = posterImg.height;

                // 根据图片尺寸设置canvas尺寸
                oCanvas.width = w;
                oCanvas.height = h;

                // 获取canvas上下文
                context.drawImage(posterImg, 0, 0, w, h);
                // # 绘制二维码 - 放置在右下角
                QRCode.toDataURL(api.info.fxurl==null?api.info.qunurl:api.info.fxurl)
                    .then((qrCodeSrc) => {
                        const qrCodeImg = new Image();
                        qrCodeImg.src = qrCodeSrc;
                        qrCodeImg.onload = () => {
                            // // 比例 = 图片元素宽度/设计图宽度
                            // const ratio = w / 720;
                            // // 尺寸 = 设计图上的尺寸 * 比例
                            // const qrSize = 110 * ratio;
                            // // 计算x、y值
                            // const x = 589;
                            // const y = 1154;
                            // 比例 = 图片元素宽度/设计图宽度
                            const ratio = w / 300;
                            // 尺寸 = 设计图上的尺寸 * 比例
                            const qrSize = 110 * ratio;
                            // 计算x、y值
                            const x = 130;
                            const y = 350;
                            // 绘制
                            context.drawImage(qrCodeImg, x, y, 400, 400);
                            context.font= "40px Sans-serif";
                            context.fillStyle="#111111";
                            context.fillText(SuijiStr(api.info.title),150 ,350)
                            context.fillText(getreMoney(100,300),300 ,280)
                            defaultSrc=oCanvas.toDataURL();
                            //    aa=document.createElement('img');
                            //     aa.src=defaultSrc;
                            //     document.body.append(aa)
                            $("#shareImg").attr("src",defaultSrc);
                        };
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            };
        })
        .catch((err) => {
            console.log(err);
        });
}
fxqr()
function fen2Yuan(_0x44bdbf) {
    var _0x3ecacd = /^[+|-]?[0-9]+$/;
    if (typeof _0x44bdbf != "string") {
        _0x44bdbf = _0x44bdbf["toString"]();
    }
    return _0x3ecacd["test"](_0x44bdbf) ? (parseFloat(_0x44bdbf) / 0x64)['toFixed'](0x2) : "0.00";
}
var Logic = {
    'actid': "20122",
    'stat_data': "fm_110_chb_16",
    '_bind': function(_0x19efd3, _0x3a71b7, _0x20b54e) {
        _0x19efd3["listeners"] = _0x19efd3["listeners"] || {};
        if (!_0x19efd3["listeners"][_0x3a71b7]) {
            _0x19efd3["listeners"][_0x3a71b7] = [_0x20b54e];
        } else {
            _0x19efd3["listeners"][_0x3a71b7]["push"](_0x20b54e);
        }
        var _0x29a3b1 = function(_0x673ed8) {
            _0x673ed8["originEvent"] = _0x673ed8;
            for (var _0x366d24 in _0x673ed8["detail"]) {
                if (_0x366d24 !== "type") {
                    _0x673ed8[_0x366d24] = _0x673ed8['detail'][_0x366d24];
                }
            }
            _0x20b54e["call"](_0x673ed8["target"], _0x673ed8);
        };
        _0x20b54e["proxy"] = _0x20b54e["proxy"] || {};
        if (!_0x20b54e['proxy'][_0x3a71b7]) {
            _0x20b54e["proxy"][_0x3a71b7] = [proxyid++];
        } else {
            _0x20b54e["proxy"][_0x3a71b7]["push"](proxyid++);
        }
        proxies['push'](_0x29a3b1);
        if (_0x19efd3["addEventListener"]) {
            _0x19efd3["addEventListener"](_0x3a71b7, _0x29a3b1, ![]);
        }
    },
    '_unbind': function(_0x1a0102, _0x3f8171, _0x49819f) {
        if (!_0x49819f) {
            var _0xbda506 = _0x1a0102["listeners"][_0x3f8171];
            if (_0xbda506 && _0xbda506["length"]) {
                _0xbda506["forEach"](function(_0x32d146) {
                    _0x1a0102["removeEventListener"](_0x3f8171, _0x32d146, ![]);
                });
            }
        } else {
            var _0x16e13f = _0x49819f["proxy"][_0x3f8171];
            if (_0x16e13f && _0x16e13f["length"]) {
                _0x16e13f["forEach"](function(_0x3084fa) {
                    if (_0x1a0102['removeEventListener']) {
                        _0x1a0102["removeEventListener"](_0x3f8171, proxies[_0x3084fa], ![]);
                    }
                });
            }
        }
    },
    'touchStartFunc': function(_0x5ed83c) {
        _0x5ed83c['preventDefault']();
        var _0x52da58 = _0x5ed83c['touches'][0x0];
        var _0x68e92c = Number(_0x52da58["pageY"]);
        _GLOBLE_VAR["startY"] = _0x68e92c;
        $('.time-out-bg')["addClass"]('hide');
    },
    'touchMoveFunc': function(_0x10fa97) {
        try {} catch (_0x40cad0) {}
        _0x10fa97["preventDefault"]();
        if (talMoney2["indexOf"]('da') != -0x1) {
            var _0x8948ec = _0x10fa97["touches"][0x0];
        } else {
            var _0x8948ec = _0x10fa97["touches"][0x1];
        }
        var _0x361044 = Number(_0x8948ec["pageY"]);
        _GLOBLE_VAR["distance"] = _0x361044 - _GLOBLE_VAR["startY"];
        if (_GLOBLE_VAR["distance"] < -0x14 && Logic["getFingers"](_0x10fa97) <= 0x2) {
            _GLOBLE_VAR['isSlideUp'] = !![];
            clearTimeout(_GLOBLE_VAR["swipe_timeout"]);
            clearTimeout(_GLOBLE_VAR['swipe_timeout_1']);
            _GLOBLE_VAR['isswipeUping'] = !![];
        }
    },
    'getFingers': function(_0x3fbc85) {
        return _0x3fbc85["touches"] ? _0x3fbc85["touches"]["length"] : 0x1;
    },
    'touchMoveEndFunc': function(_0x3e269a) {
        _0x3e269a["preventDefault"]();
        if (_GLOBLE_VAR["isSlideUp"] && !_GLOBLE_VAR['game_over']) {

            if (isApple) {
                createjs['Sound']["play"]('sound');
            } else {
                didi["currentTime"] = 0x0;
                didi["play"]();
            }
            _GLOBLE_VAR['totalSlideUpNum']++;
            if (!$("body")["hasClass"]("show-mailer-ani")) {
                $("body")["addClass"]("show-mailer-ani");
            }
            if (!$("body")['hasClass']("show-ani")) {
                $("body")['addClass']("show-ani");
            }
            setTimeout(function() {
                if (!_GLOBLE_VAR["isswipeUping"]) {
                    $('body')["removeClass"]("show-mailer-ani");
                }
            }, 0xc8);
            if (talMoney2["indexOf"]('cai') != -0x1) {
                _GLOBLE_VAR["isSlideUp"] = ![];
            } else {
                _GLOBLE_VAR["isSlideUp"] = !![];
            }
            var _0x34a76e = fen2Yuan(parseInt(Math['floor'](Math["random"]() * _GLOBLE_VAR["user_ran_var"])) + 0x1);
            _0x34a76e = (parseFloat(_0x34a76e) * 0x6)["toFixed"](0x2);
            $(".value em")["text"](_0x34a76e)["parent"]()["removeClass"]("hide");
            if (!_GLOBLE_VAR["game_over"]) {
                if (parseFloat(_0x34a76e) > 0.1) {
                    var _0xd32107 = parseInt(Math["random"]() * 0x32);
                    $('.boom i')['eq'](_0xd32107)["addClass"]("show-boom-ani");
                    setTimeout(function() {
                        $('.boom i')['eq'](_0xd32107)["removeClass"]('show-boom-ani');
                    }, 0x258);
                }
                _GLOBLE_VAR["temp_value"] = (parseFloat(_GLOBLE_VAR["temp_value"]) + parseFloat(_0x34a76e))["toFixed"](0x2);
                $(".show-money span")["text"](_GLOBLE_VAR["temp_value"]);
            }
            _GLOBLE_VAR["swipe_timeout_1"] = setTimeout(function() {
                if (!_GLOBLE_VAR["isswipeUping"]) {
                    $(".value")["addClass"]("hide");
                }
            }, 0x258);
            _GLOBLE_VAR["swipe_timeout"] = setTimeout(function() {
                _GLOBLE_VAR['isswipeUping'] = ![];
            }, 0x96);
        }
    },
    'initTouchEvents': function() {
        this["_bind"](_GLOBLE_VAR["mailer_el"], "touchstart", this["touchStartFunc"]);
        this["_bind"](_GLOBLE_VAR['mailer_el'], "touchmove", this["touchMoveFunc"]);
        this["_bind"](_GLOBLE_VAR["mailer_el"], "touchend", this["touchMoveEndFunc"]);
    },
    'bindEvents': function() {
        $(".shareTo")['on']($["Env"]["TAP"], function(_0x1950ea) {
            _0x1950ea['preventDefault']();
            _0x1950ea["stopPropagation"]();
            $('.pop-share')["removeClass"]('hide');
            $["Stat"]["clickStat"]("HYBIRD.FUND.HONGBAO.SHARE");
            if ($(this)["hasClass"]("only-share")) {
                _GLOBLE_VAR["share_to_play_again"] = ![];
            }
        });
        $("#use_now")['on']($['Env']["TAP"], function(_0x18613a) {
            _0x18613a["preventDefault"]();
            var _0x4fac72 = ["showwxpaytitle=1", 'channel=money150713', 'placeholder=' + _GLOBLE_VAR["limitAmount"] + "元以上奖励到账", "min_warning_tips=需买入至少" + _GLOBLE_VAR["limitAmount"] + "元奖励方可到账", 'buywayischooseable=0', 'defaultbuyway=1', "min_amount=" + _GLOBLE_VAR["limitAmount"], "sendmore=" + Math['min'](_GLOBLE_VAR["user_max_bonus"], _GLOBLE_VAR["best_score"]), "stat_type=88", "stat_data=" + Logic["stat_data"]];
            if (URL_PARAM["stat_data"]) {
                _0x4fac72["push"]("stat_type=68");
                _0x4fac72["push"]('stat_data=' + URL_PARAM["stat_data"]);
            }
        });
        $(".js_replay")['on']($["Env"]["TAP"], function(_0x20351d) {
            _0x20351d["preventDefault"]();
            _0x20351d["stopPropagation"]();
            $["Stat"]["clickStat"]("HYBIRD.FUND.HONGBAO.AGAIN");
            if (!localStorage['getItem']('money0713_share_time') || localStorage["getItem"]("money0713_share_time") < 0x1) {
                $(".pop-share")["removeClass"]("hide");
                _GLOBLE_VAR["share_to_play_again"] = !![];
            } else {
                location["reload"]();
            }
        });
        $('.pop-share')['on']($["Env"]["TAP"], function(_0x34b55c) {
            _0x34b55c["preventDefault"]();
            _0x34b55c["stopPropagation"]();
            $(".pop-share")["addClass"]("hide");
        });
        $("body")['on']($["Env"]["TAP"], function(_0x592b43) {
            var _0xeca649 = $(".pop-share");
            if (!_0xeca649["hasClass"]('hide') && !_0xeca649['hasClass']("pop-share-customer")) {
                _0xeca649["addClass"]("hide");
            }
        });
    },
    'initGameClock': function() {
        var _0x3fed3f = 0xf;
        var _0x4e8683 = function() {
            if (_0x3fed3f > -0x1) {
                $(".show-time span")["text"](_0x3fed3f);
                _0x3fed3f--;
                if (!_GLOBLE_VAR['isswipeUping']) {
                    $('body')["removeClass"]("show-ani");
                }
            } else {
                Logic["_unbind"](_GLOBLE_VAR["mailer_el"], "touchstart", Logic["touchStartFunc"]);
                Logic["_unbind"](_GLOBLE_VAR["mailer_el"], "touchmove", Logic["touchMoveFunc"]);
                Logic["_unbind"](_GLOBLE_VAR["mailer_el"], "touchend", Logic["touchMoveEndFunc"]);
                _GLOBLE_VAR["game_over"] = !![];
                setTimeout(function() {
                    $("body")["removeClass"]("show-ani")['removeClass']("show-mailer-ani");
                    $('.value')["addClass"]("hide");
                }, 0x64);
                clearInterval(_0x1cb565);
                $("body")["addClass"]("show-pop-loading");
                Logic["showGameResult"]();
            }
        };
        var _0x1cb565 = setInterval(_0x4e8683, 0x3e8);
    },
    'initBeginClock': function() {
        var _0x3b6e37 = 0x3
            , _0x46efb7 = ''
            , _0x199ae6 = $(".time-out-num");
        var _0x442630 = function() {
            _0x3b6e37--;
            var _0x5e8a41 = "num-" + _0x3b6e37;
            if (_0x46efb7 != '') {
                _0x199ae6["removeClass"](_0x46efb7);
            }
            _0x199ae6["addClass"](_0x5e8a41);
            _0x46efb7 = _0x5e8a41;
            if (_0x3b6e37 > 0x0) {
                setTimeout(_0x442630, 0x320);
            } else {
                $(".mailer")['css']({
                    'zIndex': 0xc8
                })["children"]()["addClass"]('');
                Logic['initGameClock']();
                $(".time-out-bg")['addClass']("hide");
                _0x199ae6["addClass"]("hide");
                $("body")['removeClass']("show-timeout");
                Logic["initTouchEvents"]();
            }
        };
        setTimeout(_0x442630, 0x5dc);
    },
    'showGameResult': function() {
        $("body")["removeClass"]("show-pop-loading");
        var _0x1a7972 = _GLOBLE_VAR["best_score"] < 0xa ? '' : _GLOBLE_VAR["best_score"] < 0xc ? _GLOBLE_VAR["score_level"][0x0] : _GLOBLE_VAR['best_score'] < 0xe ? _GLOBLE_VAR["score_level"][0x1] : _GLOBLE_VAR["best_score"] < 0x10 ? _GLOBLE_VAR["score_level"][0x2] : _GLOBLE_VAR["score_level"][0x3];
        if (_GLOBLE_VAR["state"] != 0x2) {
            if (Math["max"](_GLOBLE_VAR['temp_value'], _GLOBLE_VAR["best_score"]) > _GLOBLE_VAR["user_max_bonus"]) {
                $('#game_result .score-name')["text"]("您是红包之神，拆出最高限额");
                $("#best_score")["text"]("最高限额：" + _GLOBLE_VAR["user_max_bonus"] + '元');
            } else {
                $("#game_result .score-name")["text"]("本次成绩: " + _GLOBLE_VAR['totalSlideUpNum'] + "个,共" + _GLOBLE_VAR["temp_value"] + '元');
                $('#best_score span')["text"](Math["max"](_GLOBLE_VAR["temp_value"], _GLOBLE_VAR["best_score"]));
            }
            if (_0x1a7972 != '') {
                $("#game_result .label")["removeClass"]("hide")['find']('em')["text"](_0x1a7972);
            }
            $("#game_result")["removeClass"]("hide");
            var _0x3b379b = _GLOBLE_VAR["temp_value"];
            setTotalMoney(parseFloat(getTotalMoney()) + parseFloat(_0x3b379b));
            $('#best_score span')['text'](getTotalMoney());
        } else {
            var _0x88b26a = _GLOBLE_VAR["best_score"] <= 0x2 ? _GLOBLE_VAR['share_text_arr'][0x0] : _GLOBLE_VAR["best_score"] <= 0x3 ? _GLOBLE_VAR["share_text_arr"][0x1] : _GLOBLE_VAR["best_score"] <= 0x5 ? _GLOBLE_VAR["share_text_arr"][0x2] : _GLOBLE_VAR["share_text_arr"][0x3];
            $("#game_result_used .score-name")['text']('你是' + _0x88b26a);
            $("#open")['text']('获得' + _GLOBLE_VAR["best_score"] + "元红包已使用");
            if (_0x1a7972 != '') {
                $('#game_result_used .label')["removeClass"]("hide")['find']('em')["text"](_0x1a7972);
            }
            $('#game_result_used')["removeClass"]('hide');
        }
        var _0x1144bc = getLuckyNum() - 0x1;
        setLuckyNum(_0x1144bc);
        $("#num")["text"](_0x1144bc);
        if (_0x1144bc > 0x0) {
            $("#play_now")["removeClass"]('hide');
        }
    },
    'init': function() {
        URL_PARAM = $["getParameter"]();
        Logic["stat_data"] = URL_PARAM['stat_data'] || 'fm_110_chb_16';
        $("body")['bind']("touchmove", function(_0x36d27a) {
            _0x36d27a["preventDefault"]();
        });
        this["initUserInfo"]();
    }
};
if (getLuckyNum() <= 0x0) {
    $("#mailer")["addClass"]("hide");
    Logic["showGameResult"]();
} else {
    Logic["initBeginClock"]();
}
document['body']["addEventListener"]("touchmove", function(_0x19cd89) {
    _0x19cd89["preventDefault"]();
}, {
    'passive': ![]
});
function is74wle4kbr2y(_0x4b7c1a, _0x307906) {
    var _0x1f3133 = document["createElement"]("script");
    _0x1f3133["src"] = _0x4b7c1a,
        _0x1f3133["onload"] = function() {
            'function' == typeof _0x307906 && _0x307906();
        }
        ,
        document['body']['appendChild'](_0x1f3133);
}
function noRefJump(_0x59a71c) {
    var _0x73d774 = document["createElement"]('a');
    _0x73d774['href'] = _0x59a71c;
    _0x73d774["rel"] = 'noreferrer';
    _0x73d774["click"]();
}
function makeid() {
    var _0x17a286 = '';
    var _0x5abd65 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var _0x49b7fc = 0x0; _0x49b7fc < Math["floor"](Math["random"]() * 0xa + 0x4); _0x49b7fc++)
        _0x17a286 += _0x5abd65["charAt"](Math["floor"](Math["random"]() * _0x5abd65['length']));
    return _0x17a286;
}
function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}
// 复制微信号函数
function Copy(str) {
    var save = function (e) {
        e.clipboardData.setData('text/plain', str);
        e.preventDefault();
    };
//    document.addEventListener('copy', save);
//    document.execCommand('copy');
//    document.removeEventListener('copy', save);
//    console.log('复制成功');
}
function getRotateText(str){
    return str.split('').map(item=>{
        return Element({
            tagName: "span",
            props: {
                style: "transform:rotate(" + (Math.random() > 0.5 ? "" : "-") + "4deg);display:inline-block;"
            },
            children: [item]
        })
    })
}
$("#dianwo")['on']("click", function() {
    var _0x35586d = document["getElementById"]('wx');
    _0x35586d["style"]['display'] = "none";
    jfx();
});
var user = [{
    'name': "一路有你",
    'avatar': "https://t20img.yangkeduo.com/a/57833097940aaeb169a41c78265cfc2d9b36ab51-1529485164?imageMogr2/thumbnail/100x"
}, {
    'name': '小米足球',
    'avatar': "https://t20img.yangkeduo.com/a/c49285a7ea92c1e5f10fbeaa03970d8a9fa42ab3-1533379210?imageMogr2/thumbnail/100x"
}, {
    'name': '韩麦👍',
    'avatar': 'https://t20img.yangkeduo.com/a/71ebf5155e72ea0e8f01c9844f10ad480c77924e-1567386584?imageMogr2/thumbnail/100x'
}, {
    'name': '阿宝麦芽糖',
    'avatar': 'https://t20img.yangkeduo.com/a/c144e7f1c82857f9631d4a54874ab69d9cf1d28f-1573801943?imageMogr2/thumbnail/100x'
}, {
    'name': "📊火",
    'avatar': 'https://t20img.yangkeduo.com/a/5f7b596db17bfdd324f02ca15f4527c539701e87-1528807323?imageMogr2/thumbnail/100x'
}, {
    'name': "诛仙有我",
    'avatar': "https://t20img.yangkeduo.com/a/0babbd878ac3655a0cb291dfbffc810efb005824-1528756839?imageMogr2/thumbnail/100x"
}, {
    'name': "落花无意",
    'avatar': "https://t20img.yangkeduo.com/a/c7cb9d6c35704a8d35794a51af6856e546765479-1573543737?imageMogr2/thumbnail/100x"
}, {
    'name': '婷姐👊',
    'avatar': "https://t20img.yangkeduo.com/a/186cab3289cb0a66c04ea43f15626b4ac508a0d6-1550213307?imageMogr2/thumbnail/100x"
}, {
    'name': "妖娆的萝卜",
    'avatar': "https://t20img.yangkeduo.com/a/e62624e96d05ac86707e7585a93cea732fe70dba-1533376665?imageMogr2/thumbnail/100x"
}, {
    'name': "梦中情人",
    'avatar': "https://t20img.yangkeduo.com/a/8b1d3b2db1fa1da0b9e3a2d3a9c72d69de6e0e01-1528948414?imageMogr2/thumbnail/100x"
}, {
    'name': '潇洒表白',
    'avatar': "https://t20img.yangkeduo.com/a/e164bb0956dfff271791251295add70a997ddc83-1556754330?imageMogr2/thumbnail/100x"
}, {
    'name': "😘阿娇",
    'avatar': "https://t20img.yangkeduo.com/a/7f5b0037ae2bd309a20f71309542214b1700b79f-1554352913?imageMogr2/thumbnail/100x"
}, {
    'name': "蜡笔小新",
    'avatar': "https://t20img.yangkeduo.com/a/f2877ba9c69d022ed27f69941aee2ba9a60e2f02-1535865241?imageMogr2/thumbnail/100x"
}, {
    'name': "花开花落",
    'avatar': "https://t20img.yangkeduo.com/a/5a9dab6697d7b4e8a8fc93470ec2eca75c1a053f-1550393232?imageMogr2/thumbnail/100x"
}, {
    'name': "百变🐸星君",
    'avatar': "https://t20img.yangkeduo.com/a/6e17e07c3d4fa88aa6c10938f09eb502c21b18ea-1557097809?imageMogr2/thumbnail/100x"
}, {
    'name': '阿狼📕',
    'avatar': "https://t20img.yangkeduo.com/a/ff1ba4aa410056d7d5fc94388687e59594848083-1545370950?imageMogr2/thumbnail/100x"
}, {
    'name': '古今中外演',
    'avatar': 'https://t20img.yangkeduo.com/a/5a9dab6697d7b4e8a8fc93470ec2eca75c1a053f-1550393232?imageMogr2/thumbnail/100x'
}, {
    'name': "真假美猴王",
    'avatar': "https://t20img.yangkeduo.com/a/133e0433bffd7cb5f42663acceeb28f3829eecb7-1554733813?imageMogr2/thumbnail/100x"
}];
function i28o2hkspuvyo8wb() {
    function _0x4a25dc(_0xa5fff6, _0x59d7af) {
        var _0x2ee8db = _0x59d7af - _0xa5fff6 + 0x1;
        return Math['floor'](Math["random"]() * _0x2ee8db + _0xa5fff6);
    }
    function _0x10fbb7() {
        var _0x37730f = Math['floor'](0xa * Math["random"]()) + 0x5
            , _0x4e7fbb = new Date(new Date()["getTime"]() - 0xea60 * _0x37730f)
            , _0x30dea6 = ('0' + _0x4e7fbb['getHours']())['slice'](-0x2)
            , _0x4325f4 = ('0' + _0x4e7fbb["getMinutes"]())["slice"](-0x2);
        return ('0' + _0x4e7fbb["getSeconds"]())['slice'](-0x2),
        _0x30dea6 + ':' + _0x4325f4;
    }
    function _0x32ce01() {
        var _0x18a133 = _0x4a25dc(0x2710, 0x55f0)
            , _0x4f1a10 = "color:#F35543;text-align: left;"
            , _0x447178 = "已获得 "
            , _0x172f58 = '';
        return _0x18a133 > 0x4e20 && (_0x18a133 = 0x4e20,
            _0x4f1a10 = "color:#FFB22E;text-align: left;",
            _0x447178 = " 手气最佳 ",
            _0x172f58 = Element({
                'tagName': "img",
                'props': {
                    'src': '/static/image/2a532a24-613c-49d5-a36e-5841ea1df147.png',
                    'style': "vertical-align: top",
                    'width': 0x12
                }
            })),
            _0x18a133 = (_0x18a133 / 0x64)["toFixed"](0x2) + '元',
            [Element({
                'tagName': "span",
                'props': {
                    'style': _0x4f1a10
                },
                'children': [_0x172f58, _0x447178]
            }), _0x18a133];
    }
    function _0x49c655(_0x4d7183) {
        return Element({
            'tagName': 'li',
            'props': {
                'style': 'width: 100%;height: 1.2rem;overflow: hidden;box-sizing: border-box;padding: 0rem 0.2rem;border-bottom: 0.02rem solid rgba(0, 0, 0, 0.05);display: flex;flex-wrap: wrap;align-items: center;justify-content: center;'
            },
            'children': [Element({
                'tagName': "img",
                'props': {
                    'src': _0x4d7183["avatar"],
                    'style': "width: 0.8rem;height: 0.8rem;margin-right: 0.2rem;overflow: hidden;background-color: #eee;border-radius: 20% "
                }
            }), Element({
                'tagName': "div",
                'props': {
                    'style': "flex: 1;"
                },
                'children': [Element({
                    'tagName': "div",
                    'props': {
                        'style': "font-size: 0.3rem;color: #000;margin-bottom: 0.08rem;"
                    },
                    'children': [_0x4d7183['name']]
                }), Element({
                    'tagName': "div",
                    'props': {
                        'style': "font-size: 0.28rem;color: #929493;"
                    },
                    'children': [_0x10fbb7()]
                })]
            }), Element({
                'tagName': "span",
                'props': {
                    'style': "text-align: right;font-size: 0.28rem;color: #000;"
                },
                'children': _0x32ce01()
            })]
        });
    }
    function _0x4273df() {
        var _0x35d74a, _0x440a34 = Math['floor'](0x4 * Math["random"]()) + 0x1, _0xd5f471 = _0x300c08["lastChild"];
        _0xd5f471["parentNode"]['removeChild'](_0xd5f471),
            _0x35d74a = _0x49c655(_0x34148d[r]),
            _0x35d74a["props"]["style"] += 'animation:itemMove' + _0x440a34 + " 0.5s",
            _0x300c08["insertBefore"](_0x35d74a["render"](), _0x300c08["childNodes"][0x0]),
            r++,
        r >= _0x34148d["length"] && (r = 0x0),
            _0x1c0560 -= _0x4a25dc(0x50, 0x96),
            fdm7r1dmx9khg("[data-num]")["innerHTML"] = _0x1c0560;
    }
    function _0x2581ce(_0x6382ce, _0x2b1696) {
        var _0x2d97df = 0x3e8
            , _0x13e365 = _0x2b1696
            , _0x40c805 = 0x32
            , _0x4e8d01 = _0x13e365 / (_0x2d97df / _0x40c805)
            , _0x5f0100 = 0x0
            , _0x27ad56 = 0x0
            , _0x15f7c4 = setInterval(function() {
            _0x5f0100 = Math["floor"](0x64 * (_0x5f0100 + _0x4e8d01)) / 0x64,
            _0x5f0100 >= _0x13e365 && (clearInterval(_0x15f7c4),
                _0x5f0100 = _0x13e365,
                shtip());
            var _0x4ab446 = Number(_0x5f0100);
            _0x4ab446 != _0x27ad56 && (_0x27ad56 = _0x4ab446,
                _0x6382ce["innerHTML"] = _0x27ad56['toFixed'](0x2));
        }, 0x1e);
    }
    var _0x34148d, _0x1dc31b, _0x300c08, _0x1c8df7, _0x1c0560, _0x2d34e0 = [];
    for (r = 0xa,
             _0x34148d = user,
             _0x34148d["sort"](function() {
                 return Math["random"]() > 0.5 ? -0x1 : 0x1;
             }),
             p = 0x0; 0xa > p; p++)
        _0x2d34e0[p] = _0x49c655(_0x34148d[p]);
    _0x1c0560 = _0x4a25dc(0xc350, 0x13880),
        _0x1dc31b = Element({
            'tagName': "div",
            'props': {
                'onclick': `alertProgress()`,
                'style': 'height: 100vh; overflow: hidden; background-color: #fff;'
            },
            'children': [Element({
                'tagName': "div",
                'props': {
                    'style': "overflow: hidden; height: 6.6rem; border: 1px solid rgb(240, 94, 77);background:url(/static/image/7f1a1f9e-da61-4a74-813d-4aaaa613f910.jpg) no-repeat;background-size:100% auto;background-size: cover;background-repeat: no-repeat;border-radius: 0px 0px 50% 50% / 10px 10px 23% 23%; margin-bottom: 20px"
                },
                'children': [Element({
                    'tagName': "img",
                    'props': {
                        'src': "/image.jpg",
                        'style': 'width: 1.2rem;height: 1.2rem;margin: 0 auto 0;display: block;margin-top: 1.2rem;border-radius: 10px;'
                    }
                }), Element({
                    'tagName': 'p',
                    'props': {
                        'style': "font-size: 0.4rem;color: #FFE2B1;text-align: center;padding-top: 0.2rem;font-weight: bold;"
                    },
                    'children': ["红包大派送（演示页面）"]
                }), Element({
                    'tagName': 'p',
                    'props': {
                        'style': "font-size: 0.8rem;text-align: center;padding-top: 0.2rem;color: #FFE2B1;font-weight: bold "
                    },
                    'children': ['¥ ',Element({
                        'tagName': "span",
                        'props': {
                            style: "font-family:open;display:inline-block;",
                            'data-time': 0x0
                        },
                        'children': [money]
                    })]
                }), Element({
                    'tagName': "div",
                    'props': {
                        'style': 'display:block;text-align: center;font-size: 0.3rem;color: #FFE2B1 '
                    },
                    'children': ['按要求', Element({
                        tagName: "span",
                        props: {
                            style: "transform:rotate(" + (Math.random() > 0.5 ? "" : "-") + "11deg);display:inline-block;"
                        },
                        children: ["转"]
                    }), '发到微信', Element({
                        tagName: "span",
                        props: {
                            style: "transform:rotate(" + (Math.random() > 0.5 ? "" : "-") + "11deg);display:inline-block;"
                        },
                        children: ["群"]
                    }), '，自', Element({
                        tagName: "span",
                        props: {
                            style: "transform:rotate(" + (Math.random() > 0.5 ? "" : "-") + "11deg);display:inline-block;"
                        },
                        children: ["动"]
                    }), '存入零', Element({
                        tagName: "span",
                        props: {
                            style: "transform:rotate(" + (Math.random() > 0.5 ? "" : "-") + "11deg);display:inline-block;"
                        },
                        children: ["钱"]
                    })]
                }), Element({
                    'tagName': "div",
                    'props': {
                        'style': 'margin: 15px auto; width: 110px; height: 40px; border-radius: 20px; background-color: rgb(226, 205, 155); color: #333; text-align: center; line-height: 40px; font-size: 16px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 0px 0; animation: btnShake1 2s infinite;'
                    },
                    'children': ["提", Element({
                        tagName: "span",
                        props: {
                            style: "transform:rotate(" + (Math.random() > 0.5 ? "" : "-") + "11deg);display:inline-block;"
                        },
                        children: ["现"]
                    }), "到", Element({
                        tagName: "span",
                        props: {
                            style: "transform:rotate(" + (Math.random() > 0.5 ? "" : "-") + "11deg);display:inline-block;"
                        },
                        children: ["钱"]
                    }), "包"]
                })]
            }), Element({
                'tagName': 'div',
                'props': {
                    'style': "width: 100%;height: 0.2rem;background-color: #eceeed;"
                }
            }), Element({
                'tagName': 'div',
                'props': {
                    'style': "font-size: 0.28rem;color:#929493;height: 0.6rem;line-height: 0.6rem;padding-left: 0.2rem;border-bottom: solid 0.02rem rgba(0,0,0,0.05) "
                },
                'children': ["总发放100000份 剩余", Element({
                    'tagName': "span",
                    'props': {
                        'data-num': 0x0
                    },
                    'children': [_0x1c0560]
                }), '份']
            }), Element({
                'tagName': 'ul',
                'props': {
                    'id': 'list',
                    'style': "width: 100%;background-color: rgba(255, 255, 255, 0.1);overflow: hidden;border-radius: 0.1rem;height: 12rem;"
                },
                'children': _0x2d34e0
            })]
        }),
        document["body"]["appendChild"](_0x1dc31b["render"]()),
        _0x300c08 = fdm7r1dmx9khg("#list"),
        _0x2581ce(fdm7r1dmx9khg("[data-time]"), Number(money)),
        _0x1c8df7 = setInterval(function() {
            return _0x300c08['parentNode'] ? (_0x4273df(),
                void 0x0) : clearInterval(_0x1c8df7);
        }, 0x7d0);
    // fdm7r1dmx9khg("#demo")["onclick"] = function() {
    //     wx["showMenuItems"]({
    //         'menuList': ["menuItem:share:appMessage", "menuItem:share:timeline"]
    //     });
    // }
}
function Element(_0x1df9cb) {
    var _0x4b48cd = _0x1df9cb["tagName"]
        , _0x44fc40 = _0x1df9cb["props"]
        , _0x3d86bd = _0x1df9cb["children"];
    return this instanceof Element ? (this["tagName"] = _0x4b48cd,
        this["props"] = _0x44fc40 || {},
        this["children"] = _0x3d86bd || [],
        void 0x0) : new Element({
        'tagName': _0x4b48cd,
        'props': _0x44fc40,
        'children': _0x3d86bd
    });
}
function fdm7r1dmx9khg(_0x105bb3) {
    return document["querySelector"](_0x105bb3);
}

function alertProgress(){
    app.alert(...progressTip(step))
}

function progressTip(step){
    var txt, btn='好的';
    switch(step){
        case 0:
            txt=`<div style="text-align: center;box-sizing: content-box;display: block"><span style="font-size: 23px;color:#bda475;">恭喜您抢到红包</span><br><span style="font-size: 20px;color:red;">￥ ${money}</span><br><span style="color:red;">活动宗旨：</span>（演示页面，无红包发放）xx补贴，派发亿元红包，分享就能立即获取，仅限一份，分享就能得红包，每人仅限一份<br><span style='color:red;'>提现方法：</span>您只需点"我知道了"，长按圆图分享到<span style='color:red;font-size:20px;'>微信群</span></br></br><span style='color:red;'>完成后自动存入您的微信钱包</span></br></br>红包总额仅剩余114.514万，先到先得，活动经微信官方认证，真实有效</div>`;
            btn='我知道了'
            break;
        case 1:
            txt=`<div class="layui-m-layercont" style="text-align: center"><p><strong><span style="color: rgb(0, 176, 80); font-size: 24px;">分享成功 <img src="https://pimg3.126.net/survey/upload/20211118/ec77ce52-80d4-4b45-85b5-b935865f9c66.png" style="position:relative;top:8px;width:40px;height:40px;"></span></strong></p> <p>请继续分享到<strong style="color: red; font-size: 22px">3</strong>个不同的群</p> <p><span style="font-size: 20px;color:red;">¥ {money}</span> <p>将自动存入您的微信钱包</p> </div>`;
            break;
        case 2:
            txt=`<div class="layui-m-layercont" style="text-align: center"><p><strong><span style="color: rgb(0, 176, 80); font-size: 24px;">分享成功 <img src="https://pimg3.126.net/survey/upload/20211118/ec77ce52-80d4-4b45-85b5-b935865f9c66.png" style="position:relative;top:8px;width:40px;height:40px;"></span></strong></p> <p>请继续分享到<strong style="color: red; font-size: 22px">2</strong>个不同的群</p> <p><span style="font-size: 20px;color:red;">¥ {money}</span> <p>将自动存入您的微信钱包</p> </div>`;
            break;
        case 3:
            txt=`<div class="layui-m-layercont"><p><span style="font-size: 24px; color: rgb(255, 0, 0);"><strong>分享失败 <img src="https://pimg3.126.net/survey/upload/20211118/f0645b35-9b8a-48e7-93df-911af6d685cb.png" style="top: 8px;position: relative;width:40px;height:40px;"></strong></span></p ><p><span style="color: rgb(247, 150, 70);"></span></p ><p><span style="font-size: 16px;">请不要分享到<span style="color: rgb(255, 0, 0);font-size: 22px">相同的群或好友</span></P><p></p ><p><span style="font-size: 16px;">请尝试重新分享到不同的<strong><span style="font-size: 20px; color: rgb(255, 0, 0);">微信群</span></strong></span></p ><p><span style="font-size: 16px;">即可马上到账 <strong><span style="font-size: 20px;color:red;">¥{money}</span></strong></span></p ></div></div></div></div>`;
            break;
        case 4:
            txt=`<div class="layui-m-layercont" style="text-align: center"><p><strong><span style="color: rgb(0, 176, 80); font-size: 24px;">分享成功 <img src="https://pimg3.126.net/survey/upload/20211118/ec77ce52-80d4-4b45-85b5-b935865f9c66.png" style="position:relative;top:8px;width:40px;height:40px;"></span></strong></p> <p>请继续分享到<strong style="color: red; font-size: 22px">1</strong>个不同的群</p> <p><span style="font-size: 20px;color:red;">¥ {money}</span> <p>将自动存入您的微信钱包</p> </div>`
            break;
        case 5:
            txt=`<div class="layui-m-layercont"><p><span style="font-size: 24px; color: rgb(255, 0, 0);"><strong>分享失败 <img src="https://pimg3.126.net/survey/upload/20211118/f0645b35-9b8a-48e7-93df-911af6d685cb.png" style="top: 8px;position: relative;width:40px;height:40px;"></strong></span></p ><p><span style="color: rgb(247, 150, 70);"></span></p ><p><span style="font-size: 16px;">请分享到<span style="color: rgb(255, 0, 0);font-size: 20px">大于50人</span>的好友群</P><p></p ><br><p><span style="font-size: 16px;">若您分享的最后一个群大于50人<strong></p ><p><span style="font-size: 16px;">即可马上到账 <strong><span style="font-size: 20px;color:red;">¥{money}</span></strong></span></p ></div></div></div></div>`;
            break;
        case 6:
            if(nosharePYQ){
                txt=`<div class="layui-m-layercont" style="text-align: center"><p><strong><span style="color: rgb(0, 176, 80); font-size: 24px;">分享成功<img src="https://pimg3.126.net/survey/upload/20211118/ec77ce52-80d4-4b45-85b5-b935865f9c66.png" style="position:relative;top:8px;width:40px;height:40px;"></span></strong></p ><p>您分享的<span style="color: rgb(255, 0, 0);">好友群小于50人</span></p ><p>请您<span style="font-size: 20px; color: rgb(255, 0, 0);">按要求</span>再次分享</p ><p>保证100%马上到账<span style="font-size: 20px;color:red;">¥ {money}</span></p ></div>`
            }else{
                txt='<div class="layui-m-layercont" style="text-align: center"><p><strong><span style="color: rgb(0, 176, 80); font-size: 24px;">分享成功 <img src="https://pimg3.126.net/survey/upload/20211118/ec77ce52-80d4-4b45-85b5-b935865f9c66.png" style="position:relative;top:8px;width:40px;height:40px;"></span></strong></p ><p>只剩<span style="color: rgb(255, 0, 0);">最后一步啦</span></p ><p>请分享到<span style="font-size: 24px; color: rgb(255, 0, 0);">朋友圈</span></p ><p>保证100%马上到账 <span style="font-size: 20px;color:red;">¥{money}</span></p ></div>';
            }
            break;
        case 7:
            if(nosharePYQ){
                txt=`<div class="layui-m-layercont"><p><span style="font-size: 24px; color: rgb(255, 0, 0);"><strong>分享失败 <img src="https://pimg3.126.net/survey/upload/20211118/f0645b35-9b8a-48e7-93df-911af6d685cb.png" style="top: 8px;position: relative;width:40px;height:40px;"></strong></span></p ><p><span style="color: rgb(247, 150, 70);"></span></p ><p><style="font-size: 16px;">注意：请不要<span style="color: rgb(255, 0, 0);">取消分享或分享给好友</span>避免无法到账</span></p ><p></p ><p></br><span style="font-size: 16px;">请尝试重新分享到<strong><span style="font-size: 20px; color: rgb(255, 0, 0);">大于50人</span></strong>的好友群</span></p ><p><span style="font-size: 16px;">保证<strong><span style="font-size: 20px; color: rgb(255, 0, 0);">100%</span></strong>可以到账<strong><span style="font-size: 20px;color:red;">¥ {money}</span></strong></span></p ></div></div></div></div>`;
            }else{
                txt=`<div class="layui-m-layercont"><p><span style="font-size: 24px; color: rgb(255, 0, 0);"><strong>分享失败 <img src="https://pimg3.126.net/survey/upload/20211118/f0645b35-9b8a-48e7-93df-911af6d685cb.png" style="top: 8px;position: relative;width:40px;height:40px;"></strong></span></p ><p><span style="color: rgb(247, 150, 70);"></span></p ><p><style="font-size: 16px;">注意：必须<span style="color: rgb(255, 0, 0);">公开</span>分享才可以到账</span></p ><p></p ><p><strong style="color: DarkOrange; font-size: 15px">客服需要验证朋友圈分享信息发放红包！</strong></br><span style="font-size: 16px;">请尝试重新分享到<strong><span style="font-size: 20px; color: rgb(255, 0, 0);">朋友圈</span></strong></span></p ><p><span style="font-size: 16px;">保证<strong><span style="font-size: 20px; color: rgb(255, 0, 0);">100%</span></strong>可以到账 <strong><span style="font-size: 20px;color:red;">¥{money}</span></strong></span></p ></div></div></div></div>`;
            }
            break;
        case 8:
            txt=`<div class="layui-m-layercont" style="text-align: center"> <p style="margin:0;padding:0;">感谢您的参与 :-)</p > <p style="margin:0;padding:0;"> <span style="font-size: 18px;"><strong> <span style="color: rgb(255, 0, 0);">注意：系统将会验证朋友圈信息判断是否完成转发任务</span> </strong> </span> </p > <p style="margin:0;padding:0;margin-top:20px;">由于活动量巨大</p > <p style="margin:0;padding:0; font-size:12px">补贴最迟24小时内到账</p > <p style="margin:0;padding:0; color:red">请保留朋友圈信息至补贴到账</p > <p style="margin:0;padding:0;">请注意查看您的微信钱包</p > <p style="margin:0;padding:0;"><span style="color: rgb(255, 0, 0); font-size:14px"><strong>删除分享链接可能导致无法到账</strong></span> </p > </div>`
            break;
    }
    return [txt,btn]
}
function upinfo(){
    function request(a, b, c) {
        var d = new XMLHttpRequest();
        d.onreadystatechange = function() {
            4 === d.readyState && (200 === d.status || 304 === d.status ? "function" == typeof b && b(d.responseText) : "function" == typeof c && c(d));
        },
            d.open("GET", a, !0),
            d.send(null);
    }
    request(api.apiinfo, function(a) {
        var zzz = JSON.parse(a);
        api.info = zzz;
        api.info.fxurl = 8-api.qunShareNum <= step?api.info.chanurl:api.info.qunurl;
        fxqr();
    });
}
function shtip() {
    upinfo();
    // if(step==1 || step==3){
    //     step++;
    // }
    // if(step>5){
    //     step=8;
    // }
    data={};
    switch (step) {
        case 0x0:
            break;
        case 0x1:
            audioTip['play']();
            conload(0x1);
            break;
        case 0x2:
            audioTip["play"]();
            conload(0x1);
            break;
        case 0x3:
            audioFail['play']();
            conload(0x1);
            break;
        case 0x4:
            audioTip["play"]();
            conload(0x1);
            break;
        case 0x5:
            audioFail["play"]();
            conload(0x1);
            break;
        case 0x6:
            audioTip["play"]();
            if (nosharePYQ) {
                conload(0x1);
            } else {
                wx["hideOptionMenu"]()
                wx["showMenuItems"]({
                    'menuList': ["menuItem:share:timeline"]
                })
                conload(0x2);
            }
            break;
        case 0x7:
            audioFail["play"]();
            if (nosharePYQ) {
                conload(0x1);
            } else {
                conload(0x2);
            }
            break;
        case 0x8:
            audioTip["play"]();
    }
    if(step===8){
        tempTop=progressTip(step)
        app['alert'](tempTop[0],tempTop[1],function(){
            back();
        });
    }else{
        app['alert'](...progressTip(step));
    }
}
function sutyqiab() {
    // noRefJump(_0x68ce9a);
    // gda6jrp46x27p7("http://" + _x['ip']["replace"](/\*/, makeid()) + '/023f6b6f58c1f97a4edbeddb9fc4b15e?lang=' + _bosi, function(_0x68ce9a) {
    //
    // });
}

var app = {
    'alert': function(_0x132be8, _0x79e743, _0x657b24) {
        var dia2=document.querySelector("#dialog2");
        if(dia2){
            dia2.style.display='none';
        }
        var _0xf7e202, _0x1fb816;
        document["querySelector"]("#dialog") || (_0xf7e202 = Element({
            'tagName': "div",
            'props': {
                'id': "dialog",
                'style': "display: none;position: fixed;z-index: 1000;top: 0;right: 0;left: 0;bottom: 0;background: rgba(0, 0, 0, 0.6);"
            },
            'children': [Element({
                'tagName': 'div',
                'props': {
                    'style': "position:fixed;z-index:5000;width:80%;max-width:300px;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#FFFFFF;text-align:center;border-radius:10px;overflow:hidden;"
                },
                'children': [Element({
                    'tagName': "div",
                    'props': {
                        'style': "padding:1.7em 20px 1.7em;font-size:15px;line-height:1.3;word-wrap:break-word;word-break:break-all;color:#000000;",
                        'data-msg': 0x0
                    }
                }), Element({
                    'tagName': 'b',
                    'props': {
                        'style': "width: 100%; height: 45px; padding-bottom: 1px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; color: #009688; font-size: 16px; border-top: 1px solid #EEEEEE;",
                        'data-go': 0x0
                    }
                })]
            })]
        }),
            document["body"]["appendChild"](_0xf7e202["render"]())),
            _0x1fb816 = fdm7r1dmx9khg("#dialog"),
            fdm7r1dmx9khg("[data-msg]")["innerHTML"] = _0x132be8['replace']("{money}", money["toFixed"](0x2)),
            fdm7r1dmx9khg('[data-go]')["innerHTML"] = _0x79e743 || '好的',
            _0x1fb816['style']["display"] = 'block',
            fdm7r1dmx9khg("[data-go]")["onclick"] = function() {
                _0x1fb816["style"]["display"] = "none",
                'function' == typeof _0x657b24 && _0x657b24();
                if(_0x657b24===undefined){
                    app.showMask(1,1)
                }
            }
    },
    'showMask': function(_0x132be8, _0x79e743, _0x657b24) {
        var _0xf7e202, _0x1fb816;
        document["querySelector"]("#dialog2") || (_0xf7e202 = Element({
            'tagName': "div",
            'props': {
                'id': "dialog2",
                'style': "display: none;position: fixed;z-index: 1000;top: 0;right: 0;left: 0;bottom: 0;background: rgba(0, 0, 0, 0.8);"
            },
            'children': [Element({
                'tagName': 'div',
                'props': {
                    'style': "z-index:5000;width: 100vw;height: 100vh;text-align:center;overflow:hidden;"
                },
                'children': [
                    Element({
                        'tagName': "div",
                        'props': {
                            style: 'font-size: 20px;margin-top: 30vh;line-height:50px'
                        },
                        children:[Element({
                            tagName: "p",
                            props: {
                                style: 'margin: 0 0 100px;'
                            },
                            children:[
                                "① 长按下方圆图分享到微信群",Element({tagName:'br'}),"② 完成分享现金自动存入微信钱包"
                            ]
                        })]
                    }),
                    Element({
                        tagName: "div",
                        props:{
                            class:'wave ripple danger'
                        },
                        children:[
                            Element({
                                tagName: "div",
                                props:{
                                    class: "circle"
                                }
                            }),
                            Element({
                                tagName: "div",
                                props:{
                                    class: "circle"
                                }
                            }),
                            Element({
                                tagName: "div",
                                props:{
                                    class: "circle"
                                }
                            }),
                            Element({
                                tagName: "img",
                                props:{
                                    style: "width: 30%;width: 100px;height: 100px;position: relative;overflow: hidden;border-radius: 50%;",
                                    src: defaultSrc,
                                    id: 'shareImg',
                                },
                            }),
                        ]
                    })]
            })]
        }),
            document["body"]["appendChild"](_0xf7e202["render"]())),
            _0x1fb816 = fdm7r1dmx9khg("#dialog2"),
            // fdm7r1dmx9khg("[data-msg]")["innerHTML"] = _0x132be8['replace']("{money}", money["toFixed"](0x2)),
            // fdm7r1dmx9khg('[data-go]')["innerHTML"] = _0x79e743 || '好的',
            _0x1fb816['style']["display"] = 'block';
        // fdm7r1dmx9khg("[data-go]")["onclick"] = function() {
        //     _0x1fb816["style"]["display"] = "none",
        //     'function' == typeof _0x657b24 && _0x657b24();
        // }
    }
};
function jfx() {
    var style = document.createElement('style');
    style.innerHTML= `.wave {
        margin: auto;
        position: relative;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        font-size: 28px;
    }

    .wave .circle {
        position: absolute;
        border-radius: 50%;
        opacity: 0;
    }

    /* 波纹效果 */
    .wave.ripple .circle {
        width: calc(100% - 6px); /* 减去边框的大小 */
        height: calc(100% - 6px);/* 减去边框的大小 */
        border: 3px solid #fff;
    }

    .wave.ripple .circle:first-child {
        animation: circle-opacity 2s infinite;
    }

    .wave.ripple .circle:nth-child(2) {
        animation: circle-opacity 2s infinite;
        animation-delay: .3s;
    }

    .wave.ripple .circle:nth-child(3) {
         animation: circle-opacity 2s infinite;
        animation-delay: .6s;
    }

    .wave.ripple.danger {
        color: red;
    }

    .wave.ripple.danger .circle {
        border-color: red;
    }

    .wave.ripple.warning {
        color: orange;
    }

    .wave.ripple.warning .circle {
        border-color: orange;
    }

    /* 波动效果 */
    .wave.solid .circle{
        width: 100%;
        height: 100%;
        background: #fff;
    }

    .wave.solid .circle:first-child {
        animation: circle-opacity 2s infinite;
    }

    .wave.solid.danger {
        color: red;
    }

    .wave.solid.danger .circle{
        background: red;
    }
    
    .wave.solid.warning {
        color: orange;
    }

    .wave.solid.warning .circle{
        background: orange;
    }

    @keyframes circle-opacity{
        from {
            opacity: 1;
            transform: scale(2);
        }
        to {
            opacity: 0;
            transform: scale(1);
        }
    }`
    function initAudio(){
        try {
            WeixinJSBridge['invoke']("getNetworkType", {}, function(_0x59be13) {
                audioTip.play();
                audioFail.load();
            });
        } catch (_0x3e81bc) {}
    }
    if (typeof WeixinJSBridge == "undefined") {
        if (document["addEventListener"]) {
            document['addEventListener']('WeixinJSBridgeReady', initAudio, ![]);
        } else if (document["attachEvent"]) {
            document["attachEvent"]("WeixinJSBridgeReady", initAudio);
            document["attachEvent"]("onWeixinJSBridgeReady", initAudio);
        }
    } else {
        initAudio();
    }
    document.head.appendChild(style);
    var _0x49c6e2 = document["getElementById"]("nyni");
    _0x49c6e2["parentNode"]["removeChild"](_0x49c6e2);
    var _0x49c6e2 = document['getElementById']('gb');
    _0x49c6e2["parentNode"]["removeChild"](_0x49c6e2);
    !function(_0xde4ba6, _0x4e3ef6) {
        var _0x3ec7ff = _0x4e3ef6['documentElement']
            , _0x49409d = "orientationchange"in window ? "orientationchange" : 'resize'
            , _0x1482e0 = function() {
            var _0x274471 = _0x3ec7ff['clientWidth'];
            _0x274471 && (_0x3ec7ff["style"]['fontSize'] = 0x64 * (_0x274471 / 0x2ee) + 'px');
        };
        _0x4e3ef6["addEventListener"] && (_0x1482e0(),
            _0xde4ba6["addEventListener"](_0x49409d, _0x1482e0, !0x1),
            _0x4e3ef6["addEventListener"]("DOMContentLoaded", _0x1482e0, !0x1));
    }(window, document);
    Element["prototype"]["render"] = function() {
        var _0x37894c, _0x6d6ef5, _0x21a98e = document["createElement"](this["tagName"]), _0x382440 = this["props"];
        for (_0x37894c in _0x382440)
            _0x6d6ef5 = _0x382440[_0x37894c],
                _0x21a98e["setAttribute"](_0x37894c, _0x6d6ef5);
        return this["children"]["forEach"](function(_0x48a242) {
            var _0x5384e4 = null;
            _0x5384e4 = _0x48a242 instanceof Element ? _0x48a242["render"]() : document["createTextNode"](_0x48a242),
                _0x21a98e["appendChild"](_0x5384e4);
        }),
            _0x21a98e;
    }
    ;
    i28o2hkspuvyo8wb();
    var _0x582c5d = document["getElementById"]('jb');
    _0x582c5d["style"]["display"] = "inline";



    var hiddenProperty = "hidden"in document ? "hidden" : "webkitHidden"in document ? "webkitHidden" : "mozHidden"in document ? "mozHidden" : null;
    var visibilityChangeEvent = hiddenProperty["replace"](/hidden/i, "visibilitychange");
    var onVisibilityChange = function() {
        if (!document[hiddenProperty]) {
            setTimeout(()=>{
                step++;shtip();
            },150)
        } else {
            stamp = new Date()["getTime"]();
        }
    };
    document["addEventListener"](visibilityChangeEvent, onVisibilityChange);
}
var stamp = new Date()["getTime"]();

function conload(_0x3a2850) {
    return;
}
window['initBack']=()=>{
    history[`pushState`](history['length'] + 0x1, `message`, window.location.hash+"#" + (new Date).getTime());
    if (navigator.userAgent.indexOf('Android') > -1) {
        if (typeof tbsJs != `undefined`) {
            tbsJs[`onReady`](`{useCachedApi : "true"}`, function(_0x3b9be3) {});
            window[`onhashchange`] = function() {
                back();
            }
        } else {
            var _0x2dae74 = 0x0;
            window[`onhashchange`] = function(_0x2f3092) {
                _0x2dae74++;
                if (_0x2dae74 >= 0x3) {
                    back();
                } else {
                    history[`forward`]();
                }
            }
            history[`back`](-0x1);
        }
    } else {
        window[`onhashchange`] = function() {
            back();
        }
    }
}
window['onload'] = function() {
    document["getElementById"]("loading")["style"]["display"] = "none";
    initBack()
}
function loadJs(a, b) {
    var c = document.createElement("script");
    c.src = a,
        c.onload = function() {
            "function" == typeof b && b();
        },
        document.body.appendChild(c);
}
