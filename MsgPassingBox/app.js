(function(){
  const form = document.querySelector("#message");
  form.addEventListener('submit', function(e){
    e.preventDefault()

    const msg = document.querySelector('#msg')
    const feedback = document.querySelector(".feedback")
    const msgContent = document.querySelector(".message-content")

    if(msg.value === ''){
      feedback.classList.add("show")
      setTimeout(function(){
        feedback.classList.remove("show")
      }, 4000)
    }
    else{
      msgContent.textContent = msg.value
      msg.value = ''
    }
  })
})()