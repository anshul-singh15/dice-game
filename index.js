var var1 = Math.floor(Math.random() * 6) + 1;
var var2 = Math.floor(Math.random() * 6) + 1;
// alert(var1);
// alert(var2);

if(var1>var2)
{
  document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
}
else if(var2>var1)
{
  document.querySelector("h1").innerHTML = "Player2 Wins🚩";
}
else if(var1 == var2)
{
  document.querySelector("h1").innerHTML = "Draw!!!";
}


if(var1 === 1)
{
  document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
}
else if(var1 === 2)
{
  document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
}
else if(var1 === 3)
{
  document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
}
else if(var1 === 4)
{
  document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
}
else if(var1 === 5)
{
  document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
}
else if(var1 === 6)
{
  document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");
}

if(var2 == 1)
{
  document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");
}
else if(var2 == 2)
{
  document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
}
else if(var2 == 3)
{
  document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
}
else if(var2 == 4)
{
  document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
}
else if(var2 == 5)
{
  document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
}
else if(var2 == 6)
{
  document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
}
