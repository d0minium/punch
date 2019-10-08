<?php 
    // include 'lib/if-modified-since.php';
    include 'lib/php-html-css-js-minifier.php';
    include 'lib/compression.php';


    echo '<!DOCTYPE html><html xmlns:og="http://ogp.me/ns#" xmlns:fb="http://ogp.me/ns/fb#"  lang="fr-fr"><head>';
    // echo '<!DOCTYPE html><html lang="fr" itemscope itemtype="https://schema.org/Article"><head>';
    // echo '<!DOCTYPE html><html lang="fr"><head>';
    // echo '<!DOCTYPE html><html lang="en"><head>';

    
    // include 'assets/NEWNAME-headers.html';
    ?>
<!-- //TEMP FOR PRODUCTION AND TEMP.DOMAINNMAME -->
    <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
<!-- PAGE DATA -->
<title>NEW PROJECT</title>
    <!-- <meta name="title" content="MAX 59 CHARS - check search trends and check first best 4 words - google check most important 4 words">
    <meta name="description" content="DESCRIPTION MAX 155 CHARS">
    <meta name="keywords" content="only words as a frame for developpiung keywords"> 

    <link rel="canonical" href="https://NEWNAME.com/"> -->

<!-- Google SCHEMA ON-->
    <!-- <meta itemprop="name" content="Création site web Haute performance - Punch!">
    <meta itemprop="description" content="Création site web Haute performance - Solutions pour optimisation de contenu SEO, adaptif sur toutes plate-formes et conception unique sur mesure.">
    <meta itemprop="image" content="https://punchunique.com//img/creation-site-web-punchunique.jpg"> -->

<!-- PAGE OG FOR EVERY PAGE or put in headers if general -->
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
        <!-- <meta property="og:type" content="website">
        <meta property="og:site_name" content="Punch Design">
        <meta property="fb:app_id" content="1442543079187557">
        <meta property="og:image:width" content="1291">
        <meta property="og:image:height" content="676">
        <meta property="og:title" content="Création site web Haute performance - Punch!">
        <meta property="og:description" content="Création site web Haute performance - Solutions pour optimisation de contenu SEO, adaptif sur toutes plate-formes et conception unique sur mesure.">
        <meta property="og:locale:alternate" content="fr_CA">
        <meta property="og:url" content="https://punchunique.com/">
        <meta property="og:image" content="https://punchunique.com/img/creation-site-web-punchunique.jpg">
        <meta property="og:image:alt" content="Partager Punch Design sur Facebook"> -->


    <!-- TWITTER CARDS -->
        <!-- <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="Punch Design">
        <meta name="twitter:title" content="Création site web Haute performance - Punch!">
        <meta name="twitter:site" content="@placeunique">
        <meta name="twitter:creator" content="@placeunique">
        <meta name="twitter:image" content="https://punchunique.com/img/creation-site-web-punchunique.jpg">
        <meta name="twitter:description" content="Création site web Haute performance - Solutions pour optimisation de contenu SEO, adaptif sur toutes plate-formes et conception unique sur mesure.">
        <meta name="twitter:url" content="https://punchunique.com">    -->



<?php 
echo "<style>";
    // TRY WITH RESET
    // echo minify_css(file_get_contents('lib/normalize.css'));

    // echo minify_css(file_get_contents('assets/punch-fixed.css'));


    echo minify_css(file_get_contents('assets/NEWNAME/NEWNAME-general.css'));
    echo minify_css(file_get_contents('assets/NEWNAME/NEWNAME-homepage.css'));

    // echo minify_css(file_get_contents('assets/punch-form-no-upload.css'));
    // echo minify_css(file_get_contents('assets/punch-general-footer.css'));

    //TEMP
    // echo minify_css(file_get_contents('assets/1a-CSS-FOR-PRODUCTION.css'));

    echo "</style>"; 
echo "<script>";
    echo minify_js(file_get_contents('lib/ofi.js'));
    echo minify_js(file_get_contents('assets/NEWNAME/NEWNAME-general-ATF.js'));
    echo "</script>";
    ?>
  
<!-- PAGES ID -->
</head><body>
<!-- <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v4.0&appId=1442543079187557&autoLogAppEvents=1"></script> -->
<?php 
    // include 'assets/punch-fixed-fr.html';
    include 'assets/NEWNAME/NEWNAME-homepage-fr.html';  
    // include 'assets/punch-general-footer-fr.html';

    //TEMP
    // include 'assets/1a-FOR-PRODUCTION.html';
?>
<!-- FOR GSAP PRODUCTIIN after plugins -->
<!-- '/lib/jquery-ui.js', -->
 <script>
function downloadJSAtOnload() { ['/lib/TweenMax.min.js','/lib/PLUGINS.min.js','/assets/NEWNAME/NEWNAME-homepage-BTF.php'].forEach(function(src) {var SCRIPTS = document.createElement('script');SCRIPTS.src = src;SCRIPTS.type = "text/javascript";SCRIPTS.async = false;document.body.appendChild(SCRIPTS);});};if (window.addEventListener)window.addEventListener("load", downloadJSAtOnload, false);else if (window.attachEvent)window.attachEvent("onload", downloadJSAtOnload);else window.onload = downloadJSAtOnload;</script></body></html><?php ob_end_flush();
?>