<?php 
// TOP HEADERS
    include 'lib/if-modified-since.php';
    include 'lib/php-html-css-js-minifier.php';
    include 'lib/compression.php';
    include 'lib/cors.php';
echo '<!DOCTYPE html><html lang="fr"
    prefix="og: http://ogp.me/ns#" 
    xmlns:fb="http://ogp.me/ns/fb#">
    <head>';
include 'assets/punch-headers.html';?>
<!-- PAGE DATA -->
    <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW"> 
    <title>Portfolio Punch</title>
    <meta name="title" content="Portfolio Punch">
    <!-- <link rel="canonical" href="https://punchunique.com"> -->  
 
    <?php 
echo "<style>";
    // echo minify_css(file_get_contents('lib/normalize.css'));
    echo minify_css(file_get_contents('assets/punch-fixed.css'));
    echo minify_css(file_get_contents('assets/general-font.css'));
    echo minify_css(file_get_contents('assets/general.css'));
    echo minify_css(file_get_contents('assets/punch-general-header.css'));
    echo minify_css(file_get_contents('assets/punch-portfolio.css'));
    echo minify_css(file_get_contents('assets/punch-form-no-upload.css'));
    echo minify_css(file_get_contents('assets/punch-general-footer.css'));
    echo "</style>"; 
echo "<script>";
    echo minify_js(file_get_contents('lib/ofi.js'));
    echo minify_js(file_get_contents('assets/general-ATF.js'));
    echo "</script>";
  ?>
  </head><body>
  <?php 
// HTML  
include 'assets/punch-fixed-fr.html';
include 'assets/punch-general-header-fr.html';
include 'assets/punch-portfolio-fr.html';   
include 'assets/punch-general-footer-fr.html';
  ?>
<!-- SCRIPTS -->    
    <!-- FOR GSAP PRODUCTIIN after plugins -->
    <!-- '/lib/jquery-ui.js', -->
    <script>function downloadJSAtOnload() { [ '/lib/TweenMax.min.js','/lib/PLUGINS.min.js',
'/assets/punch-portfolio-BTF.php'
    ].forEach(function(src) {var SCRIPTS = document.createElement('script');SCRIPTS.src = src;SCRIPTS.type = "text/javascript";SCRIPTS.async = false;document.body.appendChild(SCRIPTS);});};if (window.addEventListener)window.addEventListener("load", downloadJSAtOnload, false);else if (window.attachEvent)window.attachEvent("onload", downloadJSAtOnload);else window.onload = downloadJSAtOnload;</script></body></html><?php ob_end_flush();
    ?>

