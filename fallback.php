<?php 
// TOP HEADERS
    include 'lib/if-modified-since.php';
    include 'lib/php-html-css-js-minifier.php';
    include 'lib/compression.php';
    include 'lib/cors.php';
    echo '<!DOCTYPE html><html>
    <head>';
    include 'assets/punch-headers.html';
    echo "<style>";
    echo minify_css(file_get_contents('assets/general-font.css'));
    echo minify_css(file_get_contents('assets/general.css'));
    echo "</style>";
  ?>

 <title> Non-disponible hors ligne - not available offline</title>
 <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">


   
  </head>

  <body> 

    <section id="fallback">

      <!-- <img class="bcg-fallback-img fit-contain-center" 
        src="/img/fallback.png" 
        width="300" height="290" 
        alt="Création Punch!"
      > -->

      <div class="container-fallback">



        <!-- <h2>ERREUR 404 ERROR</h2> -->

        
        <p>Cette page est actuellement non disponible hors ligne</p>
        <p>This page is currently not available offline</p>

        <a href="/" title="Acceuil - Home">
          <h1> Retour </h1>
        </a>



      </div>



    </section>

</body>

</html>

<?php
//HTML MINIFIER
ob_end_flush();

?>
