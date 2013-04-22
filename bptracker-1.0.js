/* 
TRACK ALL OUTBOUND URLS AND FORM SUBMISSIONS
<script src="http://berlinprod.com/lab/bptracker/bptracker-1.0.js" type="text/javascript"></script>
<script src="http://berlinprod.com/lab/bptracker/bptracker-1.0.min.js" type="text/javascript"></script>
ADD ONCLICK TO THE DOM
$('a[target="_blank"]').each(function(){ $(this).attr('onclick','_gaq.push([\'_trackEvent\', \'External Link\', $(this).attr(\'href\'), document.title]); setTimeout(\'window.open("'+$(this).attr('href')+'")\', 100); return false;'); });
TRACK ONCLICK SPECIFICALLY FOR FORM SUBMITS
$('form a[href*="submit"],form a[onclick*="submit"],form input[type=submit],form input[type=image]').mousedown(function() { _gaq.push(['_trackEvent', 'Form Submit', 'Form Name: '+$(this).parents('form').attr('name')+', Form ID: '+$(this).parents('form').attr('id')+', Form Method: '+$(this).parents('form').attr('method')+', Form Action: '+$(this).parents('form').attr('action'), document.title]); }); 

CHANGE CLICK TO "ON" HNADLER
$(document).on('mousedown','a[target="_blank"], area[target="_blank"]',function(){ _gaq.push(['_trackEvent', 'External Link', $(this).attr('href'), document.title]); });
*/
$(function() {
$('a[target="_blank"], area[target="_blank"]').mousedown(function(){ _gaq.push(['_trackEvent', 'External Link', $(this).attr('href'), document.title]); });
$('a[target!="_blank"], area[target="!_blank"]').mousedown(function(){ _gaq.push(['_trackEvent', 'Internal Link', $(this).attr('href'), document.title]); });
$("form").submit(function(e) {var self = this;e.preventDefault();_gaq.push(['_trackEvent', 'Form Submit', 'Form Name: '+$(this).attr('name')+', Form ID: '+$(this).attr('id')+', Form Method: '+$(this).attr('method')+', Form Action: '+$(this).attr('action'), document.title]);setTimeout(self.submit(), 250);return false;});
});


//