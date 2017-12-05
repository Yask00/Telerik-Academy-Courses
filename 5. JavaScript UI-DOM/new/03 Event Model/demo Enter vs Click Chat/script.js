var el = document.getElementById('input');
var msgContainer = document.getElementById('msg-container');
var sendBtn = document.getElementById('send-button');

//WITH ENTER
el.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) { //Uppercase C-ode
      sendMsg();
    }
});

//WITH BUTTON
sendBtn.addEventListener('click', sendMsg);

//APPEND CHILD FN
function sendMsg () {
        var msg = el.value;
        el.value = '';

        var msgEl = document.createElement('p');
        msgEl.innerText = msg;  //to escape <h1>text,/h1>
        console.log(msgContainer.childNodes[0]);
        msgContainer.insertBefore(msgEl, msgContainer.childNodes[0]);
}