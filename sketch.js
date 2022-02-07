
var bgimg, title, titleimg, play, about, title2, titleimg2, inputbox1, input3value
var gameState = "wait"
var pop1, popimg, a1, a2, a3
var levelclear1img

function preload() {
    bgimg = loadImage("bg2.PNG")
    titleimg = loadImage("title1.png")
    titleimg2 = loadImage("logo1.png")
    level1bg = loadImage("cave.png")
    popimg = loadImage("pop1.png")
    level2bg = loadImage("l2bg2.png")
    levelclear1img = loadImage("level1clearpop.gif")

    //level 2 objects
    l2ob1img=loadImage("obj1.png")
    l2ob2img=loadImage("obj2.png")
    l2ob3img=loadImage("obj3.png")
    l2ob4img=loadImage("obj4.png")
    l2ob5img=loadImage("obj5.png")
    l2ob6img=loadImage("obj6.png")
    l2ob7img=loadImage("obj7.png")
    l2ob8img=loadImage("obj8.png")





}

function setup() {
    createCanvas(windowWidth - 50, windowHeight - 20)
    pop1 = createSprite(width / 2, height / 2)
    pop1.addImage(popimg)
    pop1.visible = false
    pop1.scale = 2

    title = createSprite(width / 2, height - 500)
    title.addImage(titleimg)
    title.visible = false

    title2 = createSprite(width / 2, title.height + 50)
    title2.addImage(titleimg2)
    title2.visible = false

    play = createImg("playnew.png")
    play.position(width / 2 - 35, height - 125)
    play.size(220, 220)
    play.hide()

    about = createImg("how.png")
    about.position(width / 2 - 170, height - 125)
    about.size(220, 220)
    about.hide()

    aboutl1 = createImg("how.png")
    aboutl1.position(width / 2 - 170, height - 125)
    aboutl1.size(220, 220)
    aboutl1.hide()

    inputbox1 = createInput("Type here to solve Riddle & enter the cave")
    inputbox1.position(width / 8, height / 4)
    inputbox1.size(200, 25)
    inputbox1.hide()


    head1 = createElement("h2", " On a shelf or in your pocket,Have me near before you lock it. 'SEKY' ")
    // head1.html("Riddle 1")
    head1.style("color", "yellow")
    head1.position(50, inputbox1.y - 50)
    head1.size(1000, 25)
    head1.hide()



    inputbox2 = createInput("Type here to solve Riddle & enter the cave")
    inputbox2.position(width - (width / 6), height / 4)
    inputbox2.size(200, 25)
    inputbox2.hide()


    head2 = createElement("h2", "So full of light, but always in shade.'MLPA' ")
    //head2.html()
    head2.style("color", "yellow")
    head2.position(width - width / 3, inputbox2.y - 50)
    head2.size(500, 25)
    head2.hide()



    inputbox3 = createInput("Type here to solve Riddle & enter the cave")
    inputbox3.position(width / 2, height - (height / 4))
    inputbox3.size(200, 25)
    inputbox3.hide()


    head3 = createElement("h2", " What can you catch but not throw? 'LODC' ")
    // head3.html("Riddle 2")
    head3.style("color", "yellow")
    head3.position(width / 6, inputbox3.y)
    head3.style.backgroundColor = ("#fff")
    head3.size(500, 25)
    head3.hide()





    home = createImg("home.png")
    home.position(width / 2 - 170, height - 125)
    home.size(220, 220)
    home.hide()

    /*  restart=createImg("restart1.png")
      restart.position(width/2-40,height-65)
      restart.size(110,110)*/

    title.visible = false
    title2.visible = false
    play.hide()
    about.hide()

    //level clear sprites
    level1clear = createSprite(width / 2, height /1.5)
    level1clear.addImage(levelclear1img)
    level1clear.scale = 4
    level1clear.visible = false

//level 2 obj sprites
l2obj1=createSprite(100,100)
l2obj1.addImage(l2ob1img)
l2obj1.scale=0.25
l2obj1.visible=false

l2obj2=createSprite(50,50)
l2obj2.addImage(l2ob2img)
l2obj2.scale=0.25
l2obj2.visible=false

l2obj3=createSprite(100,100)
l2obj3.addImage(l2ob3img)
l2obj3.scale=0.25
l2obj3.visible=false

l2obj4=createSprite(50,50)
l2obj4.addImage(l2ob4img)
l2obj4.scale=0.25
l2obj4.visible=false

l2obj5=createSprite(100,100)
l2obj5.addImage(l2ob5img)
l2obj5.scale=0.25
l2obj5.visible=false

l2obj6=createSprite(50,50)
l2obj6.addImage(l2ob6img)
l2obj6.scale=0.25
l2obj6.visible=false

l2obj7=createSprite(100,100)
l2obj7.addImage(l2ob7img)
l2obj7.scale=0.25
l2obj7.visible=false

l2obj8=createSprite(50,50)
l2obj8.addImage(l2ob8img)
l2obj8.scale=0.25
l2obj8.visible=false




}

function draw() {
    if (gameState === "wait") {
        background(bgimg)
        title.visible = true
        title2.visible = true
        play.show()
        about.show()

    }

    if (play.mousePressed(() => {
        gameState = "Level 1"
        background(0)
        pop1.visible = false

    }))

        if (about.mousePressed(() => {
            gameState = "about"
            background(bgimg)
            pop1.visible = false
            title.visible = false
            title2.visible = false
            about.hide()
            home.show()

        }))



            if (gameState === "Level 1") {
                background(level1bg)
                title.visible = false
                title2.visible = false
                play.hide()
                about.hide()
                inputbox1.show()
                head1.show()
                inputbox2.show()
                head2.show()
                head3.show()
                inputbox3.show()
                aboutl1.show()

                //Riddle 1 and answer
                answer1 = inputbox1.value()
                console.log(answer1)

                if (answer1.toLowerCase() === "keys") {
                    console.log("correct")
                    a1 = "correct"
                }
                else { console.log("wrong") }

                //Riddle 2 and answer
                answer2 = inputbox2.value()
                console.log(answer2)

                if (answer2.toLowerCase() === "lamp") {
                    console.log("correct")
                    a2 = "correct"


                }
                else {
                    console.log("wrong")
                }

                //Riddle 3 and answer
                answer3 = inputbox3.value()
                console.log(answer3)

                if (answer3.toLowerCase() === "cold") {
                    console.log("correct")
                    a3 = "correct"

                }
                else {
                    console.log("wrong")
                }

                if (a1 === "correct" && a2 === "correct" && a3 === "correct") {
                    gameState = "Levelcleared"


                }


            }


    if (gameState === "Levelcleared") {
        level1clear.visible = true
        inputbox1.hide()
        inputbox2.hide()
        inputbox3.hide()
        head1.hide()
        head2.hide()
        head3.hide()
        if (keyDown("e")) {
            gameState = "Level 2"
        }

    }


    if (gameState === "Level 2") {
        background(level2bg)
        level1clear.visible = false

        inputbox1.hide()
        inputbox2.hide()
        inputbox3.hide()
        head1.hide()
        head2.hide()
        head3.hide()

        l2obj1.visible=true
        l2obj2.visible=true
        l2obj3.visible=true
        l2obj4.visible=true
        l2obj5.visible=true
        l2obj6.visible=true
        l2obj7.visible=true
        l2obj8.visible=true
        

        l2obj1.x=random(50,width-50)
        l2obj1.y=random(50,height-50)

        l2obj2.x=random(50,height-50)
        l2obj2.y=random(50,height-50)

        l2obj3.x=random(50,width-50)
        l2obj3.y=random(50,height-50)

        l2obj4.x=random(50,height-50)
        l2obj4.y=random(50,height-50)

        l2obj5.x=random(50,width-50)
        l2obj5.y=random(50,height-50)

        l2obj6.x=random(50,height-50)
        l2obj6.y=random(50,height-50)

        l2obj7.x=random(50,width-50)
        l2obj7.y=random(50,height-50)

        l2obj8.x=random(50,height-50)
        l2obj8.y=random(50,height-50)



    }


    if (aboutl1.mousePressed(() => {
        gameState = "aboutlevel1"
    }))
        if (gameState === "aboutlevel1") {
            pop1.visible = true

        }

    drawSprites()

}


function level1() {

}