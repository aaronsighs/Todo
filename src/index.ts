import './css/styles.scss';

import img1 from "./assets/images/test.png"
let image:HTMLImageElement = new Image();
image.src = img1;
image.id = "test-img-0001"
document.body.appendChild(image);







 class TodosModel{
     private todos:Array<todo>;
     name:string;
     constructor(name:string){
        this.todos = [];
        this.name = name;
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
