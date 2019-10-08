<?php 
// TOP HEADERS
    include 'lib/if-modified-since.php';
    include 'lib/php-html-css-js-minifier.php';
    include 'lib/compression.php';
    include 'lib/cors.php';
echo '<!DOCTYPE html><html lang="en"
    prefix="og: http://ogp.me/ns#" 
    xmlns:fb="http://ogp.me/ns/fb#">
    <head>';
include 'assets/punch-headers.html';?>
<!-- PAGE DATA -->
    <title>Privacy Policy - Punch! </title>
    <meta name="title" content="Privacy Policy - Punch!" />
    <meta name="description" content="Privacy Policy! High performance web design on all devices! Creating a Punch for your visitors! Desktop, tablet, mobile, IOS, Android." /> 
    <link rel="canonical" href="https://punchunique.com/privacy-policy"> 


<!-- FACEBOOK -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Punch Design" />
    <meta property="fb:app_id" content="1442543079187557" />
    <meta property="og:image:width" content="1291" />
    <meta property="og:image:height" content="676" />
    <meta property="og:title" content="Cr&eacute;ation/conception site web / Animation / M&eacute;dias sociaux - Punch!" />
    <meta property="og:description" content="Cr&eacute;er un punch pour vos visiteurs! Conception/cr&eacute;ation de site internet avec animation sur tous les &eacute;crans. Mobile, IOS, Android, optimisation." />
    <meta property="og:locale:alternate" content="fr_CA" />
    <meta property="og:url" content="https://punchunique.com" />
    <meta property="og:image" content="https://punchunique.com/img/conception-site-partage.png" />
    <meta property="og:image:alt" content="Partager Punch Design sur Facebook" />


<!-- TWITTER CARDS -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="Punch Design" />
    <meta name="twitter:title" content="Création/conception site web / Animation / Médias sociaux - Punch!" />
    <meta name="twitter:site" content="@placeunique" />
    <meta name="twitter:creator" content="@placeunique" />
    <meta name="twitter:image" content="https://punchunique.com/img/conception-site-partage.png" />
    <meta name="twitter:description" content="Créer un punch pour vos visiteurs! Conception/création de site internet avec animation sur tous les écrans. Mobile, IOS, Android, optimisation." />
    <meta name="twitter:url" content="https://punchunique.com" />   


    <?php 
echo "<style>";
    // echo minify_css(file_get_contents('lib/normalize.css'));
    echo minify_css(file_get_contents('assets/punch-fixed.css'));
    echo minify_css(file_get_contents('assets/general-font.css'));
    echo minify_css(file_get_contents('assets/general.css'));
    echo minify_css(file_get_contents('assets/punch-general-header.css'));
    echo minify_css(file_get_contents('assets/punch-privacypage.css'));
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
include 'assets/punch-fixed-en.html';
include 'assets/punch-general-header-en.html';
include 'assets/punch-privacypage-en.html';   
include 'assets/punch-general-footer-en.html';
    ?>

<!-- SCRIPTS -->    
    <!-- FOR GSAP PRODUCTIIN after plugins -->
    <!-- '/lib/jquery-ui.js', -->
    <script>function downloadJSAtOnload() { [ '/lib/TweenMax.min.js','/lib/PLUGINS.min.js',
'/assets/punch-privacypage-BTF.php'
    ].forEach(function(src) {var SCRIPTS = document.createElement('script');SCRIPTS.src = src;SCRIPTS.type = "text/javascript";SCRIPTS.async = false;document.body.appendChild(SCRIPTS);});};if (window.addEventListener)window.addEventListener("load", downloadJSAtOnload, false);else if (window.attachEvent)window.attachEvent("onload", downloadJSAtOnload);else window.onload = downloadJSAtOnload;</script></body></html><?php ob_end_flush();
    ?>
