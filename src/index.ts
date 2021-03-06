import './css/styles.scss';


// import img1 from "./assets/images/test.png"
// let image:HTMLImageElement = new Image();
// image.src = img1;
// image.id = "test-img-0001"
// document.body.appendChild(image);
let header = makeHtmlElement("div",document.body,{id:"header"})
let wrapper = makeHtmlElement("div",document.body,{id:"main-wrapper"})

let sidebar = makeHtmlElement("div",wrapper,{id:"side-bar"})
let content = makeHtmlElement("div",wrapper,{id:"content"})
let sidebarToggle = makeHtmlElement("i",header,{classes:"bi bi-list"});
sidebarToggle.onclick =  (e)=>{
    if (sidebar.classList.contains("slide-in1")){
        sidebar.classList.remove("slide-in1")
        sidebar.classList.add("slide-out1")
        // content.classList.remove("slide-out2")
        // content.classList.add("slide-in2")
        //content.style.width = "90%";
    }else{
        sidebar.classList.remove("slide-out1")
        sidebar.classList.add("slide-in1")
        // content.classList.remove("slide-in2")
        // content.classList.add("slide-out2")
       // content.style.width = "100%";
    }
}
// document.body.appendChild(image);





type Listener = {
    type: string;
    func:Function
}


type htmlOptions = {
    classes:string,
    text:string,
    click:Function,
    hover:Function,
    children:Array<[string,Partial<htmlOptions>]>
    id:string,
    listeners:Array<Listener>
    name:string,
    type:string,
    placeholder:string,
    readOnly:boolean,
    disabled:boolean,
    value:any
}







function makeHtmlElement(eleType:string,eleSource:HTMLElement=null,option: Partial<htmlOptions>={}):HTMLElement{
let newEle:any= document.createElement(eleType);
if (option.id){newEle.id = option.id}
if (option.classes) {
	option.classes.split(" ").forEach(
	(child:string) =>{
		if(child){
			newEle.classList.add(child);
			}
		})};
if (option.text) {newEle.innerText = option.text}
if (option.click){newEle.onclick = ()=>option.click()}
if (option.hover){newEle.onmouseover = ()=>option.hover()}
if (option.listeners){option.listeners.forEach(el => {if(el){newEle.addEventListener(el.type,()=>el.func())}})}
if (option.children){option.children.forEach( (child:[string,htmlOptions])=>makeHtmlElement(child[0],newEle,child[1]))}
if (option.name){newEle.name = option.name;}
if (option.type){newEle.type = option.type;}
if (option.placeholder){newEle.placeholder = option.placeholder}
if (option.readOnly)(newEle.readOnly = option.readOnly)
if (option.value)(newEle.value = option.value)
//if (option.disabled)(newEle.disabled = option.disabled)
if (eleSource){
eleSource.appendChild(newEle);
}
return newEle;
}


function getTodos(id:string){
    return allTodos.filter(todos=>todos.getId()===id)[0]
}


function changeText(id:string,target:HTMLInputElement){
    let todos = getTodos(id);
    todos.setName(target.value);
    target.readOnly = false;
    target.removeEventListener('click',()=>changeText(id,target))
}


function newTodoNameText(id:string):string{
   let newInput = (<HTMLInputElement>document.querySelector("#section-"+id + " .make-new .create-new-todo input"));
   if (!newInput.value){
       return newInput.placeholder;
   }
   return newInput.value;
    

}


function resetNewTodoNameText(id:string){
    let newInput = (<HTMLInputElement>document.querySelector("#section-"+id + " .make-new .create-new-todo input"));
    newInput.value = "";
}



function addNewToDo(todos:TodosModel){
    let todoName:string = newTodoNameText(todos.getId())
    resetNewTodoNameText(todos.getId())
    let newTodo = new todo(todoName);
    todos.add(newTodo);
    createTodo(newTodo,todos);
    localStorage.setItem("allTodos",JSON.stringify(allTodos))

}

function drawMakeNew(todos:TodosModel){

    let section = <HTMLElement>document.querySelector("#section-"+todos.getId() + " .make-new");

    let createBox = makeHtmlElement("div",section,{classes:"create-new-todo container "});
    //let fastCreate = makeToggableTextBox("new todo","fastCreate-"+todos.getId(),createBox,"todo-name");
    let fastCreate = makeHtmlElement("input",createBox,{placeholder:"new todo", classes:"title"})
    let push       = makeHtmlElement("i",createBox,{classes:"push-new ",text:"quick create"})
    push.addEventListener("click", (e)=> {
        addNewToDo(todos)
        e.stopPropagation()
        e.stopImmediatePropagation()

    },true)
    fastCreate.addEventListener("keypress", (e)=> {
        if (e.key!=="Enter"){
            return
        }
        addNewToDo(todos)
        e.stopPropagation()
        e.stopImmediatePropagation()

    },true)
    let createFormBtn = makeHtmlElement("i",createBox,{classes:"open-form bi bi-plus-square-fill"})
    createFormBtn.onclick = (e)=>createForm(todos);
    


}


function createEditForm(todos:TodosModel,todo:todo){
    createForm(todos);
    setCreateEditFormDefaults(todo)
    let formBase = <HTMLElement>document.querySelector(".form-module");
    let form = <HTMLElement>document.querySelector(".form-module form");
    let content = <HTMLElement>document.querySelector(".form-module .content");
    (<HTMLElement>document.querySelector(".form-module  h2")).textContent = "Update Task";
    content.style.height = "70%";
    document.querySelector("form button").textContent = "Update";
    form.onsubmit = (e)=>{
        e.preventDefault()
        let formData = getFormData();
        if (formData.date){todo.setOptions("dueDate",formData.date)}
        if (formData.priority){todo.setOptions("priority",formData.priority)}
        if (formData.title){todo.setTitle(formData.title);
        todo.setDescription(formData.descr);
        redrawTodo(todos,todo);
        document.body.removeChild(formBase);
    };
   

}
drawCommentSection(todo);
drawCommentInput(todo);
}


function setCreateEditFormDefaults(todo:todo){
    (<HTMLInputElement>document.querySelector("#inputTitle")).value = todo.getTitle();
    (<HTMLInputElement>document.querySelector("#priority")).value = <string>todo.getOptions("priority") ? <string>todo.getOptions("priority") :"#c6c6c6" ;
    (<HTMLInputElement>document.querySelector("#description")).value = <string>todo.getDescription();

}

function redrawTodo(todos:TodosModel,todo:todo){
    let htmlTodoWrapper = createTodo(todo,todos,false);
    let oldTodoWrapper  = <HTMLElement>document.querySelector("#todo-"+todo.getId())
 
    oldTodoWrapper.replaceWith(htmlTodoWrapper);

}


function drawCommentSection(todo:todo){
    let formContent = <HTMLElement>document.querySelector(".form-module .content")
    makeHtmlElement("hr",document.querySelector(".form-module"));
    let commentSection = makeHtmlElement("div",formContent,{classes:"comment-section"});
    drawComments(commentSection,todo)
}


function deleteHTMLComment(id:string){
    let commentSection = document.querySelector(".comment-section")
    commentSection.childNodes.forEach( (comment:HTMLElement) => {
        if (id===comment.id){
            commentSection.removeChild(comment)
        }
    });
}

function drawCommentInput(todo:todo){
    
    let formContent = <HTMLElement>document.querySelector(".form-module .content")
    let inputSection= makeHtmlElement("div",formContent,{classes:"comment-input", children:[["hr",{}]]})
    let commentSection = <HTMLElement>document.querySelector(" .form-module .content .comment-section");
    let label = <HTMLInputElement>makeHtmlElement("label",inputSection,{text:"Message: "}); 
    let textBox = <HTMLInputElement>makeHtmlElement("input",inputSection,{id:"message-input"}); // add a keypress on enter ? maybe ?
    let textPush = makeHtmlElement("i",inputSection,{classes:"bi bi-arrow-right-square-fill"})
    textBox.onkeypress = (e) =>{
        if (e.key === "Enter"){
            if (textBox.value){
      
                let note = todo.addNote(textBox.value);
                localStorage.setItem("allTodos",JSON.stringify(allTodos))
            
                drawComment(commentSection,note,todo);
                textBox.value = "";
            }

        }
    }
    textPush.onclick = ()=>{
        if (textBox.value){

            let note = todo.addNote(textBox.value);
            localStorage.setItem("allTodos",JSON.stringify(allTodos))
         
            drawComment(commentSection,note,todo);
            textBox.value = "";
        }
    }
    


}


function getTimeFromTimeBasedId(id:string){
 
    let date = new Date(+id)
  
    return date.toLocaleString('default', { month: 'short' ,day:'2-digit'})  + " " + `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    

}

function drawComment(section:HTMLElement,note:note,todo:todo){
 

    makeHtmlElement("div",section,{
        classes:"note",
        id:note.id,
        text:note.message,
        children:[["i",
        {
            classes:"bi bi-backspace-reverse-fill del-comment",
            click: (e:any)=>{
                todo.deleteNote(note.id);
                deleteHTMLComment(note.id);
            }
        }
    ],["div",
    {classes:"comment-time",
     text:getTimeFromTimeBasedId(note.id)}
    ]
]

})

}


function drawComments(section:HTMLElement,todo:todo){

    if (todo.getOptions("notes"))
    (<Array<note>>todo.getOptions("notes")).forEach( (note:note)=>{drawComment(section,note,todo)} )

}


function getFormData(){
    let text = (<HTMLInputElement>document.querySelector("#inputTitle")).value;
    let priority:string   =  (<HTMLInputElement>document.querySelector("#priority")).value;
    let descr:string   =  (<HTMLInputElement>document.querySelector("#description")).value;
    let date:any   =  (<HTMLInputElement>document.querySelector("#date")).value;
    let dateObj = new Date(date)
    dateObj.setDate(dateObj.getDate()+1);
    date = date ? dateObj.toLocaleString('default', { month: 'short' }) + date.slice(date.length-2) : date
    return {title:text,priority,descr,date}
}



function createForm(todos:TodosModel,allowComments=false){

    
    let formBase = makeHtmlElement("div",document.body,{classes:"form-module"});
    formBase.addEventListener("click",e=>{
        if (e.target===formBase){
        document.body.removeChild(formBase);
        }
    },true)
    let content = makeHtmlElement("div",formBase,{classes:"content"})
    makeHtmlElement("h2",content,{classes:"form-header",text:"Create New Task"})
    makeHtmlElement("hr",content,{classes:"form-header-hr"})
    content.style.height = "40%";
    let form    = makeHtmlElement("form",content,{});
    let formdiv1 = makeHtmlElement("div",form,{})
    let formdiv2 = makeHtmlElement("div",form,{})
    let formdiv3 = makeHtmlElement("div",form,{})
    let formdiv4 = makeHtmlElement("div",form,{})
    let formdiv5 = makeHtmlElement("div",form,{classes:"btn-div"})
    let titleLabel = makeHtmlElement("label",formdiv1,{name:"title",text:"Title:"})
    let title = <HTMLInputElement>makeHtmlElement("input",formdiv1,{name:"title",placeholder:"newTodo",id:"inputTitle"})
    title.required = true;
    let descrLabel = makeHtmlElement("label",formdiv2,{name:"descr",text:"Description:"})
    let descr = <HTMLInputElement>makeHtmlElement("textArea",formdiv2,{name:"descr",placeholder:"description...",id:"description"})
    descr.style.resize = "none";
    let dateLabel = makeHtmlElement("label",formdiv3,{name:"descr",text:"Date:"})
    let date = <HTMLInputElement>makeHtmlElement("input",formdiv3,{name:"date",type:"date",id:"date"})
    let priorityLabel = makeHtmlElement("label",formdiv4,{name:"priority",text:"Priority:"})
    let priority = <HTMLInputElement>makeHtmlElement("input",formdiv4,{name:"priority",type:"color",value:"#c6c6c6",id:"priority"})
    let createBtn = <HTMLInputElement>makeHtmlElement("button",formdiv5,{text:"Create"})
    form.onsubmit = (e)=>{
        e.preventDefault()
        // let newTodo = new todo(todoName);
        // todos.add(newTodo);
        // createTodo(newTodo,todos);
       let formData = getFormData()


        let newTodo = new todo(formData.title,formData.descr,{priority:formData.priority,dueDate:formData.date})
        todos.add(newTodo);
        createTodo(newTodo,todos);

        document.body.removeChild(formBase);

    }


    
    



}


function enableText(id:string,setFunc:Function){
    let target = <HTMLInputElement>document.querySelector("#txtbox-"+id+" input");
    let editBtn = <HTMLInputElement>document.querySelector("#txtbox-"+id+" i");
    target.value = "";
    target.readOnly = false;
    target.select();
    let func = (e:any) =>{
        if (e.key==="Enter" || e.type==="click"){
            let todos = getTodos(id);
            let value = target.value;
            if (!value.length){
                value = target.placeholder;
            }
            if (setFunc){setFunc(value);}
            target.readOnly = true;
            target.removeEventListener('keypress',func)
            enterBtn.replaceWith(editBtn);
            target.placeholder = value;
        }

    }
    let enterBtn = makeHtmlElement("i",null,{classes:"bi bi-box-arrow-in-right"})
    enterBtn.onclick = func;
    editBtn.replaceWith(enterBtn);
    let k = target.addEventListener("keypress",func);
}


function makeToggableTextBox(text:string,id:string,parentEle:HTMLElement=null,classes:string="",func:Function=null){
    return makeHtmlElement(
    "div",parentEle,
        {classes:"tg-txt " + classes,
        id: "txtbox-" + id,
        children:[
            ["input",
                {text:text,
                placeholder:text,
                readOnly:true
                ,value:text}
            ],
            ["i",
                {classes:"bi-pencil-square bi",
                click:()=>enableText(id,func)
                }
            ]
        ]
});
    // let div = document.createElement("div");
    // div.classList.add("tg-text")
    // div.id = "txtbox";
    // let input = document.createElement("input");
    // input.textContent = text;
    // let btn = document.createElement("i");
    // btn.classList.add("bi");
    // btn.classList.add("bi-pencil-square");
    // btn.addEventListener("click",()=>{});
    // div.appendChild(input);
    // div.appendChild(btn)
    // return div;
}



function makeTitle(eleSel:string,todos:TodosModel,listeners:Array<Listener> = []  ) {
    makeToggableTextBox(todos.getName(),todos.getId(),document.querySelector(eleSel),"todos title",(value:any)=>{
        todos.setName(value)
    
        changeNameSidebar(todos.getId(),value)
        
    })


//     makeHtmlElement("div",document.querySelector(eleSel),
//     {classes:["title"],
//     id: "title-" + todos.getId(),
//     children:[
//         ["input",
//         {text:todos.getName()}],
//         ["i",
//         {classes:["edit"],
//          text:"edit",
//         listeners:[{
//             type:"click",
//             func:()=>replaceTitleWithTextBox(todos)
//             }]
//     }]]
// });
}

function hideElement(ele:HTMLElement){
    ele.style.visibility = "hidden";
}
function showElement(ele:HTMLElement){
    ele.style.visibility = "visible";
}


function enableTitleTextBox(){

}


// function createTextTitleArea(todos:TodosModel){
//     let title = document.querySelector(`#title-${todos.getId()}`)
//     let titleText = document.querySelector(`#title-${todos.getId()} h3`);
//     let editBtn = (<HTMLElement>document.querySelector(`#title-${todos.getId()} i`));

//     hideElement(editBtn);

//     if (!titleText){
//         return
//     }
//     let textArea = makeHtmlElement("div",null,{
//         children:[["input",
//         {placeholder:titleText.textContent}
//         ],
//         ["i",
//         {classes:"close","bi "bi-x",
//         click:()=>{
//             textArea.replaceWith(titleText)
//             showElement(editBtn);
//         }}],
//         ["i",
//         {
//            classes:["bi","bi-reply","enter"],
//             click:()=>{
//                 let text = (<HTMLInputElement>document.querySelector(`#title-${todos.getId()} div input`)).value;
//                 if (text.length){
//                     titleText.textContent = text;
//                     textArea.replaceWith(titleText);
//                     todos.setName(text);
//                     showElement(editBtn);
//                 }
//             }
//         }
//         ]
//     ]
//     }
//         )
//         return textArea;

// }










function createTodo(todo:todo,todos:TodosModel,addToDom:boolean=true){
    let section = <HTMLElement>document.querySelector("#section-"+todos.getId() + " .todo-area")

    if (!addToDom){section=null}
    let isChecked = !todo.getOptions('checkValue') ? "not-checked" : "checked-off"
    let todoEleWrapper = makeHtmlElement("div",section,{classes:`todo-ele-wrapper ${isChecked} ` }      )
    let todoEle = makeHtmlElement("div",todoEleWrapper,{classes:"todo-ele"})
   
    todoEleWrapper.id = "todo-"+todo.getId();

    let banner  = makeHtmlElement("div",todoEle,{classes:"banner"})
    let todoEleInnerWrapper = makeHtmlElement("div",todoEle,{classes:"todo-ele-inner"})
    if(todo.getOptions("priority")){
        banner.style.backgroundColor = <string>todo.getOptions("priority");
    }

    let check = makeHtmlElement("input",todoEleInnerWrapper,{classes:"check",type:"checkbox"})
    let titlebox = makeToggableTextBox(todo.getTitle(),"title-"+todo.getId(),todoEleInnerWrapper,"todo-name",(value:any)=>todo.setTitle(value))
    


    let stats = makeHtmlElement("div",todoEleInnerWrapper,{classes:"stats"});
    if(todo.getOptions("dueDate")){
        let date = makeHtmlElement("div",stats,{text:<string>todo.getOptions("dueDate"),classes:"due-date"})
    }
    if(todo.getDescription()){
        let descrBtn = makeHtmlElement("i",stats,{classes:"descr-btn bi bi-card-text tooltip"})
        let ttp  = makeHtmlElement("div",descrBtn,{classes:"tooltiptext",text:"has a description"})
        descrBtn.onclick = (e)=>{

            if (document.querySelector("#todo-"+todo.getId()+" .info-box.com-btn")){
                document.querySelector("#todo-"+todo.getId()+" .info-box").classList.add("fast")
                document.querySelector("#todo-"+todo.getId()+" .info-box").classList.replace("new","old");
                let commentBtnRef = document.querySelector("#todo-"+todo.getId()+" .comment-btn")
                    if (commentBtnRef){(<HTMLButtonElement>commentBtnRef).disabled = true;}
                setTimeout(()=>{
                    todoEleWrapper.removeChild(document.querySelector("#todo-"+todo.getId()+" .info-box"));
                    if (commentBtnRef){
                        (<HTMLButtonElement>commentBtnRef).disabled = false;
                    }
                    let descriptionBox = makeHtmlElement("div",todoEleWrapper,{classes:"info-box new fast de-btn",children:[["div",{text:"Description: "}],["div",{text:todo.getDescription(),classes:"descr-txt"}]]});

                },250);
               

            }
            else if (document.querySelector("#todo-"+todo.getId()+" .info-box.new")){
                document.querySelector("#todo-"+todo.getId()+" .info-box").classList.remove("fast")
                document.querySelector("#todo-"+todo.getId()+" .info-box").classList.replace("new","old");
               (<HTMLButtonElement>descrBtn).disabled = true;
                setTimeout(()=>{
                    todoEleWrapper.removeChild(document.querySelector("#todo-"+todo.getId()+" .info-box"));
                    (<HTMLButtonElement>descrBtn).disabled = false;
                },1000);
                

            }
            else{
                let descriptionBox = makeHtmlElement("div",todoEleWrapper,{classes:"info-box new de-btn ",children:[["div",{text:"Description: "}],["div",{text:todo.getDescription(),classes:"descr-txt"}]]});
             }    
             }
    }
    if((<Array<note>>todo.getOptions("notes"))){
        let length = (<Array<note>>todo.getOptions("notes")).length
        let comment = makeHtmlElement("i",stats,{classes:"comment-btn bi bi-chat-right-quote-fill tooltip"})
        let ttp2  = makeHtmlElement("div",comment,{classes:"tooltiptext",text:""+length+" comments"})
        comment.onclick = (e)=>{


            if (document.querySelector("#todo-"+todo.getId()+" .info-box.de-btn")){
                document.querySelector("#todo-"+todo.getId()+" .info-box").classList.add("fast")
                document.querySelector("#todo-"+todo.getId()+" .info-box").classList.replace("new","old");
                let descrBtnRef = document.querySelector("#todo-"+todo.getId()+" .descr-btn")
                if (descrBtnRef){(<HTMLButtonElement>descrBtnRef).disabled = true;}
                (<HTMLButtonElement>comment).disabled = true;
                setTimeout(()=>{
                    todoEleWrapper.removeChild(document.querySelector("#todo-"+todo.getId()+" .info-box"));
                   
                    if (descrBtnRef){
                        (<HTMLButtonElement>descrBtnRef).disabled = false;
                    }
                    let notes:Array<note> = <Array<note>>todo.getOptions("notes")
                let message = notes[notes.length-1].message
                    let descriptionBox = makeHtmlElement("div",todoEleWrapper,{classes:"info-box new fast com-btn",children:[["div",{text:"Last Message: ",classes:"bold"}],["div",{text:message,classes:"descr-txt"}]]});
                },250);
               

            }
            else if (document.querySelector("#todo-"+todo.getId()+" .info-box.new")){
                document.querySelector("#todo-"+todo.getId()+" .info-box").classList.remove("fast")
                document.querySelector("#todo-"+todo.getId()+" .info-box").classList.replace("new","old");
               (<HTMLButtonElement>comment).disabled = true;
                setTimeout(()=>{
                    todoEleWrapper.removeChild(document.querySelector("#todo-"+todo.getId()+" .info-box"));
                    (<HTMLButtonElement>comment).disabled = false;

                },1000);
                
                

            }
            else{
                let notes:Array<note> = <Array<note>>todo.getOptions("notes")
                let message = notes[notes.length-1].message
                let descriptionBox = makeHtmlElement("div",todoEleWrapper,{classes:"info-box new com-btn",children:[["div",{text:"Last Message: "}],["div",{text:message,classes:"descr-txt"}]]});
             }    
             }
    }

    

    let controls = makeHtmlElement("div",todoEleInnerWrapper,{classes:"controls"});
    let editBtn = makeHtmlElement("i",controls,{classes:"edit bi bi-pen"});
    editBtn.onclick = (e) =>{
        createEditForm(todos,todo)
    }


    let delBtn = makeHtmlElement("i",controls,{classes:"delete bi bi-trash2-fill"});
    delBtn.onclick = ()=>{ 
        let parent = document.querySelector(`#section-${todos.getId() + " .todo-area "}`);
        parent.removeChild(todoEleWrapper);
        todos.removeByTodo(todo);
    }
    check.onclick =(e:any)=> {
        todo.setOptions("checkValue",!todo.getOptions("checkValue"))

        if (todo.getOptions("checkValue")){
        (<HTMLElement>document.querySelector("#todo-"+todo.getId())).classList.replace("not-checked","checked-off")
        banner.innerText = todo.getTitle();

    }else{
        (<HTMLElement>document.querySelector("#todo-"+todo.getId())).classList.replace("checked-off","not-checked")
        banner.innerText = ""

    }
}
    if (isChecked ==="checked-off"){
        banner.innerText = todo.getTitle();
    }
    banner.onclick = (e)=>{
        todo.setOptions("checkValue",false);
        (<HTMLInputElement>check).checked = false;

        (<HTMLElement>document.querySelector("#todo-"+todo.getId())).classList.replace("checked-off","not-checked");
        banner.innerText = ""
    


}

return todoEleWrapper
}




var onTodosView = (function(currentTodos:TodosModel){
    clearContent();
    makeTitle("#content",currentTodos)
    let section = makeHtmlElement("div",document.querySelector("#content"),{classes:"todo-list",id:`section-${currentTodos.getId()}`})
    let makeNewArea = makeHtmlElement("div",section,{classes:"make-new"});
    let todoArea = makeHtmlElement("div",section,{classes:"todo-area"});
    
    drawMakeNew(currentTodos)
    currentTodos.getTodos().forEach(todo=>{
        createTodo(todo,currentTodos);
    // let todoEle = makeHtmlElement("div",todoSection,{classes:"todo-ele"})
    // let check = makeHtmlElement("input",todoEle,{classes:"check",type:"checkbox"})
    
    // makeToggableTextBox(todo.getTitle(),"title-"+todo.getId(),todoEle,"todo-name",
    // {
    //     type:"click",
    //     func:()=>enableText("title-"+todo.getId(),(value:any)=>todo.setTitle(value))
    // })
    // makeToggableTextBox(todo.getDescription(),"descr-"+todo.getId(),todoEle,"descr title",
    // {
    //     type:"click",
    //     func:()=>enableText("descr-"+todo.getId(),(value:any)=>todo.setTitle(value))
    // })
    // check.onclick =(e:any)=>
    // {
    //     todo.setOptions("checkValue",!todo.getOptions("checkValue"))
    //     //(<HTMLElement>e.target.checked)
    //     if (!todo.getOptions("checkValue")){
    //     (<HTMLElement>document.querySelector("#txtbox-title-"+todo.getId() + " input")).style.textDecoration ="line-through";
    //     console.log(e)
    // }else{
    //     (<HTMLElement>document.querySelector("#txtbox-title-"+todo.getId() + " input")).style.textDecoration ="none";
    // }

    // }

    // });
    });
    

    


});





 type note ={
     id:string
     person?:string
     message:string
 }

 type Options = {
    dueDate:string,
    priority:string,
    notes:Array<note>,
    isCheck:boolean,
    checkValue:boolean,
 }


class todo{
    private option:Partial<Options>;
    private title:string;
    private desciption:string;
    private id:string;
    private type:string;
    constructor(title:string="",desciption:string="",options:Partial<Options>={}){
        this.title = title;
        this.desciption = desciption;
        this.option = options;
        this.id = ""+new Date().getTime();
    }   
    private getProps<Options, k extends keyof Options>(obj:Options,name:k){
        return obj[name];
    }
    private setProps<Options, k extends keyof Options>(obj:Options,name:k,value:any){
        obj[name] = value;
    }


    getOptions(name:keyof Options){return this.option[name];}
    getTitle(){ return this.title;}
    getDescription(){return this.desciption;}
    getId(){return this.id}

    setOptions(name:keyof Partial<Options>,value:any){
        this.setProps(this.option,name,value);}
    setTitle(title:string){
        if(!title){return}
        this.title=title;}
    setDescription(text:string){
 
        this.desciption=text;}


    addNote(message:string){
        let note = {
            message,
            id:""+new Date().getTime(),
        }
        if (!this.option.notes){
            this.option.notes = [note]
        }else{
            this.option.notes.push(note)
        }
        return note

    }
    deleteNote(id:string){
        this.option.notes = this.option.notes.filter(note=>note.id !==id)
    }
    fromStringify(inp:any){
        this.title = inp.title;
        this.id = inp.id
        this.option = inp.option;
        this.desciption =inp.description;
        return this;
    }

}


class TodosModel{
    private todos:Array<todo>;
    name:string;
    private id:string;
    constructor(name:string){
       this.todos = [];
       this.name = name;
       this.id = ""+name.length+"-"+new Date().getTime()
    }
    add(todo:todo){
        this.todos.push(todo);
    }
    removeIndex(index:number){
        this.todos = [...this.todos.splice(0,index),...this.todos.splice(index+1)];
    }
    removeById(id:string){
        this.todos = this.todos.filter( item => item.getId() !== id )
    }

    removeByTodo(todo:todo){
        this.removeById(todo.getId());
    }

    show(){
        this.todos.forEach( item => console.log(item.getTitle()))
    }
    getName(){
        return this.name;
    }
    setName(name:string){
        if(!name){return}
        this.name = name;
    }
    getId(){
        return this.id;
    }
    getTodos(){
        return this.todos;
    }
    fromStringify(inp:any){
        this.name = inp.name
     
        this.todos = inp.todos.map( (td:any)=> {if (td)new todo("","",{}).fromStringify(td)})
        this.id = inp.id
        

        return this
    }

}



 let table = new TodosModel("thoughts");
 table.add(
     new todo(
         "tired",
         "hi",
         {dueDate:"Jul10",
          notes:[{message:"im going there soon!",id:"note-001"}]
     }
     )
 )

 let table2 = new TodosModel("Foods");
 table2.add(
    new todo(
        "hi",
        "hi",
        {dueDate:"Jul10",
         notes:[{message:"im going there soon!",id:"note-002"}]
    }
    )
)
 





let allTodos:Array<TodosModel> = [table,table2];
// localStorage.setItem("allTodos","[]")





 function changeNameSidebar(id:string,value:string){
  
     
    let  sidebarName = document.querySelector("#sidebarTodoName-"+id + " .bar-title-text")
    if (!sidebarName){return }
    sidebarName.textContent = value;

     
 }


 function clearContent(){
     let content = document.querySelector("#content");
     while(content.lastChild){
         content.removeChild(content.lastChild)
     }

 }



 function removeTodos(id:string){
  
    allTodos =  allTodos.filter(todos=>todos.getId()!==id)
    localStorage.setItem("allTodos",JSON.stringify(allTodos))

 }
 


 let sidebarTitles = makeHtmlElement("div",null,{classes:"side-bar-titles"})
 allTodos.forEach( (todos,index) => {

    let htmlTodos = makeHtmlElement("div",sidebarTitles,{classes:`bar-title ${!index ? "sel" : "unsel"}`,id:"sidebarTodoName-"+todos.getId()});
    let text = makeHtmlElement("div",htmlTodos,{classes:"bar-title-text",text:todos.getName()})
    let del = makeHtmlElement("i",htmlTodos,{classes:"bi bi-trash2-fill"});
    htmlTodos.addEventListener("click", (e) =>{
        if ((<HTMLElement>e.target).nodeName === "I"){
            return
        }
        onTodosView(todos)
        removeSelClass();
        htmlTodos.classList.replace("unsel","sel")
        e.stopPropagation()
        
    },true);
    del.onclick = (e)=>{
        removeTodos(todos.getId());
        let ele = sidebarTitles.removeChild(htmlTodos);

        if (ele.classList.contains("sel")){
            if (allTodos.length>0){
               let grabbedEle = (<HTMLButtonElement>document.querySelectorAll(".bar-title")[0]);
               grabbedEle.click();
            }else{
            clearContent()
            }

        }
        
        
        
        

    }
 });
 let newTodosInput = makeHtmlElement("div",sidebar,{ classes:"make-new-todos",children:
[["input",{}],
]});


function removeSelClass(){
    let sidebarTitles = document.querySelector(".side-bar-titles")
    sidebarTitles.childNodes.forEach(
        (node:HTMLElement)=>node.classList.replace("sel","unsel")
    )
}


let newTodosBtn = makeHtmlElement("i",newTodosInput, {classes:"bi bi-plus-square-fill"})
newTodosBtn.onclick = (e)=>{
    let input = <HTMLInputElement>document.querySelector(".make-new-todos input");
 
    if (!input.value){return }
    
    let todos = new TodosModel(input.value);
    allTodos.push(todos)
    localStorage.setItem("allTodos",JSON.stringify(allTodos))
    let htmlTodos = makeHtmlElement("div",sidebarTitles,{classes:"bar-title unsel",text:todos.getName(),id:"sidebarTodoName-"+todos.getId()})
    let del = makeHtmlElement("i",htmlTodos,{classes:"bi bi-trash2-fill"});
    htmlTodos.addEventListener("click", (e) =>{
        onTodosView(todos)
        removeSelClass();
        htmlTodos.classList.replace("unsel","sel")
        e.stopPropagation()
        
    },false);
    del.addEventListener("click",(e)=>{
        removeTodos(todos.getId());
        sidebarTitles.removeChild(htmlTodos);
        clearContent();
        e.stopPropagation()

    },false)
}
sidebar.append(sidebarTitles);

 



 let d = new Date();
