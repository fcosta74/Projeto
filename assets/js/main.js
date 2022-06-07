// Abre e fecha o menu quando clicar no icone

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
   
}

// VERIFICAÇÃO DO FORMULÁRIO

const validForm = function(event){

    var inputName = document.querySelector("#name")
    var inputPhone = document.querySelector("#phone")
    var inputEmail = document.querySelector("#email")
    var inputMessage = document.querySelector("#message")

    // SE 
    if(inputName.value == ""){
        alert("Preencha seu nome");
        inputName.focus();
        return false;
    }    
    if(inputPhone.value == ""){
        alert("Preencha seu Telefone");
        inputPhone.focus();
        return false;
    }    
    if(inputEmail.value == ""){
        alert("Preencha seu e-mail");
        inputEmail.focus();
        return false;
    }
    if(inputMessage.value == ""){
        alert("Preencha uma mensagem");
        inputMessage.focus();
        return false;
    }        
    alert('Mesagem enviada')

}


// Deixa o headeer fixo quando rolar o scroll

const header = document.querySelector('#header')

window.addEventListener('scroll', function(){
    let getScrollPosition = window.scrollY;

    if(getScrollPosition > 10){
        header.style.position = 'fixed';
        header.style.bacground = '#FFf';
        header.style.borderBottom = '1px solid rgb(248.248.248';
       
    }else{
        header.style.position = 'relative';
        header.style.bacground = 'transparent';
        header.style.borderBottom = '0';
    
    }

})


 
