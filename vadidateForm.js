const validateForm = (event) => {
  event.preventDefault();

  console.log("clicked");
  const allName = document.getElementById("allName").value;
  const comment = document.getElementById("textComment").value;
  const validateText = document.querySelectorAll("#nameVarlidate");

  let isNoneCharName = false;
  let isNoneCharComment = false;

  isNoneCharName = (allName.length == 0 ) ? true :  false;
  isNoneCharComment = (comment.length == 0) ? true :  false;
//   console.log(isNoneCharName)
//   console.log(isNoneCharComment)
//   console.log(allName.length)
//   console.log(comment.length)
  if (!isNoneCharComment && !isNoneCharName) {
      console.log('done')

      
      
      fetch('http://localhost:3001/getdata',{
          method : 'POST',
          headers : {
              'Content-Type' : 'application/json;charset=utf-8'
          },
          redirect: 'follow',
          body : JSON.stringify({
            name : allName,
            comment : comment
          })
      })
      .then((res) => {
          return res.json();
      })
      .then((json) => {
        console.log(`${json} has been sent`)
        window.location('http://127.0.0.1:5500/index.html?')
      })

      validateText[0].style.display = "none";
      validateText[1].style.display = "none";
  } else {
    if (isNoneCharName && isNoneCharName) {
      validateText[0].style.display = "block";
    }
    if (isNoneCharComment && isNoneCharComment) {
      validateText[1].style.display = "block";
    }
  }
};
setTimeout(() => {
  document.querySelector("form").addEventListener("submit", validateForm);
}, 1000);
