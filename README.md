# hangman-game
week 3 work

The challenge of work this week was to create the Hang-Man game though javascript.

I needed to create a word bank inside of an array then a function that would generate a random index of that array to give me a word at random.

With the random word generated i needed to “hide” that word which i accomplished by using another array that would hold “blank” dash marks and would hold the correct amount of character spaces by counting the generated hidden word length.

This was then split into the array and when a correct letter was guessed it would run through the function to regenerate the new “blank” array with the revealing characters at the correct index location of the “blank” array. If it was not a correct letter it would be thrown into a “missedLetter” array. When a letter was missed it would take subtract 1 from your attempts variable. 

Finally when the “blank” array was converted to a string and would equal the “hidden” array we would have a winner. The alert would tell you that you have won, the win count would increase by 1, and the game would reset everything whiling remembering the win count. If you did not win the game would restart with no added points to your wins and alert you that you have lost.
