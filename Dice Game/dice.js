let player1_rand_num = Math.ceil(Math.random() * 6);
// console.log(player1_rand_num);
let player2_rand_num = Math.ceil(Math.random() * 6);

function choosePlayerDice(ran_num, player_num) {
    let random_dice_img = `dice${ran_num}.png`;
    // console.log(random_dice_img);

    let random_img_src = `images/${random_dice_img}`;
    // console.log(random_img_src);

    let img_elem = document.querySelectorAll('img')[player_num - 1];
    // console.log(img_elem);
    img_elem.setAttribute("src", random_img_src);
}

choosePlayerDice(player1_rand_num, 1);
choosePlayerDice(player2_rand_num, 2);

function evaluateResult(rand_num1, rand_num2) {
    if (rand_num1 > rand_num2) {
        document.querySelector('h1').innerHTML = "Player 1 Wins!";
    } else if (rand_num2 > rand_num1) {
        document.querySelector('h1').innerHTML = "Player 2 Wins!";
    } else {
        document.querySelector('h1').innerHTML = "Draw!";
    }
}

evaluateResult(player1_rand_num, player2_rand_num);