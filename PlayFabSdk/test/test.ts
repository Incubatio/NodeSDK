import * as pf from "../index";
import * as reporter from "./reporter";
import * as nodeunit from "nodeunit";
import * as fs from "fs";

var PlayFab = <PlayFabModule.IPlayFab>pf.PlayFab;
var PlayFabAdmin = <PlayFabAdminModule.IPlayFabAdmin>pf.PlayFabAdmin; 
var PlayFabClient = <PlayFabClientModule.IPlayFabClient>pf.PlayFabClient; 
var PlayFabMatchmaker = <PlayFabMatchmakerModule.IPlayFabMatchmaker>pf.PlayFabMatchmaker; 
var PlayFabServer = <PlayFabServerModule.IPlayFabServer>pf.PlayFabServer; 
var PlayFabAuthentication = <PlayFabAuthenticationModule.IPlayFabAuthentication>pf.PlayFabAuthentication; 
var PlayFabCloudScript = <PlayFabCloudScriptModule.IPlayFabCloudScript>pf.PlayFabCloudScript; 
var PlayFabData = <PlayFabDataModule.IPlayFabData>pf.PlayFabData; 
var PlayFabEvents = <PlayFabEventsModule.IPlayFabEvents>pf.PlayFabEvents; 
var PlayFabGroups = <PlayFabGroupsModule.IPlayFabGroups>pf.PlayFabGroups; 
var PlayFabLocalization = <PlayFabLocalizationModule.IPlayFabLocalization>pf.PlayFabLocalization; 
var PlayFabMultiplayer = <PlayFabMultiplayerModule.IPlayFabMultiplayer>pf.PlayFabMultiplayer; 
var PlayFabProfiles = <PlayFabProfilesModule.IPlayFabProfiles>pf.PlayFabProfiles; 

interface IAction { (): void }


var titleData = {
    // You can set default values for testing here
    // Or you can provide the same structure in a json-file and load with LoadTitleData
    titleId: "",
    developerSecretKey: "",
    userEmail: ""
};

var testConstants = {
    TEST_KEY: "testCounter",
    TEST_STAT_NAME: "str"
};

var testData = {
    entityId: null,
    entityType: null,
    playFabId: null,
    testNumber: null
};

function TestWrapper(testFunc) {
    // The purpose of this TestWrapper is to report tests as failures when they throw exceptions.
    // It's pretty disappointing that this isn't part of the testing library
    return function (test): void {
        try {
            testFunc(test);
        } catch (e) {
            test.ok(false, "Exception thrown during test: " + e.toString() + "\n" + e.stack);
            test.done(); // This is required to display the error above, and abort the test
        }
    }
}

function CallbackWrapper<TResult extends PlayFabModule.IPlayFabResultCommon>(callbackName, callback: PlayFabModule.ApiCallback<TResult>, test) {
    // Wrap PlayFab result callbacks so that exceptions in callbacks report into the test as failures
    // This is is specific to catching exceptions in the PlayFab callbacks, since they're async,
    //   they don't share the same stacktrace as the function that calls them
    return function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<TResult>): void {
        try {
            callback(error, result);
        } catch (e) {
            test.ok(false, "Exception thrown during " + callbackName + " callback: " + e.toString() + "\n" + e.stack);
            test.done(); // This is required to display the error above, and abort the test
        }
    };
}

function SimpleCallbackWrapper(callbackName, callback: IAction, test): IAction {
    // Wrap no-parameter callbacks so that exceptions in callbacks report into the test as failures
    // This is is specific to catching exceptions in the PlayFab callbacks, since they're async,
    //   they don't share the same stacktrace as the function that calls them
    return function (): void {
        try {
            callback();
        } catch (e) {
            test.ok(false, "Exception thrown during " + callbackName + " callback: " + e.toString() + "\n" + e.stack);
            test.done(); // This is required to display the error above, and abort the test
        }
    };
}

function VerifyNullError(result, error: PlayFabModule.IPlayFabError, test, message): void {
    var success = (result !== null && error == null);
    if (error != null) {
        test.ok(false, "PlayFab error message: " + CompileErrorReport(error));
    } else {
        test.ok(success, message);
    }
}

function CompileErrorReport(error: PlayFabModule.IPlayFabError): string {
    if (error == null)
        return "";
    var fullErrors = error.errorMessage;
    for (var paramName in error.errorDetails)
        for (var msgIdx in error.errorDetails[paramName])
            fullErrors += "\n" + paramName + ": " + error.errorDetails[paramName][msgIdx];
    return fullErrors;
}

exports.PlayFabApiTests = {
    setUp: function (callback): void {

        var filename = process.env.PF_TEST_TITLE_DATA_JSON; // Set the PF_TEST_TITLE_DATA_JSON env-var to the path of a testTitleData.json file (described here: https://github.com/PlayFab/SDKGenerator/blob/master/JenkinsConsoleUtility/testTitleData.md)
        if (!filename)
            throw "testTitleData.json file location not defined.";
        var prefix = "testTitleData=";
        for (var arg in process.argv)
            if (arg.toLowerCase().indexOf(prefix) === 0)
                filename = arg.substr(prefix.length, arg.length - prefix.length);
        if (filename != null && fs.existsSync(filename)) {
            var inputTitleData = require(filename);

            // All of these must exist for the titleData load to be successful
            var titleDataValid = inputTitleData.hasOwnProperty("titleId")
                && inputTitleData.hasOwnProperty("developerSecretKey")
                && inputTitleData.hasOwnProperty("userEmail");

            if (titleDataValid)
                titleData = inputTitleData;
            else
                console.log("testTitleData input file did not parse correctly");
        }
        PlayFab.settings.titleId = titleData.titleId;
        PlayFab.settings.developerSecretKey = titleData.developerSecretKey;
        callback();
    },
    tearDown: function (callback): void {
        callback();
    },

    /// <summary>
    /// CLIENT API
    /// Try to deliberately log in with an inappropriate password,
    ///   and verify that the error displays as expected.
    /// </summary>
    InvalidLogin: TestWrapper(function (test): void {
        var invalidRequest = {
            Email: titleData.userEmail,
            Password: "INVALID"
        };

        var invalidLoginCallback = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabClientModels.LoginResult>): void {
            test.ok(result == null, "Login should have failed");
            test.ok(error != null, "Login should have failed");
            if (error != null)
                test.ok(error.errorMessage.toLowerCase().indexOf("password") > -1, error.errorMessage);
            test.done();
        };
        PlayFabClient.LoginWithEmailAddress(invalidRequest, CallbackWrapper("invalidLoginCallback", invalidLoginCallback, test));
    }),

    /// <summary>
    /// CLIENT API
    /// Try to deliberately register a user with an invalid email and password
    ///   Verify that errorDetails are populated correctly.
    /// </summary>
    InvalidRegistration: TestWrapper(function (test): void {
        var invalidRequest = {
            Username: "x",
            Email: "x",
            Password: "x"
        };

        var registerCallback = function (error: PlayFabModule.IPlayFabError, result): void {
            test.ok(result == null, "InvalidRegistration should have failed");
            test.ok(error != null, "InvalidRegistration should have failed");
            var expectedEmailMsg = "email address is not valid.";
            var expectedPasswordMsg = "password must be between";
            var errorReport = CompileErrorReport(error);
            test.ok(errorReport.toLowerCase().indexOf(expectedEmailMsg) > -1, "Expect errorMessage about invalid email: " + errorReport);
            test.ok(errorReport.toLowerCase().indexOf(expectedPasswordMsg) > -1, "Expect errorMessage about invalid password: " + errorReport);
            test.done();
        };

        PlayFabClient.RegisterPlayFabUser(invalidRequest, CallbackWrapper("registerCallback", registerCallback, test));
    }),

    /// <summary>
    /// CLIENT API
    /// Log in or create a user, track their PlayFabId
    /// </summary>
    LoginOrRegister: TestWrapper(function (test): void {
        var loginRequest = {
            CustomId: PlayFab.buildIdentifier,
            CreateAccount: true
        };

        var loginCallback = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabClientModels.LoginResult>): void {
            VerifyNullError(result, error, test, "Testing Valid login result");
            test.ok(PlayFabClient.IsClientLoggedIn(), "Testing Login credentials cache");
            testData.playFabId = result.data.PlayFabId; // Save the PlayFabId, it will be used in other tests
            test.done();
        };
        PlayFabClient.LoginWithCustomID(loginRequest, CallbackWrapper("loginCallback", loginCallback, test));
    }),

    /// <summary>
    /// CLIENT API
    /// Test that the login call sequence sends the AdvertisingId when set
    /// </summary>
    LoginWithAdvertisingId: TestWrapper(function (test): void {
        PlayFab.settings.advertisingIdType = PlayFab.settings.AD_TYPE_ANDROID_ID;
        PlayFab.settings.advertisingIdValue = "PlayFabTestId";

        var count = -1;
        var finishAdvertId = function (): void {
            count += 1;
            if (count > 10) {
                test.ok(false, "The advertisingId was not submitted properly");
                test.done();
            } else if (PlayFab.settings.advertisingIdType === PlayFab.settings.AD_TYPE_ANDROID_ID + "_Successful")
                test.done();
            else
                setTimeout(SimpleCallbackWrapper("finishAdvertId", finishAdvertId, test), 200);
        };
        var advertLoginCallback = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabClientModels.LoginResult>): void {
            VerifyNullError(result, error, test, "Testing Advert-Login result");
            setTimeout(SimpleCallbackWrapper("finishAdvertId", finishAdvertId, test), 200);
        };
        var loginRequest = {
            CustomId: PlayFab.buildIdentifier,
            CreateAccount: true
        };
        PlayFabClient.LoginWithCustomID(loginRequest, CallbackWrapper("advertLoginCallback", advertLoginCallback, test));
    }),

    /// <summary>
    /// CLIENT API
    /// Test a sequence of calls that modifies saved data,
    ///   and verifies that the next sequential API call contains updated data.
    /// Verify that the data is correctly modified on the next call.
    /// Parameter types tested: string, Dictionary<string, string>, DateTime
    /// </summary>
    UserDataApi: TestWrapper(function (test): void {
        var getDataRequest = {}; // null also works

        var getDataCallback2 = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabClientModels.GetUserDataResult>): void {
            VerifyNullError(result, error, test, "Testing GetUserData result");
            test.ok(result.data.Data != null, "GetUserData failed");
            test.ok(result.data.Data.hasOwnProperty(testConstants.TEST_KEY), "GetUserData failed");

            var actualtestNumber: number = parseInt(result.data.Data[testConstants.TEST_KEY].Value, 10);
            var actualTimeStamp: number = new Date(result.data.Data[testConstants.TEST_KEY].LastUpdated).getTime();

            test.equal(testData.testNumber, actualtestNumber, "" + testData.testNumber + "!=" + actualtestNumber);

            var now: number = Date.now();
            var testMin: number = now - (1000 * 60 * 5);
            var testMax: number = now + (1000 * 60 * 5);
            test.ok(testMin <= actualTimeStamp && actualTimeStamp <= testMax);
            test.done();
        };
        var updateDataCallback = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabClientModels.UpdateUserDataResult>): void {
            VerifyNullError(result, error, test, "Testing UpdateUserData result");

            PlayFabClient.GetUserData(getDataRequest, CallbackWrapper("getDataCallback2", getDataCallback2, test));
        };
        var getDataCallback1 = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabClientModels.GetUserDataResult>): void {
            VerifyNullError(result, error, test, "Testing GetUserData result");
            test.ok(result.data.Data != null, "GetUserData failed");

            var hasData = result.data.Data.hasOwnProperty(testConstants.TEST_KEY);
            testData.testNumber = !hasData ? 1 : parseInt(result.data.Data[testConstants.TEST_KEY].Value, 10);
            testData.testNumber = (testData.testNumber + 1) % 100; // This test is about the expected value changing - but not testing more complicated issues like bounds

            var updateDataRequest = <PlayFabClientModels.UpdateUserDataRequest>{};
            updateDataRequest.Data = {};
            updateDataRequest.Data[testConstants.TEST_KEY] = testData.testNumber;
            PlayFabClient.UpdateUserData(updateDataRequest, CallbackWrapper("updateDataCallback", updateDataCallback, test));
        };

        // Kick off this test process
        PlayFabClient.GetUserData(getDataRequest, CallbackWrapper("updateDataCallback", getDataCallback1, test));
    }),

    /// <summary>
    /// CLIENT API
    /// Test a sequence of calls that modifies saved data,
    ///   and verifies that the next sequential API call contains updated data.
    /// Verify that the data is saved correctly, and that specific types are tested
    /// Parameter types tested: Dictionary<string, int> 
    /// </summary>
    PlayerStatisticsApi: TestWrapper(function (test): void {
        var getStatsRequest = {}; // null also works

        var getStatsCallback2 = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabClientModels.GetPlayerStatisticsResult>): void {
            VerifyNullError(result, error, test, "Testing GetPlayerStats result");
            test.ok(result.data.Statistics != null, "GetPlayerStats failed");

            var actualtestNumber = -1000;
            for (var i = 0; i < result.data.Statistics.length; i++)
                if (result.data.Statistics[i].StatisticName === testConstants.TEST_STAT_NAME)
                    actualtestNumber = result.data.Statistics[i].Value;

            test.equal(testData.testNumber, actualtestNumber, "" + testData.testNumber + "!=" + actualtestNumber);
            test.done();
        };
        var updateStatsCallback = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabClientModels.UpdatePlayerStatisticsResult>): void {
            VerifyNullError(result, error, test, "Testing UpdatePlayerStats result");
            PlayFabClient.GetPlayerStatistics(getStatsRequest, CallbackWrapper("getStatsCallback2", getStatsCallback2, test));
        };
        var getStatsCallback1 = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabClientModels.GetPlayerStatisticsResult>): void {
            VerifyNullError(result, error, test, "Testing GetPlayerStats result");
            test.ok(result.data.Statistics != null, "GetPlayerStats failed");

            testData.testNumber = 0;
            for (var i = 0; i < result.data.Statistics.length; i++)
                if (result.data.Statistics[i].StatisticName === testConstants.TEST_STAT_NAME)
                    testData.testNumber = result.data.Statistics[i].Value;
            testData.testNumber = (testData.testNumber + 1) % 100; // This test is about the expected value changing - but not testing more complicated issues like bounds

            var updateStatsRequest = {
                Statistics: [{ StatisticName: testConstants.TEST_STAT_NAME, Value: testData.testNumber }]
            };
            PlayFabClient.UpdatePlayerStatistics(updateStatsRequest, CallbackWrapper("updateStatsCallback", updateStatsCallback, test));
        };

        // Kick off this test process
        PlayFabClient.GetPlayerStatistics(getStatsRequest, CallbackWrapper("getStatsCallback1", getStatsCallback1, test));
    }),

    /// <summary>
    /// SERVER API
    /// Get or create the given test character for the given user
    /// Parameter types tested: Contained-Classes, string
    /// </summary>
    UserCharacter: TestWrapper(function (test): void {
        var getCharsCallback = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabClientModels.ListUsersCharactersResult>): void {
            VerifyNullError(result, error, test, "Testing GetChars result");
            test.done();
        };

        var getCharsRequest = {};
        PlayFabClient.GetAllUsersCharacters(getCharsRequest, CallbackWrapper("getCharsCallback", getCharsCallback, test));
    }),

    /// <summary>
    /// CLIENT AND SERVER API
    /// Test that leaderboard results can be requested
    /// Parameter types tested: List of contained-classes
    /// </summary>
    LeaderBoard: TestWrapper(function (test): void {
        var clientRequest: PlayFabClientModels.GetLeaderboardRequest = {
            MaxResultsCount: 3,
            StartPosition: 0,
            StatisticName: testConstants.TEST_STAT_NAME
        };
        var serverRequest: PlayFabServerModels.GetLeaderboardRequest = {
            MaxResultsCount: 3,
            StartPosition: 0,
            StatisticName: testConstants.TEST_STAT_NAME
        };

        var callsCompleted = 0;

        var getLeaderboardCallback = function (error: PlayFabModule.IPlayFabError, result): void {
            VerifyNullError(result, error, test, "Testing GetLeaderboard result");
            if (result != null) {
                test.ok(result.data.Leaderboard != null, "GetLeaderboard failed");
                test.ok(result.data.Leaderboard.length > 0, "Leaderboard had insufficient entries");
            }

            callsCompleted += 1;

            if (callsCompleted === 2)
                test.done();
        };

        PlayFabClient.GetLeaderboard(clientRequest, CallbackWrapper("getLeaderboardCallback", getLeaderboardCallback, test));
        PlayFabServer.GetLeaderboard(serverRequest, CallbackWrapper("getLeaderboardCallback", getLeaderboardCallback, test));
    }),

    /// <summary>
    /// CLIENT API
    /// Test that AccountInfo can be requested
    /// Parameter types tested: List of enum-as-strings converted to list of enums
    /// </summary>
    AccountInfo: TestWrapper(function (test): void {
        var getAccountInfoCallback = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabClientModels.GetAccountInfoResult>): void {
            VerifyNullError(result, error, test, "Testing GetAccountInfo result");
            test.ok(result.data.AccountInfo != null, "GetAccountInfo failed");
            test.ok(result.data.AccountInfo.TitleInfo != null, "GetAccountInfo failed");
            test.ok(result.data.AccountInfo.TitleInfo.Origination != null, "GetAccountInfo failed");
            test.ok(result.data.AccountInfo.TitleInfo.Origination.length > 0, "GetAccountInfo string-Enum failed");
            test.done();
        };

        PlayFabClient.GetAccountInfo({}, CallbackWrapper("getAccountInfoCallback", getAccountInfoCallback, test));
    }),

    /// <summary>
    /// CLIENT API
    /// Test that CloudScript can be properly set up and invoked
    /// </summary>
    CloudScript: TestWrapper(function (test): void {
        var helloWorldRequest = {
            FunctionName: "helloWorld"
        };

        var helloWorldCallback = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabClientModels.ExecuteCloudScriptResult>): void {
            VerifyNullError(result, error, test, "Testing HelloWorld result");
            if (result != null) {
                test.ok(result.data.FunctionResult != null, "HelloWorld failed");
                test.ok(result.data.FunctionResult.messageValue != null, "HelloWorld failed");
                test.equal(result.data.FunctionResult.messageValue, "Hello " + testData.playFabId + "!", "Unexpected HelloWorld cloudscript result: " + result.data.FunctionResult.messageValue);
            }
            test.done();
        };

        PlayFabClient.ExecuteCloudScript(helloWorldRequest, CallbackWrapper("helloWorldCallback", helloWorldCallback, test));
    }),

    /// <summary>
    /// CLIENT API
    /// Test that CloudScript errors can be deciphered
    /// </summary>
    CloudScriptError: TestWrapper(function (test): void {
        var errRequest = {
            FunctionName: "throwError"
        };

        var errCallback = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabClientModels.ExecuteCloudScriptResult>): void {
            VerifyNullError(result, error, test, "Testing Cloud Script Error result");
            if (result != null) {
                test.ok(result.data.FunctionResult == null, "Cloud Script Error failed");
                test.ok(result.data.Error != null, "Cloud Script Error failed");
                test.equal(result.data.Error.Error, "JavascriptException", "Cloud Script Error failed");
            }
            test.done();
        };

        PlayFabClient.ExecuteCloudScript(errRequest, CallbackWrapper("errCallback", errCallback, test));
    }),

    /// <summary>
    /// CLIENT API
    /// Test that the client can publish custom PlayStream events
    /// </summary>
    WriteEvent: TestWrapper(function (test): void {
        var writeEventRequest = {
            "EventName": "ForumPostEvent",
            "Body": {
                "Subject": "My First Post",
                "Body": "This is my awesome post."
            }
        };

        var writeEventCallback = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabClientModels.WriteEventResponse>): void {
            VerifyNullError(result, error, test, "Testing WriteEvent result");
            test.done();
        };

        PlayFabClient.WritePlayerEvent(writeEventRequest, CallbackWrapper("writeEventCallback", writeEventCallback, test));
    }),

    /// <summary>
    /// ENTITY API
    /// Verify that a client login can be converted into an entity token
    /// </summary>
    GetEntityToken: TestWrapper(function (test): void {
        var getEntityTokenCallback = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabAuthenticationModels.GetEntityTokenResponse>): void {
            VerifyNullError(result, error, test, "Testing GetEntityToken result");

            test.ok(result.data.Entity.Id, "EntityId should be defined");
            test.ok(result.data.Entity.Type, "entityType should be defined");

            testData.entityId = result.data.Entity.Id; // Save the Entity info, it will be used in other tests
            testData.entityType = result.data.Entity.Type; // Save the Entity info, it will be used in other tests

            test.done();
        };

        PlayFabAuthentication.GetEntityToken(null, CallbackWrapper("getEntityTokenCallback", getEntityTokenCallback, test));
    }),

    /// <summary>
    /// ENTITY API
    /// Test a sequence of calls that modifies entity objects,
    ///   and verifies that the next sequential API call contains updated information.
    /// Verify that the object is correctly modified on the next call.
    /// </summary>
    ObjectApi: TestWrapper(function (test): void {
        var getObjectsRequest: PlayFabDataModels.GetObjectsRequest = {
            Entity: {
                Id: testData.entityId,
                Type: testData.entityType,
            },
            EscapeObject: true
        };

        var getObjCallback2 = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabDataModels.GetObjectsResponse>): void {
            VerifyNullError(result, error, test, "Testing GetObjects result");
            test.ok(result.data.Objects, "GetObjects failed");
            test.ok(result.data.Objects.hasOwnProperty(testConstants.TEST_KEY));

            var actualtestNumber: number = parseInt(result.data.Objects[testConstants.TEST_KEY].EscapedDataObject, 10);
            test.equal(testData.testNumber, actualtestNumber, "" + testData.testNumber + " !== " + actualtestNumber);

            test.done();
        };
        var setObjCallback = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabDataModels.SetObjectsResponse>): void {
            VerifyNullError(result, error, test, "Testing SetObjects result");

            PlayFabData.GetObjects(getObjectsRequest, CallbackWrapper("getObjCallback2", getObjCallback2, test));
        };
        var getObjCallback1 = function (error: PlayFabModule.IPlayFabError, result: PlayFabModule.IPlayFabSuccessContainer<PlayFabDataModels.GetObjectsResponse>): void {
            VerifyNullError(result, error, test, "Testing GetObjects result");

            testData.testNumber = 0;
            if (result.data.Objects && result.data.Objects.hasOwnProperty(testConstants.TEST_KEY))
                testData.testNumber = parseInt(result.data.Objects[testConstants.TEST_KEY].EscapedDataObject, 10);
            testData.testNumber = (testData.testNumber + 1) % 100; // This test is about the expected value changing - but not testing more complicated issues like bounds

            var setObjRequest: PlayFabDataModels.SetObjectsRequest = {
                Entity: {
                    Id: testData.entityId,
                    Type: testData.entityType,
                },
                Objects: [
                    {
                        ObjectName: testConstants.TEST_KEY,
                        DataObject: testData.testNumber
                    }
                ]
            };
            PlayFabData.SetObjects(setObjRequest, CallbackWrapper("setObjCallback", setObjCallback, test));
        };

        // Kick off this test process
        PlayFabData.GetObjects(getObjectsRequest, CallbackWrapper("getObjCallback1", getObjCallback1, test));
    }),
};

nodeunit.on("complete", function (): void {
    reporter.PfTestReport[0].name = PlayFab.buildIdentifier;
    var saveResultsRequest = {
        FunctionName: "SaveTestData",
        FunctionParameter: { customId: PlayFab.buildIdentifier, testReport: reporter.PfTestReport },
        GeneratePlayStreamEvent: true
    };
    if (PlayFabClient.IsClientLoggedIn()) {
        PlayFabClient.ExecuteCloudScript(saveResultsRequest, null);
        console.log(testData.playFabId, ", Test report saved to CloudScript: ", PlayFab.buildIdentifier);//, "\n", JSON.stringify(reporter.PfTestReport, null, 4));
    } else {
        console.log(testData.playFabId, ", Failed to save test report to CloudScript: ", PlayFab.buildIdentifier);//, "\n", JSON.stringify(reporter.PfTestReport, null, 4));
    }
});
