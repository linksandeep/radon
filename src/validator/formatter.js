const trim= function(){
    const greeting = '   Hello world!   ';

    console.log(greeting);
    console.log(greeting.trim());

}
const changetoLowerCase= function(){
    const sentence = 'The quick brown fox jumps over the lazy dog.';
    console.log(sentence.toLowerCase());

}
const changeToUpperCase= function(){
    const sentence = 'The quick brown fox jumps over the lazy dog.';
    console.log(sentence.toUpperCase());

}
module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase
// m