const say = require ('say');

say.speak('Hello!');

say.stop();

say.speak("Hello?", 'Alex', 0.5);

function sorryDave(exp, how){
    alert(exp+', '+how);
}
setTimeout(sorryDave, 5000, 'Hello');