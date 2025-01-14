let miejsce_w_galerii =1;
pokaż_slajd(miejsce_w_galerii);

function następny_slajd(i){pokaż_slajd(miejsce_w_galerii += i);}
function obecny_slajd(n){pokaż_slajd(miejsce_w_galerii = n)}

function pokaż_slajd(n){
    let i;
    let slajd = document.getElementsByClassName("obraz_w_galerii");
    let text = document.getElementsByClassName("text_do_galerii")
    if(n>slajd.length){miejsce_w_galerii=1}
    if(n<1){miejsce_w_galerii=slajd.length}
    for(i=0;i<slajd.length; i++){
        slajd[i].style.display = "none";
    }
    for(i=0;i<text.length;i++){
        text[i].style.display = "none"
    }
    slajd[miejsce_w_galerii-1].style.display = "block";
    text[miejsce_w_galerii-1].style.display = "block"
}