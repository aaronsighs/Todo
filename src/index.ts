import './css/styles.scss';


import img1 from "./assets/images/test.png"
let image:HTMLImageElement = new Image();
image.src = img1;
image.id = "test-img-0001"
document.body.appendChild(image);
makeHtmlElement("div",document.body,{id:"content"})
document.body.appendChild(image);





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
if (option.classes) {option.classes.split(" ").forEach((child:string) =>{if(child)newEle.classList.add(child)}}
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
   return (<HTMLInputElement>document.querySelector("#section-"+id + " .make-new .create-new-todo input")).value;
    

}

function drawMakeNew(todos:TodosModel){
    console.log(todos)
    let section = <HTMLElement>document.querySelector("#section-"+todos.getId() + " .make-new");

    let createBox = makeHtmlElement("div",section,{classes:"create-new-todo container todo-name"});
    //let fastCreate = makeToggableTextBox("new todo","fastCreate-"+todos.getId(),createBox,"todo-name");
    let fastCreate = makeHtmlElement("input",createBox,{placeholder:"new todo",value:"new todo title", classes:"title"})
    let push       = makeHtmlElement("i",createBox,{classes:"push-new ",text:"quick create"})
    push.addEventListener("click", (e)=> {
        let todoName:string = newTodoNameText(todos.getId())
        let newTodo = new todo(todoName);

        todos.add(newTodo);
        createTodo(newTodo,todos);
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
    drawComments(todo);

}
}


function setCreateEditFormDefaults(todo:todo){
    (<HTMLInputElement>document.querySelector("#inputTitle")).value = todo.getTitle();
    (<HTMLInputElement>document.querySelector("#priority")).value = <string>todo.getOptions("priority");
    (<HTMLInputElement>document.querySelector("#description")).value = <string>todo.getDescription();

}

function redrawTodo(todos:TodosModel,todo:todo){
    let htmlTodo = createTodo(todo,todos,false);
    let oldTodo  = <HTMLElement>document.querySelector("#section-"+todos.getId() + " .todo-area .todo-ele")
    console.log("here")
    oldTodo.replaceWith(htmlTodo);

}



function drawComments(todo:todo){
    let formContent = <HTMLElement>document.querySelector(".form-module .content")
    let commentSection = makeHtmlElement("div",formContent,{classes:"comment-section"});
    (<Array<note>>todo.getOptions("notes")).forEach( (note:note)=>{
        makeHtmlElement("div",commentSection,{classes:"note",id:note.id,text:note.message})
     } )

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
    console.log(todos)
    
    let formBase = makeHtmlElement("div",document.body,{classes:"form-module"});
    formBase.addEventListener("click",e=>{
        if (e.target===formBase){
        document.body.removeChild(formBase);
        }
    },true)
    let content = makeHtmlElement("div",formBase,{classes:"content"})
    let form    = makeHtmlElement("form",content);
    let titleLabel = makeHtmlElement("label",form,{name:"title",text:"Title:"})
    let title = <HTMLInputElement>makeHtmlElement("input",form,{name:"title",placeholder:"newTodo",id:"inputTitle"})
    title.required = true;
    let descrLabel = makeHtmlElement("label",form,{name:"descr",text:"Description:"})
    let descr = <HTMLInputElement>makeHtmlElement("textArea",form,{name:"descr",placeholder:"description...",id:"description"})
    descr.style.resize = "none";
    let dateLabel = makeHtmlElement("label",form,{name:"descr",text:"Date:"})
    let date = <HTMLInputElement>makeHtmlElement("input",form,{name:"date",type:"date",id:"date"})
    let priorityLabel = makeHtmlElement("label",form,{name:"priority",text:"Priority:"})
    let priority = <HTMLInputElement>makeHtmlElement("input",form,{name:"priority",type:"color",value:"#ffff00",id:"priority"})
    let createBtn = <HTMLInputElement>makeHtmlElement("button",form,{text:"Create"})
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
    makeToggableTextBox(todos.getName(),todos.getId(),document.querySelector(eleSel),"title",(value:any)=>todos.setName(value))


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

function replaceTitleWithTextBox(todos:TodosModel){
    let textArea = createTextTitleArea(todos);
    document.querySelector(`#title-${todos.getId()} h3`).replaceWith(textArea);
}


function replaceTextBoxWithTitle(id:string,text:string){

}










function createTodo(todo:todo,todos:TodosModel,addToDom:boolean=true){
    let section = <HTMLElement>document.querySelector("#section-"+todos.getId() + " .todo-area")

    if (!addToDom){section=null}
    let todoEle = makeHtmlElement("div",section,{classes:"todo-ele"})

    let banner  = makeHtmlElement("div",todoEle,{classes:"banner"})
    if(todo.getOptions("priority")){
        banner.style.backgroundColor = <string>todo.getOptions("priority");
    }

    let check = makeHtmlElement("input",todoEle,{classes:"check",type:"checkbox"})
    let titlebox = makeToggableTextBox(todo.getTitle(),"title-"+todo.getId(),todoEle,"todo-name",(value:any)=>todo.setTitle(value))
    


    let stats = makeHtmlElement("div",todoEle,{classes:"stats"});
    if(todo.getOptions("dueDate")){
        let date = makeHtmlElement("div",stats,{text:<string>todo.getOptions("dueDate"),classes:"due-date"})
    }
    if(todo.getDescription()){
        let descrBtn = makeHtmlElement("i",stats,{classes:"descr-btn bi bi-card-text tooltip"})
        let ttp  = makeHtmlElement("div",descrBtn,{classes:"tooltiptext",text:"has a description"})
    }
    if((<Array<string>>todo.getOptions("notes"))){
        let length = (<Array<string>>todo.getOptions("notes")).length
        let comment = makeHtmlElement("i",stats,{classes:"descr-btn bi bi-chat-right-quote-fill tooltip"})
        let ttp2  = makeHtmlElement("div",comment,{classes:"tooltiptext",text:""+length+" comments"})

    }

    let controls = makeHtmlElement("div",todoEle,{classes:"controls"});
    let editBtn = makeHtmlElement("i",controls,{classes:"edit bi bi-pen"});
    editBtn.onclick = (e) =>{
        createEditForm(todos,todo)
    }


    let delBtn = makeHtmlElement("i",controls,{classes:"delete bi bi-trash2-fill"});
    delBtn.onclick = ()=>{ 
        let parent = document.querySelector(`#section-${todos.getId() + " .todo-area"}`);
        parent.removeChild(todoEle);
        todos.removeByTodo(todo);
    }
    check.onclick =(e:any)=> {
        
        //<HTMLElement>e.target.checked
        if (!todo.getOptions("checkValue")){
        (<HTMLElement>document.querySelector("#txtbox-title-"+todo.getId() + " input")).style.textDecoration ="line-through";
    }else{
        (<HTMLElement>document.querySelector("#txtbox-title-"+todo.getId() + " input")).style.textDecoration ="none";
    }
    todo.setOptions("checkValue",!todo.getOptions("checkValue"))
}
return todoEle
}




var onTodosView = (function(currentTodos:TodosModel){

    makeTitle("#content",currentTodos)
    let section = makeHtmlElement("div",document.querySelector("#content"),{classes:"todo-list",id:`section-${currentTodos.getId()}`})
    let todoArea = makeHtmlElement("div",section,{classes:"todo-area"});
    let makeNewArea = makeHtmlElement("div",section,{classes:"make-new"});
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




 class TodosModel{
     private todos:Array<todo>;
     name:string;
     private id:string;
     constructor(name:string){
        this.todos = [];
        this.name = name;
        this.id = ""+new Date().getTime();
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
         console.log("---"+this.name+"---");
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

 }


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
        if (!value){return}
        this.setProps(this.option,name,value);}
    setTitle(title:string){
        if(!title){return}
        this.title=title;}
    setDescription(text:string){
 
        this.desciption=text;}

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
 table.show();

 let allTodos:Array<TodosModel> = [table];

 onTodosView(table);
 let k = document.createElement("input");
 k.disabled  = true;
 document.body.appendChild(k);

