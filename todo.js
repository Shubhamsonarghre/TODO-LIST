let btn=document.querySelector('button');
let ul=document.querySelector('ul');
let input=document.querySelector('input');

btn.addEventListener('click',function(){
    // console.log(input.value);
    let item=document.createElement('li');
    item.innerText=input.value;
    ul.appendChild(item);
    let deleBtn=document.createElement('button');
    deleBtn.innerText="Delete";
    deleBtn.classList.add("delete");
    item.appendChild(deleBtn);
    input.value="";
});

// let delbtns=document.querySelectorAll('.delete');

// for(delbtn of delbtns){
//     delbtn.addEventListener('click',function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

ul.addEventListener('click',function(event){
    if(event.target.nodeName=='BUTTON'){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log(listitem);
        console.log('delete');
    }
});