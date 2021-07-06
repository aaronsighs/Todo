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
    createFormBtn.onclick = createForm
    


}



function createForm(){
    
    let form = makeHtmlElement("div",document.body,{classes:"form-module"});
    form.addEventListener("click",e=>{
        if (e.target===form){
        document.body.removeChild(form);
        }
    },true)
    let content = makeHtmlElement("div",form,{classes:"content"})


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










function createTodo(todo:todo,todos:TodosModel){
    let section = <HTMLElement>document.querySelector("#section-"+todos.getId() + " .todo-area")

    let todoEle = makeHtmlElement("div",section,{classes:"todo-ele"})

    let banner  = makeHtmlElement("div",todoEle,{classes:"banner"})

    let check = makeHtmlElement("input",todoEle,{classes:"check",type:"checkbox"})
    let titlebox = makeToggableTextBox(todo.getTitle(),"title-"+todo.getId(),todoEle,"todo-name",(value:any)=>todo.setTitle(value))
    


    let stats = makeHtmlElement("div",todoEle,{classes:"stats"});

    let controls = makeHtmlElement("div",todoEle,{classes:"controls"});
    let editBtn = makeHtmlElement("i",controls,{classes:"edit bi bi-pen"});


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
         console.log(name,this.name)
         this.name = name;
     }
     getId(){
         return this.id;
     }
     getTodos(){
         return this.todos;
     }

 }

 type Options = {
    dueDate:string,
    priority:string,
    notes:Array<string>,
    isCheck:boolean,
    checkValue:boolean,
 }


class todo{
    private option:Partial<Options>;
    private title:string;
    private desciption:string;
    private id:string;
    private type:string;
    constructor(title:string="",desciption:string="",options={}){
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

    setOptions(name:keyof Partial<Options>,value:any){this.setProps(this.option,name,value);}
    setTitle(title:string){this.title=title;}
    setDescription(text:string){this.desciption=text;}

}




 let table = new TodosModel("thoughts");
 table.add(
     new todo(
         "tired",
         ""
     )
 )
 table.show();

 let allTodos:Array<TodosModel> = [table];

 onTodosView(table);
 let k = document.createElement("input");
 k.disabled  = true;
 document.body.appendChild(k);


createForm()