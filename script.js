var typingTimer;                //timer identifier
var doneTypingInterval = 500;  //time in ms (5 seconds)
var inventory = [
  ["Gauze Pad 2x2", "Gauze Pad 4x4", "Handtruck"],
  ["Nitrile Gloves M", "Nitrile Gloves L"]
];

var input;
var foundItems = [];

$(document).ready(function() {
    //on keyup, start the countdown
    console.log(input);
    $('#item').on('keyup', $(this), function(){
        clearTimeout(typingTimer);
        $(".results").empty();
        if ($('#item').val) {
            typingTimer = setTimeout(function(){
                //do stuff here e.g ajax call etc....
                input = $('#item').val();
                console.log(input);
                inventory.forEach(getItems);
            }, doneTypingInterval);
        }
    });
});

function getItems(item, index, arr) {
  foundItems = [];
  for(i = 0; i < item.length; i++) {
    if(item[i].toLowerCase().includes(input.toLowerCase())){
      console.log(item[i]);
      foundItems.push(item[i] + " " + (index + 1).toString());
    };
  };
  //prints results
  for(i = 0; i < foundItems.length; i++){
    $(".results").append("<p>" + foundItems[i] + "</p>");
  };
};


//issues with clearing dynamic elements
