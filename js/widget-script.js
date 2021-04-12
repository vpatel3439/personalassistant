//-------- Task List Code ---------
$(document).ready(function(){
    // to set the min value for today's date
let todaysDate = new Date(); 
let taskYear = todaysDate.getFullYear();
let taskMonth = ("0" + (todaysDate.getMonth() + 1)).slice(-2);
let taskDay = ("0" + todaysDate.getDate()).slice(-2);
let minDate = (taskYear +"-"+ taskMonth +"-"+ taskDay);
$("#addInput-date").attr("min",minDate);

let _title = document.getElementById("addInput-title");
let _note = document.getElementById("addInput-notes");
let _date = document.getElementById("addInput-date");
let _timeHours = document.getElementById("addInput-time-hours");
let _timeMinutes = document.getElementById("addInput-time-mins");
let _ampm = document.getElementById("ampm");
const _addTaskButton = document.getElementById("createTask");
const _cleaTaskButton = document.getElementById("clearTask");
let _displayTask = document.getElementById("displayTask");
let _displayErrorsTask = document.getElementById("displayErrorsTask");
let val = "";
function addTask() {
    if(_title.value!="") {
        if(_note.value!=""){
            if(_date.value!="") {
                if(_date.value >= minDate) {
                    if(_timeHours.value!="" && _timeMinutes.value!=""){
                        if(_timeHours.value<=12 && _timeMinutes.value<60){
                            _timeHours.value = padDigit(_timeHours.value);
                            _timeMinutes.value = padDigit(_timeMinutes.value);
                            val ="<h3>" + _title.value + "</h3>" + "<div><p><span class='tsknote'>" + _note.value + "<br/><br/></span>" + _date.value + "<time>" + _timeHours.value +":"+ _timeMinutes.value +_ampm.value+"</time></p><hr></div>";
                            updateTask();
                        }
                        else {
                            _displayErrorsTask.innerHTML = "Please enter time in 12 hours format!";
                        }
                    }
                    else {
                        _displayErrorsTask.innerHTML = "Please enter both time and minutes and try again!";
                    }
                }
                else {
                    _displayErrorsTask.innerHTML = "Please enter date and try again!";
                }
            }
            else {
                _displayErrorsTask.innerHTML = "Please enter date greater than current date!";
            }
        }
        else{
            _displayErrorsTask.innerHTML = "Please enter notes and try again!";
        }
    }
    else {
        _displayErrorsTask.innerHTML = "Please enter title and try again!";
    }
}
function updateTask() {
    _displayErrorsTask.innerHTML = "";
    if(val!=""){
        _displayTask.innerHTML += val;
    }
    else {
        _displayTask.innerHTML = val;
    }
    _title.value = "";
    _note.value = "";
    _date.value = "";
    _timeHours.value = "";  
    _timeMinutes.value = "";
}
function clearTask() {
    val = "";
    updateTask();
}

    
_addTaskButton.onclick = function() { addTask() };
_cleaTaskButton.onclick = function() { clearTask() };

// --------- Shopping List Code -----------
    
    
let _category = document.getElementById("category");
let _item = document.getElementById("addInput-itemName");
let _itemInstructions = document.getElementById("addInput-itemInstructions");
let _displayShopping= document.getElementById("displayShoppinglist");
const _addItemButton = document.getElementById("additem");
const _clearItemButton = document.getElementById("removeitem");
let _displayErrorsShoppingList = document.getElementById("displayErrorsShoppingList"); 
let d = new Date();
function addItem() {
    if(_item.value!="") {
        val = "<h3>" + _category.value + "</h3>" + "<div><p>" + _item.value + "<br/>" + _itemInstructions.value + "<br/><time>" + d.toDateString() + "</time></p><br><hr></div>";
        updateItem();
    }
    else {
        _displayErrorsShoppingList.innerHTML = "Please enter item and try again!";
    }
}
function updateItem() {
    _displayErrorsShoppingList.innerHTML = "";
    if(val!=""){
        _displayShopping.innerHTML += val;
    }
    else {
        _displayShopping.innerHTML = val;
    }
    _category.value = "Dairy";
    _item.value = "";
    _itemInstructions.value = "";
}
function clearItem() {
    val = "";
    updateItem();
}
_addItemButton.onclick = function() { addItem() };
_clearItemButton.onclick = function() { clearItem() };
    
// ------------- Appointment List Code ------------------
    
    
const _appointmentDate = document.getElementById("addInput-appointmentdate");
const _appointmentNotes = document.getElementById("addInput-appointmentnotes");
const _appointmentStarthours = document.getElementById("addInput-starttime-hours");
const _appointmentStartmins = document.getElementById("addInput-starttime-mins");
const _appointmentStartAMPM = document.getElementById("starttime-ampm");
const _appointmentEndhours = document.getElementById("addInput-endtime-hours");
const _appointmentEndmins = document.getElementById("addInput-endtime-mins");
const _appointmentEndAMPM = document.getElementById("endtime-ampm");
const _displayErrors = document.getElementById("displayErrors");
const _appointmentInput = document.getElementById("appointmentInput");

//Buttons
const _createAppointment = document.getElementById("createappointment");
const _clearAppointment = document.getElementById("clearappointment");
const _appointmentTable = document.getElementById("appointmentInput");


function padDigit(number) {
  if(number<10)
    return ("0" + number);
  else
    return number;
}

function validateDate() {
    let errorDate = "Please retry. Date is past overdue";
    let d= new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
    let apYear = parseInt(_appointmentDate.value.substring(0,4));
    let apMonth = parseInt(_appointmentDate.value.substring(5,7));
    let apDate = parseInt(_appointmentDate.value.substring(8,10));
    if(isNaN(apYear) || isNaN(apDate) || isNaN(apMonth))
        _displayErrors.innerHTML = "Please enter appointment date";
    else if (apYear < year) 
        _displayErrors.innerHTML = errorDate;
    else if (apYear > year)
        validateNotes();
    else {
        if(apMonth < (month+1))
            _displayErrors.innerHTML = errorDate;
        if(apMonth > (month+1))
            validateNotes();
        else {
            if(apDate <= date)
                _displayErrors.innerHTML = errorDate;
            else
                validateNotes();
        }
            
    }
        
}

function validateNotes() {
    let errorNote = "Please enter Note and retry.";
    if(!isNaN(_appointmentNotes.value))
        _displayErrors.innerHTML = errorNote;
    else 
        validateTime();
}

function validateTime() {
    let errorTime = "Start time is greater than End time. Please retry";
    let end;
    let start;
    if(_appointmentEndAMPM.value == "PM")
        end = parseInt(_appointmentEndhours.value) + 12;
    else 
        end = parseInt(_appointmentEndhours.value);
    if(_appointmentStartAMPM.value == "PM")
        start = parseInt(_appointmentStarthours.value) + 12;
    else 
        start = parseInt(_appointmentStarthours.value);
    
    
    if((isNaN(parseInt(_appointmentStarthours.value))) || (isNaN(parseInt(_appointmentStartmins.value))))
        _displayErrors.innerHTML = "Please enter start time";
    else if((isNaN(parseInt(_appointmentEndhours.value))) || isNaN(parseInt(_appointmentEndmins.value)))
        _displayErrors.innerHTML = "Please enter end time";
    else if( _appointmentStarthours.value > 12 ||
            _appointmentEndhours.value > 12 || 
            _appointmentStarthours.value < 0 ||
            _appointmentEndhours.value < 0 ||
            _appointmentEndmins.value > 60 ||
            _appointmentStartmins.value > 60 ||
            _appointmentEndmins.value < 0 ||
            _appointmentStartmins.value < 0
           )
        _displayErrors.innerHTML = "Please enter time in 12 hour format";
    else if (start > end)
        _displayErrors.innerHTML = errorTime;
    else if (start == end) {
        if((parseInt(_appointmentEndmins.value)) < parseInt(_appointmentStartmins.value))
            _displayErrors.innerHTML = errorTime;
        else displayAppointments();
        }
    else
        displayAppointments();
}
function displayAppointments() {
    _displayErrors.innerHTML = "";
    let startHours = padDigit(_appointmentStarthours.value);
    let endHours = padDigit(_appointmentEndhours.value);
    let startMins = padDigit(_appointmentStartmins.value);
    let endMins = padDigit(_appointmentEndmins.value);
    let row = _appointmentTable.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = _appointmentDate.value;
    cell2.innerHTML = _appointmentNotes.value;
    cell3.innerHTML = startHours + ":" + startMins +  " " + _appointmentStartAMPM.value;
    cell4.innerHTML = endHours + ":" + endMins +" " + _appointmentEndAMPM.value;
}

function clear() {
    _appointmentInput.innerHTML = "";
}

_createAppointment.onclick = validateDate;
_clearAppointment.onclick = clear;
    

// --------------- Jokes Code ---------------

const _jokeBtn = document.getElementById("jokeBtn");

var jokes= ['Guess the number of programmers it takes to change a light bulb? Zero its a hardware problem','I ate a clock yesterday, it was very time-consuming.','Real programmers count from 0.', 'Why did the programmer quit his job? Because he didnt get arrays.', ' My parents grew to like my girlfriend so much, they take her as their own daughter. Now they started looking for a proper boyfriend for her.','0 is false 1 is true right? 1','Moses had the first tablet that could connect to the cloud.','False! its funny because its True','I went to see the doctor about my short-term memory problems — the first thing he did was make me pay in advance.','Money talks: mine always says is goodbye.','Did you hear about the semi-colon that broke the law? He was given two consecutive sentences.','Today I found it named Challenge Accepted','Why do bees hum? They don’t remember the lyrics!','A pig stands in front of an electric socket: “Oh no, who put you into that wall?!"','I would love to change the world but they wont give me the source code.','Today a man knocked on my door and asked for a small donation towards the local swimming pool. I gave him a glass of water.','Don’t trust atoms, they make up everything','I farted in the Apple store and everyone got mad at me. Not my fault they dont have Windows.','250 lbs here on Earth is 94.5 lbs on Mercury. No, I am not fat. I’m just not on the right planet.','Hilarious and amazingly true thing: if a pizza has a radius (z) and a depth (a) that pizzas volume can be defined Pi*z*z*a.','What happens to a frogs car when it breaks down ? It gets toad away.'];
          
function newJoke() {
    var randomNumber=Math.floor(Math.random()*(20));
    document.getElementById('displayJoke').innerHTML=jokes[randomNumber];
    console.log("clicked");
}

_jokeBtn.onclick = newJoke;

// --------------- Read Quote -------------

const _quoteBtn = document.getElementById("quoteBtn");

var quotes=['Be yourself; everyone else is already taken.','Two things are infinite: the universe and human stupidity; and I am not sure about the universe.','Be who you are and say what you feel because those who mind dont matter and those who matter dont mind.','A room without books is like a body without a soul','You know you are in love when you cannot fall asleep because reality is finally better than your dreams.','You only live once, but if you do it right, once is enough','Be the change that you wish to see in the world','In three words I can sum up everything I have learned about life: it goes on.','If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals.','No one can make you feel inferior without your consent.','If you tell the truth, you dont have to remember anything','A friend is someone who knows all about you and still loves you','Always forgive your enemies; nothing annoys them so much.','To live is the rarest thing in the world. Most people exist, that is all.','Live as if you were to die tomorrow. Learn as if you were to live forever','I am so clever that sometimes I dont understand a single word of what I am saying','Without music, life would be a mistake.','We accept the love we think we deserve','To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.','Insanity is doing the same thing, over and over again, but expecting different results','Every moment is a fresh beginning','Die with memories, not dreams','Everything you can imagine is real'];


function newQuote() {
    var randomNumber=Math.floor(Math.random()*(20));
    document.getElementById('displayQuote').innerHTML=quotes[randomNumber];
}

_quoteBtn.onclick = newQuote;

});
