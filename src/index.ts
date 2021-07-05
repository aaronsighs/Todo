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
    classes:Array<string>,
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
    disabled:boolean
}







function makeHtmlElement(eleType:string,eleSource:HTMLElement=null,option: Partial<htmlOptions>={}):HTMLElement{
let newEle:any= document.createElement(eleType);
if (option.id){newEle.id = option.id}
if (option.classes) {option.classes.forEach((child:string) => newEle.classList.add(child))}
if (option.text) {newEle.innerText = option.text}
if (option.click){newEle.onclick = ()=>option.click()}
if (option.hover){newEle.onmouseover = ()=>option.hover()}
if (option.listeners){option.listeners.forEach(el => newEle.addEventListener(el.type,()=>el.func()));}
if (option.children){option.children.forEach( (child:[string,htmlOptions])=>makeHtmlElement(child[0],newEle,child[1]))}
if (option.name){newEle.name = option.name;}
if (option.type){newEle.name = option.type;}
if (option.placeholder){newEle.placeholder = option.placeholder}
if (option.readOnly)(newEle.readOnly = option.readOnly)
//if (option.disabled)(newEle.disabled = option.disabled)
if (eleSource){
eleSource.appendChild(newEle);
}
return newEle;
}



function makeTitle(eleSel:string,todos:TodosModel,listeners:Array<Listener> = []  ) {
    makeHtmlElement("div",document.querySelector(eleSel),
    {classes:["title"],
    id: "title-" + todos.getId(),
    children:[
        ["h3",
        {text:todos.getName()}],
        ["i",
        {classes:["edit"],
         text:"edit",
        listeners:[{
            type:"click",
            func:()=>replaceTitleWithTextBox(todos)
            }]
    }]]
});
}

function hideElement(ele:HTMLElement){
    ele.style.visibility = "hidden";
}
function showElement(ele:HTMLElement){
    ele.style.visibility = "visible";
}


function createTextTitleArea(todos:TodosModel){
    let title = document.querySelector(`#title-${todos.getId()}`)
    let titleText = document.querySelector(`#title-${todos.getId()} h3`);
    let editBtn = (<HTMLElement>document.querySelector(`#title-${todos.getId()} i`));

    hideElement(editBtn);

    if (!titleText){
        return
    }
    let textArea = makeHtmlElement("div",null,{
        children:[["input",
        {placeholder:titleText.textContent}
        ],
        ["i",
        {classes:["close","bi","bi-x"],
        click:()=>{
            textArea.replaceWith(titleText)
            showElement(editBtn);
        }}],
        ["i",
        {
           classes:["bi","bi-reply","enter"],
            click:()=>{
                let text = (<HTMLInputElement>document.querySelector(`#title-${todos.getId()} div input`)).value;
                if (text.length){
                    titleText.textContent = text;
                    textArea.replaceWith(titleText);
                    todos.setName(text);
                    showElement(editBtn);
                }
            }
        }
        ]
    ]
    }
        )
        return textArea;

}

function replaceTitleWithTextBox(todos:TodosModel){
    let textArea = createTextTitleArea(todos);
    document.querySelector(`#title-${todos.getId()} h3`).replaceWith(textArea);
}


function replaceTextBoxWithTitle(id:string,text:string){

}









var onTodosView = (function(currentTodos:TodosModel){

    makeTitle("#content",currentTodos, [
        {
            type:"click",
            func:()=>{alert("hi")}
        }
    ])
    


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
     remove(id:string){
         this.todos = this.todos.filter( item => item.getId() !== id )
     }

     show(){
         console.log("---"+this.name+"---");
         this.todos.forEach( item => console.log(item.getTitle()))
     }
     getName(){
         return this.name;
     }
     setName(name:string){
         this.name = name;
     }
     getId(){
         return this.id;
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

 onTodosView(table);
 let k = document.createElement("input");
 k.disabled  = true;
 document.body.appendChild(k);
