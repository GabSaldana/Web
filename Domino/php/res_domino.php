<?php
    

    //RESPUESTAS

    $resp_formasup= array("5","5","2","2");
    $resp_formasdown= array("3","4","4n","3");

    $resp_patronesup= array("6","0","4","2","1");
    $resp_patronesdown= array("5","6","2","3","6");

    $resp_operacionesup= array("6","1","4","4","1");
    $resp_operacionesdown= array("3","1","4","3","1");

    $resp_valoresparup= array("5","3","5","5","4");
    $resp_valorespardown= array("1","3","5","4","4");

    $resp_seriesproup= array("6","0","4","2","1");
    $resp_seriesprodown= array("5","6","2","3","6");

    $TotPreguntas = count($resp_formasup)+count($resp_patronesup)+count($resp_operacionesup)+count($resp_valoresparup)+count($resp_seriesproup);

    //ORIGINALES
    $formasup =$_GET["formasup"];
    $formasdown =$_GET["formasdown"];

    $patronesup =$_GET["patronesup"];
    $patronesdown =$_GET["patronesdown"];

    $operacionesup =$_GET["operacionesup"];
    $operacionesdown =$_GET["operacionesdown"];

    $valoresparup =$_GET["valoresparup"];
    $valorespardown =$_GET["valorespardown"];

    $seriesproup =$_GET["seriesproup"];
    $seriesprodown =$_GET["seriesprodown"];


    //ACIERTOS:

     $TotA_F= cueta_aciertos($formasup,$formasdown,$resp_formasup,$resp_formasdown);
     $TotA_P= cueta_aciertos($patronesup,$patronesdown,$resp_patronesup,$resp_patronesdown);
     $TotA_OA= cueta_aciertos($operacionesup,$operacionesdown,$resp_operacionesup,$resp_operacionesdown);
     $TotA_VP= cueta_aciertos($valoresparup,$valorespardown,$resp_valoresparup,$resp_valorespardown);
     $TotA_SP= cueta_aciertos($seriesproup,$seriesprodown,$resp_seriesproup,$resp_seriesprodown);

    $ToT=$TotA_F+$TotA_SP+$TotA_VP+$TotA_OA+$TotA_P;
    $porcentaje=($ToT*100)/$TotPreguntas;
    //FUNCION QUE CUENTA  EL NUMERO DE LOS ACIERTOS

    function cueta_aciertos($oup, $odown,$rup,$rdown){//original,respuestas
        
        $a=0;

        for($i=0;$i<count($oup);$i++){
            
            if($oup[$i] == $rup[$i]){
                
                if($odown[$i] == $rdown[$i]){
                    $a++;   
                }
            }
        }
        return $a;
    }
    
    echo "
    
        <!DOCTYPE>
        <html>
            
            <head>
                <title>RESPUESTAS</title>
                <script src='js/bootstrap/bootstrap.min.js'></script>
                <link href='css/bootstrap/bootstrap.min.css' rel='stylesheet'>
                <link rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'>
                <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
                
                <style>
                
                    body{
                    
                    background-color:#0091EA;
                    color: white;
                    }
                </style>
                
            </head>
            
            <body>
                <div class='container'>
                
                    <div class='row'>
                        <div class='col-md-3'></div>
                        <div class='col-md-6'>
                            <h1>RESULTADOS</h1>
                            <hr/>
                            <h2>Total de Preguntas</h2>
                            <h4>".$TotPreguntas."</h4>
                            <hr/>
                            <h2>Total de Aciertos por secci&oacute;n</h2>
                            <h3>Formas: </h3>
                            <h4>".$TotA_F." DE ".count($formasup)."</h4>
                            <h3>Series Progresivas:</h3>
                            <h4>".$TotA_SP." DE ".count($seriesproup)."</h4>
                            <h3>Valores Par:</h3>
                            <h4>".$TotA_VP." DE ".count($valoresparup)."</h4>
                            <h3>Operaciones Aritm&eacute;ticas:</h3>
                            <h4>".$TotA_OA." DE ".count($operacionesup)."</h4>
                            <h3>Patrones:</h3>
                            <h4>".$TotA_P." DE ".count($patronesup)."</h4>
                            <hr/>
                            <h3>TOTAL DE ACIERTOS:".$ToT."</h3>
                            <h3>PORCENTAJE DE APROBACI&Oacute;N:<br/> ".$porcentaje." %</h3>
                            
                        </div>
                        <div class='col-md-3'></div>
                        
                    </div>
                </div>
            </body>
        </html>
    ";

?>