
//Header
var headerV = true;
function Navi() {
    if (headerV == true) {
        document.getElementById("header").style.display = "none";
        headerV = false;
    }
    else {
        document.getElementById("header").removeAttribute("style");
        headerV = true;
    }
}


//Snake Game

//Varibel Sammlung
var playerStandort = [300, 310];
var playerStandortneu = [300, 310];
var enemy1Standort = [10, 10]; 
var enemy2Standort = [10, 10]; 
var enemy3Standort = [10, 10]; 
var enemy4Standort = [10, 10]; 
var geschw = 5;
var loose = false;
var right = 0;
var left = 0;
var up = 0;
var down = 0;
var rightAlt = 0;
var leftAlt = 0;
var upAlt = 0;
var downAlt = 0;
var rightEnemy1 = geschw;
var leftEnemy1 = 0;
var upEnemy1 = 0;
var downEnemy1 = 0;
var rightEnemy2 = 0;
var leftEnemy2 = 0;
var upEnemy2 = 0;
var downEnemy2 = geschw;
var rightEnemy3 = 0;
var leftEnemy3 = 0;
var upEnemy3 = 0;
var downEnemy3 = geschw;
var rightEnemy4 = 0;
var leftEnemy4 = 0;
var upEnemy4 = 0;
var downEnemy4 = geschw;
var richtungAngegeben = true;
var ersterStart = true;

const level1 = [[0,0], [0,20], [0,30], [0,40], [0,50], [0,60], [0,70], [0,80], [0,90], [0,100], [0,110], [0,120], [0,130], [0,140], [0,150], [0,160], [0,170], [0,180], [0,190], [0,200], [0,210], [0,220], [0,230], [0,240], [0,250], [0,260],
    [0,270], [0,280], [0,290], [0,300], [0,310], [10,0], [10,40], [10,110], [10,310], [20,0], [20,20], [20,40], [20,60], [20,70], [20,90], [20,110], [20,130], [20,150], [20,170], [20,180], [20,200], [20,210], [20,220], [20,230], [20,240], [20,250], [20,260], [20,270],
    [20,280], [20,290], [20,310], [30,0], [30,20], [30,40], [30,60], [30,70], [30,90], [30,110], [30,150], [30,170], [30,180], [30,200], [30,240], [30,310], [40,0], [40,90], [40,110], [40,120], [40,130], [40,140], [40,150], [40,170], [40,180], [40,200], [40,220], [40,240],
    [40,260], [40,270], [40,280], [40,290], [40,300], [40,310], [50,0], [50,10], [50,20], [50,30], [50,40], [50,50], [50,60], [50,70], [50,90], [50,170], [50,180], [50,200], [50,260], [50,270], [50,280], [50,290], [50,300], [50,310], [60,0], [60,10], [60,20], [60,60],
    [60, 70], [60, 90], [60, 110], [60, 120], [60, 140], [60, 150], [60, 160], [60, 170], [60, 180], [60, 200], [60, 220], [60, 230], [60, 240], [60, 310], [70, 0], [70, 10], [70, 20], [70, 40], [70, 60], [70, 70], [70, 90], [70, 140], [70, 180], [70, 240], [70, 260], [70, 280], [70, 290], [70, 310],
    [80,0], [80,90], [80,110], [80,120], [80,140], [80,160], [80,180], [80,190], [80,200], [80,210], [80,220], [80,260], [80,280], [80,290], [80,310], [90,0], [90,20], [90,30], [90,40], [90,50], [90,60], [90,70], [90,90], [90,160], [90,180], [90,240], [90,280], [90,220], [90,310],
    [100,0], [100,90], [100,110], [100,120], [100,130], [100,140], [100,150], [100,160], [100,180], [100,200], [100,240], [100,260], [100,300], [100,310], [110,0], [110,10], [110,20], [110,30], [110,40], [110,60], [110,70], [110,80], [110,90], [110,110], [110,150], [110,160], [110,200], [110,220],
    [110, 230], [110, 240], [110, 260], [110, 270], [110, 280], [110, 300], [110, 310], [120, 0], [120, 40], [120, 110], [120, 130], [120, 150], [120, 160], [120, 170], [120, 180], [120, 190], [120, 200], [120, 310], [130, 0], [130, 20], [130, 40], [130, 50], [130, 60], [130, 70], [130, 90], [130, 100], [130, 110], [130, 130],
    [130,170], [130,200], [130,220], [130,230], [130,240], [130,250], [130,270], [130,280], [130,290], [130,310], [140,0], [140,130], [140,150], [140,170], [140,180], [140,180], [140,190], [140,200], [140,250], [140,270], [140,310], [150,0], [150,10], [150,20], [150,30], [150,40], [150,50], [150,60],
    [150,70], [150,80], [150,90], [150,100], [150,110], [150,120], [150,130], [150,230], [150,250], [150,270], [150,290], [150,310], [160,0], [160,40], [160,50], [160,130], [160,150], [160,160], [160,170], [160,180], [160,190], [160,200], [160,210], [160,230], [160,250], [160,310], [170,0], [170,20],
    [170, 40], [170, 70], [170, 80], [170, 90], [170, 100], [170, 110], [170, 130], [170, 150], [170, 210], [170, 230], [170, 250], [170, 260], [170, 270], [170, 280], [170, 290], [170, 300], [170, 310], [180,0], [180,20], [180,40], [180,60], [180,70], [180,110], [180,150], [180,210], [180,230], [180,310], [190,0],
    [190,90], [190,110], [190,120], [190,130], [190,140], [190,150], [190,160], [190,170], [190,180], [190,190], [190,200], [190,210], [190,230], [190,250], [190,260], [190,270], [190,280], [190,290], [190,310], [200,0], [200,10], [200,30], [200,50], [200,60], [200,70], [200,80], [200,90], [200,110],
    [200,230], [200,290], [200,310], [210,0], [210,10], [210,30], [210,50], [210,110], [210,130], [210,140], [210,150], [210,170], [210,180], [210,190], [210,200], [210,210], [210,220], [210,230], [210,240], [210,250], [210,260], [210,270], [210,290], [210,310], [220,0], [220,10], [220,70], [220,80],
    [220, 90], [220, 110], [220, 130], [220, 290], [220, 310], [230, 0], [230, 10], [230, 20], [230, 30], [230, 50], [230, 90], [230, 110], [230, 130], [230, 150], [230, 170], [230, 180], [230, 190], [230, 210], [230, 230], [230, 240], [230, 250], [230, 260], [230, 270], [230, 280], [230, 290], [230, 310], [240,0], [240,10],
    [240,20], [240,30], [240,50], [240,60], [240,70], [240,110], [240,130], [240,170], [240,210], [240,310], [250,0], [250,90], [250,110], [250,130], [250,140], [250,150], [250,160], [250,170], [250,190], [250,210], [250,220], [250,230], [250,240], [250,250], [250,260], [250,270], [250,280], [250,290],
    [250,310], [260,0], [260,20], [260,30], [260,40], [260,50], [260,60], [260,60], [260,70], [260,80], [260,90], [260,110], [260,190], [260,250], [260,290], [260,310], [270,0], [270,70], [270,110], [270,120], [270,140], [270,150], [270,160], [270,170], [270,180], [270,190], [270,210], [270,230],
    [270, 250], [270, 290], [270, 310], [280, 0], [280, 10], [280, 30], [280, 50], [280, 70], [280, 90], [280, 110], [280, 120], [280, 140], [280, 210], [280, 230], [280, 250], [280, 290], [280, 310], [290,0], [290,10], [290,50], [290,70], [290,90], [290,110], [290,120], [290,140], [290,160], [290,170], [290,180],
    [290,190], [290,200], [290,210], [290,230], [290,250], [290,260], [290,270], [290,280], [290,290], [290,310], [300,0], [300,10], [300,20], [300,30], [300,40], [300,50], [300,90], [300,140], [300,230], [310,0], [310,10], [310,20], [310,30], [310,40], [310,50], [310,60], [310,70], [310,80],
    [310,90], [310,100], [310,110], [310,120], [310,130], [310,140], [310,150], [310,160], [310,170], [310,180], [310,190], [310,200], [310,210], [310,220], [310,230], [310,240], [310,250], [310,260], [310,270], [310,280], [310,290], [310,300], [310,310], [,], [,], [,], [,], [,],];

//image Sammlung
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const playerimg = new Image();
playerimg.src = 'img/player.png';
const mauerimg = new Image();
mauerimg.src = 'img/mauer.png';
const enemyimg = new Image();
enemyimg.src = 'img/enemy.png';


function gameloop() {

    if (ersterStart) {
        firstStart();
    }

    //Eigentlicher Gameloop
    var myInterval = window.setInterval(game, 250);

    function game() {
        player();
        collide();
        checkWinLoose();
        enemy1();
        enemy2();
        enemy3();
        enemy4();
        draw();
        checkWinLoose();
        richtungAngegeben = false;
        if (loose) {
            clearTimeout(myInterval);
        }
        console.log(enemy1Standort);
    }
}

function player() {
        playerStandortneu.shift();
        playerStandortneu.shift();
        playerStandortneu.push(playerStandort[0] + right - left);
        playerStandortneu.push(playerStandort[1] + down - up);
}

function enemy1() {

    abbiegeTest();
    collideTest();

    enemy1Standort.push(enemy1Standort[0] + rightEnemy1 - leftEnemy1);
    enemy1Standort.push(enemy1Standort[1] + downEnemy1 - upEnemy1);
    enemy1Standort.shift();
    enemy1Standort.shift();

    // Collide test
    function collideTest() {
        //Standortneu wird erstellt
        let enemy1Standortneu = [];
        enemy1Standortneu.push(enemy1Standort[0] + rightEnemy1 - leftEnemy1);
        enemy1Standortneu.push(enemy1Standort[1] + downEnemy1 - upEnemy1);

        for (let i = 0; i < level1.length; i++) {
            if (enemy1Standortneu[0] == level1[i][0] && enemy1Standortneu[1] == level1[i][1]
                || enemy1Standortneu[0] + 5 == level1[i][0] && enemy1Standortneu[1] == level1[i][1]
                || enemy1Standortneu[0] - 5 == level1[i][0] && enemy1Standortneu[1] == level1[i][1]
                || enemy1Standortneu[0] == level1[i][0] && enemy1Standortneu[1] + 5 == level1[i][1]
                || enemy1Standortneu[0] == level1[i][0] && enemy1Standortneu[1] - 5 == level1[i][1]
                || enemy1Standortneu[0] == 5 && enemy1Standortneu[1] == 10
                || enemy1Standortneu[0] == 300 && enemy1Standortneu[1] == 305) {

                if (rightEnemy1 == geschw || leftEnemy1 == geschw) {
                    if (collideTest2(0, 0, geschw, 0) && collideTest2(0, 0, 0, geschw)) {
                        let zufall = Math.random() * 10;
                        if (zufall < 5) {
                            rightEnemy1 = 0;
                            leftEnemy1 = 0;
                            downEnemy1 = geschw;
                            upEnemy1 = 0;
                            console.log("1");
                        }
                        else {
                            rightEnemy1 = 0;
                            leftEnemy1 = 0;
                            downEnemy1 = 0;
                            upEnemy1 = geschw;
                            console.log("2");
                        }
                    }
                    else if (collideTest2(0, 0, geschw, 0)) {
                        rightEnemy1 = 0;
                        leftEnemy1 = 0;
                        downEnemy1 = geschw;
                        upEnemy1 = 0;
                        console.log("3");
                    }
                    else if (collideTest2(0, 0, 0, geschw)) {
                        rightEnemy1 = 0;
                        leftEnemy1 = 0;
                        downEnemy1 = 0;
                        upEnemy1 = geschw;
                        console.log("4");
                    }
                }
                else if (downEnemy1 == geschw || upEnemy1 == geschw) {
                    if (collideTest2(geschw, 0, 0, 0) && collideTest2(0, geschw, 0, 0)) {
                        let zufall = Math.random() * 10;
                        if (zufall < 5) {
                            rightEnemy1 = geschw;
                            leftEnemy1 = 0;
                            downEnemy1 = 0;
                            upEnemy1 = 0;
                            console.log("5");
                        }
                        else {
                            rightEnemy1 = 0;
                            leftEnemy1 = geschw;
                            downEnemy1 = 0;
                            upEnemy1 = 0;
                            console.log("6");
                        }
                    }
                    else if (collideTest2(geschw, 0, 0, 0)) {
                        rightEnemy1 = geschw;
                        leftEnemy1 = 0;
                        downEnemy1 = 0;
                        upEnemy1 = 0;
                        console.log("7");
                    }
                    else if (collideTest2(0, geschw, 0, 0)) {
                        rightEnemy1 = 0;
                        leftEnemy1 = geschw;
                        downEnemy1 = 0;
                        upEnemy1 = 0;
                        console.log("8");
                    }
                }
            }
        }
    }

    function abbiegeTest() {

        let abbiegen = [];
        let right = false;
        let left = false;
        let down = false;
        let up = false;
        let rightFrei = true;
        let leftFrei = true;
        let downFrei = true;
        let upFrei = true;

        //abbiegen Right
        if (upEnemy1 == geschw || downEnemy1 == geschw) {
            right = true;
            abbiegen = [];
            abbiegen.push(enemy1Standort[0] + 10);
            abbiegen.push(enemy1Standort[1]);
            for (let i = 0; i < level1.length; i++) {
                if (abbiegen[0] == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] == level1[i][0] && abbiegen[1] + 5 == level1[i][1]
                    || abbiegen[0] == level1[i][0] && abbiegen[1] - 5 == level1[i][1]) {
                    rightFrei = false;
                }
            }
        }
        //abbiegen Left
        if (upEnemy1 == geschw || downEnemy1 == geschw) {
            left = true;
            abbiegen = [];
            abbiegen.push(enemy1Standort[0] - 10);
            abbiegen.push(enemy1Standort[1]);
            for (let i = 0; i < level1.length; i++) {
                if (abbiegen[0] == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] == level1[i][0] && abbiegen[1] + 5 == level1[i][1]
                    || abbiegen[0] == level1[i][0] && abbiegen[1] - 5 == level1[i][1]) {
                    leftFrei = false;
                }
            }
        }
        //abbiegen Down
        if (rightEnemy1 == geschw || leftEnemy1 == geschw) {
            down = true;
            abbiegen = [];
            abbiegen.push(enemy1Standort[0]);
            abbiegen.push(enemy1Standort[1] + 10);
            for (let i = 0; i < level1.length; i++) {
                if (abbiegen[0] == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] + 5 == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] - 5 == level1[i][0] && abbiegen[1] == level1[i][1]) {
                    downFrei = false;
                }
            }
        }
        //abbiegen Up
        if (rightEnemy1 == geschw || leftEnemy1 == geschw) {
            up = true;
            abbiegen = [];
            abbiegen.push(enemy1Standort[0]);
            abbiegen.push(enemy1Standort[1] - 10);
            for (let i = 0; i < level1.length; i++) {
                if (abbiegen[0] == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] + 5 == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] - 5 == level1[i][0] && abbiegen[1] == level1[i][1]) {
                    upFrei = false;
                }
            }
        }

        if (right && rightFrei) {
            let zufall = Math.random() * 10;
            if (zufall < 5) {
                rightEnemy1 = geschw;
                leftEnemy1 = 0;
                downEnemy1 = 0;
                upEnemy1 = 0;
            }
        }
        if (left && leftFrei) {
            let zufall = Math.random() * 10;
            if (zufall < 5) {
                rightEnemy1 = 0;
                leftEnemy1 = geschw;
                downEnemy1 = 0;
                upEnemy1 = 0;
            }
        }
        if (down && downFrei) {
            let zufall = Math.random() * 10;
            if (zufall < 5) {
                rightEnemy1 = 0;
                leftEnemy1 = 0;
                downEnemy1 = geschw;
                upEnemy1 = 0;
            }
        }
        if (up && upFrei) {
            let zufall = Math.random() * 10;
            if (zufall < 5) {
                rightEnemy1 = 0;
                leftEnemy1 = 0;
                downEnemy1 = 0;
                upEnemy1 = geschw;
            }
        }
    }

    function collideTest2(rightEnemy1, leftEnemy1, downEnemy1, upEnemy1) {
        let enemy1Standortneu = [];
        enemy1Standortneu.push(enemy1Standort[0] + rightEnemy1 - leftEnemy1);
        enemy1Standortneu.push(enemy1Standort[1] + downEnemy1 - upEnemy1);

        for (let i = 0; i < level1.length; i++) {
            if (enemy1Standortneu[0] == level1[i][0] && enemy1Standortneu[1] == level1[i][1]
                || enemy1Standortneu[0] + 5 == level1[i][0] && enemy1Standortneu[1] == level1[i][1]
                || enemy1Standortneu[0] - 5 == level1[i][0] && enemy1Standortneu[1] == level1[i][1]
                || enemy1Standortneu[0] == level1[i][0] && enemy1Standortneu[1] + 5 == level1[i][1]
                || enemy1Standortneu[0] == level1[i][0] && enemy1Standortneu[1] - 5 == level1[i][1]
                || enemy1Standortneu[0] == 5 && enemy1Standortneu[1] == 10
                || enemy1Standortneu[0] == 300 && enemy1Standortneu[1] == 305) {
                return false;
            }
        }
        return true;
    }
}

function enemy2() {

    abbiegeTest();
    collideTest();

    enemy2Standort.push(enemy2Standort[0] + rightEnemy2 - leftEnemy2);
    enemy2Standort.push(enemy2Standort[1] + downEnemy2 - upEnemy2);
    enemy2Standort.shift();
    enemy2Standort.shift();

    // Collide test
    function collideTest() {
        //Standortneu wird erstellt
        let enemy2Standortneu = [];
        enemy2Standortneu.push(enemy2Standort[0] + rightEnemy2 - leftEnemy2);
        enemy2Standortneu.push(enemy2Standort[1] + downEnemy2 - upEnemy2);

        for (let i = 0; i < level1.length; i++) {
            if (enemy2Standortneu[0] == level1[i][0] && enemy2Standortneu[1] == level1[i][1]
                || enemy2Standortneu[0] + 5 == level1[i][0] && enemy2Standortneu[1] == level1[i][1]
                || enemy2Standortneu[0] - 5 == level1[i][0] && enemy2Standortneu[1] == level1[i][1]
                || enemy2Standortneu[0] == level1[i][0] && enemy2Standortneu[1] + 5 == level1[i][1]
                || enemy2Standortneu[0] == level1[i][0] && enemy2Standortneu[1] - 5 == level1[i][1]
                || enemy2Standortneu[0] == 5 && enemy2Standortneu[1] == 10
                || enemy2Standortneu[0] == 300 && enemy2Standortneu[1] == 305) {

                if (rightEnemy2 == geschw || leftEnemy2 == geschw) {
                    if (collideTest2(0, 0, geschw, 0) && collideTest2(0, 0, 0, geschw)) {
                        let zufall = Math.random() * 10;
                        if (zufall < 5) {
                            rightEnemy2 = 0;
                            leftEnemy2 = 0;
                            downEnemy2 = geschw;
                            upEnemy2 = 0;
                            console.log("1");
                        }
                        else {
                            rightEnemy2 = 0;
                            leftEnemy2 = 0;
                            downEnemy2 = 0;
                            upEnemy2 = geschw;
                            console.log("2");
                        }
                    }
                    else if (collideTest2(0, 0, geschw, 0)) {
                        rightEnemy2 = 0;
                        leftEnemy2 = 0;
                        downEnemy2 = geschw;
                        upEnemy2 = 0;
                        console.log("3");
                    }
                    else if (collideTest2(0, 0, 0, geschw)) {
                        rightEnemy2 = 0;
                        leftEnemy2 = 0;
                        downEnemy2 = 0;
                        upEnemy2 = geschw;
                        console.log("4");
                    }
                }
                else if (downEnemy2 == geschw || upEnemy2 == geschw) {
                    if (collideTest2(geschw, 0, 0, 0) && collideTest2(0, geschw, 0, 0)) {
                        let zufall = Math.random() * 10;
                        if (zufall < 5) {
                            rightEnemy2 = geschw;
                            leftEnemy2 = 0;
                            downEnemy2 = 0;
                            upEnemy2 = 0;
                            console.log("5");
                        }
                        else {
                            rightEnemy2 = 0;
                            leftEnemy2 = geschw;
                            downEnemy2 = 0;
                            upEnemy2 = 0;
                            console.log("6");
                        }
                    }
                    else if (collideTest2(geschw, 0, 0, 0)) {
                        rightEnemy2 = geschw;
                        leftEnemy2 = 0;
                        downEnemy2 = 0;
                        upEnemy2 = 0;
                        console.log("7");
                    }
                    else if (collideTest2(0, geschw, 0, 0)) {
                        rightEnemy2 = 0;
                        leftEnemy2 = geschw;
                        downEnemy2 = 0;
                        upEnemy2 = 0;
                        console.log("8");
                    }
                }
            }
        }
    }

    function abbiegeTest() {

        let abbiegen = [];
        let right = false;
        let left = false;
        let down = false;
        let up = false;
        let rightFrei = true;
        let leftFrei = true;
        let downFrei = true;
        let upFrei = true;

        //abbiegen Right
        if (upEnemy2 == geschw || downEnemy2 == geschw) {
            right = true;
            abbiegen = [];
            abbiegen.push(enemy2Standort[0] + 10);
            abbiegen.push(enemy2Standort[1]);
            for (let i = 0; i < level1.length; i++) {
                if (abbiegen[0] == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] == level1[i][0] && abbiegen[1] + 5 == level1[i][1]
                    || abbiegen[0] == level1[i][0] && abbiegen[1] - 5 == level1[i][1]) {
                    rightFrei = false;
                }
            }
        }
        //abbiegen Left
        if (upEnemy2 == geschw || downEnemy2 == geschw) {
            left = true;
            abbiegen = [];
            abbiegen.push(enemy2Standort[0] - 10);
            abbiegen.push(enemy2Standort[1]);
            for (let i = 0; i < level1.length; i++) {
                if (abbiegen[0] == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] == level1[i][0] && abbiegen[1] + 5 == level1[i][1]
                    || abbiegen[0] == level1[i][0] && abbiegen[1] - 5 == level1[i][1]) {
                    leftFrei = false;
                }
            }
        }
        //abbiegen Down
        if (rightEnemy2 == geschw || leftEnemy2 == geschw) {
            down = true;
            abbiegen = [];
            abbiegen.push(enemy2Standort[0]);
            abbiegen.push(enemy2Standort[1] + 10);
            for (let i = 0; i < level1.length; i++) {
                if (abbiegen[0] == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] + 5 == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] - 5 == level1[i][0] && abbiegen[1] == level1[i][1]) {
                    downFrei = false;
                }
            }
        }
        //abbiegen Up
        if (rightEnemy2 == geschw || leftEnemy2 == geschw) {
            up = true;
            abbiegen = [];
            abbiegen.push(enemy2Standort[0]);
            abbiegen.push(enemy2Standort[1] - 10);
            for (let i = 0; i < level1.length; i++) {
                if (abbiegen[0] == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] + 5 == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] - 5 == level1[i][0] && abbiegen[1] == level1[i][1]) {
                    upFrei = false;
                }
            }
        }

        if (right && rightFrei) {
            let zufall = Math.random() * 10;
            if (zufall < 5) {
                rightEnemy2 = geschw;
                leftEnemy2 = 0;
                downEnemy2 = 0;
                upEnemy2 = 0;
            }
        }
        if (left && leftFrei) {
            let zufall = Math.random() * 10;
            if (zufall < 5) {
                rightEnemy2 = 0;
                leftEnemy2 = geschw;
                downEnemy2 = 0;
                upEnemy2 = 0;
            }
        }
        if (down && downFrei) {
            let zufall = Math.random() * 10;
            if (zufall < 5) {
                rightEnemy2 = 0;
                leftEnemy2 = 0;
                downEnemy2 = geschw;
                upEnemy2 = 0;
            }
        }
        if (up && upFrei) {
            let zufall = Math.random() * 10;
            if (zufall < 5) {
                rightEnemy2 = 0;
                leftEnemy2 = 0;
                downEnemy2 = 0;
                upEnemy2 = geschw;
            }
        }
    }

    function collideTest2(rightEnemy2, leftEnemy2, downEnemy2, upEnemy2) {
        let enemy2Standortneu = [];
        enemy2Standortneu.push(enemy2Standort[0] + rightEnemy2 - leftEnemy2);
        enemy2Standortneu.push(enemy2Standort[1] + downEnemy2 - upEnemy2);

        for (let i = 0; i < level1.length; i++) {
            if (enemy2Standortneu[0] == level1[i][0] && enemy2Standortneu[1] == level1[i][1]
                || enemy2Standortneu[0] + 5 == level1[i][0] && enemy2Standortneu[1] == level1[i][1]
                || enemy2Standortneu[0] - 5 == level1[i][0] && enemy2Standortneu[1] == level1[i][1]
                || enemy2Standortneu[0] == level1[i][0] && enemy2Standortneu[1] + 5 == level1[i][1]
                || enemy2Standortneu[0] == level1[i][0] && enemy2Standortneu[1] - 5 == level1[i][1]
                || enemy2Standortneu[0] == 5 && enemy2Standortneu[1] == 10
                || enemy2Standortneu[0] == 300 && enemy2Standortneu[1] == 305) {
                return false;
            }
        }
        return true;
    }
}

function enemy3() {

    abbiegeTest();
    collideTest();

    enemy3Standort.push(enemy3Standort[0] + rightEnemy3 - leftEnemy3);
    enemy3Standort.push(enemy3Standort[1] + downEnemy3 - upEnemy3);
    enemy3Standort.shift();
    enemy3Standort.shift();

    // Collide test
    function collideTest() {
        //Standortneu wird erstellt
        let enemy3Standortneu = [];
        enemy3Standortneu.push(enemy3Standort[0] + rightEnemy3 - leftEnemy3);
        enemy3Standortneu.push(enemy3Standort[1] + downEnemy3 - upEnemy3);

        for (let i = 0; i < level1.length; i++) {
            if (enemy3Standortneu[0] == level1[i][0] && enemy3Standortneu[1] == level1[i][1]
                || enemy3Standortneu[0] + 5 == level1[i][0] && enemy3Standortneu[1] == level1[i][1]
                || enemy3Standortneu[0] - 5 == level1[i][0] && enemy3Standortneu[1] == level1[i][1]
                || enemy3Standortneu[0] == level1[i][0] && enemy3Standortneu[1] + 5 == level1[i][1]
                || enemy3Standortneu[0] == level1[i][0] && enemy3Standortneu[1] - 5 == level1[i][1]
                || enemy3Standortneu[0] == 5 && enemy3Standortneu[1] == 10
                || enemy3Standortneu[0] == 300 && enemy3Standortneu[1] == 305) {

                if (rightEnemy3 == geschw || leftEnemy3 == geschw) {
                    if (collideTest2(0, 0, geschw, 0) && collideTest2(0, 0, 0, geschw)) {
                        let zufall = Math.random() * 10;
                        if (zufall < 5) {
                            rightEnemy3 = 0;
                            leftEnemy3 = 0;
                            downEnemy3 = geschw;
                            upEnemy3 = 0;
                            console.log("1");
                        }
                        else {
                            rightEnemy3 = 0;
                            leftEnemy3 = 0;
                            downEnemy3 = 0;
                            upEnemy3 = geschw;
                            console.log("2");
                        }
                    }
                    else if (collideTest2(0, 0, geschw, 0)) {
                        rightEnemy3 = 0;
                        leftEnemy3 = 0;
                        downEnemy3 = geschw;
                        upEnemy3 = 0;
                        console.log("3");
                    }
                    else if (collideTest2(0, 0, 0, geschw)) {
                        rightEnemy3 = 0;
                        leftEnemy3 = 0;
                        downEnemy3 = 0;
                        upEnemy3 = geschw;
                        console.log("4");
                    }
                }
                else if (downEnemy3 == geschw || upEnemy3 == geschw) {
                    if (collideTest2(geschw, 0, 0, 0) && collideTest2(0, geschw, 0, 0)) {
                        let zufall = Math.random() * 10;
                        if (zufall < 5) {
                            rightEnemy3 = geschw;
                            leftEnemy3 = 0;
                            downEnemy3 = 0;
                            upEnemy3 = 0;
                            console.log("5");
                        }
                        else {
                            rightEnemy3 = 0;
                            leftEnemy3 = geschw;
                            downEnemy3 = 0;
                            upEnemy3 = 0;
                            console.log("6");
                        }
                    }
                    else if (collideTest2(geschw, 0, 0, 0)) {
                        rightEnemy3 = geschw;
                        leftEnemy3 = 0;
                        downEnemy3 = 0;
                        upEnemy3 = 0;
                        console.log("7");
                    }
                    else if (collideTest2(0, geschw, 0, 0)) {
                        rightEnemy3 = 0;
                        leftEnemy3 = geschw;
                        downEnemy3 = 0;
                        upEnemy3 = 0;
                        console.log("8");
                    }
                }
            }
        }
    }

    function abbiegeTest() {

        let abbiegen = [];
        let right = false;
        let left = false;
        let down = false;
        let up = false;
        let rightFrei = true;
        let leftFrei = true;
        let downFrei = true;
        let upFrei = true;

        //abbiegen Right
        if (upEnemy3 == geschw || downEnemy3 == geschw) {
            right = true;
            abbiegen = [];
            abbiegen.push(enemy3Standort[0] + 10);
            abbiegen.push(enemy3Standort[1]);
            for (let i = 0; i < level1.length; i++) {
                if (abbiegen[0] == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] == level1[i][0] && abbiegen[1] + 5 == level1[i][1]
                    || abbiegen[0] == level1[i][0] && abbiegen[1] - 5 == level1[i][1]) {
                    rightFrei = false;
                }
            }
        }
        //abbiegen Left
        if (upEnemy3 == geschw || downEnemy3 == geschw) {
            left = true;
            abbiegen = [];
            abbiegen.push(enemy3Standort[0] - 10);
            abbiegen.push(enemy3Standort[1]);
            for (let i = 0; i < level1.length; i++) {
                if (abbiegen[0] == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] == level1[i][0] && abbiegen[1] + 5 == level1[i][1]
                    || abbiegen[0] == level1[i][0] && abbiegen[1] - 5 == level1[i][1]) {
                    leftFrei = false;
                }
            }
        }
        //abbiegen Down
        if (rightEnemy3 == geschw || leftEnemy3 == geschw) {
            down = true;
            abbiegen = [];
            abbiegen.push(enemy3Standort[0]);
            abbiegen.push(enemy3Standort[1] + 10);
            for (let i = 0; i < level1.length; i++) {
                if (abbiegen[0] == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] + 5 == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] - 5 == level1[i][0] && abbiegen[1] == level1[i][1]) {
                    downFrei = false;
                }
            }
        }
        //abbiegen Up
        if (rightEnemy3 == geschw || leftEnemy3 == geschw) {
            up = true;
            abbiegen = [];
            abbiegen.push(enemy3Standort[0]);
            abbiegen.push(enemy3Standort[1] - 10);
            for (let i = 0; i < level1.length; i++) {
                if (abbiegen[0] == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] + 5 == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] - 5 == level1[i][0] && abbiegen[1] == level1[i][1]) {
                    upFrei = false;
                }
            }
        }

        if (right && rightFrei) {
            let zufall = Math.random() * 10;
            if (zufall < 5) {
                rightEnemy3 = geschw;
                leftEnemy3 = 0;
                downEnemy3 = 0;
                upEnemy3 = 0;
            }
        }
        if (left && leftFrei) {
            let zufall = Math.random() * 10;
            if (zufall < 5) {
                rightEnemy3 = 0;
                leftEnemy3 = geschw;
                downEnemy3 = 0;
                upEnemy3 = 0;
            }
        }
        if (down && downFrei) {
            let zufall = Math.random() * 10;
            if (zufall < 5) {
                rightEnemy3 = 0;
                leftEnemy3 = 0;
                downEnemy3 = geschw;
                upEnemy3 = 0;
            }
        }
        if (up && upFrei) {
            let zufall = Math.random() * 10;
            if (zufall < 5) {
                rightEnemy3 = 0;
                leftEnemy3 = 0;
                downEnemy3 = 0;
                upEnemy3 = geschw;
            }
        }
    }

    function collideTest2(rightEnemy3, leftEnemy3, downEnemy3, upEnemy3) {
        let enemy3Standortneu = [];
        enemy3Standortneu.push(enemy3Standort[0] + rightEnemy3 - leftEnemy3);
        enemy3Standortneu.push(enemy3Standort[1] + downEnemy3 - upEnemy3);

        for (let i = 0; i < level1.length; i++) {
            if (enemy3Standortneu[0] == level1[i][0] && enemy3Standortneu[1] == level1[i][1]
                || enemy3Standortneu[0] + 5 == level1[i][0] && enemy3Standortneu[1] == level1[i][1]
                || enemy3Standortneu[0] - 5 == level1[i][0] && enemy3Standortneu[1] == level1[i][1]
                || enemy3Standortneu[0] == level1[i][0] && enemy3Standortneu[1] + 5 == level1[i][1]
                || enemy3Standortneu[0] == level1[i][0] && enemy3Standortneu[1] - 5 == level1[i][1]
                || enemy3Standortneu[0] == 5 && enemy3Standortneu[1] == 10
                || enemy3Standortneu[0] == 300 && enemy3Standortneu[1] == 305) {
                return false;
            }
        }
        return true;
    }
}

function enemy4() {

    abbiegeTest();
    collideTest();

    enemy4Standort.push(enemy4Standort[0] + rightEnemy4 - leftEnemy4);
    enemy4Standort.push(enemy4Standort[1] + downEnemy4 - upEnemy4);
    enemy4Standort.shift();
    enemy4Standort.shift();

    // Collide test
    function collideTest() {
        //Standortneu wird erstellt
        let enemy4Standortneu = [];
        enemy4Standortneu.push(enemy4Standort[0] + rightEnemy4 - leftEnemy4);
        enemy4Standortneu.push(enemy4Standort[1] + downEnemy4 - upEnemy4);

        for (let i = 0; i < level1.length; i++) {
            if (enemy4Standortneu[0] == level1[i][0] && enemy4Standortneu[1] == level1[i][1]
                || enemy4Standortneu[0] + 5 == level1[i][0] && enemy4Standortneu[1] == level1[i][1]
                || enemy4Standortneu[0] - 5 == level1[i][0] && enemy4Standortneu[1] == level1[i][1]
                || enemy4Standortneu[0] == level1[i][0] && enemy4Standortneu[1] + 5 == level1[i][1]
                || enemy4Standortneu[0] == level1[i][0] && enemy4Standortneu[1] - 5 == level1[i][1]
                || enemy4Standortneu[0] == 5 && enemy4Standortneu[1] == 10
                || enemy4Standortneu[0] == 300 && enemy4Standortneu[1] == 305) {

                if (rightEnemy4 == geschw || leftEnemy4 == geschw) {
                    if (collideTest2(0, 0, geschw, 0) && collideTest2(0, 0, 0, geschw)) {
                        let zufall = Math.random() * 10;
                        if (zufall < 5) {
                            rightEnemy4 = 0;
                            leftEnemy4 = 0;
                            downEnemy4 = geschw;
                            upEnemy4 = 0;
                            console.log("1");
                        }
                        else {
                            rightEnemy4 = 0;
                            leftEnemy4 = 0;
                            downEnemy4 = 0;
                            upEnemy4 = geschw;
                            console.log("2");
                        }
                    }
                    else if (collideTest2(0, 0, geschw, 0)) {
                        rightEnemy4 = 0;
                        leftEnemy4 = 0;
                        downEnemy4 = geschw;
                        upEnemy4 = 0;
                        console.log("3");
                    }
                    else if (collideTest2(0, 0, 0, geschw)) {
                        rightEnemy4 = 0;
                        leftEnemy4 = 0;
                        downEnemy4 = 0;
                        upEnemy4 = geschw;
                        console.log("4");
                    }
                }
                else if (downEnemy4 == geschw || upEnemy4 == geschw) {
                    if (collideTest2(geschw, 0, 0, 0) && collideTest2(0, geschw, 0, 0)) {
                        let zufall = Math.random() * 10;
                        if (zufall < 5) {
                            rightEnemy4 = geschw;
                            leftEnemy4 = 0;
                            downEnemy4 = 0;
                            upEnemy4 = 0;
                            console.log("5");
                        }
                        else {
                            rightEnemy4 = 0;
                            leftEnemy4 = geschw;
                            downEnemy4 = 0;
                            upEnemy4 = 0;
                            console.log("6");
                        }
                    }
                    else if (collideTest2(geschw, 0, 0, 0)) {
                        rightEnemy4 = geschw;
                        leftEnemy4 = 0;
                        downEnemy4 = 0;
                        upEnemy4 = 0;
                        console.log("7");
                    }
                    else if (collideTest2(0, geschw, 0, 0)) {
                        rightEnemy4 = 0;
                        leftEnemy4 = geschw;
                        downEnemy4 = 0;
                        upEnemy4 = 0;
                        console.log("8");
                    }
                }
            }
        }
    }

    function abbiegeTest() {

        let abbiegen = [];
        let right = false;
        let left = false;
        let down = false;
        let up = false;
        let rightFrei = true;
        let leftFrei = true;
        let downFrei = true;
        let upFrei = true;

        //abbiegen Right
        if (upEnemy4 == geschw || downEnemy4 == geschw) {
            right = true;
            abbiegen = [];
            abbiegen.push(enemy4Standort[0] + 10);
            abbiegen.push(enemy4Standort[1]);
            for (let i = 0; i < level1.length; i++) {
                if (abbiegen[0] == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] == level1[i][0] && abbiegen[1] + 5 == level1[i][1]
                    || abbiegen[0] == level1[i][0] && abbiegen[1] - 5 == level1[i][1]) {
                    rightFrei = false;
                }
            }
        }
        //abbiegen Left
        if (upEnemy4 == geschw || downEnemy4 == geschw) {
            left = true;
            abbiegen = [];
            abbiegen.push(enemy4Standort[0] - 10);
            abbiegen.push(enemy4Standort[1]);
            for (let i = 0; i < level1.length; i++) {
                if (abbiegen[0] == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] == level1[i][0] && abbiegen[1] + 5 == level1[i][1]
                    || abbiegen[0] == level1[i][0] && abbiegen[1] - 5 == level1[i][1]) {
                    leftFrei = false;
                }
            }
        }
        //abbiegen Down
        if (rightEnemy4 == geschw || leftEnemy4 == geschw) {
            down = true;
            abbiegen = [];
            abbiegen.push(enemy4Standort[0]);
            abbiegen.push(enemy4Standort[1] + 10);
            for (let i = 0; i < level1.length; i++) {
                if (abbiegen[0] == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] + 5 == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] - 5 == level1[i][0] && abbiegen[1] == level1[i][1]) {
                    downFrei = false;
                }
            }
        }
        //abbiegen Up
        if (rightEnemy4 == geschw || leftEnemy4 == geschw) {
            up = true;
            abbiegen = [];
            abbiegen.push(enemy4Standort[0]);
            abbiegen.push(enemy4Standort[1] - 10);
            for (let i = 0; i < level1.length; i++) {
                if (abbiegen[0] == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] + 5 == level1[i][0] && abbiegen[1] == level1[i][1]
                    || abbiegen[0] - 5 == level1[i][0] && abbiegen[1] == level1[i][1]) {
                    upFrei = false;
                }
            }
        }

        if (right && rightFrei) {
            let zufall = Math.random() * 10;
            if (zufall < 5) {
                rightEnemy4 = geschw;
                leftEnemy4 = 0;
                downEnemy4 = 0;
                upEnemy4 = 0;
            }
        }
        if (left && leftFrei) {
            let zufall = Math.random() * 10;
            if (zufall < 5) {
                rightEnemy4 = 0;
                leftEnemy4 = geschw;
                downEnemy4 = 0;
                upEnemy4 = 0;
            }
        }
        if (down && downFrei) {
            let zufall = Math.random() * 10;
            if (zufall < 5) {
                rightEnemy4 = 0;
                leftEnemy4 = 0;
                downEnemy4 = geschw;
                upEnemy4 = 0;
            }
        }
        if (up && upFrei) {
            let zufall = Math.random() * 10;
            if (zufall < 5) {
                rightEnemy4 = 0;
                leftEnemy4 = 0;
                downEnemy4 = 0;
                upEnemy4 = geschw;
            }
        }
    }

    function collideTest2(rightEnemy4, leftEnemy4, downEnemy4, upEnemy4) {
        let enemy4Standortneu = [];
        enemy4Standortneu.push(enemy4Standort[0] + rightEnemy4 - leftEnemy4);
        enemy4Standortneu.push(enemy4Standort[1] + downEnemy4 - upEnemy4);

        for (let i = 0; i < level1.length; i++) {
            if (enemy4Standortneu[0] == level1[i][0] && enemy4Standortneu[1] == level1[i][1]
                || enemy4Standortneu[0] + 5 == level1[i][0] && enemy4Standortneu[1] == level1[i][1]
                || enemy4Standortneu[0] - 5 == level1[i][0] && enemy4Standortneu[1] == level1[i][1]
                || enemy4Standortneu[0] == level1[i][0] && enemy4Standortneu[1] + 5 == level1[i][1]
                || enemy4Standortneu[0] == level1[i][0] && enemy4Standortneu[1] - 5 == level1[i][1]
                || enemy4Standortneu[0] == 5 && enemy4Standortneu[1] == 10
                || enemy4Standortneu[0] == 300 && enemy4Standortneu[1] == 305) {
                return false;
            }
        }
        return true;
    }
}

function collide() {
    for (let i = 0; i < level1.length; i++) {
        if (playerStandortneu[0] == level1[i][0] && playerStandortneu[1] == level1[i][1]
            || playerStandortneu[0] - 5 == level1[i][0] && playerStandortneu[1] == level1[i][1]
            || playerStandortneu[0] + 5 == level1[i][0] && playerStandortneu[1] == level1[i][1]
            || playerStandortneu[0] == level1[i][0] && playerStandortneu[1] + 5 == level1[i][1]
            || playerStandortneu[0] == level1[i][0] && playerStandortneu[1] - 5 == level1[i][1]
            || playerStandortneu[0] - 5 == level1[i][0] && playerStandortneu[1] - 5 == level1[i][1]
            || playerStandortneu[0] - 5 == level1[i][0] && playerStandortneu[1] + 5 == level1[i][1]
            || playerStandortneu[0] + 5 == level1[i][0] && playerStandortneu[1] - 5 == level1[i][1]
            || playerStandortneu[0] + 5 == level1[i][0] && playerStandortneu[1] + 5 == level1[i][1]) {
            right = rightAlt;
            left = leftAlt;
            up = upAlt;
            down = downAlt;
            player();
           // collide();
            return
        }
    }



    rightAlt = right;
    leftAlt = left;
    upAlt = up;
    downAlt = down;
    playerStandort.shift();
    playerStandort.shift();
    playerStandort.push(playerStandortneu[0]);
    playerStandort.push(playerStandortneu[1]);
}

function draw() {
    ctx.clearRect(0, 0, 320, 320);

    for (let i = 0; i < level1.length; i++) {
        ctx.drawImage(mauerimg, level1[i][0], level1[i][1]);
    }

    ctx.drawImage(playerimg, playerStandort[0], playerStandort[1]);
    ctx.drawImage(enemyimg, enemy1Standort[0], enemy1Standort[1]);
    ctx.drawImage(enemyimg, enemy2Standort[0], enemy2Standort[1]);
    ctx.drawImage(enemyimg, enemy3Standort[0], enemy3Standort[1]);
    ctx.drawImage(enemyimg, enemy4Standort[0], enemy4Standort[1]);
}

function restart() {
    playerStandortX = [0];
    playerStandortY = [0];
    loose = false;
    right = 0;
    left = 0;
    up = 0;
    down = geschw;
    gameloop();
}

function firstStart() {

    ersterStart = false;
    //Header ausschalten
    if (headerV == true) {
        document.getElementById("header").style.display = "none";
        headerV = false;
    }

    //Ausschalten der drag-down-refresh funtion
    document.querySelector("body").style.overscrollBehavior = "contain";

    //Button visibility
    const startButton = document.getElementById("start");
    startButton.remove();
    document.getElementById("restart").style.visibility = "visible";

}

function checkWinLoose() {
    if (playerStandort[0] == enemy1Standort[0] && playerStandort[1] == enemy1Standort[1]
        || playerStandort[0] == enemy2Standort[0] && playerStandort[1] == enemy2Standort[1]
        || playerStandort[0] == enemy3Standort[0] && playerStandort[1] == enemy3Standort[1] 
        || playerStandort[0] == enemy4Standort[0] && playerStandort[1] == enemy4Standort[1] )    {
        loose = true;
        window.alert("Loose!");
    }
    if (playerStandort[0] == 0 && playerStandort[1] == 10) {
        window.alert("Win!");
    }
}