//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
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
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkMQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Los documentos publicados en una computadora conectada a internet, escritos en lenguaje html y que pueden ser leidos mediante un programa navegador por cualquier otro usuario, son documentos denominados:","Programa que se utiliza para ver archivos html, interpreta el codigo y permite la visualización del contenido de una página web al usuario se denomina:","lenguaje utlizado para la elaboracion y diseño de paginas web que permite la transmision de documentos compuestos por textos,imagenes, sonido y video es denominado"];
var answers1=["MXBhZ2luYXMgd2Vi","ME1pY3Jvc29mdCBXb3Jk","MEJsb2MgZGUgbm90YXM"];
var answers2=["MU5hdmVnYXJkb3IgbyBCcm93c2Vy","MFdvcmQgeSBCbG9jIGRlIG5vdGFz","MEdpdEh1Yg"];
var answers3=["MUhUTUw","MEhMTVQ","MElOREVY"];
var ans=[answers1,answers2,answers3];
var err=["Respuesta incorrecta","Respuesta incorrecta","Respuesta incorrecta"];
var ima=["","",""];
var mp4=["","",""];
var ogv=["","",""];
var indexTag=0; actualAnswers=[]; dirMedia="actividad1_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
