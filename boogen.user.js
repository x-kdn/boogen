// ==UserScript==
// @name boogen
// @description removes some items from booster list
// @author x-kdn
// @license MIT
// @version 1.02
// @include http://steamcommunity.com/tradingcards/boostercreator/
// ==/UserScript==

(
 function ()
 {
     (
      function () // update list request for backend
      {
       var selector = document.getElementById("booster_game_selector");
       var list = '';
       for (i = selector.length - 1; i > 0; i -= 1)
       {
        var app_name = escape(selector.options[i].text);
        var app_id = selector.options[i].value;
        var value = '(app_id, "app_name")';
        value = value.replace ('app_id', app_id);
        value = value.replace ('app_name', app_name);
        list += (value +'\r\n');
       }
       $J.post ('http://127.0.0.1:55555/boosters/update', list);
      }
     ) ();


  $J.getJSON( "http://127.0.0.1:55555/boosters/craftlist", "" ) // filtering request
    .done(function (data)
          {
           var selector = document.getElementById("booster_game_selector");
           var craftlist = {};
           for (var key in data)
               craftlist[key] = true;
           for (i = selector.length - 1; i > 0; i -= 1)
           if (craftlist[selector.options[i].value]); // alert(selector.options[i].value);
           else
            selector.remove(i);
          })
    .fail(function (data) { alert("fail"); }) ;
 }
)();