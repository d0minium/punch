<?php header('Content-Type: text/html; charset=utf-8');


// include 'lib/if-modified-since.php';
include 'lib/php-html-css-js-minifier.php';
// include 'lib/compression.php';
// include 'lib/cors.php';
    // echo '<!DOCTYPE html><html lang="fr"
    //     prefix="og: http://ogp.me/ns#" 
    //     xmlns:fb="http://ogp.me/ns/fb#">
    //     <head>';
// echo '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" lang="fr"
//     prefix="og: http://ogp.me/ns#" 
//     xmlns:fb="http://ogp.me/ns/fb#">
//     <head>';
echo '<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" lang="fr"
    prefix="og: http://ogp.me/ns#" 
    xmlns:fb="http://ogp.me/ns/fb#">
    <head>';    
include 'assets/punch-headers.html';
    ?>
<title>Création site web Haute performance</title>
  <?php 
echo "<style>";
echo minify_css(file_get_contents('assets/general.css'));
// echo minify_css(file_get_contents('assets/punch-homepage.css'));
    echo "</style>"; 
echo "<script>";
// echo minify_js(file_get_contents('lib/ofi.js'));
echo minify_js(file_get_contents('assets/general-ATF.js'));
    echo "</script>";
    ?>

    </head><body>

    <?php
include 'assets/punch-homepage-fr.html';
    ?>

    <?php 
        echo "<script>";
echo minify_js(file_get_contents('assets/app-demo.js'));
        echo "</script>";
        echo "</body></html>";
        ob_end_flush();
?>
   
