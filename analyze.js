var consts = require('./consts');


exports.emotions = function(messageData) {

    for (var i = 0; i < messageData.messages.length; i++) {
        var message = messageData.messages[i];

    }
};

exports.mergeMainUser = function(messageData, userNames) {
    
}



exports.getUserNamesFromMessages = function(messageData) {
    var threadsWithTwoRecipiants = [];
    var threadRecepiants = messageData.parsingMetaData.threadRecipiants;
    var oneMustBeAUser = {};
    var userNames = [];
    var userNameMap = {};
    /* 
    We are taking the one on one conversations
    and assume, one of the recipiant has to be the user.
    We counted the occurrences in the recipiants in 
    parsingMetaData.userCounts
    of each thread. Every time two name arises we take 
    the one which had more messages.
    */
    for (var threadKey in threadRecepiants) {

        /* The list contains the  */
        var threadPeople = threadRecepiants[threadKey];
        if (threadPeople.length == 2) {

            var whichUserIsMoreLikelyToBe =
                messageData.parsingMetaData.userCounts[threadPeople[0]] >
                messageData.parsingMetaData.userCounts[threadPeople[1]] ? 0 : 1;
            if (!userNameMap[threadPeople[whichUserIsMoreLikelyToBe]]) {
                console.log('user ', threadPeople[whichUserIsMoreLikelyToBe]);
                console.log('because of thread ', threadKey);
            }


            userNameMap[threadPeople[whichUserIsMoreLikelyToBe]] = true;
        }
    }
    for (var userName in userNameMap) {
        userNames.push(userName);
    }
    return userNames;
};