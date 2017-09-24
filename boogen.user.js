// ==UserScript==
// @name boogen
// @description removes some items from booster list
// @author x-kdn
// @license MIT
// @version 1.01
// @include http://steamcommunity.com/tradingcards/boostercreator/
// ==/UserScript==

(
 function ()
 {
  $.getJSON( "http://127.0.0.1:55555/boosters", "" )
    .done(function (data)
          {
           var selector = document.getElementById("booster_game_selector");
           for (i = selector.length - 1; i > 0; i -= 1)
            if (data[escape(selector.options[i].text)]); // alert(selector.options[i].text);
            else
             selector.remove(i);
          })
    .fail(function (data) { alert("fail"); }) ;
 }
)();