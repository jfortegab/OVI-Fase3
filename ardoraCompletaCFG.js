//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=1;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>HTML5 es un <select name="item1" id="item1" class="ardoraCombo"></select> markup (de hecho, las siglas de HTML significan Hyper Text Markup Language) usado para <select name="item2" id="item2" class="ardoraCombo"></select> y presentar el contenido en la <select name="item3" id="item3" class="ardoraCombo"></select>. Es uno de los aspectos fundamentales para el funcionamiento de los sitios, pero no es el primero. Es de hecho la quinta revisión del estándar que fue creado en <select name="item4" id="item4" class="ardoraCombo"></select>. </p><p> </p>'];
var b=["Mg","MTc","MTg","MQ","MTM","Mg","Nw","Mw","MTk","Mw","NA","MTI","OA","OQ","MTQ","NA"];
var c=[5,4,4,8,5,11,5,3,4,3,9,10,7,7,10,4];
var answers=["juego","1987","2001","lenguaje","radio","estructurar","dañar","web","1997","web","contenido","televisión","prestar","revisar","plataforma","1990"];
var a=["1","4","4","1","3","2","2","3","4","1","1","3","2","2","3","4"];
var itemCorr=["0","0","0","0"];
var itemHelp=["","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="YWN0aXZpZGFkMg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
var fHelp="Verdana, Geneva, sans-serif";
