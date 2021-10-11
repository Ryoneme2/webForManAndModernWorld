const run = () => {
    const showComment = document.querySelector('.showComment');
console.log(showComment)
fetch('http://localhost:3001/showdata')
.then((res) => {
    return res.json();
})
.then((json) => {
    console.log(json);
    // const users = json.
    json.forEach((user) => {
        console.log(user.Name)
        const commentItem = document.createElement('div');
        commentItem.classList.add('comment-item');

        const fullName = document.createElement('h3');
        fullName.classList.add('comment-name');
        fullName.innerHTML = user.Name;

        const commentDesc = document.createElement('p');
        commentDesc.classList.add('comment-desc');
        commentDesc.innerHTML = user.Comment;

        commentItem.append(fullName, commentDesc);
        showComment.append(commentItem)
    })
})
console.log('here');
}

setTimeout(run, 1000);

