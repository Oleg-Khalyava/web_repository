/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*function nav (event, argli,argul) {
    let li = event.target;
    let id = li.dataset.myId;
    let ul = document.querySelector(`#${id}`);
    li.classlist.torget(argli);
    ul.classlist.torget(argul);
}*/
/*class Nav принимае парметры: 1 (colLi) - список li первого уровня, 2 (argLi) - класс для присвоения li первого уровня, 3(argUl) -  класс для присвоения ul второго вровня*/

class Nav {
    constructor (argLi, argUl){
        this.argLi = argLi;
        this.argUl = argUl;
        this.clearLi = null;
        this.clearUl = null;
    }
    nav_click (ob){
        if(this.clearLi!==null && this.clearUl!==null){
            this.clearLi.classList.remove(this.argLi);
            this.clearUl.classList.remove(this.argUl);
            
        }
       if (ob!==this.clearLi){
      ob.parentNode.style.overflow = "visible";
      let id = ob.dataset.myid;
      let ul = document.getElementById(id);
      ob.classList.toggle (this.argLi);
      ul.classList.toggle (this.argUl);
      this.clearLi = ob;
      this.clearUl = ul;
       } else {
            this.clearLi=null;
            this.clearUl=null;
       }
   }
   /*при отведении мыши с li первого уровня - закрытие раскрывающегося меню.
    *  применяется к событию mouseout для li первого уровня*/
nav_mouseoutLi_clear (ob){
     ob.parentNode.style.overflow = "hidden";
     let id =ob.dataset.myid;
     let ul = document.getElementById(id);
     ob.classList.remove(this.argLi);
     ul.classList.remove(this.argUl);
     this.clearLi = null;
     this.clearUl = null;
     }
     /*при наведении мыши на эл. ul второго уровня поддерживает раскрывающийся список в раскрытом положении.
      *  применяется к событию mouseover для ul второго уровня*/
     nav_mouseoverUl_add (ob){
     ob.classList.add (this.argUl);
     ob.parentNode.classList.add(this.argLi);
     }
};



let colLi = document.querySelectorAll("nav>ul>li");
let colUl = document.querySelectorAll("nav ul ul");
let a = new Nav ("nav_1", "nav_2");
for (let i=0; i<colLi.length; i++){
    colLi[i].onclick = function () {a.nav_click(this);};
};
for (let i=0; i<colLi.length; i++){
    colLi[i].addEventListener("mouseout", function (){a.nav_mouseoutLi_clear(this);});
};
for (let i=0; i<colUl.length; i++){
    colUl[i].addEventListener("mouseover", function (){a.nav_mouseoverUl_add(this);});
};

