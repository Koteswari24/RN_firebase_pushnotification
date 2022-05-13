import React, { Component } from "react";
import PushNotification from "react-native-push-notification";
// var PushNotification = require("react-native-push-notification");
export default class PushController extends Component {

    componentDidMount() {
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
                console.log("TOKEN:", token);
            },
            // (required) Called when a remote or local notification is opened or received
            onNotification: function (notification) {
                console.log("NOTIFICATION:", notification);
                // process the notification here
                if (Platform.OS === 'android') {
                    PushNotification.localNotification({
                      message: notification.msg,                      
                      title: notification.title, 
                      message: notification.message,
                    });
                  }
                // required on iOS only
                notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            
            // Android only
            senderID: "872077086283",
            // iOS only
            // permissions: {
            //     alert: true,
            //     badge: true,
            //     sound: true
            // },
            popInitialNotification: true,
            requestPermissions: true
        });
    }
    render() {
        return null;
    }
}