
<?php 
// **********************************
// TOOO DONOWWWW---------------------
// **********************************

    // robots.txt 
        // Disallow: FOLDER and FILES that dont need to be crawl erase all files not good for site google
        // Disallow: /test* = all files and folder with test
        // Or Noindex: /folder/files.html or <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW"> on page header

    // TRY FORM PWA TIMEOUT OR POST OFFFLINE =>>> FUCK IT DO WITH IO AND FALLBACK IMG DEFER ERROR in web.dev with BLUR EFFECT
    // TRY OTHER STARTEGY WITH FALLBACK AND TEST IF ERROR FETCHING AGAIN 

    // ----retest ON&OFF AUDIT & save app on ORDI & IOS & SAMSUNG ON ALL BROWSER
    // check using ajax form with service worker

    // PUSH AND SYNC TEST - API price BTC if time
    // ----retest ON&OFF AUDIT & save app on ORDI & IOS & SAMSUNG ON ALL BROWSER
    // remove console log warnming in SW
    // PROTECT HIDE html phjp js source code
    // ----  re-arange template (privacy, footer etc) index as MAIN page for NAME.index.php--
    // ----------TAKE OUT .PHP in MENU
    // ------------------------------------------
    // ----------FILTER NOTES--------------------
    // ------------------------------------------
    // ----------FIX BUG - YT EMBED 
    // ----------FIX BUG - 
    // ----------FIX BUG -  
    // ----  mondor TO  template -- ASK REVIEW--
    // ----  mtech TO  template -- ASK REVIEW--
    // ----  STUDIO MKO --
//

//

//

// TOP HEADERS

    // header("Content-Security-Policy: default-src 'self' data: gap: 'unsafe-eval' ws: ; script-src *; connect-src 'self'; img-src 'self' /img/; style-src 'self' 'unsafe-inline';");
    // header('Content-Type: text/html; charset=utf-8');
    // header("X-Frame-Options: sameorigin");
    // header("X-XSS-Protection: 1; mode=block");
    // header("X-Content-Type-Options: nosniff");
    // header("Strict-Transport-Security: max-age=31536000");

    // include 'lib/if-modified-since.php';
    include 'lib/php-html-css-js-minifier.php';
    // include 'lib/compression.php';
    // include 'lib/cors.php';

echo '<!DOCTYPE html><html lang="fr"
    prefix="og: http://ogp.me/ns#" 
    xmlns:fb="http://ogp.me/ns/fb#">
    <head>';
include 'assets/punch-headers.html';?>
<!-- <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW"> -->
<!-- PAGE DATA -->
    <title>Création site web Haute performance</title>
    <meta name="title" content="Site web Haute performance - Création et conception">
    <meta name="description" content="Site web haute performance, de Montréal à Ottawa. Solutions pour optimisation de contenu SEO, adaptatif, multiplateforme et création/conception unique sur mesure.">
    <meta name="keywords" content="Création web, conception site web, création sites internet, sites internet, design web, seo, search engine optimization, référencement web, web, site web, création conception">
    <link rel="canonical" href="https://punchunique.com/">
<!-- JSON-LD - INDEX LOCAL BIZ homepage-->
 
     <script type='application/ld+json'> 

        { 
            "@context": "https://schema.org",
            "@type": "ProfessionalService",

            "name": "Creation Punch!",
            "description": "Site web haute performance, de Montréal à Ottawa. Solutions pour optimisation de contenu SEO, adaptatif, multiplateforme et création/conception unique sur mesure.",
            "priceRange": "$",
            "telephone": "+1 (514) 708-0558",

            "url": "https://punchunique.com",
            "logo": "https://punchunique.com/img/signature-white1.png",
            "image": "https://punchunique.com//site-web-punchunique-homepage.jpg",
            "foundingDate": "2018",

            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Laval",
                "addressRegion": "QC",
                "postalCode": "H7X3R8",
                "addressCountry": "Canada"
            },

            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "admin@punchunique.com",
                "telephone": "+1 (514) 708-0558"
            },

            "openingHours": "Mo 09:00-21:00 Tu 09:00-21:00 We 09:00-21:00 Th 09:00-21:00 Fr 09:00-21:00 Sa 09:00-21:00 Su 09:00-12:00",

            "sameAs": [ 
                "https://www.facebook.com/WebPunch/",
                "https://twitter.com/punchunique",
                "https://pinterest.com/placeunique3/",
                "https://www.linkedin.com/in/webpunch/",
                "https://www.instagram.com/dominiumpunch/"
            ]

        }

    </script>




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
    <meta property="og:url" content="https://punchunique.com/">
    <meta property="og:image" content="https://punchunique.com/img/creation-site-web-punchunique.jpg">
    <meta property="og:image:alt" content="Partager Punch Design sur Facebook">

    

    

<!-- TWITTER CARDS -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="Punch Design">
    <meta name="twitter:title" content="Création site web Haute performance - Punch!">
    <meta name="twitter:site" content="@placeunique">
    <meta name="twitter:creator" content="@placeunique">
    <meta name="twitter:image" content="https://punchunique.com/img/creation-site-web-punchunique.jpg">
    <meta name="twitter:description" content="Création site web Haute performance - Solutions pour optimisation de contenu SEO, adaptif sur toutes plate-formes et conception unique sur mesure.">
    <meta name="twitter:url" content="https://punchunique.com">   

<!-- <meta http-equiv="Content-Security-Policy: default-src 'self' data: gap: 'unsafe-eval' ws: ; script-src none; connect-src 'self'; img-src 'self' /img/; style-src 'self' 'unsafe-inline';"> -->
    <?php 
echo "<style>";
    // TRY WITH RESET
    // echo minify_css(file_get_contents('lib/normalize.css'));
    echo minify_css(file_get_contents('assets/punch-fixed.css'));
    echo minify_css(file_get_contents('assets/general.css'));
    echo minify_css(file_get_contents('assets/punch-homepage.css'));
    echo minify_css(file_get_contents('assets/punch-form-no-upload.css'));
    echo minify_css(file_get_contents('assets/punch-general-footer.css'));

    //TEMP
    // echo minify_css(file_get_contents('assets/1a-CSS-FOR-PRODUCTION.css'));

    echo "</style>"; 
echo "<script>";
    echo minify_js(file_get_contents('lib/ofi.js'));
    echo minify_js(file_get_contents('assets/general-ATF.js'));
    echo "</script>";
    ?>

<!-- <noscript>
        <div>
        <img src="https://mc.yandex.ru/watch/55163470" style="position:absolute; left:-9999px;" alt="" />
        </div>
</noscript>     -->
<!-- body oncontextmenu="return false;" = disable right click -->
    </head><body>
<!-- FB SDK -->
    <!-- <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v4.0&appId=1442543079187557&autoLogAppEvents=1"></script> -->
    <?php

// HTML 
    include 'assets/punch-fixed-fr.html';
    include 'assets/punch-homepage-fr.html';
    include 'assets/punch-general-footer-fr.html';
    //TEMP
    // include 'assets/1a-FOR-PRODUCTION.html';


    ?>
<!-- <script src="/phpSW/sw-controller.php"></script> -->
<!-- SCRIPTS -->    
    <!-- FOR GSAP PRODUCTIIN after plugins -->
    <!-- '/lib/jquery-ui.js', -->
    <!-- '/assets/app.min.js', -->
    <!-- ,'/assets/app.js' -->  
<script>function downloadJSAtOnload() {['./lib/TweenMax.min.js','./lib/PLUGINS.min.js',
'./assets/punch-homepage-BTF.php'
    ].forEach(function(src) {var SCRIPTS = document.createElement('script');SCRIPTS.src = src;SCRIPTS.type = "text/javascript";SCRIPTS.async = false;document.body.appendChild(SCRIPTS);});};if (window.addEventListener)window.addEventListener("load", downloadJSAtOnload, false);else if (window.attachEvent)window.attachEvent("onload", downloadJSAtOnload);else window.onload = downloadJSAtOnload;</script></body></html><?php ob_end_flush();
    ?>
