function getElements(){
    var body = document.body;
    var navBar;
    var button;
    var menu;

    let nbArray = document.getElementsByClassName("navbar");
    navBar = nbArray[0];

    let bArray = document.getElementsByClassName("button");
    button = bArray[0];

    let mArray = document.getElementsByClassName("menu");
    menu = mArray[0];


    var res = [body, navBar, button, menu];

    return res;
}



function switchTheme(t){
    var elementCollection = getElements();
    var nCol = t.getNameCollection();
    let i = 0;

    var bA = document.getElementsByClassName("iButton");
 

    bA[0].className = nCol[5];
    bA[1].className = nCol[5];    


    while(i < 4){
        elementCollection[i].className = nCol[i+1];
        i++;
    }

    i = 0;
}