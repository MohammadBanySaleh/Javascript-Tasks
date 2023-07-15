//task to creat cards using javascript only
let names = ['Mohammad', 'Ali', 'Ahmad', 'Abdullah'];
let ages = ['24', '20', '25', '26'];
for (let i = 0; i < 4; i++) {
    const card = document.createElement("div");
    document.body.appendChild(card);
    document.body.style.display = "flex";
    document.body.style.flexDirection = "row";
    card.style.height = '350px';
    card.style.width = '400px';
    card.style.textAlign = "center";
    card.style.marginRight = "20px";
    card.style.backgroundColor = "grey";
    card.innerHTML = `
<h1 id='name'>${names[i]}</h1>
<hr>
<h2>${ages[i]}</h2>
<img src='./a.jpg' style="width:200px"></img>
`;
}


