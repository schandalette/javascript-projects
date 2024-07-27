const rpsTest = require('../RPS.js');

describe("test", function () {

    test("returns 'TIE!' if P1 == P2", function () {
        let output = rpsTest.whoWon('rock', 'rock');
        expect(output).toBe("TIE!");
    });
    test("returns 'Player 2 wins!' if P1 rock & P2 paper", function () {
        let output = rpsTest.whoWon('rock', 'paper');
        expect(output).toBe("Player 2 wins!");
    });
    test("returns 'Player 2 wins!' if P1 paper & P2 scissors", function () {
        let output = rpsTest.whoWon('paper', 'scissors');
        expect(output).toBe("Player 2 wins!");
    });
    test("returns 'Player 2 wins!' if P1 scissors & P2 rock", function () {
        let output = rpsTest.whoWon('scissors', 'rock');
        expect(output).toBe("Player 2 wins!");
    });
});