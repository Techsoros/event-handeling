//option 1 ::  Find the selected id call function on this id via js

const redbg = document.getElementById('makeRed');
redbg.onclick = makeRed;

function makeRed() {

    document.body.style.backgroundColor = 'tomato';
    document.getElementById('heading-text').innerText = "Page is now Red";


}

//option 2 :: Directly call the function in HTML
function makeBlue() {
    document.body.style.backgroundColor = 'lightblue';
    document.getElementById('heading-text').innerText = "Page is now blue";
}

//option 3 ::  Find the selected id and write function directly on this id via js

document.getElementById('makeYellow').onclick = function () {
    document.body.style.backgroundColor = '#f8ff68';
    document.getElementById('heading-text').innerText = "Page is now yellow";
};



//option 4 :: using event listener
document.getElementById('makeGolden').addEventListener('click', makeGolden);

function makeGolden() {
    console.log("golden");
    document.body.style.backgroundColor = '#e9a70df0';
    document.getElementById('heading-text').innerText = "Page is now Golden";
}

//option 5 :: Add Direct Function non Event listener
document.getElementById('reset').addEventListener('click', function () {
    document.body.style.backgroundColor = 'initial';
    document.getElementById('heading-text').innerText = "";
});


// update name live 
document.getElementById('name-update').addEventListener('click', function () {
    let userName = document.getElementById('input-name').value.trim();

    if (userName.length != 0) {

        document.getElementById('user-name').innerText = userName;
        document.getElementById('input-name').value = "";
    }

});

//update live colo 

function setcolor(color) {

    //let color = document.getElementById('page-color').value;
    document.body.style.backgroundColor = color;

    if (color != "#ffffff") {

        document.getElementById('heading-text').innerText = "Page is now " + color;
    } else {
        document.getElementById('heading-text').innerText = "";
    }



}