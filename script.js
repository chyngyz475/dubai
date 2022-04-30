var dialog = document.querySelector('dialog');
document.querySelector('#show').onclick = function (){
    dialog.show();
    document.querySelector('#modal-box').css("display","block");
}