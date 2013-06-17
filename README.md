CountTrakula
============

A package to track all internal link clicks, outbound link clicks and form posts.
Jquery 1.7+ is required.
Google Analytics is required.

To add CountTrakula (and default options) to any page, just include the CountTrakula js file after 
your Jquery (1.7+) include.

Google Analytics must be on the page as well.

The only option (as of 1.3.1) is the ability to track mobile page views (or hash change).

To enable options add the following BEFORE the CountTrakula js file include:
var cTrakulaCongif={'trackmobile':true}; (must include scriptags)

Once the sripts are included your Google Anlaytics report should start collecting new "Events" or "Page Views" 
(If the "trackmobile" option is enabled).

Version 1.3.2
Minor bug fix to tracking of form POST

Fix an error showing up in firefox:
Error: useless setTimeout call (missing quotes around argument?)

---
