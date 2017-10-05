'use strict';
var workLogs = [];
var logs = [];
var thisDate = new Date().setHours(0,0,0,0);
var authors = {};

thisDate = new Date(thisDate).setDate(0);

var getJiras = jQuery.ajax({
    url: "http://jira.lenslogistics.int/rest/api/2/search",
    type: "GET",
    data: {
        "jql": "worklogDate >= -3d and assignee in (ihorad, arttor, alibas, denfed, serliu, stabur, alesiz)",
        "fields": "key",
        "maxResults": "1000"
    },
    headers: {
        "Authorization": "Basic am9hYm9pOiFHc3hyNzU9ITE=",
        "Content-Type": "application/json"
    }
});

getJiras.then(function (jiras) {
    for (var i = 0, count = jiras.issues.length; i < count; i++) {
        workLogs.push(jQuery.ajax({
                url: "http://jira.lenslogistics.int/rest/api/2/issue/" + jiras.issues[i].key + "/worklog",
                type: "GET",
                data: {
                    "maxResults": "1000"
                },
                headers: {
                    "Authorization": "Basic am9hYm9pOiFHc3hyNzU9ITE=",
                    "Content-Type": "application/json"
                }
            }).then(function(logWorks){
                logs.push(logWorks);
            })
        );
    }

    jQuery.when.apply(jQuery, workLogs).done(function() {
        var dateLog = null;

        logs.forEach(function(log){
            log.worklogs.forEach(function(workLog){
                dateLog = new Date(workLog.created).setHours(0,0,0,0);
                debugger;
                if(dateLog >= thisDate){
                    if(authors[workLog.author.emailAddress]){
                        if(authors[workLog.author.emailAddress].hours){
                            authors[workLog.author.emailAddress].hours += workLog.timeSpentSeconds;
                        }else{
                            authors[workLog.author.emailAddress].hours = workLog.timeSpentSeconds;
                        }
                    }else{
                        authors[workLog.author.emailAddress] = {};
                        authors[workLog.author.emailAddress].hours = workLog.timeSpentSeconds;
                    }
                }
            })
        });

        for(var log in authors){
            if( authors.hasOwnProperty(log)){
                console.log(log + " = " + authors[log].hours/3600);
            }
        }

    })
});
