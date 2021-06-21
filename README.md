# timed-quiz

## task
    The task was to create a timed quiz that you would be scored after completion and then record the highscore to local storage.

## The project
    For this project, I was able to get the basic structure and funactionality working pretty quickly, but as I worked on the project I ran into some snags along the way.
    The way I approached this project was by putting all the questions and answers inside an object then using a for each loop to loop through the questions when the next button is clicked. The next button is not visible to the user until they select an answer ( the only indicator that I have at the moment for the user to know if they got the question correct is the score increaing I had plans to change the color of the answers to red and green to show right and wrong answers), which then removes the class of hidden from the next button. The hidden class is what I am using to change the visablity of the elements on the page. This is just a simple display none in the CSS. The highscore feture is still a work in progress, I have it saving to local storage but I havent been able to pull it from their successfully yet. 