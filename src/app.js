/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
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
  {
    title: "Lights",    
  },
  {
    title: "Lamps",
  },
  {
    title: "Strips",
  }
];
var security = [
  {
    title: "Alarm",    
  },
  {
    title: "Doors",
  },
  {
    title: "Windows",
  }
];
var heating = [
  {
    title: "Air conditioning",    
  },
  {
    title: "Ventilation",
  },
  {
    title: "Heaters",
  }
];
var entertainment = [
  {
    title: "Music",    
  },
  {
    title: "TV",
  }  
];
var appliances = [
  {
    title: "Domestic Robot",    
  },
  {
    title: "Fridge",
  },
  {
    title: "Oven",
  } 
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
          title: 'Aopliances options',
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

