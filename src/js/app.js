require('../css/main.css');
require('../less/main.less');

const WHO = 'JSmine';
let greeter = (who) => 'Hello from ' + who + '!';

document.getElementById('app').appendChild(
    document.createTextNode(greeter(WHO))
);
