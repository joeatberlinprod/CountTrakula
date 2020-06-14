/* 
COUNT TRAKULA 1.7
TRACK ALL OUTBOUND URLS AND FORM SUBMISSIONS
<script src="http://berlinprod.com/lab/bptracker/bptracker-1.0.js" type="text/javascript"></script>
<script src="http://berlinprod.com/lab/bptracker/bptracker-1.0.min.js" type="text/javascript"></script>
ADD ONCLICK TO THE DOM
$('a[target="_blank"]').each(function(){ $(this).attr('onclick','_gaq.push([\'_trackEvent\', \'External Link\', $(this).attr(\'href\'), document.title]); setTimeout(\'window.open("'+$(this).attr('href')+'")\', 100); return false;'); });
TRACK ONCLICK SPECIFICALLY FOR FORM SUBMITS
$('form a[href*="submit"],form a[onclick*="submit"],form input[type=submit],form input[type=image]').mousedown(function() { _gaq.push(['_trackEvent', 'Form Submit', 'Form Name: '+$(this).parents('form').attr('name')+', Form ID: '+$(this).parents('form').attr('id')+', Form Method: '+$(this).parents('form').attr('method')+', Form Action: '+$(this).parents('form').attr('action'), document.title]); }); 

CHANGE MOUSEDOWN TO USE STANDARD MOUSEDOWN HANDLER
$('a[target="_blank"], area[target="_blank"]').mousedown(function(){ _gaq.push(['_trackEvent', 'External Link', $(this).attr('href'), document.title]); });
$('a[target!="_blank"], area[target="!_blank"]').mousedown(function(){ _gaq.push(['_trackEvent', 'Internal Link', $(this).attr('href'), document.title]); });

CHANGE MOUSEDOWN TO USE "ON" HANDLER
$(document).on('mousedown','a[target="_blank"], area[target="_blank"]',function(){ _gaq.push(['_trackEvent', 'External Link', $(this).attr('href'), document.title]); });
$(document).on('mousedown','a[target!="_blank"], area[target="!_blank"]',function(){ _gaq.push(['_trackEvent', 'Internal Link', $(this).attr('href'), document.title]); });
*/

if (typeof _gaq==='undefined'){
$(function() {
$(document).on('mousedown','a[target="_blank"], area[target="_blank"]',function(){ ga("send","event","External Link", $(this).attr('href'), document.title,0,true); });
$(document).on('mousedown','a:not([target]), area:not([target]),a[target="_self"], area[target="_self"]',function(){ ga("send","event",'Internal Link', $(this).attr('href'), document.title,0,true); });
$(document).on('mousedown','a[onclick*="window.location"],a[onclick*="document.location"],img[onclick*="window.location"],img[onclick*="document.location"]',function(){ ga("send","event",'JS.Location', $(this).attr('onclick'), document.title,0,true); });
$(document).on('mousedown','select[onchange*="window.location"]',function(){ ga("send","event",'OnChange Window.Location', $(this).value+':'+$(this).attr('onchange'), document.title,0,true); });
$(document).on('mousedown','a[onclick*="window.open"]',function(){ ga("send","event",'Window.Open', $(this).attr('onclick'), document.title,0,true); });
$(document).on('mousedown','*[onclick*="submit"]',function(){ ga("send","event",'Element Submit', 'Elem: '+$(this).attr('id')+', Class: '+$(this).attr('class')+', onclick: '+$(this).attr('onclick'), document.title,0,true); });
if (typeof cTrakulaCongif!=='undefined'){ 
if (cTrakulaCongif.trackmobile==true){  if ("onhashchange" in window) { // event supported?
    window.onhashchange = function () {
        _gaq.push(['_trackPageview',location.pathname + location.search  + location.hash]); 
    }
}
}
if (cTrakulaCongif.trackpost==true){
$("form").submit(function(e) {var self = this;e.preventDefault();_gaq.push(['_trackEvent', 'Form Submit', 'Form Name: '+$(this).attr('name')+', Form ID: '+$(this).attr('id')+', Form Method: '+$(this).attr('method')+', Form Action: '+$(this).attr('action'), document.title,0,true]);setTimeout(function() {self.submit()}, 250);return false;});
}
if (cTrakulaCongif.trackbuttons==true){
$(document).on('mousedown','button,.ui-dialog-titlebar a,input[type=submit],input[type=image],input[type=button]',function(){ _gaq.push(['_trackEvent', 'Button Click', 'Elem: '+$(this).text()+',Val: '+$(this).val()+', onclick: '+$(this).attr('onclick'), document.title,0,true]); });
}
} // END OF CONFIG BLOCK
});
}else {


$(function() {
$(document).on('mousedown','a[target="_blank"], area[target="_blank"]',function(){ _gaq.push(['_trackEvent', 'External Link', $(this).attr('href'), document.title,0,true]); });
$(document).on('mousedown','a:not([target]), area:not([target]),a[target="_self"], area[target="_self"]',function(){ _gaq.push(['_trackEvent', 'Internal Link', $(this).attr('href'), document.title,0,true]); });
$(document).on('mousedown','a[onclick*="window.location"],a[onclick*="document.location"],img[onclick*="window.location"],img[onclick*="document.location"]',function(){ _gaq.push(['_trackEvent', 'JS.Location', $(this).attr('onclick'), document.title,0,true]); });
$(document).on('mousedown','select[onchange*="window.location"]',function(){ _gaq.push(['_trackEvent', 'OnChange Window.Location', $(this).value+':'+$(this).attr('onchange'), document.title,0,true]); });
$(document).on('mousedown','a[onclick*="window.open"]',function(){ _gaq.push(['_trackEvent', 'Window.Open', $(this).attr('onclick'), document.title,0,true]); });
$(document).on('mousedown','*[onclick*="submit"]',function(){ _gaq.push(['_trackEvent', 'Element Submit', 'Elem: '+$(this).attr('id')+', Class: '+$(this).attr('class')+', onclick: '+$(this).attr('onclick'), document.title,0,true]); });
if (typeof cTrakulaCongif!=='undefined'){ 
if (cTrakulaCongif.trackmobile==true){  if ("onhashchange" in window) { // event supported?
    window.onhashchange = function () {
        _gaq.push(['_trackPageview',location.pathname + location.search  + location.hash]); 
    }
}
}
if (cTrakulaCongif.trackpost==true){
$("form").submit(function(e) {var self = this;e.preventDefault();_gaq.push(['_trackEvent', 'Form Submit', 'Form Name: '+$(this).attr('name')+', Form ID: '+$(this).attr('id')+', Form Method: '+$(this).attr('method')+', Form Action: '+$(this).attr('action'), document.title,0,true]);setTimeout(function() {self.submit()}, 250);return false;});
}
if (cTrakulaCongif.trackbuttons==true){
$(document).on('mousedown','button,.ui-dialog-titlebar a,input[type=submit],input[type=image],input[type=button]',function(){ _gaq.push(['_trackEvent', 'Button Click', 'Elem: '+$(this).text()+',Val: '+$(this).val()+', onclick: '+$(this).attr('onclick'), document.title,0,true]); });
}
} // END OF CONFIG BLOCK
});
}
