# textadventure-mitte
:house: **A text adventure game about the adventurous flat hunt in Berlin Mitte** :hut:

Application runs completely in browser.
[Stimulus JS](https://stimulus.hotwired.dev/handbook/introduction) is used in browser app for dynamic data (display questions, handle answers). Js-yaml is used to parse yaml into javascript-objects.

Questions and answers are in data.yml, connection between both via index numbers.

## TODO
- [] put all questions / answers in data.yml
- [] find correct entry in js-obj based on answer
- [] remove old question with new question
- [] remove old answers with new answers
- [] optimisations: load data.yml only once (on application start up?)
- [] error-handling for user