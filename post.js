// Drag button
document.getElementById('btn-post').addEventListener('click', function () {
    let post = document.getElementById('post-box').value;
    let name = document.getElementById('input-name').value;
    let p = document.createElement('p');
    let h4 = document.createElement('h4');
    p.innerText = post;
    h4.innerText = '-' + name;

    let article = document.createElement('article');
    article.append(p);
    article.append(h4);
    document.getElementById('post').append(article);







})