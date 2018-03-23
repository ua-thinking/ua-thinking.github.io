// function to disable and enable buttons, receives an array with button IDs
// from http://coursesweb.net/javascript/
function disableEnableBtn(ids) {
  // traverses the array with IDs
  var nrids = ids.length;
  for(var i=0; i<nrids; i++) {
    // registers onclick event to each button
    if(document.getElementById(ids[i])) {
      document.getElementById(ids[i]).onclick = function() {
        this.setAttribute('disabled', 'disabled');     // disables the button by adding the 'disabled' attribute
        this.innerHTML = 'Desativado';        // changes the button text
        var idbtn = this.id;       // stores the button ID

        // calls a function after 2 sec. (2000 milliseconds)
        setTimeout( function() {
          document.getElementById(idbtn).removeAttribute('disabled');         // removes the "disabled" attribute
          document.getElementById(idbtn).innerHTML = 'Desativado';        // changes tne button text
        }, 2000 );
      }
    }
  }
}

// array with IDs of buttons
var btnid = ['commitButton', 'perform-commit'];

disableEnableBtn(btnid);      // calls the function