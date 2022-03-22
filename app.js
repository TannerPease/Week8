// let list = [""];


//main input
let inputEle = document.createElement("input");
inputEle.placeholder="Username"

//input with password
// let inputElePass =  document.createElement("input")
// inputElePass.placeholder="Password...";
// inputElePass.setAttribute("type", "password")


//message ele
let messageEle = document.createElement("h3")

//button
let button = document.createElement("button")
button.innerHTML="Log in"

//checks for correct values
button.addEventListener("click",function (){
    if (inputEle.value==="coolStudent123"){
        button.remove()
        inputEle.remove()
        const pages=[
            {
                page:"Home",
                navigate: homePage
            },
            {
                page:"About",
                navigate: about
            },
            {
                page:"View",
                navigate: View
            }
        ]
        let counting = 0

        function navButt(pg,pr, nv){
            let button = document.createElement("button")
            button.innerHTML=pg;
            button.addEventListener("click", function (){
                document.body.querySelector(".wrapper").innerHTML=""
                nv();
            })
            pr.appendChild(button);
        }

        function navigation(){
            let nav= document.createElement("nav")
            let wrapper= document.createElement("div")
            wrapper.classList.add("wrapper");
            nav.style.height="80px";
            nav.style.backgroundColor="red";
            for (obj of pages){
                navButt(obj.page, nav, obj.navigate)
            }
            document.body.appendChild(nav);
            document.body.appendChild(wrapper)
        }

        function homePage(){
            let home= document.createElement("div")
            home.innerHTML="Home"
            document.body.querySelector(".wrapper").appendChild(home);
        }

        function about(){
            let about= document.createElement("h1")
            let aboutName = document.createElement("h3")
            about.innerHTML="About"
            aboutName.innerHTML="Tanner Pease"
            document.body.querySelector(".wrapper").appendChild(about);
            document.body.querySelector(".wrapper").appendChild(aboutName);

        }

        function View(){
            let note=""
            let prioirty= 0

            let noteEle = document.createElement("input");
            noteEle.placeholder="Type note"
            let prioEle = document.createElement("input");
            prioEle.placeholder="Number of Priority"
            document.body.querySelector(".wrapper").appendChild(noteEle)
            document.body.querySelector(".wrapper").appendChild(prioEle)
            let subButton = document.createElement("button")
            subButton.innerHTML="Submit Note"
            document.body.querySelector(".wrapper").appendChild(subButton)
            subButton.addEventListener("click", function (){
                note=noteEle.value
                prioirty=prioEle.value
                isNaN(note)
                isNaN(prioirty)
                if (isNaN(note)===true && isNaN(prioirty)===false) {
                    let ele = document.createElement("div")
                    let notePEle = document.createElement("h1")
                    notePEle.innerHTML = note + "     " + prioirty
                    ele.appendChild(notePEle)
                    document.body.querySelector(".wrapper").appendChild(ele)


                    // let note = document.createElement("h1")
                    //     let priority = document.createElement("h3")
                    //     noteEle.value=note
                    //     prioEle.value=priority
                    //     note.innerHTML=priority + note
                    //     document.body.appendChild(note)
                    // }
                }else{
                    let ele = document.createElement("div")
                    let notePEle = document.createElement("h1")
                    notePEle.innerHTML="Must be at least 1 character in the notes box and only numbers in the priority box "
                    ele.appendChild(notePEle)
                    document.body.querySelector(".wrapper").appendChild(ele)
                }
            })

            // let interact= document.createElement("div")
            // interact.innerHTML="Interact"
            // document.body.querySelector(".wrapper").appendChild(interact);
            // let countButt = document.createElement("button")
            // countButt.innerHTML="Increase Counter " + counting
            // document.body.appendChild(countButt)
            // countButt.addEventListener("click", function (){
            //     counting=counting+1
            //     countButt.innerHTML="Increase Counter " + counting
            //
            // })

        }

        navigation();
        homePage();
    }else{
        messageEle.innerHTML="incorrect username"
    }

    // list.push(inputEle.value)
    // renderList()

})

// let listEle = document.createElement("div")

// function renderList(){
//
//     listEle.innerHTML="";
//
//     for (let i=0; i<list.length;i++){
//         let ele = document.createElement("div")
//         ele.innerHTML=list[i]
//         listEle.appendChild(ele)
//     }
// }


//append inputs
document.body.appendChild(inputEle);
// document.body.appendChild(inputElePass)
document.body.appendChild(messageEle);
document.body.appendChild(button)
// document.body.appendChild(listEle)

// renderList()