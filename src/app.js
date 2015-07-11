/**
 * HomeMenu
 * 
 */
var LIGHTING = 0;
var SECURITY = 1;
var HEATING = 2;
var ENTERTAINMENT = 3;
var APPLIANCES = 4;

var UI = require('ui');

// Make a list of menu items
var zones = [
  {
    title: "Lighting",
    subtitle: "Lights/Lamps/Strips"
  },
  {
    title: "Security",
    subtitle: "Alarm/SmokeAlarm/Doors/Windows/Gates"
      },
  {
    title: "Heating",
    subtitle: "Thermostat/Air Conditioning/Ventilation"
  },
  {
    title: "Entertainment",
    subtitle: "Music/TV"
  },
  {
    title: "Appliances",
    subtitle: "Domestic Robots/Oven/Fridge"
  },
];
  var lighting = [
  {    title: "Lights On"   },
  {    title: "Lights Off"    },
  {    title: "Lights Red"    },
  {    title: "LightsBlue"    }
];
var security = [
  {    title: "Garage Open"     },
   {    title: "Garage Closed"     }
 
];
var heating = [
  {    title: "Air conditioning"     },
  {    title: "Ventilation"  },
  {    title: "Heaters"  }
];
var entertainment = [
  {    title: "Music On"   },
  {    title: "Music Off"   },
];
var appliances = [
  {    title: "Domestic Robot",     },
  {    title: "Fridge",  },
  {    title: "Oven",  } 
];
// Create the Menu, supplying the list of fruits
var zoneMenu = new UI.Menu({
  sections: [{
    title: 'Home Zones',
    items: zones,
  icon: 'IMAGE_HOME'
  }]
});
// Show the Menu
zoneMenu.show();

// Add a click listener for select button click
zoneMenu.on('select', function(e) {

  // Show new menu
  switch(  e.itemIndex   ) {
    case LIGHTING:
       // Create the Menu, supplying the list of fruits
      var lightingMenu = new UI.Menu({
        sections: [{
          title: 'Lighting options',
          items: lighting,
          icon: 'home_icon.png'
        }]
      });
      // Show the Menu
      lightingMenu.show();
      // Add a click listener for select button click
  lightingMenu.on('select', function(e) {  
    // Show new menu
    switch(  e.itemIndex   ) {
      case 0:
         // Show the Menu
          console.log('case 00 Lights ON!'+ e.itemIndex );
        setLights('play');
        break;
      case 01:
       console.log('case 01 Lights Off!'+ e.itemIndex );
         setLights('stop');
        break;
      case 02:
       console.log('case 01 Lights Red!'+ e.itemIndex );
         setLights('red');
        break;
      case 03:
       console.log('case 01 Lights white!'+ e.itemIndex );
         setLights('white');
        break;
      default:
        console.log('Key not recognized!'+ e.itemIndex );
        break;
      }
  });
      break;
    case SECURITY:
      var securityMenu = new UI.Menu({
        sections: [{
          title: 'Security options',
          items: security,
          icon: 'security_icon.png'
        }]
      });
      // Show the Menu
      securityMenu.show();
      break;
    case HEATING:
      var heatingMenu = new UI.Menu({
        sections: [{
          title: 'Security options',
          items: heating,
          icon: 'heating_icon.png'
        }]
      });
      // Show the Menu
      heatingMenu.show();
      break;
    case ENTERTAINMENT:
      var entertainmentMenu = new UI.Menu({
        sections: [{
          title: 'Entertainment options',
          items: entertainment,
          icon: 'entertainment_icon.png'
        }]
      });
      // Show the Menu
      entertainmentMenu.show();
      break;
       case APPLIANCES:
      var appliancestMenu = new UI.Menu({
        sections: [{
          title: 'Appliance options',
          items: appliances,
          icon: 'appliances_icon.png'
        }]
      });
      // Show the Menu
      appliancestMenu.show();
      break;
    default:
      console.log('Key not recognized!'+ e.itemIndex );
      break;
    }
  
});

var xhrRequest = function (url, type, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open(type, url);
  xhr.send(data);
};

function setLights(state) {
  // Construct URL
     console.log('TEsting POST.... ');
   var actionitem = {				
				uname : "UsrKey",
				smartitemid: 1,
				smartitemname : "Music Player",
				requiredstate :	state,						
				actionstatus: "P",			
		};
		var jsonsa = JSON.stringify(actionitem);
    //var url = 'http://localhost:8888/rest/has/actions/add';
   var url = 'http://WEBSITEURL/rest/has/actions/add';
    console.log('Url request is ' + url);
    console.log('json is ' + jsonsa);
 // var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
  //    pos.coords.latitude + '&lon=' + pos.coords.longitude;

  // Send request to OpenWeatherMap
  xhrRequest(url, 'POST', jsonsa, 
    function(responseText) {
      // responseText contains a JSON object with weather info
      //return json shortly
      //var json = JSON.parse(responseText);

      // Temperature in Kelvin requires adjustment
      
      console.log('Response back is ' + responseText);

      // Conditions
      //conditions = json.weather[0].main;      
      //console.log('TB Conditions are ' + conditions);
      // Assemble dictionary using our keys          
      
    }      
  );
 }



