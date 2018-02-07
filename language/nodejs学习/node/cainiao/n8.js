/**
 * Created by yangbingxiao on 2016/9/21.
 */
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello");