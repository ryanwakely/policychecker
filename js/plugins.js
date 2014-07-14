// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var tNameValue;
var tPolicyNumberValue;
var tPolicyArray;
var i;

//Get Input and Run PolicyCheck
//
/////////////////////////
function PolicyChecker() {
   
    GetInput();
    PolicyCheck();
}

//Get Input
//
///////////////////

function GetInput() {
    
    tNameValue = document.getElementById("Name").value;
    tPolicyNumberValue = document.getElementById("PolicyNumber").value;
    tForm1Value = document.getElementById('Form1').value;
    tPolicyArray = document.getElementById('Policy').value.split(" ");
}

//Start output list
//
//////////////////
var output = "<ul>";


//PolicyCheck
//Loop through array and check if i == input
///////////////////////
function PolicyCheck() {

    for (i = 0; i < tPolicyArray.length; i++) {
        if (tPolicyArray[i] === tNameValue) {
            output += "<li>" + "Name Match" + "</li>";
            i++;
        }
        if (tPolicyArray[i] === tPolicyNumberValue) {
            output += "<li>" + "Policy Match" + "</li>";
            i++;
        }
        if (tPolicyArray[i] === tForm1Value) {
            output += "<li>" + "Form Match" + "</li>";
            i++;
        }

    }
//finish output
//
//////////////////
    output += "</ul>";
    document.getElementById('tOutPut').innerHTML = output;

}