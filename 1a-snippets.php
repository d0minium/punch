<?php

    // set_include_path( get_include_path() . PATH_SEPARATOR . $_SERVER['DOCUMENT_ROOT'] ); 

    // define("BASE_URL", "/");
    // define("ROOT_PATH", $_SERVER["DOCUMENT_ROOT"] . "/");


    // include 'lib/if-modified-since.php';
    include 'lib/php-html-css-js-minifier.php';
    include 'lib/compression.php';
    echo '<!DOCTYPE html><html><head>';
    include 'assets/punch-icons.html';
    // echo '<!DOCTYPE html><html id="1a-snippets-js"><head>';

    echo "<style>";
        // echo minify_css(file_get_contents('1a-snippets/1a-snippets.css'));

    echo "</style>"; 
    echo "<script>";
        echo minify_js(file_get_contents('lib/ofi.js'));
        echo minify_js(file_get_contents('1a-snippets/1a-general-ATF-all.js'));
    echo "</script>";
  
    ?>

<!-- //TEMP FOR PRODUCTION AND TEMP.DOMAINNMAME -->
    <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
<!-- PAGE DATA -->
    <title>SNIPPETS</title>


<!-- PAGES ID -->
</head><body>
<?php     
// GENERAL

    // include '1a-snippets/1a-snippets-CSS-JS.html';
    // include '1a-snippets/1a-snippets-HTML.html';

    // with 1a-snippets-BTF-action JS
    // include '1a-snippets/1-SLIDER_GSAP_ANIM.html'; 

    // inline CSS & JSGOODIEStoTEST_HTML in 1a-general-BTF-ALL.JS 
    // include '1a-snippets/JS-GOODIEStoTEST.html';
    // inline CSS &  inline JS open as HTML
    // include '1a-snippets/JS-GOODIES.html';

// STYLE
    // include '1a-snippets/CSS-SHAPE.html';
    // // include '1a-snippets/CSS-BORDERS.html';
    // include '1a-snippets/CSS-BCG-STYLE1.html';
    // include '1a-snippets/CSS-BCG-STYLE2.html';
    // include '1a-snippets/CSS-BCG-STYLE3.html';
    // include '1a-snippets/CSS-BCG-STYLE4.html';
    // include '1a-snippets/CSS-BCG-STYLE5.html';
    // include '1a-snippets/CSS-BCG-STYLE6.html';
    // include '1a-snippets/CSS-BCG-STYLE7.html';
    // include '1a-snippets/CSS-BCG-STYLE8.html';
    // include '1a-snippets/CSS-BCG-STYLE9-radial-gradient.html';
    include '1a-snippets/CSS-BCG-STYLE10.html';
    // include '1a-snippets/CSS-BCG-STYLE11-GOOD-gradient1.html';
    // include '1a-snippets/CSS-BCG-STYLE11-GOOD-gradient2.html';
    // include '1a-snippets/CSS-BCG-STYLE12.html';
    // include '1a-snippets/CSS-BCG-STYLE13.html';
    // include '1a-snippets/CSS-button.html';

    // include '1a-snippets/CSS-HR.html';
    // include '1a-snippets/CSS-PSEUDO.html'; 
    // include '1a-snippets/CSS-TEXT.html'; 
    // include '1a-snippets/CSS-BOX-SHADOW.html';
    // include '1a-snippets/CSS-BORDER-IMAGE.html';


// TEMPLATES
    // include '1a-snippets/TEMPLATE-PARALLAX-SCROLLING.html';







// IMAGES STYLE
    // include '1a-snippets/IMG-POLYGON.html';
    // include '1a-snippets/IMG-GALLERY1.html';  
    // include '1a-snippets/IMG-GALLERY2.html';  


// 3D
    // include '1a-snippets/CSS-PERSPECTIVE.html';

// LAYOUT
    // include '1a-snippets/CSS-LAYOUT.html';
    // include '1a-snippets/CSS-FIXED-LAYOUT.html';
    // include '1a-snippets/CSS-FIXED-img-BCG1.html';
    // include '1a-snippets/CSS-FIXED-img-BCG2.html';
    // include '1a-snippets/IMG-GROUP.html';  
    // include '1a-snippets/CSS-LIST.html';  
    // include '1a-snippets/CSS-MODALS.html';
    // include '1a-snippets/MEDIA-QUERIES-VMAX.html';
    // include '1a-snippets/MEDIA-QUERIES1.html';
    // include '1a-snippets/FLEXBOX.html';


// FORM
    // include '1a-snippets/FORM-PUNCH.html';
    // include '1a-snippets/FORM2.html';
    // include '1a-snippets/FORM3.html';
    // include '1a-snippets/FORM4.html';
    // include '1a-snippets/FORM5.html';


// include '1a-snippets/SIGNATURE.html';
// include '1a-snippets/SHARER.html';   
// include '1a-snippets/FONTS.html';
// include '1a-snippets/GOOGLEMAP.html';
// include '1a-snippets/DIVERS-mix.html';
// include '1a-snippets/TESTING-BOX1.html';
// include '1a-snippets/TESTING-BOX2.html';

?>
<!-- SCRIPTS -->
<script>function downloadJSAtOnload() { [ '/lib/TweenMax.min.js','/lib/PLUGINS.min.js','/1a-snippets/1a-snippets-BTF.php'].forEach(function(src) {var SCRIPTS = document.createElement('script');SCRIPTS.src = src;SCRIPTS.type = "text/javascript";SCRIPTS.async = false;document.body.appendChild(SCRIPTS);});};if (window.addEventListener)window.addEventListener("load", downloadJSAtOnload, false);else if (window.attachEvent)window.attachEvent("onload", downloadJSAtOnload);else window.onload = downloadJSAtOnload;</script></body></html><?php ob_end_flush();?>