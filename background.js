'use strict';

var iconSet = new Array();

var count = 0 ;

var config = {
        mode: "fixed_servers",
        rules: {
          proxyForHttps: {
            scheme: "http",
            host: "127.0.0.1",
            port:8080
          } ,
          proxyForHttp: {
            scheme: "http",
            host: "127.0.0.1",
            port:8080
          }        
        }
      };

iconSet[0]      =   "Intercept.png";
iconSet[1]      =   "Stop.png";
var newTitle    =   "Disable Burp";

chrome.browserAction.onClicked.addListener(function() {
    chrome.browserAction.getTitle({},function(title){
            
                var temp = title ;
                chrome.browserAction.setTitle({title:newTitle});
                newTitle = title ;
        
    })
    
    count++;
    count = count % 2;
    
    if(count){
        
          chrome.proxy.settings.set({value: config, scope: 'regular'},function() {});
        
    }
    
    else if(count == 0) {
        chrome.proxy.settings.clear({scope:'regular'},function (){});
    }
    chrome.browserAction.setIcon({path:iconSet[count]});
    
    
 })

