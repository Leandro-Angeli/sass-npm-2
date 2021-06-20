let childToAppend = document.createElement('div');
childToAppend.classList.add('child-to-append');

childToAppend.innerText = 'Child to append'

let parentDiv = document.querySelector('#parent');
parentDiv.prepend(childToAppend);
// const fetchFile = ()=>{
//     xhr = new XMLHttpRequest;
//     // console.log(2);
    
//     xhr.addEventListener('readystatechange',()=>{
//         if (xhr.readyState ===4 && xhr.status===200) {
//             console.log('ok');
//             rta.innerHTML = xhr.responseText;
            
//         } 
//         // else if(xhr.readyState ===4 && xhr.status === 404) {
//         //     console.log('error client');
            
//         // }
//         else{console.log(xhr.readyState);
//             console.log(xhr.status);
            
//          }
//     });
//     xhr.open('GET','src/logo-letras.png',true);
//     xhr.send();
// }
function req (){
    xhr = new XMLHttpRequest;
   xhr.addEventListener('readystatechange',()=>{
       if (xhr.readyState === 4 && xhr.status ===200 ) {
           rta.innerHTML = xhr.reponse;
           
       } 
       if(xhr.status===404) {
            console.error('not found');      
    }
    if(xhr.status >=  500)
    console.error('server down');
       
   })

    xhr.open('GET','src/logo-letras.png',true);
     xhr.send();

}

btn.addEventListener('click',req)


// FETCH
btnfetch.addEventListener('click',()=>{
    fetch('src/logo-letras.png')
    .then((res)=>{
       if (res.ok ===true) {
           console.log('ok');
           
       } else if (res.ok ===false){
           console.log('404');
           
       }
    })
    .catch((error)=>{
    console.error(error);
    });
});


