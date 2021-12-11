function algus(){
    fon=document.getElementById("fonid");
}

function teksti(){
    var canvas = document.getElementById("fonid"),
        context = canvas.getContext("2d");
    context.font = "50px Times New Roman";
    context.fillStyle = "Black";
    context.fillText("Head Uut aastat!", 75, 99);
}

function kustutata(){
    var fonid=document.getElementById("fonid").getContext("2d");
    fonid.clearRect(0, 0, 500, 600);
}

function kuusk(){
    var stvol=document.getElementById("fonid").getContext("2d");
    var jarus1=stvol;
    var jarus2=stvol;
    var jarus3=stvol;
    var jarus4=stvol;

    stvol.fillStyle="Sienna";
    stvol.fillRect(230,560,30,50);
    stvol.fill();
    stvol.stroke();

    jarus1.beginPath();
    jarus1.fillStyle="ForestGreen";
    jarus1.strokeStyle = "ForestGreen";
    jarus1.moveTo(100,560); //x, y alguspunkt(начало)
    jarus1.lineTo(245, 400); //x, y
    jarus1.lineTo(390, 560); //x, y
    jarus1.fill();
    jarus1.stroke();

    jarus2.beginPath();
    jarus2.fillStyle="ForestGreen";
    jarus2.strokeStyle = "ForestGreen";
    jarus2.moveTo(120,500); //x, y alguspunkt(начало)
    jarus2.lineTo(245, 340); //x, y
    jarus2.lineTo(370, 500); //x, y
    jarus2.fill();
    jarus2.stroke();

    jarus3.beginPath();
    jarus3.fillStyle="ForestGreen";
    jarus3.strokeStyle = "ForestGreen";
    jarus3.moveTo(140,440); //x, y alguspunkt(начало)
    jarus3.lineTo(245, 280); //x, y
    jarus3.lineTo(350, 440); //x, y
    jarus3.fill();
    jarus3.stroke();

    jarus4.beginPath();
    jarus4.fillStyle="ForestGreen";
    jarus4.strokeStyle = "ForestGreen";
    jarus4.moveTo(160,380); //x, y alguspunkt(начало)
    jarus4.lineTo(245, 220); //x, y
    jarus4.lineTo(330, 380); //x, y
    jarus4.fill();
    jarus4.stroke();

}

function test(){
    var testcanvas = document.getElementById("fonid"),
        testcontext = testcanvas.getContext("2d");
    testcontext.font = "50px Times New Roman";
    testcontext.fillStyle = "Black";
    testcontext.fillText("Test!", 75, 120);
}

function svetitsa(event){
    pallid2();
    setTimeout(() => {  pallid(event); }, 5000);
    setTimeout(() => {  pallid2(event); }, 2000);
    pallid();
}


function pallid(event){
    var pall=document.getElementById("fonid").getContext("2d");
    var pall1 =pall;
    var pall2 =pall;
    var pall3 =pall;
    var pall4 =pall;
    var pall5 =pall;
    var pall6 =pall;
    var pall7 =pall;



    //Pallid
    pall.strokeStyle = "#0000CD";
    pall.fillStyle="#0000CD";
    pall.beginPath();
    pall.arc(195, 360, 10, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pall.fill();
    pall.stroke();

    pall1.strokeStyle = "#A52A2A";
    pall1.fillStyle="#A52A2A";
    pall1.beginPath();
    pall1.arc(300, 430, 10, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pall1.fill();
    pall1.stroke();

    pall2.strokeStyle = "#FFA500";
    pall2.fillStyle="#FFA500";
    pall2.beginPath();
    pall2.arc(180, 420, 10, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pall2.fill();
    pall2.stroke();

    pall3.strokeStyle = "#FFA500";
    pall3.fillStyle="#FFA500";
    pall3.beginPath();
    pall3.arc(300, 520, 10, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pall3.fill();
    pall3.stroke();

    pall4.strokeStyle = "#F0FFFF";
    pall4.fillStyle="#F0FFFF";
    pall4.beginPath();
    pall4.arc(260, 390, 10, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pall4.fill();
    pall4.stroke();

    pall5.strokeStyle = "#A52A2A";//#A52A2A
    pall5.fillStyle="#A52A2A";
    pall5.beginPath();
    pall5.arc(160, 530, 10, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pall5.fill();
    pall5.stroke();

    pall6.strokeStyle = "blue";
    pall6.fillStyle="blue";
    pall6.beginPath();
    pall6.arc(230, 460, 10, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pall6.fill();
    pall6.stroke();

    pall7.strokeStyle = "blue";
    pall7.fillStyle="blue";
    pall7.beginPath();
    pall7.arc(250, 300, 10, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pall7.fill();
    pall7.stroke();
}

function pallid2(event){
    var pall=document.getElementById("fonid").getContext("2d");
    var pall1 =pall;
    var pall2 =pall;
    var pall3 =pall;
    var pall4 =pall;
    var pall5 =pall;
    var pall6 =pall;
    var pall7 =pall;



    //Pallid
    pall.strokeStyle = "while";
    pall.fillStyle="while";
    pall.beginPath();
    pall.arc(195, 360, 10, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pall.fill();
    pall.stroke();

    pall1.strokeStyle = "yellow";
    pall1.fillStyle="yellow";
    pall1.beginPath();
    pall1.arc(300, 430, 10, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pall1.fill();
    pall1.stroke();

    pall2.strokeStyle = "red";
    pall2.fillStyle="red";
    pall2.beginPath();
    pall2.arc(180, 420, 10, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pall2.fill();
    pall2.stroke();

    pall3.strokeStyle = "blue";
    pall3.fillStyle="blue";
    pall3.beginPath();
    pall3.arc(300, 520, 10, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pall3.fill();
    pall3.stroke();

    pall4.strokeStyle = "orange";
    pall4.fillStyle="orange";
    pall4.beginPath();
    pall4.arc(260, 390, 10, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pall4.fill();
    pall4.stroke();

    pall5.strokeStyle = "black";//#A52A2A
    pall5.fillStyle="black";
    pall5.beginPath();
    pall5.arc(160, 530, 10, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pall5.fill();
    pall5.stroke();

    pall6.strokeStyle = "red";
    pall6.fillStyle="red";
    pall6.beginPath();
    pall6.arc(230, 460, 10, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pall6.fill();
    pall6.stroke();

    pall7.strokeStyle = "white";
    pall7.fillStyle="white";
    pall7.beginPath();
    pall7.arc(250, 300, 10, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pall7.fill();
    pall7.stroke();
}

function taht(){
    var taht=document.getElementById("fonid").getContext("2d");
    taht.beginPath();
    taht.fillStyle="#FFD700";
    taht.strokeStyle = "#FFD700";
    taht.moveTo(205,272); //x, y alguspunkt(начало) - слева 1

    taht.lineTo(220, 229); //x, y - слева 2
    taht.lineTo(180, 203); //x, y - слева 3
    taht.lineTo(230, 203); //x, y - слева 4

    taht.lineTo(245, 160); //вверх

    taht.lineTo(260, 203); //x, y - справа 4
    taht.lineTo(310, 203); //x, y - справа 3
    taht.lineTo(270, 229); //x, y - справа 2
    taht.lineTo(285, 272); //x, y - справа 1

    taht.lineTo(245, 248); //низ, по середине
    taht.fill();
    taht.stroke();


}

function lipud(){
    var lipud=document.getElementById("fonid").getContext("2d");
    var lipud2=lipud;
    var lipud3=lipud;
    var lipud4=lipud;
    lipud.beginPath();
    lipud.fillStyle="FireBrick";
    lipud.strokeStyle = "FireBrick";
    lipud.lineWidth= 3;//paksus -  ширина
    lipud.moveTo(202,300); //x, y alguspunkt(начало) -

    lipud.lineTo(231, 320); //x, y - 1
    lipud.lineTo(264, 337); //x, y - 2
    lipud.lineTo(300, 352); //x, y - 3

    lipud.lineTo(319, 358); //конец
    lipud.stroke();


    lipud2.beginPath();
    lipud2.fillStyle="Yellow";
    lipud2.strokeStyle = "Yellow";
    lipud2.lineWidth= 3;
    lipud2.moveTo(303,330); //x, y alguspunkt(начало) -

    lipud2.lineTo(257,365); //x, y - 1
    lipud2.lineTo(234,380); //x, y - 2
    lipud2.lineTo(200,395); //x, y - 3

    lipud2.lineTo(163.5,406); //конец
    lipud2.stroke();


    lipud3.beginPath();
    lipud3.fillStyle="Crimson";
    lipud3.strokeStyle = "Crimson";
    lipud3.lineWidth= 3;
    lipud3.moveTo(151,426); //x, y alguspunkt(начало) -

    lipud3.lineTo(185,453); //x, y - 1
    lipud3.lineTo(230,480); //x, y - 2
    lipud3.lineTo(289,503); //x, y - 3

    lipud3.lineTo(347,514); //конец
    lipud3.stroke();


    lipud4.beginPath();
    lipud4.fillStyle="LightCyan";
    lipud4.strokeStyle = "LightCyan";
    lipud4.lineWidth= 3;
    lipud4.moveTo(337,460); //x, y alguspunkt(начало) -

    lipud4.lineTo(285,506); //x, y - 1
    lipud4.lineTo(262,517); //x, y - 2
    lipud4.lineTo(232,520); //x, y - 3

    lipud4.lineTo(147,510); //конец
    lipud4.stroke();
}

function kohal(){
    var podarok=document.getElementById("fonid").getContext("2d");
    var lenta=podarok;
    var podarok2=podarok;
    var lenta2=podarok;
    var lenta22=podarok;
    var podarok3=podarok;
    var lenta3=podarok;


    podarok.fillStyle="DarkOrange";
    podarok.fillRect(400,520,80,80);
    podarok.stroke();

    lenta.fillStyle="red";
    lenta.fillRect(430,520,20,80);
    lenta.stroke();


    podarok2.fillStyle="DarkSalmon";
    podarok2.fillRect(300,570,80,30);
    podarok2.stroke();

    lenta2.fillStyle="Gold";
    lenta2.fillRect(330,570,20,30);
    lenta2.stroke();

    lenta22.fillStyle="Gold";
    lenta22.fillRect(300,581,80,10);
    lenta22.stroke();



    podarok3.fillStyle="Red";
    podarok3.fillRect(15,500,100,100);
    podarok3.stroke();

    lenta3.fillStyle="White";
    lenta3.fillRect(50,500,30,100);
    lenta3.stroke();
}


function joonista(){

    kuusk();
    svetitsa(event);
    //pallid();
    taht();
    lipud();
    kohal();
    setTimeout(() => {  teksti(); }, 2000);

}