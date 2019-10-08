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
    <title>Confidentialité - Punch!</title>
    <meta name="title" content="Confidentialité - Punch!">
    <meta name="description" content="Confidentialité! Conception/création de site internet avec animation sur tous les écrans. Mobile, IOS, Android, optimisation.">
    <link rel="canonical" href="https://punchunique.com/confidentialite"> 

<!-- JSON-LD --TODO-- ON PRIVACY -->
<!-- FACEBOOK -->

    <!-- DYNAMIC FB SHARE BUT -->
        <?php
        // $actual_link = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        // echo $actual_link;
        ?>

        <!-- <br> -->

        <?php
        // echo '<iframe src="https://www.facebook.com/plugins/share_button.php?href='.$actual_link.'&layout=button_count&size=large&mobile_iframe=true&width=83&height=28&appId" width="83" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>';
        ?>
    <!--  -->
    <!-- <meta property="fb:profile_id" content="NUMEBRShere" /> -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Punch Design">
    <meta property="fb:app_id" content="1442543079187557">
    <meta property="og:image:width" content="1291">
    <meta property="og:image:height" content="676">
    <meta property="og:title" content="Création site web Haute performance - Punch!">
    <meta property="og:description" content="Création site web Haute performance - Solutions pour optimisation de contenu SEO, adaptif sur toutes plate-formes et conception unique sur mesure.">
    <meta property="og:locale:alternate" content="fr_CA">
    <meta property="og:url" content="https://punchunique.com/confidentialite">
    <meta property="og:image" content="https://punchunique.com//img/creation-site-web-punchunique.jpg">
    <meta property="og:image:alt" content="Partager Punch Design sur Facebook">


<!-- TWITTER CARDS -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="Punch Design">
    <meta name="twitter:title" content="Création site web Haute performance - Confidentialite Punch!">
    <meta name="twitter:site" content="@placeunique">
    <meta name="twitter:creator" content="@placeunique">
    <meta name="twitter:image" content="http://punchunique.com//img/creation-site-web-punchunique.jpg">
    <meta name="twitter:description" content="Création site web Haute performance - Solutions pour optimisation de contenu SEO, adaptif sur toutes plate-formes et conception unique sur mesure.">
    <meta name="twitter:url" content="https://punchunique.com/confidentialite">   




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
include 'assets/punch-fixed-fr.html';
include 'assets/punch-general-header-fr.html';
include 'assets/punch-privacypage-fr.html';   
include 'assets/punch-general-footer-fr.html';
    ?>
<!-- SCRIPTS -->    
    <!-- FOR GSAP PRODUCTIIN after plugins -->
    <!-- '/lib/jquery-ui.js', -->
    <script>function downloadJSAtOnload() { [ '/lib/TweenMax.min.js','/lib/PLUGINS.min.js',
'/assets/punch-privacypage-BTF.php'
    ].forEach(function(src) {var SCRIPTS = document.createElement('script');SCRIPTS.src = src;SCRIPTS.type = "text/javascript";SCRIPTS.async = false;document.body.appendChild(SCRIPTS);});};if (window.addEventListener)window.addEventListener("load", downloadJSAtOnload, false);else if (window.attachEvent)window.attachEvent("onload", downloadJSAtOnload);else window.onload = downloadJSAtOnload;</script></body></html><?php ob_end_flush();
    ?>