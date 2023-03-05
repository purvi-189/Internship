
//Regular expression

let txt = "this is for testing REGEX";
let patrn = /is/g;
let ans = patrn.exec(txt);

let pattern = /regex/i;
let ansi = pattern.exec(pattern);

//document.getElementById("demo").innerHTML = ans;
document.getElementById("demo").innerHTML = ansi;

let stat = "hdndb is njsd is dnajd";
alert(stat.match(/is/gi) );

alert(stat.match(/[^d]/g));

