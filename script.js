/*! *********************[Navsearch]********************* */

function navsearch() {

    let a = document.querySelectorAll("#box1id")[0]
    let b = document.getElementsByClassName("inp_div")[0]
    let c = document.querySelectorAll("#topnavsearchId")[0]
    let d = document.querySelectorAll("#navsearchId")[0]
    console.log(a)
    if (a.className == "box1") {
        a.className += " active"
        c.className += " topnavsearchactive"

        d.className += " navsearchactive"
        b.style.display = "block"
    }
    else {
        a.className = "box1"
        c.className = "topnavsearch"
        d.className = "navsearch"
        b.style.display = "none"
    }

}

/*! *********************[Touch anywhere to close it]********************* */
function hideall() {
    let a = document.querySelectorAll("#box1id")[0]
    let c = document.querySelectorAll("#topnavsearchId")[0]
    let d = document.querySelectorAll("#navsearchId")[0]
    let b = document.getElementsByClassName("inp_div")[0]
    a.className = "box1"
    c.className = "topnavsearch"
    d.className = "navsearch"
    b.style.display = "none"


    let aa=document.getElementsByClassName("small_box4")[0]
    aa.style.display="none"
    let bb=document.querySelectorAll("#navdownid")[0]
    bb.className=`fa-solid fa-caret-down`


    let brow_nav=document.getElementsByClassName("browsernav")[0]
    brow_nav.style.display="none"
    let b_up=document.querySelectorAll("#browserdnid")[0]
    b_up.className=`fa-solid fa-caret-down`
}

/*! *********************[Mobile Responsive Nav]********************* */
function respon_nav() {

    let a = document.querySelectorAll("#Logo_id")[0]

    let d = document.getElementById("Logo_id")
    let b = document.querySelectorAll("#right_widthid")[0]
    let c = document.getElementsByClassName("topnavsearch")[0]
    let e = document.getElementsByClassName("boxx1")[0]
    let f = document.getElementsByClassName("box3")[0]
    if (document.body.offsetWidth < 650) {
        if (a.className == "Logo") {
            a.className += " Logoactive"
        }
        d.innerHTML = `<img src="img/N.png" alt="">`
        if (b.className == "right_width") {
            b.className += " right_widthactive"
        }
        c.style.display = "none"
        f.style.display = "none"

    }
    else {
        d.innerHTML = `<img src="img/pngwing.com.png" alt="">`
        a.className = "Logo"
        b.className = "right_width"
        e.style.display = "none"
    }


}
respon_nav()


/*! *********************[User Right Up Down Control]********************* */

function showbox4nav(){
    let a=document.getElementsByClassName("small_box4")[0]
    a.style.display="block"
    let b=document.querySelectorAll("#navdownid")[0]
    b.className=`fa-solid fa-caret-up`

    let brow_nav=document.getElementsByClassName("browsernav")[0]
    brow_nav.style.display="none"
    let b_up=document.querySelectorAll("#browserdnid")[0]
    b_up.className=`fa-solid fa-caret-down`

}

function showbox4fullnav(){
    let a=document.getElementsByClassName("small_box4")[0]
    a.style.display="block"
    let b=document.querySelectorAll("#navdownid")[0]
    b.className=`fa-solid fa-caret-up`

    let brow_nav=document.getElementsByClassName("browsernav")[0]
    brow_nav.style.display="none"
    let b_up=document.querySelectorAll("#browserdnid")[0]
    b_up.className=`fa-solid fa-caret-down`
    
}


/*! *********************[Browser Nav]********************* */



function browsernav(){
    console.log("Hello")
    let a=document.getElementsByClassName("browsernav")[0]
    let b=document.querySelectorAll("#browserdnid")[0]
    if(a.style.display=="none" ||a.style.display==""){
        a.style.display="block"
        b.className=`fa-solid fa-caret-up`
    }
    else{
        a.style.display="none"
        b.className=`fa-solid fa-caret-down`
    } 

    let aa=document.getElementsByClassName("small_box4")[0]
    aa.style.display="none"
    let bb=document.querySelectorAll("#navdownid")[0]
    bb.className=`fa-solid fa-caret-down`
}