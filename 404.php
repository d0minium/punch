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

 <title> ERREUR 404 ERROR</title>



   
  </head>

  <body> 

    <section id="page-404">

      <img class="bcg-404-img fit-contain-center" 
        src="/img/big-signature.png" 
        width="300" height="290" 
        alt="Création Punch!"
      >

      <div class="container-404">



        <h2>ERREUR 404 ERROR</h2>

        
        <p>Lien introuvable <br> Address not found</p>

        <a href="/" title="Acceuil - Home">
          <h1> PunchUnique.com </h1>
        </a>



      </div>



    </section>

</body>

</html>

<?php
//HTML MINIFIER
ob_end_flush();

?>
