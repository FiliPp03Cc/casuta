function setup() {
    createCanvas(200, 200);
    background(255);

    // Casa
    fill("#66CC99"); // baza verde
    rect(50, 100, 100, 80);

    fill("#FF6666"); // acoperis rosu
    triangle(40, 100, 160, 100, 100, 50);

    // usa
    fill("#996633"); // usa maro
    rect(70, 140, 25, 40);

    // geamurile
    fill("#6699FF"); // geamuri albastre
    rect(125, 110, 15, 30);
    rect(105, 110, 15, 30);

      // cosul de pe acoperis
      fill("#66CC99"); // cos negru
    rect(125, 60, 10, 25);

      // geam rotund pe acoperiș
      fill("#6699FF"); //geam albastru
      ellipse(100, 70, 20);
     
       // Corpul soarelui
    fill(255, 204, 0);
    ellipse(50, 50, 40, 40);

    //cleanta usii
    fill("#000000");
    ellipse(90,160,5)
}