<?php
# Create a slightly customized version of the service-worker Javascript file.
#
# The JS is customized to include the PND cookie ID
header('Content-Type: application/javascript');
define("APP", "Push Notifications for DocuSign");
include (realpath(dirname(__FILE__) . '/public/bootstrap.php'));
$cookies = new PND_cookies();
$uri = explode ('?', $_SERVER['REQUEST_URI'])[0];
$base_dir = implode('/',explode ('/', $uri, -1)); # pop off the last part
$add_slash = $base_dir === '' ? '' : '/'; # only add slash if not at root of domain.
$url = "https://" . $_SERVER['SERVER_NAME'] . $base_dir . $add_slash . "api.php?op=notify_info&id=" . $cookies->cookie_notify_id;
# $url is used below....
?>
// Based on https://github.com/GoogleChrome/samples/blob/gh-pages/push-messaging-and-notifications/service-worker.js
// More information:
// Spec - http://slightlyoff.github.io/ServiceWorker/spec/service_worker
// Info - https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers


'use strict';
// From https://developers.google.com/web/updates/2015/03/push-notificatons-on-the-open-web
self.addEventListener('push', function(event) {  
  // Since there is no payload data with the first version  
  // of push messages, we'll grab some data from  
  // an API and use it to populate a notification  
  event.waitUntil(  
    fetch('<?php echo $url; ?>').then(function(response) {  
      if (false && response.status !== 200) {  
        // Either show a message to the user explaining the error  
        // or enter a generic message and handle the   
        // onnotificationclick event to direct the user to a web page  
        console.log('Looks like there was a problem. Status Code: ' + response.status);  
      throw new Error();  
      }

      // Examine the text in the response  
      return response.json().then(function(data) {  
        if (data.error || !data.notification) {  
          console.error('The API returned an error.', data.error);  
          throw new Error();  
        }  
          
        var title = data.notification.title;  
        var message = data.notification.message;  
        var icon = data.notification.icon;  
        var notificationTag = data.notification.tag;

        return self.registration.showNotification(title, {  
          body: message,  
          icon: icon,  
          tag: notificationTag  
        });  
      });  
    }).catch(function(err) {  
      console.error('Unable to retrieve data', err);

      var title = 'An error occurred';
      var message = 'We were unable to get the information for this push message';  
      var icon = URL_TO_DEFAULT_ICON;  
      var notificationTag = 'notification-error';  
      return self.registration.showNotification(title, {  
          body: message,  
          icon: icon,  
          tag: notificationTag  
        });  
    })  
  );  
});

self.addEventListener('notificationclick', function(event) {  
  console.log('On notification click: ', event.notification.tag);  
  // Android doesn't close the notification when you click on it  
  // See: http://crbug.com/463146  
  event.notification.close();

  // This looks to see if the current window is already open and  
  // focuses if it is  
  event.waitUntil(
    clients.matchAll({  
      type: "window"  
    })
    .then(function(clientList) {  
      for (var i = 0; i < clientList.length; i++) {  
        var client = clientList[i];  
        if (client.url == '/' && 'focus' in client)  
          return client.focus();  
      }  
      if (clients.openWindow) {
        return clients.openWindow('/');  
      }
    })
  );
});