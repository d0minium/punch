<?php 
    // include 'lib/if-modified-since.php';
    include 'lib/php-html-css-js-minifier.php';
    include 'lib/compression.php';


    // echo '<!DOCTYPE html><html xmlns:og="http://ogp.me/ns#" xmlns:fb="http://ogp.me/ns/fb#"  lang="fr-fr"><head>';
    // echo '<!DOCTYPE html><html lang="fr" itemscope itemtype="https://schema.org/Article"><head>';
    // echo '<!DOCTYPE html><html lang="fr"><head>';
    // echo '<!DOCTYPE html><html lang="en"><head>';

    echo ' 
    <!DOCTYPE html>
    <!--[if !(IE 6) | !(IE 7) | !(IE 8)  ]><!-->
    <html lang="en-US" class="no-js">
    <!--<![endif]-->
    ';

    
    include 'assets/flexe/flexe-headers.html';
    ?>
<!-- //TEMP FOR PRODUCTION AND TEMP.DOMAINNMAME -->
    <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
<!-- PAGE DATA -->
<title>CentreFlex &#8211; Clinique d&#039;Acupuncture</title>
<meta property="og:site_name" content="CentreFlex" />
<meta property="og:title" content="Accueil" />
<meta property="og:url" content="http://centreflexe.ca/" />
<meta property="og:type" content="website" />
<link rel="canonical" href="http://centreflexe.ca/" />
<link rel='shortlink' href='http://centreflexe.ca/' />


    <!-- <title>NEW PROJECT</title> -->
    <!-- <meta name="title" content="MAX 59 CHARS - check search trends and check first best 4 words - google check most important 4 words">
    <meta name="description" content="DESCRIPTION MAX 155 CHARS">
    <meta name="keywords" content="only words as a frame for developpiung keywords"> 

    <link rel="canonical" href="https://centreflexe.ca/"> -->
<!--  -->

<!-- TOP STYLE -->
<style id='rs-plugin-settings-inline-css' type='text/css'>
    #rs-demo-id {}
</style>

<style id='dt-main-inline-css' type='text/css'>
    body #load {
    display: block;
    height: 100%;
    overflow: hidden;
    position: fixed;
    width: 100%;
    z-index: 9901;
    opacity: 1;
    visibility: visible;
    -webkit-transition: all .35s ease-out;
    transition: all .35s ease-out;
    }
    .load-wrap {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    text-align: center;
    }
    .load-wrap > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    }
    #load {
    background-color: #ffffff;
    }
    .uil-default rect:not(.bk) {
    fill: #ef0a0a;
    }
    .uil-ring > path {
    fill: #ef0a0a;
    }
    .ring-loader .circle {
    fill: #ef0a0a;
    }
    .ring-loader .moving-circle {
    fill: #ef0a0a;
    }
    .uil-hourglass .glass {
    stroke: #ef0a0a;
    }
    .uil-hourglass .sand {
    fill: #ef0a0a;
    }
    .spinner-loader .load-wrap {
    background-image: url("data:image/svg+xml,%3Csvg width='75px' height='75px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' class='uil-default'%3E%3Crect x='0' y='0' width='100' height='100' fill='none' class='bk'%3E%3C/rect%3E%3Crect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='%23ef0a0a' transform='rotate(0 50 50) translate(0 -30)'%3E  %3Canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='%23ef0a0a' transform='rotate(30 50 50) translate(0 -30)'%3E  %3Canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.08333333333333333s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='%23ef0a0a' transform='rotate(60 50 50) translate(0 -30)'%3E  %3Canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.16666666666666666s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='%23ef0a0a' transform='rotate(90 50 50) translate(0 -30)'%3E  %3Canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.25s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='%23ef0a0a' transform='rotate(120 50 50) translate(0 -30)'%3E  %3Canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.3333333333333333s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='%23ef0a0a' transform='rotate(150 50 50) translate(0 -30)'%3E  %3Canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.4166666666666667s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='%23ef0a0a' transform='rotate(180 50 50) translate(0 -30)'%3E  %3Canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.5s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='%23ef0a0a' transform='rotate(210 50 50) translate(0 -30)'%3E  %3Canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.5833333333333334s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='%23ef0a0a' transform='rotate(240 50 50) translate(0 -30)'%3E  %3Canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.6666666666666666s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='%23ef0a0a' transform='rotate(270 50 50) translate(0 -30)'%3E  %3Canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.75s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='%23ef0a0a' transform='rotate(300 50 50) translate(0 -30)'%3E  %3Canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.8333333333333334s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='%23ef0a0a' transform='rotate(330 50 50) translate(0 -30)'%3E  %3Canimate attributeName='opacity' from='1' to='0' dur='1s' begin='0.9166666666666666s' repeatCount='indefinite'/%3E%3C/rect%3E%3C/svg%3E");
    }
    .ring-loader .load-wrap {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='72' height='72' fill='%23ef0a0a'%3E   %3Cpath opacity='.25' d='M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4'/%3E   %3Cpath d='M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z'%3E     %3CanimateTransform attributeName='transform' type='rotate' from='0 16 16' to='360 16 16' dur='0.8s' repeatCount='indefinite' /%3E   %3C/path%3E %3C/svg%3E");
    }
    .hourglass-loader .load-wrap {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='72' height='72' fill='%23ef0a0a'%3E   %3Cpath transform='translate(2)' d='M0 12 V20 H4 V12z'%3E      %3Canimate attributeName='d' values='M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z' dur='1.2s' repeatCount='indefinite' begin='0' keytimes='0;.2;.5;1' keySplines='0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8' calcMode='spline'  /%3E   %3C/path%3E   %3Cpath transform='translate(8)' d='M0 12 V20 H4 V12z'%3E     %3Canimate attributeName='d' values='M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z' dur='1.2s' repeatCount='indefinite' begin='0.2' keytimes='0;.2;.5;1' keySplines='0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8' calcMode='spline'  /%3E   %3C/path%3E   %3Cpath transform='translate(14)' d='M0 12 V20 H4 V12z'%3E     %3Canimate attributeName='d' values='M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z' dur='1.2s' repeatCount='indefinite' begin='0.4' keytimes='0;.2;.5;1' keySplines='0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8' calcMode='spline' /%3E   %3C/path%3E   %3Cpath transform='translate(20)' d='M0 12 V20 H4 V12z'%3E     %3Canimate attributeName='d' values='M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z' dur='1.2s' repeatCount='indefinite' begin='0.6' keytimes='0;.2;.5;1' keySplines='0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8' calcMode='spline' /%3E   %3C/path%3E   %3Cpath transform='translate(26)' d='M0 12 V20 H4 V12z'%3E     %3Canimate attributeName='d' values='M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z' dur='1.2s' repeatCount='indefinite' begin='0.8' keytimes='0;.2;.5;1' keySplines='0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8' calcMode='spline' /%3E   %3C/path%3E %3C/svg%3E");
    }

</style>

<style id='style-inline-css' type='text/css'>
    .vc_custom_1535995137884{padding-bottom: 60px !important;}.vc_custom_1537881680998{padding-top: 30px !important;padding-bottom: 50px !important;}.vc_custom_1535211684502{padding-bottom: 50px !important;}.vc_custom_1537882149128{padding-bottom: 30px !important;}.vc_custom_1535379245632{padding-top: 30px !important;padding-bottom: 50px !important;}.vc_custom_1535820689042{margin-bottom: 0px !important;padding-bottom: 0px !important;}.vc_custom_1535994554178{padding-top: 0px !important;}.vc_custom_1535993667121{margin-bottom: 0px !important;}.vc_custom_1535991572730{margin-bottom: 0px !important;}.vc_custom_1535993805051{margin-bottom: 0px !important;}.vc_custom_1535991583451{margin-bottom: 0px !important;}.vc_custom_1535993901193{margin-bottom: 0px !important;}.vc_custom_1535991600612{margin-bottom: 0px !important;}
</style>

<style id='the7-custom-inline-css' type='text/css'>
    /* Pricing tables paddings */
    .custom_pricing_box .ult_pricing_table .ult_price_link {padding-bottom: 30px;}
    .custom_pricing_box .ult_pricing_table .ult_pricing_heading {padding-bottom:0px; padding-top:15px;}

    /* Expandable Setion */
    .ult_ecpsub_cont {
        text-align: left;
        margin: 0 auto;
        vertical-align: middle;
        max-width: 900px;
    /* Expandable Section no Capitalize */
    }
    .ult_exp_section .aio-icon i, .ult_expheader, .ult_expsection_icon {
        text-transform: none;
        -webkit-transition: background-color .5s;
        transition: background-color .5s;
    }
</style>
<!-- Google SCHEMA ON-->
    <!-- <meta itemprop="name" content="Création site web Haute performance - Punch!">
    <meta itemprop="description" content="Création site web Haute performance - Solutions pour optimisation de contenu SEO, adaptif sur toutes plate-formes et conception unique sur mesure.">
    <meta itemprop="image" content="https://punchunique.com//img/creation-site-web-punchunique.jpg"> -->


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


    echo minify_css(file_get_contents('assets/flexe/flexe-general.css'));
    echo minify_css(file_get_contents('assets/flexe/flexe-homepage.css'));

    // echo minify_css(file_get_contents('assets/punch-form-no-upload.css'));
    // echo minify_css(file_get_contents('assets/punch-general-footer.css'));

    //TEMP
    // echo minify_css(file_get_contents('assets/1a-CSS-FOR-PRODUCTION.css'));

    echo "</style>"; 
echo "<script>";
    echo minify_js(file_get_contents('lib/ofi.js'));
    echo minify_js(file_get_contents('assets/flexe/flexe-general-ATF.js'));
    echo "</script>";
    ?>
  
<!-- PAGES ID -->
</head>
<body class="home page-template-default page page-id-1367 wp-embed-responsive the7-core-ver-2.1.1 slideshow-on dt-responsive-on srcset-enabled btn-flat custom-btn-color custom-btn-hover-color phantom-slide phantom-shadow-decoration phantom-custom-logo-on sticky-mobile-header top-header first-switch-logo-left first-switch-menu-right second-switch-logo-left second-switch-menu-right right-mobile-menu layzr-loading-on popup-message-style dt-fa-compatibility the7-ver-7.7.0 wpb-js-composer js-comp-ver-6.0.2 vc_responsive">
<!-- <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v4.0&appId=1442543079187557&autoLogAppEvents=1"></script> -->
<?php 
    // include 'assets/punch-fixed-fr.html';
    include 'assets/flexe/flexe-homepage-fr.html';  
    // include 'assets/punch-general-footer-fr.html';

    //TEMP
    // include 'assets/1a-FOR-PRODUCTION.html';
?>
<!-- FOR GSAP PRODUCTIIN after plugins -->
<!-- '/lib/jquery-ui.js', -->




 <!-- <script>
function downloadJSAtOnload() { ['/lib/TweenMax.min.js','/lib/PLUGINS.min.js','/assets/flexe/flexe-homepage-BTF.php'].forEach(function(src) {var SCRIPTS = document.createElement('script');SCRIPTS.src = src;SCRIPTS.type = "text/javascript";SCRIPTS.async = false;document.body.appendChild(SCRIPTS);});};if (window.addEventListener)window.addEventListener("load", downloadJSAtOnload, false);else if (window.attachEvent)window.attachEvent("onload", downloadJSAtOnload);else window.onload = downloadJSAtOnload;</script> -->


</body></html><?php ob_end_flush();
?>