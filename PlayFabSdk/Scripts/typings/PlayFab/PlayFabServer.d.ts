declare module PlayFabServerModule {
    export interface IPlayFabServer {
        settings: PlayFabModule.IPlayFabSettings;
        // Increments the character's balance of the specified virtual currency by the stated amount
        // https://api.playfab.com/Documentation/Server/method/AddCharacterVirtualCurrency
        AddCharacterVirtualCurrency(request: PlayFabServerModels.AddCharacterVirtualCurrencyRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.ModifyCharacterVirtualCurrencyResult>): void;
        // Adds the Friend user to the friendlist of the user with PlayFabId. At least one of
        // FriendPlayFabId,FriendUsername,FriendEmail, or FriendTitleDisplayName should be initialized.
        // https://api.playfab.com/Documentation/Server/method/AddFriend
        AddFriend(request: PlayFabServerModels.AddFriendRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.EmptyResponse>): void;
        // Adds the specified generic service identifier to the player's PlayFab account. This is designed to allow for a PlayFab
        // ID lookup of any arbitrary service identifier a title wants to add. This identifier should never be used as
        // authentication credentials, as the intent is that it is easily accessible by other players.
        // https://api.playfab.com/Documentation/Server/method/AddGenericID
        AddGenericID(request: PlayFabServerModels.AddGenericIDRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.EmptyResult>): void;
        // Adds a given tag to a player profile. The tag's namespace is automatically generated based on the source of the tag.
        // https://api.playfab.com/Documentation/Server/method/AddPlayerTag
        AddPlayerTag(request: PlayFabServerModels.AddPlayerTagRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.AddPlayerTagResult>): void;
        // Adds users to the set of those able to update both the shared data, as well as the set of users in the group. Only users
        // in the group (and the server) can add new members. Shared Groups are designed for sharing data between a very small
        // number of players, please see our guide: https://api.playfab.com/docs/tutorials/landing-players/shared-groups
        // https://api.playfab.com/Documentation/Server/method/AddSharedGroupMembers
        AddSharedGroupMembers(request: PlayFabServerModels.AddSharedGroupMembersRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.AddSharedGroupMembersResult>): void;
        // Increments the user's balance of the specified virtual currency by the stated amount
        // https://api.playfab.com/Documentation/Server/method/AddUserVirtualCurrency
        AddUserVirtualCurrency(request: PlayFabServerModels.AddUserVirtualCurrencyRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.ModifyUserVirtualCurrencyResult>): void;
        // Validated a client's session ticket, and if successful, returns details for that user
        // https://api.playfab.com/Documentation/Server/method/AuthenticateSessionTicket
        AuthenticateSessionTicket(request: PlayFabServerModels.AuthenticateSessionTicketRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.AuthenticateSessionTicketResult>): void;
        // Awards the specified users the specified Steam achievements
        // https://api.playfab.com/Documentation/Server/method/AwardSteamAchievement
        AwardSteamAchievement(request: PlayFabServerModels.AwardSteamAchievementRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.AwardSteamAchievementResult>): void;
        // Bans users by PlayFab ID with optional IP address, or MAC address for the provided game.
        // https://api.playfab.com/Documentation/Server/method/BanUsers
        BanUsers(request: PlayFabServerModels.BanUsersRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.BanUsersResult>): void;
        // Consume uses of a consumable item. When all uses are consumed, it will be removed from the player's inventory.
        // https://api.playfab.com/Documentation/Server/method/ConsumeItem
        ConsumeItem(request: PlayFabServerModels.ConsumeItemRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.ConsumeItemResult>): void;
        // Requests the creation of a shared group object, containing key/value pairs which may be updated by all members of the
        // group. When created by a server, the group will initially have no members. Shared Groups are designed for sharing data
        // between a very small number of players, please see our guide:
        // https://api.playfab.com/docs/tutorials/landing-players/shared-groups
        // https://api.playfab.com/Documentation/Server/method/CreateSharedGroup
        CreateSharedGroup(request: PlayFabServerModels.CreateSharedGroupRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.CreateSharedGroupResult>): void;
        // Deletes the specific character ID from the specified user.
        // https://api.playfab.com/Documentation/Server/method/DeleteCharacterFromUser
        DeleteCharacterFromUser(request: PlayFabServerModels.DeleteCharacterFromUserRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.DeleteCharacterFromUserResult>): void;
        // Removes a user's player account from a title and deletes all associated data
        // https://api.playfab.com/Documentation/Server/method/DeletePlayer
        DeletePlayer(request: PlayFabServerModels.DeletePlayerRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.DeletePlayerResult>): void;
        // Deletes push notification template for title
        // https://api.playfab.com/Documentation/Server/method/DeletePushNotificationTemplate
        DeletePushNotificationTemplate(request: PlayFabServerModels.DeletePushNotificationTemplateRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.DeletePushNotificationTemplateResult>): void;
        // Deletes a shared group, freeing up the shared group ID to be reused for a new group. Shared Groups are designed for
        // sharing data between a very small number of players, please see our guide:
        // https://api.playfab.com/docs/tutorials/landing-players/shared-groups
        // https://api.playfab.com/Documentation/Server/method/DeleteSharedGroup
        DeleteSharedGroup(request: PlayFabServerModels.DeleteSharedGroupRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.EmptyResponse>): void;
        // Inform the matchmaker that a Game Server Instance is removed.
        // https://api.playfab.com/Documentation/Server/method/DeregisterGame
        DeregisterGame(request: PlayFabServerModels.DeregisterGameRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.DeregisterGameResponse>): void;
        // Returns the result of an evaluation of a Random Result Table - the ItemId from the game Catalog which would have been
        // added to the player inventory, if the Random Result Table were added via a Bundle or a call to UnlockContainer.
        // https://api.playfab.com/Documentation/Server/method/EvaluateRandomResultTable
        EvaluateRandomResultTable(request: PlayFabServerModels.EvaluateRandomResultTableRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.EvaluateRandomResultTableResult>): void;
        // Executes a CloudScript function, with the 'currentPlayerId' variable set to the specified PlayFabId parameter value.
        // https://api.playfab.com/Documentation/Server/method/ExecuteCloudScript
        ExecuteCloudScript(request: PlayFabServerModels.ExecuteCloudScriptServerRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.ExecuteCloudScriptResult>): void;
        // Retrieves an array of player segment definitions. Results from this can be used in subsequent API calls such as
        // GetPlayersInSegment which requires a Segment ID. While segment names can change the ID for that segment will not change.
        // https://api.playfab.com/Documentation/Server/method/GetAllSegments
        GetAllSegments(request: PlayFabServerModels.GetAllSegmentsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetAllSegmentsResult>): void;
        // Lists all of the characters that belong to a specific user. CharacterIds are not globally unique; characterId must be
        // evaluated with the parent PlayFabId to guarantee uniqueness.
        // https://api.playfab.com/Documentation/Server/method/GetAllUsersCharacters
        GetAllUsersCharacters(request: PlayFabServerModels.ListUsersCharactersRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.ListUsersCharactersResult>): void;
        // Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
        // https://api.playfab.com/Documentation/Server/method/GetCatalogItems
        GetCatalogItems(request: PlayFabServerModels.GetCatalogItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetCatalogItemsResult>): void;
        // Retrieves the title-specific custom data for the user which is readable and writable by the client
        // https://api.playfab.com/Documentation/Server/method/GetCharacterData
        GetCharacterData(request: PlayFabServerModels.GetCharacterDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetCharacterDataResult>): void;
        // Retrieves the title-specific custom data for the user's character which cannot be accessed by the client
        // https://api.playfab.com/Documentation/Server/method/GetCharacterInternalData
        GetCharacterInternalData(request: PlayFabServerModels.GetCharacterDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetCharacterDataResult>): void;
        // Retrieves the specified character's current inventory of virtual goods
        // https://api.playfab.com/Documentation/Server/method/GetCharacterInventory
        GetCharacterInventory(request: PlayFabServerModels.GetCharacterInventoryRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetCharacterInventoryResult>): void;
        // Retrieves a list of ranked characters for the given statistic, starting from the indicated point in the leaderboard
        // https://api.playfab.com/Documentation/Server/method/GetCharacterLeaderboard
        GetCharacterLeaderboard(request: PlayFabServerModels.GetCharacterLeaderboardRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetCharacterLeaderboardResult>): void;
        // Retrieves the title-specific custom data for the user's character which can only be read by the client
        // https://api.playfab.com/Documentation/Server/method/GetCharacterReadOnlyData
        GetCharacterReadOnlyData(request: PlayFabServerModels.GetCharacterDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetCharacterDataResult>): void;
        // Retrieves the details of all title-specific statistics for the specific character
        // https://api.playfab.com/Documentation/Server/method/GetCharacterStatistics
        GetCharacterStatistics(request: PlayFabServerModels.GetCharacterStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetCharacterStatisticsResult>): void;
        // This API retrieves a pre-signed URL for accessing a content file for the title. A subsequent HTTP GET to the returned
        // URL will attempt to download the content. A HEAD query to the returned URL will attempt to retrieve the metadata of the
        // content. Note that a successful result does not guarantee the existence of this content - if it has not been uploaded,
        // the query to retrieve the data will fail. See this post for more information:
        // https://community.playfab.com/hc/en-us/community/posts/205469488-How-to-upload-files-to-PlayFab-s-Content-Service. Also,
        // please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN rates apply.
        // https://api.playfab.com/Documentation/Server/method/GetContentDownloadUrl
        GetContentDownloadUrl(request: PlayFabServerModels.GetContentDownloadUrlRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetContentDownloadUrlResult>): void;
        // Retrieves a list of ranked friends of the given player for the given statistic, starting from the indicated point in the
        // leaderboard
        // https://api.playfab.com/Documentation/Server/method/GetFriendLeaderboard
        GetFriendLeaderboard(request: PlayFabServerModels.GetFriendLeaderboardRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetLeaderboardResult>): void;
        // Retrieves the current friends for the user with PlayFabId, constrained to users who have PlayFab accounts. Friends from
        // linked accounts (Facebook, Steam) are also included. You may optionally exclude some linked services' friends.
        // https://api.playfab.com/Documentation/Server/method/GetFriendsList
        GetFriendsList(request: PlayFabServerModels.GetFriendsListRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetFriendsListResult>): void;
        // Retrieves a list of ranked users for the given statistic, starting from the indicated point in the leaderboard
        // https://api.playfab.com/Documentation/Server/method/GetLeaderboard
        GetLeaderboard(request: PlayFabServerModels.GetLeaderboardRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetLeaderboardResult>): void;
        // Retrieves a list of ranked characters for the given statistic, centered on the requested user
        // https://api.playfab.com/Documentation/Server/method/GetLeaderboardAroundCharacter
        GetLeaderboardAroundCharacter(request: PlayFabServerModels.GetLeaderboardAroundCharacterRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetLeaderboardAroundCharacterResult>): void;
        // Retrieves a list of ranked users for the given statistic, centered on the currently signed-in user
        // https://api.playfab.com/Documentation/Server/method/GetLeaderboardAroundUser
        GetLeaderboardAroundUser(request: PlayFabServerModels.GetLeaderboardAroundUserRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetLeaderboardAroundUserResult>): void;
        // Retrieves a list of all of the user's characters for the given statistic.
        // https://api.playfab.com/Documentation/Server/method/GetLeaderboardForUserCharacters
        GetLeaderboardForUserCharacters(request: PlayFabServerModels.GetLeaderboardForUsersCharactersRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetLeaderboardForUsersCharactersResult>): void;
        // Returns whatever info is requested in the response for the user. Note that PII (like email address, facebook id) may be
        // returned. All parameters default to false.
        // https://api.playfab.com/Documentation/Server/method/GetPlayerCombinedInfo
        GetPlayerCombinedInfo(request: PlayFabServerModels.GetPlayerCombinedInfoRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayerCombinedInfoResult>): void;
        // Retrieves the player's profile
        // https://api.playfab.com/Documentation/Server/method/GetPlayerProfile
        GetPlayerProfile(request: PlayFabServerModels.GetPlayerProfileRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayerProfileResult>): void;
        // List all segments that a player currently belongs to at this moment in time.
        // https://api.playfab.com/Documentation/Server/method/GetPlayerSegments
        GetPlayerSegments(request: PlayFabServerModels.GetPlayersSegmentsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayerSegmentsResult>): void;
        // Allows for paging through all players in a given segment. This API creates a snapshot of all player profiles that match
        // the segment definition at the time of its creation and lives through the Total Seconds to Live, refreshing its life span
        // on each subsequent use of the Continuation Token. Profiles that change during the course of paging will not be reflected
        // in the results. AB Test segments are currently not supported by this operation.
        // https://api.playfab.com/Documentation/Server/method/GetPlayersInSegment
        GetPlayersInSegment(request: PlayFabServerModels.GetPlayersInSegmentRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayersInSegmentResult>): void;
        // Retrieves the current version and values for the indicated statistics, for the local player.
        // https://api.playfab.com/Documentation/Server/method/GetPlayerStatistics
        GetPlayerStatistics(request: PlayFabServerModels.GetPlayerStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayerStatisticsResult>): void;
        // Retrieves the information on the available versions of the specified statistic.
        // https://api.playfab.com/Documentation/Server/method/GetPlayerStatisticVersions
        GetPlayerStatisticVersions(request: PlayFabServerModels.GetPlayerStatisticVersionsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayerStatisticVersionsResult>): void;
        // Get all tags with a given Namespace (optional) from a player profile.
        // https://api.playfab.com/Documentation/Server/method/GetPlayerTags
        GetPlayerTags(request: PlayFabServerModels.GetPlayerTagsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayerTagsResult>): void;
        // Retrieves the unique PlayFab identifiers for the given set of Facebook identifiers.
        // https://api.playfab.com/Documentation/Server/method/GetPlayFabIDsFromFacebookIDs
        GetPlayFabIDsFromFacebookIDs(request: PlayFabServerModels.GetPlayFabIDsFromFacebookIDsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayFabIDsFromFacebookIDsResult>): void;
        // Retrieves the unique PlayFab identifiers for the given set of Facebook Instant Games identifiers.
        // https://api.playfab.com/Documentation/Server/method/GetPlayFabIDsFromFacebookInstantGamesIds
        GetPlayFabIDsFromFacebookInstantGamesIds(request: PlayFabServerModels.GetPlayFabIDsFromFacebookInstantGamesIdsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayFabIDsFromFacebookInstantGamesIdsResult>): void;
        // Retrieves the unique PlayFab identifiers for the given set of generic service identifiers. A generic identifier is the
        // service name plus the service-specific ID for the player, as specified by the title when the generic identifier was
        // added to the player account.
        // https://api.playfab.com/Documentation/Server/method/GetPlayFabIDsFromGenericIDs
        GetPlayFabIDsFromGenericIDs(request: PlayFabServerModels.GetPlayFabIDsFromGenericIDsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayFabIDsFromGenericIDsResult>): void;
        // Retrieves the unique PlayFab identifiers for the given set of Nintendo Switch Device identifiers.
        // https://api.playfab.com/Documentation/Server/method/GetPlayFabIDsFromNintendoSwitchDeviceIds
        GetPlayFabIDsFromNintendoSwitchDeviceIds(request: PlayFabServerModels.GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayFabIDsFromNintendoSwitchDeviceIdsResult>): void;
        // Retrieves the unique PlayFab identifiers for the given set of PlayStation Network identifiers.
        // https://api.playfab.com/Documentation/Server/method/GetPlayFabIDsFromPSNAccountIDs
        GetPlayFabIDsFromPSNAccountIDs(request: PlayFabServerModels.GetPlayFabIDsFromPSNAccountIDsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayFabIDsFromPSNAccountIDsResult>): void;
        // Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are the profile
        // IDs for the user accounts, available as SteamId in the Steamworks Community API calls.
        // https://api.playfab.com/Documentation/Server/method/GetPlayFabIDsFromSteamIDs
        GetPlayFabIDsFromSteamIDs(request: PlayFabServerModels.GetPlayFabIDsFromSteamIDsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayFabIDsFromSteamIDsResult>): void;
        // Retrieves the unique PlayFab identifiers for the given set of XboxLive identifiers.
        // https://api.playfab.com/Documentation/Server/method/GetPlayFabIDsFromXboxLiveIDs
        GetPlayFabIDsFromXboxLiveIDs(request: PlayFabServerModels.GetPlayFabIDsFromXboxLiveIDsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPlayFabIDsFromXboxLiveIDsResult>): void;
        // Retrieves the key-value store of custom publisher settings
        // https://api.playfab.com/Documentation/Server/method/GetPublisherData
        GetPublisherData(request: PlayFabServerModels.GetPublisherDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetPublisherDataResult>): void;
        // Retrieves the configuration information for the specified random results tables for the title, including all ItemId
        // values and weights
        // https://api.playfab.com/Documentation/Server/method/GetRandomResultTables
        GetRandomResultTables(request: PlayFabServerModels.GetRandomResultTablesRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetRandomResultTablesResult>): void;
        // Retrieves the associated PlayFab account identifiers for the given set of server custom identifiers.
        // https://api.playfab.com/Documentation/Server/method/GetServerCustomIDsFromPlayFabIDs
        GetServerCustomIDsFromPlayFabIDs(request: PlayFabServerModels.GetServerCustomIDsFromPlayFabIDsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetServerCustomIDsFromPlayFabIDsResult>): void;
        // Retrieves data stored in a shared group object, as well as the list of members in the group. The server can access all
        // public and private group data. Shared Groups are designed for sharing data between a very small number of players,
        // please see our guide: https://api.playfab.com/docs/tutorials/landing-players/shared-groups
        // https://api.playfab.com/Documentation/Server/method/GetSharedGroupData
        GetSharedGroupData(request: PlayFabServerModels.GetSharedGroupDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetSharedGroupDataResult>): void;
        // Retrieves the current server time
        // https://api.playfab.com/Documentation/Server/method/GetTime
        GetTime(request: PlayFabServerModels.GetTimeRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetTimeResult>): void;
        // Retrieves the key-value store of custom title settings
        // https://api.playfab.com/Documentation/Server/method/GetTitleData
        GetTitleData(request: PlayFabServerModels.GetTitleDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetTitleDataResult>): void;
        // Retrieves the key-value store of custom internal title settings
        // https://api.playfab.com/Documentation/Server/method/GetTitleInternalData
        GetTitleInternalData(request: PlayFabServerModels.GetTitleDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetTitleDataResult>): void;
        // Retrieves the title news feed, as configured in the developer portal
        // https://api.playfab.com/Documentation/Server/method/GetTitleNews
        GetTitleNews(request: PlayFabServerModels.GetTitleNewsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetTitleNewsResult>): void;
        // Retrieves the relevant details for a specified user
        // https://api.playfab.com/Documentation/Server/method/GetUserAccountInfo
        GetUserAccountInfo(request: PlayFabServerModels.GetUserAccountInfoRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserAccountInfoResult>): void;
        // Gets all bans for a user.
        // https://api.playfab.com/Documentation/Server/method/GetUserBans
        GetUserBans(request: PlayFabServerModels.GetUserBansRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserBansResult>): void;
        // Retrieves the title-specific custom data for the user which is readable and writable by the client
        // https://api.playfab.com/Documentation/Server/method/GetUserData
        GetUserData(request: PlayFabServerModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserDataResult>): void;
        // Retrieves the title-specific custom data for the user which cannot be accessed by the client
        // https://api.playfab.com/Documentation/Server/method/GetUserInternalData
        GetUserInternalData(request: PlayFabServerModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserDataResult>): void;
        // Retrieves the specified user's current inventory of virtual goods
        // https://api.playfab.com/Documentation/Server/method/GetUserInventory
        GetUserInventory(request: PlayFabServerModels.GetUserInventoryRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserInventoryResult>): void;
        // Retrieves the publisher-specific custom data for the user which is readable and writable by the client
        // https://api.playfab.com/Documentation/Server/method/GetUserPublisherData
        GetUserPublisherData(request: PlayFabServerModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserDataResult>): void;
        // Retrieves the publisher-specific custom data for the user which cannot be accessed by the client
        // https://api.playfab.com/Documentation/Server/method/GetUserPublisherInternalData
        GetUserPublisherInternalData(request: PlayFabServerModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserDataResult>): void;
        // Retrieves the publisher-specific custom data for the user which can only be read by the client
        // https://api.playfab.com/Documentation/Server/method/GetUserPublisherReadOnlyData
        GetUserPublisherReadOnlyData(request: PlayFabServerModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserDataResult>): void;
        // Retrieves the title-specific custom data for the user which can only be read by the client
        // https://api.playfab.com/Documentation/Server/method/GetUserReadOnlyData
        GetUserReadOnlyData(request: PlayFabServerModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GetUserDataResult>): void;
        // Grants the specified character type to the user. CharacterIds are not globally unique; characterId must be evaluated
        // with the parent PlayFabId to guarantee uniqueness.
        // https://api.playfab.com/Documentation/Server/method/GrantCharacterToUser
        GrantCharacterToUser(request: PlayFabServerModels.GrantCharacterToUserRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GrantCharacterToUserResult>): void;
        // Adds the specified items to the specified character's inventory
        // https://api.playfab.com/Documentation/Server/method/GrantItemsToCharacter
        GrantItemsToCharacter(request: PlayFabServerModels.GrantItemsToCharacterRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GrantItemsToCharacterResult>): void;
        // Adds the specified items to the specified user's inventory
        // https://api.playfab.com/Documentation/Server/method/GrantItemsToUser
        GrantItemsToUser(request: PlayFabServerModels.GrantItemsToUserRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GrantItemsToUserResult>): void;
        // Adds the specified items to the specified user inventories
        // https://api.playfab.com/Documentation/Server/method/GrantItemsToUsers
        GrantItemsToUsers(request: PlayFabServerModels.GrantItemsToUsersRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.GrantItemsToUsersResult>): void;
        // Links the custom server identifier, generated by the title, to the user's PlayFab account.
        // https://api.playfab.com/Documentation/Server/method/LinkServerCustomId
        LinkServerCustomId(request: PlayFabServerModels.LinkServerCustomIdRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.LinkServerCustomIdResult>): void;
        // Links the Xbox Live account associated with the provided access code to the user's PlayFab account
        // https://api.playfab.com/Documentation/Server/method/LinkXboxAccount
        LinkXboxAccount(request: PlayFabServerModels.LinkXboxAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.LinkXboxAccountResult>): void;
        // Securely login a game client from an external server backend using a custom identifier for that player. Server Custom ID
        // and Client Custom ID are mutually exclusive and cannot be used to retrieve the same player account.
        // https://api.playfab.com/Documentation/Server/method/LoginWithServerCustomId
        LoginWithServerCustomId(request: PlayFabServerModels.LoginWithServerCustomIdRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.ServerLoginResult>): void;
        // Signs the user in using a Xbox Live Token from an external server backend, returning a session identifier that can
        // subsequently be used for API calls which require an authenticated user
        // https://api.playfab.com/Documentation/Server/method/LoginWithXbox
        LoginWithXbox(request: PlayFabServerModels.LoginWithXboxRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.ServerLoginResult>): void;
        // Modifies the number of remaining uses of a player's inventory item
        // https://api.playfab.com/Documentation/Server/method/ModifyItemUses
        ModifyItemUses(request: PlayFabServerModels.ModifyItemUsesRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.ModifyItemUsesResult>): void;
        // Moves an item from a character's inventory into another of the users's character's inventory.
        // https://api.playfab.com/Documentation/Server/method/MoveItemToCharacterFromCharacter
        MoveItemToCharacterFromCharacter(request: PlayFabServerModels.MoveItemToCharacterFromCharacterRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.MoveItemToCharacterFromCharacterResult>): void;
        // Moves an item from a user's inventory into their character's inventory.
        // https://api.playfab.com/Documentation/Server/method/MoveItemToCharacterFromUser
        MoveItemToCharacterFromUser(request: PlayFabServerModels.MoveItemToCharacterFromUserRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.MoveItemToCharacterFromUserResult>): void;
        // Moves an item from a character's inventory into the owning user's inventory.
        // https://api.playfab.com/Documentation/Server/method/MoveItemToUserFromCharacter
        MoveItemToUserFromCharacter(request: PlayFabServerModels.MoveItemToUserFromCharacterRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.MoveItemToUserFromCharacterResult>): void;
        // Informs the PlayFab match-making service that the user specified has left the Game Server Instance
        // https://api.playfab.com/Documentation/Server/method/NotifyMatchmakerPlayerLeft
        NotifyMatchmakerPlayerLeft(request: PlayFabServerModels.NotifyMatchmakerPlayerLeftRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.NotifyMatchmakerPlayerLeftResult>): void;
        // Adds the virtual goods associated with the coupon to the user's inventory. Coupons can be generated via the
        // Economy->Catalogs tab in the PlayFab Game Manager.
        // https://api.playfab.com/Documentation/Server/method/RedeemCoupon
        RedeemCoupon(request: PlayFabServerModels.RedeemCouponRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.RedeemCouponResult>): void;
        // Validates a Game Server session ticket and returns details about the user
        // https://api.playfab.com/Documentation/Server/method/RedeemMatchmakerTicket
        RedeemMatchmakerTicket(request: PlayFabServerModels.RedeemMatchmakerTicketRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.RedeemMatchmakerTicketResult>): void;
        // Set the state of the indicated Game Server Instance. Also update the heartbeat for the instance.
        // https://api.playfab.com/Documentation/Server/method/RefreshGameServerInstanceHeartbeat
        RefreshGameServerInstanceHeartbeat(request: PlayFabServerModels.RefreshGameServerInstanceHeartbeatRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.RefreshGameServerInstanceHeartbeatResult>): void;
        // Inform the matchmaker that a new Game Server Instance is added.
        // https://api.playfab.com/Documentation/Server/method/RegisterGame
        RegisterGame(request: PlayFabServerModels.RegisterGameRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.RegisterGameResponse>): void;
        // Removes the specified friend from the the user's friend list
        // https://api.playfab.com/Documentation/Server/method/RemoveFriend
        RemoveFriend(request: PlayFabServerModels.RemoveFriendRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.EmptyResponse>): void;
        // Removes the specified generic service identifier from the player's PlayFab account.
        // https://api.playfab.com/Documentation/Server/method/RemoveGenericID
        RemoveGenericID(request: PlayFabServerModels.RemoveGenericIDRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.EmptyResult>): void;
        // Remove a given tag from a player profile. The tag's namespace is automatically generated based on the source of the tag.
        // https://api.playfab.com/Documentation/Server/method/RemovePlayerTag
        RemovePlayerTag(request: PlayFabServerModels.RemovePlayerTagRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.RemovePlayerTagResult>): void;
        // Removes users from the set of those able to update the shared data and the set of users in the group. Only users in the
        // group can remove members. If as a result of the call, zero users remain with access, the group and its associated data
        // will be deleted. Shared Groups are designed for sharing data between a very small number of players, please see our
        // guide: https://api.playfab.com/docs/tutorials/landing-players/shared-groups
        // https://api.playfab.com/Documentation/Server/method/RemoveSharedGroupMembers
        RemoveSharedGroupMembers(request: PlayFabServerModels.RemoveSharedGroupMembersRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.RemoveSharedGroupMembersResult>): void;
        // Submit a report about a player (due to bad bahavior, etc.) on behalf of another player, so that customer service
        // representatives for the title can take action concerning potentially toxic players.
        // https://api.playfab.com/Documentation/Server/method/ReportPlayer
        ReportPlayer(request: PlayFabServerModels.ReportPlayerServerRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.ReportPlayerServerResult>): void;
        // Revoke all active bans for a user.
        // https://api.playfab.com/Documentation/Server/method/RevokeAllBansForUser
        RevokeAllBansForUser(request: PlayFabServerModels.RevokeAllBansForUserRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.RevokeAllBansForUserResult>): void;
        // Revoke all active bans specified with BanId.
        // https://api.playfab.com/Documentation/Server/method/RevokeBans
        RevokeBans(request: PlayFabServerModels.RevokeBansRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.RevokeBansResult>): void;
        // Revokes access to an item in a user's inventory
        // https://api.playfab.com/Documentation/Server/method/RevokeInventoryItem
        RevokeInventoryItem(request: PlayFabServerModels.RevokeInventoryItemRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.RevokeInventoryResult>): void;
        // Revokes access for up to 25 items across multiple users and characters.
        // https://api.playfab.com/Documentation/Server/method/RevokeInventoryItems
        RevokeInventoryItems(request: PlayFabServerModels.RevokeInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.RevokeInventoryItemsResult>): void;
        // Saves push notification template for title
        // https://api.playfab.com/Documentation/Server/method/SavePushNotificationTemplate
        SavePushNotificationTemplate(request: PlayFabServerModels.SavePushNotificationTemplateRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.SavePushNotificationTemplateResult>): void;
        // Forces an email to be sent to the registered contact email address for the user's account based on an account recovery
        // email template
        // https://api.playfab.com/Documentation/Server/method/SendCustomAccountRecoveryEmail
        SendCustomAccountRecoveryEmail(request: PlayFabServerModels.SendCustomAccountRecoveryEmailRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.SendCustomAccountRecoveryEmailResult>): void;
        // Sends an email based on an email template to a player's contact email
        // https://api.playfab.com/Documentation/Server/method/SendEmailFromTemplate
        SendEmailFromTemplate(request: PlayFabServerModels.SendEmailFromTemplateRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.SendEmailFromTemplateResult>): void;
        // Sends an iOS/Android Push Notification to a specific user, if that user's device has been configured for Push
        // Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
        // https://api.playfab.com/Documentation/Server/method/SendPushNotification
        SendPushNotification(request: PlayFabServerModels.SendPushNotificationRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.SendPushNotificationResult>): void;
        // Sends an iOS/Android Push Notification template to a specific user, if that user's device has been configured for Push
        // Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
        // https://api.playfab.com/Documentation/Server/method/SendPushNotificationFromTemplate
        SendPushNotificationFromTemplate(request: PlayFabServerModels.SendPushNotificationFromTemplateRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.SendPushNotificationResult>): void;
        // Updates the tag list for a specified user in the friend list of another user
        // https://api.playfab.com/Documentation/Server/method/SetFriendTags
        SetFriendTags(request: PlayFabServerModels.SetFriendTagsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.EmptyResponse>): void;
        // Sets the custom data of the indicated Game Server Instance
        // https://api.playfab.com/Documentation/Server/method/SetGameServerInstanceData
        SetGameServerInstanceData(request: PlayFabServerModels.SetGameServerInstanceDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.SetGameServerInstanceDataResult>): void;
        // Set the state of the indicated Game Server Instance.
        // https://api.playfab.com/Documentation/Server/method/SetGameServerInstanceState
        SetGameServerInstanceState(request: PlayFabServerModels.SetGameServerInstanceStateRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.SetGameServerInstanceStateResult>): void;
        // Set custom tags for the specified Game Server Instance
        // https://api.playfab.com/Documentation/Server/method/SetGameServerInstanceTags
        SetGameServerInstanceTags(request: PlayFabServerModels.SetGameServerInstanceTagsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.SetGameServerInstanceTagsResult>): void;
        // Sets the player's secret if it is not already set. Player secrets are used to sign API requests. To reset a player's
        // secret use the Admin or Server API method SetPlayerSecret.
        // https://api.playfab.com/Documentation/Server/method/SetPlayerSecret
        SetPlayerSecret(request: PlayFabServerModels.SetPlayerSecretRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.SetPlayerSecretResult>): void;
        // Updates the key-value store of custom publisher settings
        // https://api.playfab.com/Documentation/Server/method/SetPublisherData
        SetPublisherData(request: PlayFabServerModels.SetPublisherDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.SetPublisherDataResult>): void;
        // Updates the key-value store of custom title settings
        // https://api.playfab.com/Documentation/Server/method/SetTitleData
        SetTitleData(request: PlayFabServerModels.SetTitleDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.SetTitleDataResult>): void;
        // Updates the key-value store of custom title settings
        // https://api.playfab.com/Documentation/Server/method/SetTitleInternalData
        SetTitleInternalData(request: PlayFabServerModels.SetTitleDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.SetTitleDataResult>): void;
        // Decrements the character's balance of the specified virtual currency by the stated amount. It is possible to make a VC
        // balance negative with this API.
        // https://api.playfab.com/Documentation/Server/method/SubtractCharacterVirtualCurrency
        SubtractCharacterVirtualCurrency(request: PlayFabServerModels.SubtractCharacterVirtualCurrencyRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.ModifyCharacterVirtualCurrencyResult>): void;
        // Decrements the user's balance of the specified virtual currency by the stated amount. It is possible to make a VC
        // balance negative with this API.
        // https://api.playfab.com/Documentation/Server/method/SubtractUserVirtualCurrency
        SubtractUserVirtualCurrency(request: PlayFabServerModels.SubtractUserVirtualCurrencyRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.ModifyUserVirtualCurrencyResult>): void;
        // Unlinks the custom server identifier from the user's PlayFab account.
        // https://api.playfab.com/Documentation/Server/method/UnlinkServerCustomId
        UnlinkServerCustomId(request: PlayFabServerModels.UnlinkServerCustomIdRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UnlinkServerCustomIdResult>): void;
        // Unlinks the related Xbox Live account from the user's PlayFab account
        // https://api.playfab.com/Documentation/Server/method/UnlinkXboxAccount
        UnlinkXboxAccount(request: PlayFabServerModels.UnlinkXboxAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UnlinkXboxAccountResult>): void;
        // Opens a specific container (ContainerItemInstanceId), with a specific key (KeyItemInstanceId, when required), and
        // returns the contents of the opened container. If the container (and key when relevant) are consumable (RemainingUses >
        // 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
        // https://api.playfab.com/Documentation/Server/method/UnlockContainerInstance
        UnlockContainerInstance(request: PlayFabServerModels.UnlockContainerInstanceRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UnlockContainerItemResult>): void;
        // Searches Player or Character inventory for any ItemInstance matching the given CatalogItemId, if necessary unlocks it
        // using any appropriate key, and returns the contents of the opened container. If the container (and key when relevant)
        // are consumable (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of
        // ConsumeItem.
        // https://api.playfab.com/Documentation/Server/method/UnlockContainerItem
        UnlockContainerItem(request: PlayFabServerModels.UnlockContainerItemRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UnlockContainerItemResult>): void;
        // Update the avatar URL of the specified player
        // https://api.playfab.com/Documentation/Server/method/UpdateAvatarUrl
        UpdateAvatarUrl(request: PlayFabServerModels.UpdateAvatarUrlRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.EmptyResponse>): void;
        // Updates information of a list of existing bans specified with Ban Ids.
        // https://api.playfab.com/Documentation/Server/method/UpdateBans
        UpdateBans(request: PlayFabServerModels.UpdateBansRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateBansResult>): void;
        // Updates the title-specific custom data for the user's character which is readable and writable by the client
        // https://api.playfab.com/Documentation/Server/method/UpdateCharacterData
        UpdateCharacterData(request: PlayFabServerModels.UpdateCharacterDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateCharacterDataResult>): void;
        // Updates the title-specific custom data for the user's character which cannot be accessed by the client
        // https://api.playfab.com/Documentation/Server/method/UpdateCharacterInternalData
        UpdateCharacterInternalData(request: PlayFabServerModels.UpdateCharacterDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateCharacterDataResult>): void;
        // Updates the title-specific custom data for the user's character which can only be read by the client
        // https://api.playfab.com/Documentation/Server/method/UpdateCharacterReadOnlyData
        UpdateCharacterReadOnlyData(request: PlayFabServerModels.UpdateCharacterDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateCharacterDataResult>): void;
        // Updates the values of the specified title-specific statistics for the specific character
        // https://api.playfab.com/Documentation/Server/method/UpdateCharacterStatistics
        UpdateCharacterStatistics(request: PlayFabServerModels.UpdateCharacterStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateCharacterStatisticsResult>): void;
        // Updates the values of the specified title-specific statistics for the user
        // https://api.playfab.com/Documentation/Server/method/UpdatePlayerStatistics
        UpdatePlayerStatistics(request: PlayFabServerModels.UpdatePlayerStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdatePlayerStatisticsResult>): void;
        // Adds, updates, and removes data keys for a shared group object. If the permission is set to Public, all fields updated
        // or added in this call will be readable by users not in the group. By default, data permissions are set to Private.
        // Regardless of the permission setting, only members of the group (and the server) can update the data. Shared Groups are
        // designed for sharing data between a very small number of players, please see our guide:
        // https://api.playfab.com/docs/tutorials/landing-players/shared-groups
        // https://api.playfab.com/Documentation/Server/method/UpdateSharedGroupData
        UpdateSharedGroupData(request: PlayFabServerModels.UpdateSharedGroupDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateSharedGroupDataResult>): void;
        // Updates the title-specific custom data for the user which is readable and writable by the client
        // https://api.playfab.com/Documentation/Server/method/UpdateUserData
        UpdateUserData(request: PlayFabServerModels.UpdateUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateUserDataResult>): void;
        // Updates the title-specific custom data for the user which cannot be accessed by the client
        // https://api.playfab.com/Documentation/Server/method/UpdateUserInternalData
        UpdateUserInternalData(request: PlayFabServerModels.UpdateUserInternalDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateUserDataResult>): void;
        // Updates the key-value pair data tagged to the specified item, which is read-only from the client.
        // https://api.playfab.com/Documentation/Server/method/UpdateUserInventoryItemCustomData
        UpdateUserInventoryItemCustomData(request: PlayFabServerModels.UpdateUserInventoryItemDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.EmptyResponse>): void;
        // Updates the publisher-specific custom data for the user which is readable and writable by the client
        // https://api.playfab.com/Documentation/Server/method/UpdateUserPublisherData
        UpdateUserPublisherData(request: PlayFabServerModels.UpdateUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateUserDataResult>): void;
        // Updates the publisher-specific custom data for the user which cannot be accessed by the client
        // https://api.playfab.com/Documentation/Server/method/UpdateUserPublisherInternalData
        UpdateUserPublisherInternalData(request: PlayFabServerModels.UpdateUserInternalDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateUserDataResult>): void;
        // Updates the publisher-specific custom data for the user which can only be read by the client
        // https://api.playfab.com/Documentation/Server/method/UpdateUserPublisherReadOnlyData
        UpdateUserPublisherReadOnlyData(request: PlayFabServerModels.UpdateUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateUserDataResult>): void;
        // Updates the title-specific custom data for the user which can only be read by the client
        // https://api.playfab.com/Documentation/Server/method/UpdateUserReadOnlyData
        UpdateUserReadOnlyData(request: PlayFabServerModels.UpdateUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.UpdateUserDataResult>): void;
        // Writes a character-based event into PlayStream.
        // https://api.playfab.com/Documentation/Server/method/WriteCharacterEvent
        WriteCharacterEvent(request: PlayFabServerModels.WriteServerCharacterEventRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.WriteEventResponse>): void;
        // Writes a player-based event into PlayStream.
        // https://api.playfab.com/Documentation/Server/method/WritePlayerEvent
        WritePlayerEvent(request: PlayFabServerModels.WriteServerPlayerEventRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.WriteEventResponse>): void;
        // Writes a title-based event into PlayStream.
        // https://api.playfab.com/Documentation/Server/method/WriteTitleEvent
        WriteTitleEvent(request: PlayFabServerModels.WriteTitleEventRequest, callback: PlayFabModule.ApiCallback<PlayFabServerModels.WriteEventResponse>): void;

    }
}

declare module PlayFabServerModels {
    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AdCampaignAttribution
    export interface AdCampaignAttribution {
        // UTC time stamp of attribution
        AttributedAt: string;
        // Attribution campaign identifier
        CampaignId?: string;
        // Attribution network name
        Platform?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AdCampaignAttributionModel
    export interface AdCampaignAttributionModel {
        // UTC time stamp of attribution
        AttributedAt: string;
        // Attribution campaign identifier
        CampaignId?: string;
        // Attribution network name
        Platform?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AddCharacterVirtualCurrencyRequest
    export interface AddCharacterVirtualCurrencyRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Amount to be added to the character balance of the specified virtual currency. Maximum VC balance is Int32
        // (2,147,483,647). Any increase over this value will be discarded.
        Amount: number;
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // PlayFab unique identifier of the user whose virtual currency balance is to be incremented.
        PlayFabId: string;
        // Name of the virtual currency which is to be incremented.
        VirtualCurrency: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AddFriendRequest
    export interface AddFriendRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Email address of the user being added.
        FriendEmail?: string;
        // The PlayFab identifier of the user being added.
        FriendPlayFabId?: string;
        // Title-specific display name of the user to being added.
        FriendTitleDisplayName?: string;
        // The PlayFab username of the user being added
        FriendUsername?: string;
        // PlayFab identifier of the player to add a new friend.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AddGenericIDRequest
    export interface AddGenericIDRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Generic service identifier to add to the player account.
        GenericId: GenericServiceId;
        // PlayFabId of the user to link.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AddPlayerTagRequest
    export interface AddPlayerTagRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Unique tag for player profile.
        TagName: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AddPlayerTagResult
    export interface AddPlayerTagResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AddSharedGroupMembersRequest
    export interface AddSharedGroupMembersRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An array of unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabIds: string[];
        // Unique identifier for the shared group.
        SharedGroupId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AddSharedGroupMembersResult
    export interface AddSharedGroupMembersResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AddUserVirtualCurrencyRequest
    export interface AddUserVirtualCurrencyRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Amount to be added to the user balance of the specified virtual currency. Maximum VC balance is Int32 (2,147,483,647).
        // Any increase over this value will be discarded.
        Amount: number;
        // PlayFab unique identifier of the user whose virtual currency balance is to be increased.
        PlayFabId: string;
        // Name of the virtual currency which is to be incremented.
        VirtualCurrency: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AdvancedPushPlatformMsg
    export interface AdvancedPushPlatformMsg {
        // The Json the platform should receive.
        Json: string;
        // The platform that should receive the Json.
        Platform: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AuthenticateSessionTicketRequest
    export interface AuthenticateSessionTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Session ticket as issued by a PlayFab client login API.
        SessionTicket: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AuthenticateSessionTicketResult
    export interface AuthenticateSessionTicketResult extends PlayFabModule.IPlayFabResultCommon {
        // Account info for the user whose session ticket was supplied.
        UserInfo?: UserAccountInfo;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AwardSteamAchievementItem
    export interface AwardSteamAchievementItem {
        // Unique Steam achievement name.
        AchievementName: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Result of the award attempt (only valid on response, not on request).
        Result: boolean;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AwardSteamAchievementRequest
    export interface AwardSteamAchievementRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Array of achievements to grant and the users to whom they are to be granted.
        Achievements: AwardSteamAchievementItem[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.AwardSteamAchievementResult
    export interface AwardSteamAchievementResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of achievements granted.
        AchievementResults?: AwardSteamAchievementItem[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.BanInfo
    export interface BanInfo {
        // The active state of this ban. Expired bans may still have this value set to true but they will have no effect.
        Active: boolean;
        // The unique Ban Id associated with this ban.
        BanId?: string;
        // The time when this ban was applied.
        Created?: string;
        // The time when this ban expires. Permanent bans do not have expiration date.
        Expires?: string;
        // The IP address on which the ban was applied. May affect multiple players.
        IPAddress?: string;
        // The MAC address on which the ban was applied. May affect multiple players.
        MACAddress?: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId?: string;
        // The reason why this ban was applied.
        Reason?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.BanRequest
    export interface BanRequest {
        // The duration in hours for the ban. Leave this blank for a permanent ban.
        DurationInHours?: number;
        // IP address to be banned. May affect multiple players.
        IPAddress?: string;
        // MAC address to be banned. May affect multiple players.
        MACAddress?: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // The reason for this ban. Maximum 140 characters.
        Reason?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.BanUsersRequest
    export interface BanUsersRequest extends PlayFabModule.IPlayFabRequestCommon {
        // List of ban requests to be applied. Maximum 100.
        Bans: BanRequest[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.BanUsersResult
    export interface BanUsersResult extends PlayFabModule.IPlayFabResultCommon {
        // Information on the bans that were applied
        BanData?: BanInfo[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CatalogItem
    export interface CatalogItem {
        // defines the bundle properties for the item - bundles are items which contain other items, including random drop tables
        // and virtual currencies
        Bundle?: CatalogItemBundleInfo;
        // if true, then an item instance of this type can be used to grant a character to a user.
        CanBecomeCharacter: boolean;
        // catalog version for this item
        CatalogVersion?: string;
        // defines the consumable properties (number of uses, timeout) for the item
        Consumable?: CatalogItemConsumableInfo;
        // defines the container properties for the item - what items it contains, including random drop tables and virtual
        // currencies, and what item (if any) is required to open it via the UnlockContainerItem API
        Container?: CatalogItemContainerInfo;
        // game specific custom data
        CustomData?: string;
        // text description of item, to show in-game
        Description?: string;
        // text name for the item, to show in-game
        DisplayName?: string;
        // If the item has IsLImitedEdition set to true, and this is the first time this ItemId has been defined as a limited
        // edition item, this value determines the total number of instances to allocate for the title. Once this limit has been
        // reached, no more instances of this ItemId can be created, and attempts to purchase or grant it will return a Result of
        // false for that ItemId. If the item has already been defined to have a limited edition count, or if this value is less
        // than zero, it will be ignored.
        InitialLimitedEditionCount: number;
        // BETA: If true, then only a fixed number can ever be granted.
        IsLimitedEdition: boolean;
        // if true, then only one item instance of this type will exist and its remaininguses will be incremented instead.
        // RemainingUses will cap out at Int32.Max (2,147,483,647). All subsequent increases will be discarded
        IsStackable: boolean;
        // if true, then an item instance of this type can be traded between players using the trading APIs
        IsTradable: boolean;
        // class to which the item belongs
        ItemClass?: string;
        // unique identifier for this item
        ItemId: string;
        // URL to the item image. For Facebook purchase to display the image on the item purchase page, this must be set to an HTTP
        // URL.
        ItemImageUrl?: string;
        // override prices for this item for specific currencies
        RealCurrencyPrices?: { [key: string]: number };
        // list of item tags
        Tags?: string[];
        // price of this item in virtual currencies and "RM" (the base Real Money purchase price, in USD pennies)
        VirtualCurrencyPrices?: { [key: string]: number };

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CatalogItemBundleInfo
    export interface CatalogItemBundleInfo {
        // unique ItemId values for all items which will be added to the player inventory when the bundle is added
        BundledItems?: string[];
        // unique TableId values for all RandomResultTable objects which are part of the bundle (random tables will be resolved and
        // add the relevant items to the player inventory when the bundle is added)
        BundledResultTables?: string[];
        // virtual currency types and balances which will be added to the player inventory when the bundle is added
        BundledVirtualCurrencies?: { [key: string]: number };

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CatalogItemConsumableInfo
    export interface CatalogItemConsumableInfo {
        // number of times this object can be used, after which it will be removed from the player inventory
        UsageCount?: number;
        // duration in seconds for how long the item will remain in the player inventory - once elapsed, the item will be removed
        // (recommended minimum value is 5 seconds, as lower values can cause the item to expire before operations depending on
        // this item's details have completed)
        UsagePeriod?: number;
        // all inventory item instances in the player inventory sharing a non-null UsagePeriodGroup have their UsagePeriod values
        // added together, and share the result - when that period has elapsed, all the items in the group will be removed
        UsagePeriodGroup?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CatalogItemContainerInfo
    export interface CatalogItemContainerInfo {
        // unique ItemId values for all items which will be added to the player inventory, once the container has been unlocked
        ItemContents?: string[];
        // ItemId for the catalog item used to unlock the container, if any (if not specified, a call to UnlockContainerItem will
        // open the container, adding the contents to the player inventory and currency balances)
        KeyItemId?: string;
        // unique TableId values for all RandomResultTable objects which are part of the container (once unlocked, random tables
        // will be resolved and add the relevant items to the player inventory)
        ResultTableContents?: string[];
        // virtual currency types and balances which will be added to the player inventory when the container is unlocked
        VirtualCurrencyContents?: { [key: string]: number };

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CharacterInventory
    export interface CharacterInventory {
        // The id of this character.
        CharacterId?: string;
        // The inventory of this character.
        Inventory?: ItemInstance[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CharacterLeaderboardEntry
    export interface CharacterLeaderboardEntry {
        // PlayFab unique identifier of the character that belongs to the user for this leaderboard entry.
        CharacterId?: string;
        // Title-specific display name of the character for this leaderboard entry.
        CharacterName?: string;
        // Name of the character class for this entry.
        CharacterType?: string;
        // Title-specific display name of the user for this leaderboard entry.
        DisplayName?: string;
        // PlayFab unique identifier of the user for this leaderboard entry.
        PlayFabId?: string;
        // User's overall position in the leaderboard.
        Position: number;
        // Specific value of the user's statistic.
        StatValue: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CharacterResult
    export interface CharacterResult {
        // The id for this character on this player.
        CharacterId?: string;
        // The name of this character.
        CharacterName?: string;
        // The type-string that was given to this character on creation.
        CharacterType?: string;

    }

    type CloudScriptRevisionOption = "Live"
        | "Latest"
        | "Specific";

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ConsumeItemRequest
    export interface ConsumeItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // Number of uses to consume from the item.
        ConsumeCount: number;
        // Unique instance identifier of the item to be consumed.
        ItemInstanceId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ConsumeItemResult
    export interface ConsumeItemResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique instance identifier of the item with uses consumed.
        ItemInstanceId?: string;
        // Number of uses remaining on the item.
        RemainingUses: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ContactEmailInfo
    export interface ContactEmailInfo {
        // The email address
        EmailAddress?: string;
        // The name of the email info data
        Name?: string;
        // The verification status of the email
        VerificationStatus?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ContactEmailInfoModel
    export interface ContactEmailInfoModel {
        // The email address
        EmailAddress?: string;
        // The name of the email info data
        Name?: string;
        // The verification status of the email
        VerificationStatus?: string;

    }

    type ContinentCode = "AF"
        | "AN"
        | "AS"
        | "EU"
        | "NA"
        | "OC"
        | "SA";

    type CountryCode = "AF"
        | "AX"
        | "AL"
        | "DZ"
        | "AS"
        | "AD"
        | "AO"
        | "AI"
        | "AQ"
        | "AG"
        | "AR"
        | "AM"
        | "AW"
        | "AU"
        | "AT"
        | "AZ"
        | "BS"
        | "BH"
        | "BD"
        | "BB"
        | "BY"
        | "BE"
        | "BZ"
        | "BJ"
        | "BM"
        | "BT"
        | "BO"
        | "BQ"
        | "BA"
        | "BW"
        | "BV"
        | "BR"
        | "IO"
        | "BN"
        | "BG"
        | "BF"
        | "BI"
        | "KH"
        | "CM"
        | "CA"
        | "CV"
        | "KY"
        | "CF"
        | "TD"
        | "CL"
        | "CN"
        | "CX"
        | "CC"
        | "CO"
        | "KM"
        | "CG"
        | "CD"
        | "CK"
        | "CR"
        | "CI"
        | "HR"
        | "CU"
        | "CW"
        | "CY"
        | "CZ"
        | "DK"
        | "DJ"
        | "DM"
        | "DO"
        | "EC"
        | "EG"
        | "SV"
        | "GQ"
        | "ER"
        | "EE"
        | "ET"
        | "FK"
        | "FO"
        | "FJ"
        | "FI"
        | "FR"
        | "GF"
        | "PF"
        | "TF"
        | "GA"
        | "GM"
        | "GE"
        | "DE"
        | "GH"
        | "GI"
        | "GR"
        | "GL"
        | "GD"
        | "GP"
        | "GU"
        | "GT"
        | "GG"
        | "GN"
        | "GW"
        | "GY"
        | "HT"
        | "HM"
        | "VA"
        | "HN"
        | "HK"
        | "HU"
        | "IS"
        | "IN"
        | "ID"
        | "IR"
        | "IQ"
        | "IE"
        | "IM"
        | "IL"
        | "IT"
        | "JM"
        | "JP"
        | "JE"
        | "JO"
        | "KZ"
        | "KE"
        | "KI"
        | "KP"
        | "KR"
        | "KW"
        | "KG"
        | "LA"
        | "LV"
        | "LB"
        | "LS"
        | "LR"
        | "LY"
        | "LI"
        | "LT"
        | "LU"
        | "MO"
        | "MK"
        | "MG"
        | "MW"
        | "MY"
        | "MV"
        | "ML"
        | "MT"
        | "MH"
        | "MQ"
        | "MR"
        | "MU"
        | "YT"
        | "MX"
        | "FM"
        | "MD"
        | "MC"
        | "MN"
        | "ME"
        | "MS"
        | "MA"
        | "MZ"
        | "MM"
        | "NA"
        | "NR"
        | "NP"
        | "NL"
        | "NC"
        | "NZ"
        | "NI"
        | "NE"
        | "NG"
        | "NU"
        | "NF"
        | "MP"
        | "NO"
        | "OM"
        | "PK"
        | "PW"
        | "PS"
        | "PA"
        | "PG"
        | "PY"
        | "PE"
        | "PH"
        | "PN"
        | "PL"
        | "PT"
        | "PR"
        | "QA"
        | "RE"
        | "RO"
        | "RU"
        | "RW"
        | "BL"
        | "SH"
        | "KN"
        | "LC"
        | "MF"
        | "PM"
        | "VC"
        | "WS"
        | "SM"
        | "ST"
        | "SA"
        | "SN"
        | "RS"
        | "SC"
        | "SL"
        | "SG"
        | "SX"
        | "SK"
        | "SI"
        | "SB"
        | "SO"
        | "ZA"
        | "GS"
        | "SS"
        | "ES"
        | "LK"
        | "SD"
        | "SR"
        | "SJ"
        | "SZ"
        | "SE"
        | "CH"
        | "SY"
        | "TW"
        | "TJ"
        | "TZ"
        | "TH"
        | "TL"
        | "TG"
        | "TK"
        | "TO"
        | "TT"
        | "TN"
        | "TR"
        | "TM"
        | "TC"
        | "TV"
        | "UG"
        | "UA"
        | "AE"
        | "GB"
        | "US"
        | "UM"
        | "UY"
        | "UZ"
        | "VU"
        | "VE"
        | "VN"
        | "VG"
        | "VI"
        | "WF"
        | "EH"
        | "YE"
        | "ZM"
        | "ZW";

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CreateSharedGroupRequest
    export interface CreateSharedGroupRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier for the shared group (a random identifier will be assigned, if one is not specified).
        SharedGroupId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.CreateSharedGroupResult
    export interface CreateSharedGroupResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique identifier for the shared group.
        SharedGroupId?: string;

    }

    type Currency = "AED"
        | "AFN"
        | "ALL"
        | "AMD"
        | "ANG"
        | "AOA"
        | "ARS"
        | "AUD"
        | "AWG"
        | "AZN"
        | "BAM"
        | "BBD"
        | "BDT"
        | "BGN"
        | "BHD"
        | "BIF"
        | "BMD"
        | "BND"
        | "BOB"
        | "BRL"
        | "BSD"
        | "BTN"
        | "BWP"
        | "BYR"
        | "BZD"
        | "CAD"
        | "CDF"
        | "CHF"
        | "CLP"
        | "CNY"
        | "COP"
        | "CRC"
        | "CUC"
        | "CUP"
        | "CVE"
        | "CZK"
        | "DJF"
        | "DKK"
        | "DOP"
        | "DZD"
        | "EGP"
        | "ERN"
        | "ETB"
        | "EUR"
        | "FJD"
        | "FKP"
        | "GBP"
        | "GEL"
        | "GGP"
        | "GHS"
        | "GIP"
        | "GMD"
        | "GNF"
        | "GTQ"
        | "GYD"
        | "HKD"
        | "HNL"
        | "HRK"
        | "HTG"
        | "HUF"
        | "IDR"
        | "ILS"
        | "IMP"
        | "INR"
        | "IQD"
        | "IRR"
        | "ISK"
        | "JEP"
        | "JMD"
        | "JOD"
        | "JPY"
        | "KES"
        | "KGS"
        | "KHR"
        | "KMF"
        | "KPW"
        | "KRW"
        | "KWD"
        | "KYD"
        | "KZT"
        | "LAK"
        | "LBP"
        | "LKR"
        | "LRD"
        | "LSL"
        | "LYD"
        | "MAD"
        | "MDL"
        | "MGA"
        | "MKD"
        | "MMK"
        | "MNT"
        | "MOP"
        | "MRO"
        | "MUR"
        | "MVR"
        | "MWK"
        | "MXN"
        | "MYR"
        | "MZN"
        | "NAD"
        | "NGN"
        | "NIO"
        | "NOK"
        | "NPR"
        | "NZD"
        | "OMR"
        | "PAB"
        | "PEN"
        | "PGK"
        | "PHP"
        | "PKR"
        | "PLN"
        | "PYG"
        | "QAR"
        | "RON"
        | "RSD"
        | "RUB"
        | "RWF"
        | "SAR"
        | "SBD"
        | "SCR"
        | "SDG"
        | "SEK"
        | "SGD"
        | "SHP"
        | "SLL"
        | "SOS"
        | "SPL"
        | "SRD"
        | "STD"
        | "SVC"
        | "SYP"
        | "SZL"
        | "THB"
        | "TJS"
        | "TMT"
        | "TND"
        | "TOP"
        | "TRY"
        | "TTD"
        | "TVD"
        | "TWD"
        | "TZS"
        | "UAH"
        | "UGX"
        | "USD"
        | "UYU"
        | "UZS"
        | "VEF"
        | "VND"
        | "VUV"
        | "WST"
        | "XAF"
        | "XCD"
        | "XDR"
        | "XOF"
        | "XPF"
        | "YER"
        | "ZAR"
        | "ZMW"
        | "ZWD";

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeleteCharacterFromUserRequest
    export interface DeleteCharacterFromUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // If true, the character's inventory will be transferred up to the owning user; otherwise, this request will purge those
        // items.
        SaveCharacterInventory: boolean;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeleteCharacterFromUserResult
    export interface DeleteCharacterFromUserResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeletePlayerRequest
    export interface DeletePlayerRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeletePlayerResult
    export interface DeletePlayerResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeletePushNotificationTemplateRequest
    export interface DeletePushNotificationTemplateRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Id of the push notification template to be deleted.
        PushNotificationTemplateId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeletePushNotificationTemplateResult
    export interface DeletePushNotificationTemplateResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeleteSharedGroupRequest
    export interface DeleteSharedGroupRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier for the shared group.
        SharedGroupId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeregisterGameRequest
    export interface DeregisterGameRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier for the Game Server Instance that is being deregistered.
        LobbyId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.DeregisterGameResponse
    export interface DeregisterGameResponse extends PlayFabModule.IPlayFabResultCommon {

    }

    type EmailVerificationStatus = "Unverified"
        | "Pending"
        | "Confirmed";

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.EmptyResponse
    export interface EmptyResponse extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.EmptyResult
    export interface EmptyResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.EntityKey
    export interface EntityKey {
        // Unique ID of the entity.
        Id: string;
        // Entity type. See https://api.playfab.com/docs/tutorials/entities/entitytypes
        Type?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.EntityTokenResponse
    export interface EntityTokenResponse {
        // The entity id and type.
        Entity?: EntityKey;
        // The token used to set X-EntityToken for all entity based API calls.
        EntityToken?: string;
        // The time the token will expire, if it is an expiring token, in UTC.
        TokenExpiration?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.EvaluateRandomResultTableRequest
    export interface EvaluateRandomResultTableRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Specifies the catalog version that should be used to evaluate the Random Result Table. If unspecified, uses
        // default/primary catalog.
        CatalogVersion?: string;
        // The unique identifier of the Random Result Table to use.
        TableId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.EvaluateRandomResultTableResult
    export interface EvaluateRandomResultTableResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique identifier for the item returned from the Random Result Table evaluation, for the given catalog.
        ResultItemId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ExecuteCloudScriptResult
    export interface ExecuteCloudScriptResult extends PlayFabModule.IPlayFabResultCommon {
        // Number of PlayFab API requests issued by the CloudScript function
        APIRequestsIssued: number;
        // Information about the error, if any, that occurred during execution
        Error?: ScriptExecutionError;
        ExecutionTimeSeconds: number;
        // The name of the function that executed
        FunctionName?: string;
        // The object returned from the CloudScript function, if any
        FunctionResult?: any;
        // Flag indicating if the FunctionResult was too large and was subsequently dropped from this event. This only occurs if
        // the total event size is larger than 350KB.
        FunctionResultTooLarge?: boolean;
        // Number of external HTTP requests issued by the CloudScript function
        HttpRequestsIssued: number;
        // Entries logged during the function execution. These include both entries logged in the function code using log.info()
        // and log.error() and error entries for API and HTTP request failures.
        Logs?: LogStatement[];
        // Flag indicating if the logs were too large and were subsequently dropped from this event. This only occurs if the total
        // event size is larger than 350KB after the FunctionResult was removed.
        LogsTooLarge?: boolean;
        MemoryConsumedBytes: number;
        // Processor time consumed while executing the function. This does not include time spent waiting on API calls or HTTP
        // requests.
        ProcessorTimeSeconds: number;
        // The revision of the CloudScript that executed
        Revision: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ExecuteCloudScriptServerRequest
    export interface ExecuteCloudScriptServerRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The name of the CloudScript function to execute
        FunctionName: string;
        // Object that is passed in to the function as the first argument
        FunctionParameter?: any;
        // Generate a 'player_executed_cloudscript' PlayStream event containing the results of the function execution and other
        // contextual information. This event will show up in the PlayStream debugger console for the player in Game Manager.
        GeneratePlayStreamEvent?: boolean;
        // The unique user identifier for the player on whose behalf the script is being run
        PlayFabId: string;
        // Option for which revision of the CloudScript to execute. 'Latest' executes the most recently created revision, 'Live'
        // executes the current live, published revision, and 'Specific' executes the specified revision. The default value is
        // 'Specific', if the SpeificRevision parameter is specified, otherwise it is 'Live'.
        RevisionSelection?: string;
        // The specivic revision to execute, when RevisionSelection is set to 'Specific'
        SpecificRevision?: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.FacebookInstantGamesPlayFabIdPair
    export interface FacebookInstantGamesPlayFabIdPair {
        // Unique Facebook Instant Games identifier for a user.
        FacebookInstantGamesId?: string;
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Facebook Instant Games identifier.
        PlayFabId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.FacebookPlayFabIdPair
    export interface FacebookPlayFabIdPair {
        // Unique Facebook identifier for a user.
        FacebookId?: string;
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Facebook identifier.
        PlayFabId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.FriendInfo
    export interface FriendInfo {
        // Available Facebook information (if the user and PlayFab friend are also connected in Facebook).
        FacebookInfo?: UserFacebookInfo;
        // PlayFab unique identifier for this friend.
        FriendPlayFabId?: string;
        // Available Game Center information (if the user and PlayFab friend are also connected in Game Center).
        GameCenterInfo?: UserGameCenterInfo;
        // The profile of the user, if requested.
        Profile?: PlayerProfileModel;
        // Available PSN information, if the user and PlayFab friend are both connected to PSN.
        PSNInfo?: UserPsnInfo;
        // Available Steam information (if the user and PlayFab friend are also connected in Steam).
        SteamInfo?: UserSteamInfo;
        // Tags which have been associated with this friend.
        Tags?: string[];
        // Title-specific display name for this friend.
        TitleDisplayName?: string;
        // PlayFab unique username for this friend.
        Username?: string;
        // Available Xbox information, if the user and PlayFab friend are both connected to Xbox Live.
        XboxInfo?: UserXboxInfo;

    }

    type GameInstanceState = "Open"
        | "Closed";

    type GenericErrorCodes = "Success"
        | "UnkownError"
        | "InvalidParams"
        | "AccountNotFound"
        | "AccountBanned"
        | "InvalidUsernameOrPassword"
        | "InvalidTitleId"
        | "InvalidEmailAddress"
        | "EmailAddressNotAvailable"
        | "InvalidUsername"
        | "InvalidPassword"
        | "UsernameNotAvailable"
        | "InvalidSteamTicket"
        | "AccountAlreadyLinked"
        | "LinkedAccountAlreadyClaimed"
        | "InvalidFacebookToken"
        | "AccountNotLinked"
        | "FailedByPaymentProvider"
        | "CouponCodeNotFound"
        | "InvalidContainerItem"
        | "ContainerNotOwned"
        | "KeyNotOwned"
        | "InvalidItemIdInTable"
        | "InvalidReceipt"
        | "ReceiptAlreadyUsed"
        | "ReceiptCancelled"
        | "GameNotFound"
        | "GameModeNotFound"
        | "InvalidGoogleToken"
        | "UserIsNotPartOfDeveloper"
        | "InvalidTitleForDeveloper"
        | "TitleNameConflicts"
        | "UserisNotValid"
        | "ValueAlreadyExists"
        | "BuildNotFound"
        | "PlayerNotInGame"
        | "InvalidTicket"
        | "InvalidDeveloper"
        | "InvalidOrderInfo"
        | "RegistrationIncomplete"
        | "InvalidPlatform"
        | "UnknownError"
        | "SteamApplicationNotOwned"
        | "WrongSteamAccount"
        | "TitleNotActivated"
        | "RegistrationSessionNotFound"
        | "NoSuchMod"
        | "FileNotFound"
        | "DuplicateEmail"
        | "ItemNotFound"
        | "ItemNotOwned"
        | "ItemNotRecycleable"
        | "ItemNotAffordable"
        | "InvalidVirtualCurrency"
        | "WrongVirtualCurrency"
        | "WrongPrice"
        | "NonPositiveValue"
        | "InvalidRegion"
        | "RegionAtCapacity"
        | "ServerFailedToStart"
        | "NameNotAvailable"
        | "InsufficientFunds"
        | "InvalidDeviceID"
        | "InvalidPushNotificationToken"
        | "NoRemainingUses"
        | "InvalidPaymentProvider"
        | "PurchaseInitializationFailure"
        | "DuplicateUsername"
        | "InvalidBuyerInfo"
        | "NoGameModeParamsSet"
        | "BodyTooLarge"
        | "ReservedWordInBody"
        | "InvalidTypeInBody"
        | "InvalidRequest"
        | "ReservedEventName"
        | "InvalidUserStatistics"
        | "NotAuthenticated"
        | "StreamAlreadyExists"
        | "ErrorCreatingStream"
        | "StreamNotFound"
        | "InvalidAccount"
        | "PurchaseDoesNotExist"
        | "InvalidPurchaseTransactionStatus"
        | "APINotEnabledForGameClientAccess"
        | "NoPushNotificationARNForTitle"
        | "BuildAlreadyExists"
        | "BuildPackageDoesNotExist"
        | "CustomAnalyticsEventsNotEnabledForTitle"
        | "InvalidSharedGroupId"
        | "NotAuthorized"
        | "MissingTitleGoogleProperties"
        | "InvalidItemProperties"
        | "InvalidPSNAuthCode"
        | "InvalidItemId"
        | "PushNotEnabledForAccount"
        | "PushServiceError"
        | "ReceiptDoesNotContainInAppItems"
        | "ReceiptContainsMultipleInAppItems"
        | "InvalidBundleID"
        | "JavascriptException"
        | "InvalidSessionTicket"
        | "UnableToConnectToDatabase"
        | "InternalServerError"
        | "InvalidReportDate"
        | "ReportNotAvailable"
        | "DatabaseThroughputExceeded"
        | "InvalidGameTicket"
        | "ExpiredGameTicket"
        | "GameTicketDoesNotMatchLobby"
        | "LinkedDeviceAlreadyClaimed"
        | "DeviceAlreadyLinked"
        | "DeviceNotLinked"
        | "PartialFailure"
        | "PublisherNotSet"
        | "ServiceUnavailable"
        | "VersionNotFound"
        | "RevisionNotFound"
        | "InvalidPublisherId"
        | "DownstreamServiceUnavailable"
        | "APINotIncludedInTitleUsageTier"
        | "DAULimitExceeded"
        | "APIRequestLimitExceeded"
        | "InvalidAPIEndpoint"
        | "BuildNotAvailable"
        | "ConcurrentEditError"
        | "ContentNotFound"
        | "CharacterNotFound"
        | "CloudScriptNotFound"
        | "ContentQuotaExceeded"
        | "InvalidCharacterStatistics"
        | "PhotonNotEnabledForTitle"
        | "PhotonApplicationNotFound"
        | "PhotonApplicationNotAssociatedWithTitle"
        | "InvalidEmailOrPassword"
        | "FacebookAPIError"
        | "InvalidContentType"
        | "KeyLengthExceeded"
        | "DataLengthExceeded"
        | "TooManyKeys"
        | "FreeTierCannotHaveVirtualCurrency"
        | "MissingAmazonSharedKey"
        | "AmazonValidationError"
        | "InvalidPSNIssuerId"
        | "PSNInaccessible"
        | "ExpiredAuthToken"
        | "FailedToGetEntitlements"
        | "FailedToConsumeEntitlement"
        | "TradeAcceptingUserNotAllowed"
        | "TradeInventoryItemIsAssignedToCharacter"
        | "TradeInventoryItemIsBundle"
        | "TradeStatusNotValidForCancelling"
        | "TradeStatusNotValidForAccepting"
        | "TradeDoesNotExist"
        | "TradeCancelled"
        | "TradeAlreadyFilled"
        | "TradeWaitForStatusTimeout"
        | "TradeInventoryItemExpired"
        | "TradeMissingOfferedAndAcceptedItems"
        | "TradeAcceptedItemIsBundle"
        | "TradeAcceptedItemIsStackable"
        | "TradeInventoryItemInvalidStatus"
        | "TradeAcceptedCatalogItemInvalid"
        | "TradeAllowedUsersInvalid"
        | "TradeInventoryItemDoesNotExist"
        | "TradeInventoryItemIsConsumed"
        | "TradeInventoryItemIsStackable"
        | "TradeAcceptedItemsMismatch"
        | "InvalidKongregateToken"
        | "FeatureNotConfiguredForTitle"
        | "NoMatchingCatalogItemForReceipt"
        | "InvalidCurrencyCode"
        | "NoRealMoneyPriceForCatalogItem"
        | "TradeInventoryItemIsNotTradable"
        | "TradeAcceptedCatalogItemIsNotTradable"
        | "UsersAlreadyFriends"
        | "LinkedIdentifierAlreadyClaimed"
        | "CustomIdNotLinked"
        | "TotalDataSizeExceeded"
        | "DeleteKeyConflict"
        | "InvalidXboxLiveToken"
        | "ExpiredXboxLiveToken"
        | "ResettableStatisticVersionRequired"
        | "NotAuthorizedByTitle"
        | "NoPartnerEnabled"
        | "InvalidPartnerResponse"
        | "APINotEnabledForGameServerAccess"
        | "StatisticNotFound"
        | "StatisticNameConflict"
        | "StatisticVersionClosedForWrites"
        | "StatisticVersionInvalid"
        | "APIClientRequestRateLimitExceeded"
        | "InvalidJSONContent"
        | "InvalidDropTable"
        | "StatisticVersionAlreadyIncrementedForScheduledInterval"
        | "StatisticCountLimitExceeded"
        | "StatisticVersionIncrementRateExceeded"
        | "ContainerKeyInvalid"
        | "CloudScriptExecutionTimeLimitExceeded"
        | "NoWritePermissionsForEvent"
        | "CloudScriptFunctionArgumentSizeExceeded"
        | "CloudScriptAPIRequestCountExceeded"
        | "CloudScriptAPIRequestError"
        | "CloudScriptHTTPRequestError"
        | "InsufficientGuildRole"
        | "GuildNotFound"
        | "OverLimit"
        | "EventNotFound"
        | "InvalidEventField"
        | "InvalidEventName"
        | "CatalogNotConfigured"
        | "OperationNotSupportedForPlatform"
        | "SegmentNotFound"
        | "StoreNotFound"
        | "InvalidStatisticName"
        | "TitleNotQualifiedForLimit"
        | "InvalidServiceLimitLevel"
        | "ServiceLimitLevelInTransition"
        | "CouponAlreadyRedeemed"
        | "GameServerBuildSizeLimitExceeded"
        | "GameServerBuildCountLimitExceeded"
        | "VirtualCurrencyCountLimitExceeded"
        | "VirtualCurrencyCodeExists"
        | "TitleNewsItemCountLimitExceeded"
        | "InvalidTwitchToken"
        | "TwitchResponseError"
        | "ProfaneDisplayName"
        | "UserAlreadyAdded"
        | "InvalidVirtualCurrencyCode"
        | "VirtualCurrencyCannotBeDeleted"
        | "IdentifierAlreadyClaimed"
        | "IdentifierNotLinked"
        | "InvalidContinuationToken"
        | "ExpiredContinuationToken"
        | "InvalidSegment"
        | "InvalidSessionId"
        | "SessionLogNotFound"
        | "InvalidSearchTerm"
        | "TwoFactorAuthenticationTokenRequired"
        | "GameServerHostCountLimitExceeded"
        | "PlayerTagCountLimitExceeded"
        | "RequestAlreadyRunning"
        | "ActionGroupNotFound"
        | "MaximumSegmentBulkActionJobsRunning"
        | "NoActionsOnPlayersInSegmentJob"
        | "DuplicateStatisticName"
        | "ScheduledTaskNameConflict"
        | "ScheduledTaskCreateConflict"
        | "InvalidScheduledTaskName"
        | "InvalidTaskSchedule"
        | "SteamNotEnabledForTitle"
        | "LimitNotAnUpgradeOption"
        | "NoSecretKeyEnabledForCloudScript"
        | "TaskNotFound"
        | "TaskInstanceNotFound"
        | "InvalidIdentityProviderId"
        | "MisconfiguredIdentityProvider"
        | "InvalidScheduledTaskType"
        | "BillingInformationRequired"
        | "LimitedEditionItemUnavailable"
        | "InvalidAdPlacementAndReward"
        | "AllAdPlacementViewsAlreadyConsumed"
        | "GoogleOAuthNotConfiguredForTitle"
        | "GoogleOAuthError"
        | "UserNotFriend"
        | "InvalidSignature"
        | "InvalidPublicKey"
        | "GoogleOAuthNoIdTokenIncludedInResponse"
        | "StatisticUpdateInProgress"
        | "LeaderboardVersionNotAvailable"
        | "StatisticAlreadyHasPrizeTable"
        | "PrizeTableHasOverlappingRanks"
        | "PrizeTableHasMissingRanks"
        | "PrizeTableRankStartsAtZero"
        | "InvalidStatistic"
        | "ExpressionParseFailure"
        | "ExpressionInvokeFailure"
        | "ExpressionTooLong"
        | "DataUpdateRateExceeded"
        | "RestrictedEmailDomain"
        | "EncryptionKeyDisabled"
        | "EncryptionKeyMissing"
        | "EncryptionKeyBroken"
        | "NoSharedSecretKeyConfigured"
        | "SecretKeyNotFound"
        | "PlayerSecretAlreadyConfigured"
        | "APIRequestsDisabledForTitle"
        | "InvalidSharedSecretKey"
        | "PrizeTableHasNoRanks"
        | "ProfileDoesNotExist"
        | "ContentS3OriginBucketNotConfigured"
        | "InvalidEnvironmentForReceipt"
        | "EncryptedRequestNotAllowed"
        | "SignedRequestNotAllowed"
        | "RequestViewConstraintParamsNotAllowed"
        | "BadPartnerConfiguration"
        | "XboxBPCertificateFailure"
        | "XboxXASSExchangeFailure"
        | "InvalidEntityId"
        | "StatisticValueAggregationOverflow"
        | "EmailMessageFromAddressIsMissing"
        | "EmailMessageToAddressIsMissing"
        | "SmtpServerAuthenticationError"
        | "SmtpServerLimitExceeded"
        | "SmtpServerInsufficientStorage"
        | "SmtpServerCommunicationError"
        | "SmtpServerGeneralFailure"
        | "EmailClientTimeout"
        | "EmailClientCanceledTask"
        | "EmailTemplateMissing"
        | "InvalidHostForTitleId"
        | "EmailConfirmationTokenDoesNotExist"
        | "EmailConfirmationTokenExpired"
        | "AccountDeleted"
        | "PlayerSecretNotConfigured"
        | "InvalidSignatureTime"
        | "NoContactEmailAddressFound"
        | "InvalidAuthToken"
        | "AuthTokenDoesNotExist"
        | "AuthTokenExpired"
        | "AuthTokenAlreadyUsedToResetPassword"
        | "MembershipNameTooLong"
        | "MembershipNotFound"
        | "GoogleServiceAccountInvalid"
        | "GoogleServiceAccountParseFailure"
        | "EntityTokenMissing"
        | "EntityTokenInvalid"
        | "EntityTokenExpired"
        | "EntityTokenRevoked"
        | "InvalidProductForSubscription"
        | "XboxInaccessible"
        | "SubscriptionAlreadyTaken"
        | "SmtpAddonNotEnabled"
        | "APIConcurrentRequestLimitExceeded"
        | "XboxRejectedXSTSExchangeRequest"
        | "VariableNotDefined"
        | "TemplateVersionNotDefined"
        | "FileTooLarge"
        | "TitleDeleted"
        | "TitleContainsUserAccounts"
        | "TitleDeletionPlayerCleanupFailure"
        | "EntityFileOperationPending"
        | "NoEntityFileOperationPending"
        | "EntityProfileVersionMismatch"
        | "TemplateVersionTooOld"
        | "MembershipDefinitionInUse"
        | "PaymentPageNotConfigured"
        | "FailedLoginAttemptRateLimitExceeded"
        | "EntityBlockedByGroup"
        | "RoleDoesNotExist"
        | "EntityIsAlreadyMember"
        | "DuplicateRoleId"
        | "GroupInvitationNotFound"
        | "GroupApplicationNotFound"
        | "OutstandingInvitationAcceptedInstead"
        | "OutstandingApplicationAcceptedInstead"
        | "RoleIsGroupDefaultMember"
        | "RoleIsGroupAdmin"
        | "RoleNameNotAvailable"
        | "GroupNameNotAvailable"
        | "EmailReportAlreadySent"
        | "EmailReportRecipientBlacklisted"
        | "EventNamespaceNotAllowed"
        | "EventEntityNotAllowed"
        | "InvalidEntityType"
        | "NullTokenResultFromAad"
        | "InvalidTokenResultFromAad"
        | "NoValidCertificateForAad"
        | "InvalidCertificateForAad"
        | "DuplicateDropTableId"
        | "MultiplayerServerError"
        | "MultiplayerServerTooManyRequests"
        | "MultiplayerServerNoContent"
        | "MultiplayerServerBadRequest"
        | "MultiplayerServerUnauthorized"
        | "MultiplayerServerForbidden"
        | "MultiplayerServerNotFound"
        | "MultiplayerServerConflict"
        | "MultiplayerServerInternalServerError"
        | "MultiplayerServerUnavailable"
        | "ExplicitContentDetected"
        | "PIIContentDetected"
        | "InvalidScheduledTaskParameter"
        | "PerEntityEventRateLimitExceeded"
        | "TitleDefaultLanguageNotSet"
        | "EmailTemplateMissingDefaultVersion"
        | "FacebookInstantGamesIdNotLinked"
        | "InvalidFacebookInstantGamesSignature"
        | "FacebookInstantGamesAuthNotConfiguredForTitle"
        | "EntityProfileConstraintValidationFailed"
        | "TelemetryIngestionKeyPending"
        | "TelemetryIngestionKeyNotFound"
        | "StatisticChildNameInvalid"
        | "DataIntegrityError"
        | "VirtualCurrencyCannotBeSetToOlderVersion"
        | "VirtualCurrencyMustBeWithinIntegerRange"
        | "EmailTemplateInvalidSyntax"
        | "EmailTemplateMissingCallback"
        | "PushNotificationTemplateInvalidPayload"
        | "InvalidLocalizedPushNotificationLanguage"
        | "MissingLocalizedPushNotificationMessage"
        | "PushNotificationTemplateMissingPlatformPayload"
        | "PushNotificationTemplatePayloadContainsInvalidJson"
        | "PushNotificationTemplateContainsInvalidIosPayload"
        | "PushNotificationTemplateContainsInvalidAndroidPayload"
        | "PushNotificationTemplateIosPayloadMissingNotificationBody"
        | "PushNotificationTemplateAndroidPayloadMissingNotificationBody"
        | "PushNotificationTemplateNotFound"
        | "PushNotificationTemplateMissingDefaultVersion"
        | "PushNotificationTemplateInvalidSyntax"
        | "PushNotificationTemplateNoCustomPayloadForV1"
        | "NoLeaderboardForStatistic"
        | "TitleNewsMissingDefaultLanguage"
        | "TitleNewsNotFound"
        | "TitleNewsDuplicateLanguage"
        | "TitleNewsMissingTitleOrBody"
        | "TitleNewsInvalidLanguage"
        | "EmailRecipientBlacklisted"
        | "InvalidGameCenterAuthRequest"
        | "GameCenterAuthenticationFailed"
        | "CannotEnablePartiesForTitle"
        | "PartyError"
        | "PartyRequests"
        | "PartyNoContent"
        | "PartyBadRequest"
        | "PartyUnauthorized"
        | "PartyForbidden"
        | "PartyNotFound"
        | "PartyConflict"
        | "PartyInternalServerError"
        | "PartyUnavailable"
        | "PartyTooManyRequests"
        | "PushNotificationTemplateMissingName"
        | "CannotEnableMultiplayerServersForTitle"
        | "WriteAttemptedDuringExport"
        | "MultiplayerServerTitleQuotaCoresExceeded"
        | "AutomationRuleNotFound"
        | "EntityAPIKeyLimitExceeded"
        | "EntityAPIKeyNotFound"
        | "EntityAPIKeyOrSecretInvalid"
        | "EconomyServiceUnavailable"
        | "EconomyServiceInternalError"
        | "QueryRateLimitExceeded"
        | "EntityAPIKeyCreationDisabledForEntity"
        | "ForbiddenByEntityPolicy"
        | "StudioCreationRateLimited"
        | "StudioCreationInProgress"
        | "DuplicateStudioName"
        | "StudioNotFound"
        | "StudioDeleted"
        | "StudioDeactivated"
        | "StudioActivated"
        | "TitleCreationRateLimited"
        | "TitleCreationInProgress"
        | "DuplicateTitleName"
        | "TitleActivationRateLimited"
        | "TitleActivationInProgress"
        | "TitleDeactivated"
        | "TitleActivated"
        | "CloudScriptAzureFunctionsExecutionTimeLimitExceeded"
        | "CloudScriptAzureFunctionsArgumentSizeExceeded"
        | "CloudScriptAzureFunctionsReturnSizeExceeded"
        | "CloudScriptAzureFunctionsHTTPRequestError"
        | "VirtualCurrencyBetaGetError"
        | "VirtualCurrencyBetaCreateError"
        | "VirtualCurrencyBetaInitialDepositSaveError"
        | "VirtualCurrencyBetaSaveError"
        | "VirtualCurrencyBetaDeleteError"
        | "VirtualCurrencyBetaRestoreError"
        | "VirtualCurrencyBetaSaveConflict"
        | "VirtualCurrencyBetaUpdateError"
        | "MatchmakingEntityInvalid"
        | "MatchmakingPlayerAttributesInvalid"
        | "MatchmakingQueueNotFound"
        | "MatchmakingMatchNotFound"
        | "MatchmakingTicketNotFound"
        | "MatchmakingAlreadyJoinedTicket"
        | "MatchmakingTicketAlreadyCompleted"
        | "MatchmakingQueueConfigInvalid"
        | "MatchmakingMemberProfileInvalid"
        | "NintendoSwitchDeviceIdNotLinked"
        | "MatchmakingNotEnabled"
        | "MatchmakingPlayerAttributesTooLarge"
        | "MatchmakingNumberOfPlayersInTicketTooLarge"
        | "MatchmakingAttributeInvalid"
        | "MatchmakingPlayerHasNotJoinedTicket"
        | "MatchmakingRateLimitExceeded"
        | "MatchmakingTicketMembershipLimitExceeded"
        | "MatchmakingUnauthorized"
        | "MatchmakingQueueLimitExceeded"
        | "MatchmakingRequestTypeMismatch"
        | "MatchmakingBadRequest"
        | "TitleConfigNotFound"
        | "TitleConfigUpdateConflict"
        | "TitleConfigSerializationError"
        | "CatalogEntityInvalid"
        | "CatalogTitleIdMissing"
        | "CatalogPlayerIdMissing"
        | "CatalogClientIdentityInvalid"
        | "CatalogOneOrMoreFilesInvalid"
        | "CatalogItemMetadataInvalid"
        | "CatalogItemIdInvalid"
        | "CatalogSearchParameterInvalid"
        | "CatalogFeatureDisabled"
        | "CatalogConfigInvalid"
        | "CatalogUnauthorized"
        | "CatalogItemTypeInvalid"
        | "ExportInvalidStatusUpdate"
        | "ExportInvalidPrefix"
        | "ExportBlobContainerDoesNotExist"
        | "ExportNotFound"
        | "ExportCouldNotUpdate"
        | "ExportInvalidStorageType"
        | "ExportAmazonBucketDoesNotExist"
        | "ExportInvalidBlobStorage"
        | "ExportKustoException"
        | "ExportKustoConnectionFailed"
        | "ExportUnknownError"
        | "ExportCantEditPendingExport"
        | "ExportLimitExports"
        | "ExportLimitEvents"
        | "TitleNotEnabledForParty"
        | "PartyVersionNotFound"
        | "MultiplayerServerBuildReferencedByMatchmakingQueue"
        | "ExperimentationExperimentStopped"
        | "ExperimentationExperimentRunning"
        | "ExperimentationExperimentNotFound"
        | "ExperimentationExperimentNeverStarted"
        | "ExperimentationExperimentDeleted"
        | "ExperimentationClientTimeout"
        | "ExperimentationExceededVariantNameLength"
        | "ExperimentationExceededMaxVariantLength"
        | "ExperimentInvalidId"
        | "SnapshotNotFound";

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GenericPlayFabIdPair
    export interface GenericPlayFabIdPair {
        // Unique generic service identifier for a user.
        GenericId?: GenericServiceId;
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the given generic identifier.
        PlayFabId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GenericServiceId
    export interface GenericServiceId {
        // Name of the service for which the player has a unique identifier.
        ServiceName: string;
        // Unique identifier of the player in that service.
        UserId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetAllSegmentsRequest
    export interface GetAllSegmentsRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetAllSegmentsResult
    export interface GetAllSegmentsResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of segments for this title.
        Segments?: GetSegmentResult[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCatalogItemsRequest
    export interface GetCatalogItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Which catalog is being requested. If null, uses the default catalog.
        CatalogVersion?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCatalogItemsResult
    export interface GetCatalogItemsResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of items which can be purchased.
        Catalog?: CatalogItem[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCharacterDataRequest
    export interface GetCharacterDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // The version that currently exists according to the caller. The call will return the data for all of the keys if the
        // version in the system is greater than this.
        IfChangedFromDataVersion?: number;
        // Specific keys to search for in the custom user data.
        Keys?: string[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCharacterDataResult
    export interface GetCharacterDataResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // User specific data for this title.
        Data?: { [key: string]: UserDataRecord };
        // Indicates the current version of the data that has been set. This is incremented with every set call for that type of
        // data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
        DataVersion: number;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCharacterInventoryRequest
    export interface GetCharacterInventoryRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Used to limit results to only those from a specific catalog version.
        CatalogVersion?: string;
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCharacterInventoryResult
    export interface GetCharacterInventoryResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique identifier of the character for this inventory.
        CharacterId?: string;
        // Array of inventory items belonging to the character.
        Inventory?: ItemInstance[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId?: string;
        // Array of virtual currency balance(s) belonging to the character.
        VirtualCurrency?: { [key: string]: number };
        // Array of remaining times and timestamps for virtual currencies.
        VirtualCurrencyRechargeTimes?: { [key: string]: VirtualCurrencyRechargeTime };

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCharacterLeaderboardRequest
    export interface GetCharacterLeaderboardRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Optional character type on which to filter the leaderboard entries.
        CharacterType?: string;
        // Maximum number of entries to retrieve.
        MaxResultsCount: number;
        // First entry in the leaderboard to be retrieved.
        StartPosition: number;
        // Unique identifier for the title-specific statistic for the leaderboard.
        StatisticName: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCharacterLeaderboardResult
    export interface GetCharacterLeaderboardResult extends PlayFabModule.IPlayFabResultCommon {
        // Ordered list of leaderboard entries.
        Leaderboard?: CharacterLeaderboardEntry[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCharacterStatisticsRequest
    export interface GetCharacterStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetCharacterStatisticsResult
    export interface GetCharacterStatisticsResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique identifier of the character for the statistics.
        CharacterId?: string;
        // Character statistics for the requested user.
        CharacterStatistics?: { [key: string]: number };
        // PlayFab unique identifier of the user whose character statistics are being returned.
        PlayFabId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetContentDownloadUrlRequest
    export interface GetContentDownloadUrlRequest extends PlayFabModule.IPlayFabRequestCommon {
        // HTTP method to fetch item - GET or HEAD. Use HEAD when only fetching metadata. Default is GET.
        HttpMethod?: string;
        // Key of the content item to fetch, usually formatted as a path, e.g. images/a.png
        Key: string;
        // True to download through CDN. CDN provides higher download bandwidth and lower latency. However, if you want the latest,
        // non-cached version of the content during development, set this to false. Default is true.
        ThruCDN?: boolean;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetContentDownloadUrlResult
    export interface GetContentDownloadUrlResult extends PlayFabModule.IPlayFabResultCommon {
        // URL for downloading content via HTTP GET or HEAD method. The URL will expire in approximately one hour.
        URL?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetFriendLeaderboardRequest
    export interface GetFriendLeaderboardRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Indicates whether Facebook friends should be included in the response. Default is true.
        IncludeFacebookFriends?: boolean;
        // Indicates whether Steam service friends should be included in the response. Default is true.
        IncludeSteamFriends?: boolean;
        // Maximum number of entries to retrieve.
        MaxResultsCount: number;
        // The player whose friend leaderboard to get
        PlayFabId: string;
        // If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
        // only the allowed client profile properties for the title may be requested. These allowed properties are configured in
        // the Game Manager "Client Profile Options" tab in the "Settings" section.
        ProfileConstraints?: number;
        // Position in the leaderboard to start this listing (defaults to the first entry).
        StartPosition: number;
        // Statistic used to rank friends for this leaderboard.
        StatisticName: string;
        // The version of the leaderboard to get.
        Version?: number;
        // Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab.
        XboxToken?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetFriendsListRequest
    export interface GetFriendsListRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Indicates whether Facebook friends should be included in the response. Default is true.
        IncludeFacebookFriends?: boolean;
        // Indicates whether Steam service friends should be included in the response. Default is true.
        IncludeSteamFriends?: boolean;
        // PlayFab identifier of the player whose friend list to get.
        PlayFabId: string;
        // If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
        // only the allowed client profile properties for the title may be requested. These allowed properties are configured in
        // the Game Manager "Client Profile Options" tab in the "Settings" section.
        ProfileConstraints?: number;
        // Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab.
        XboxToken?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetFriendsListResult
    export interface GetFriendsListResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of friends found.
        Friends?: FriendInfo[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetLeaderboardAroundCharacterRequest
    export interface GetLeaderboardAroundCharacterRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Optional character type on which to filter the leaderboard entries.
        CharacterType?: string;
        // Maximum number of entries to retrieve.
        MaxResultsCount: number;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Unique identifier for the title-specific statistic for the leaderboard.
        StatisticName: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetLeaderboardAroundCharacterResult
    export interface GetLeaderboardAroundCharacterResult extends PlayFabModule.IPlayFabResultCommon {
        // Ordered list of leaderboard entries.
        Leaderboard?: CharacterLeaderboardEntry[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetLeaderboardAroundUserRequest
    export interface GetLeaderboardAroundUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Maximum number of entries to retrieve.
        MaxResultsCount: number;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
        // only the allowed client profile properties for the title may be requested. These allowed properties are configured in
        // the Game Manager "Client Profile Options" tab in the "Settings" section.
        ProfileConstraints?: number;
        // Unique identifier for the title-specific statistic for the leaderboard.
        StatisticName: string;
        // The version of the leaderboard to get.
        Version?: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetLeaderboardAroundUserResult
    export interface GetLeaderboardAroundUserResult extends PlayFabModule.IPlayFabResultCommon {
        // Ordered listing of users and their positions in the requested leaderboard.
        Leaderboard?: PlayerLeaderboardEntry[];
        // The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule.
        NextReset?: string;
        // The version of the leaderboard returned.
        Version: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetLeaderboardForUsersCharactersRequest
    export interface GetLeaderboardForUsersCharactersRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Maximum number of entries to retrieve.
        MaxResultsCount: number;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Unique identifier for the title-specific statistic for the leaderboard.
        StatisticName: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetLeaderboardForUsersCharactersResult
    export interface GetLeaderboardForUsersCharactersResult extends PlayFabModule.IPlayFabResultCommon {
        // Ordered list of leaderboard entries.
        Leaderboard?: CharacterLeaderboardEntry[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetLeaderboardRequest
    export interface GetLeaderboardRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Maximum number of entries to retrieve.
        MaxResultsCount: number;
        // If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
        // only the allowed client profile properties for the title may be requested. These allowed properties are configured in
        // the Game Manager "Client Profile Options" tab in the "Settings" section.
        ProfileConstraints?: number;
        // First entry in the leaderboard to be retrieved.
        StartPosition: number;
        // Unique identifier for the title-specific statistic for the leaderboard.
        StatisticName: string;
        // The version of the leaderboard to get.
        Version?: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetLeaderboardResult
    export interface GetLeaderboardResult extends PlayFabModule.IPlayFabResultCommon {
        // Ordered listing of users and their positions in the requested leaderboard.
        Leaderboard?: PlayerLeaderboardEntry[];
        // The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule.
        NextReset?: string;
        // The version of the leaderboard returned.
        Version: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerCombinedInfoRequest
    export interface GetPlayerCombinedInfoRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Flags for which pieces of info to return for the user.
        InfoRequestParameters: GetPlayerCombinedInfoRequestParams;
        // PlayFabId of the user whose data will be returned
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerCombinedInfoRequestParams
    export interface GetPlayerCombinedInfoRequestParams {
        // Whether to get character inventories. Defaults to false.
        GetCharacterInventories: boolean;
        // Whether to get the list of characters. Defaults to false.
        GetCharacterList: boolean;
        // Whether to get player profile. Defaults to false. Has no effect for a new player.
        GetPlayerProfile: boolean;
        // Whether to get player statistics. Defaults to false.
        GetPlayerStatistics: boolean;
        // Whether to get title data. Defaults to false.
        GetTitleData: boolean;
        // Whether to get the player's account Info. Defaults to false
        GetUserAccountInfo: boolean;
        // Whether to get the player's custom data. Defaults to false
        GetUserData: boolean;
        // Whether to get the player's inventory. Defaults to false
        GetUserInventory: boolean;
        // Whether to get the player's read only data. Defaults to false
        GetUserReadOnlyData: boolean;
        // Whether to get the player's virtual currency balances. Defaults to false
        GetUserVirtualCurrency: boolean;
        // Specific statistics to retrieve. Leave null to get all keys. Has no effect if GetPlayerStatistics is false
        PlayerStatisticNames?: string[];
        // Specifies the properties to return from the player profile. Defaults to returning the player's display name.
        ProfileConstraints?: number;
        // Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetTitleData is false
        TitleDataKeys?: string[];
        // Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetUserData is false
        UserDataKeys?: string[];
        // Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetUserReadOnlyData is
        // false
        UserReadOnlyDataKeys?: string[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerCombinedInfoResult
    export interface GetPlayerCombinedInfoResult extends PlayFabModule.IPlayFabResultCommon {
        // Results for requested info.
        InfoResultPayload?: GetPlayerCombinedInfoResultPayload;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerCombinedInfoResultPayload
    export interface GetPlayerCombinedInfoResultPayload {
        // Account information for the user. This is always retrieved.
        AccountInfo?: UserAccountInfo;
        // Inventories for each character for the user.
        CharacterInventories?: CharacterInventory[];
        // List of characters for the user.
        CharacterList?: CharacterResult[];
        // The profile of the players. This profile is not guaranteed to be up-to-date. For a new player, this profile will not
        // exist.
        PlayerProfile?: PlayerProfileModel;
        // List of statistics for this player.
        PlayerStatistics?: StatisticValue[];
        // Title data for this title.
        TitleData?: { [key: string]: string | null };
        // User specific custom data.
        UserData?: { [key: string]: UserDataRecord };
        // The version of the UserData that was returned.
        UserDataVersion: number;
        // Array of inventory items in the user's current inventory.
        UserInventory?: ItemInstance[];
        // User specific read-only data.
        UserReadOnlyData?: { [key: string]: UserDataRecord };
        // The version of the Read-Only UserData that was returned.
        UserReadOnlyDataVersion: number;
        // Dictionary of virtual currency balance(s) belonging to the user.
        UserVirtualCurrency?: { [key: string]: number };
        // Dictionary of remaining times and timestamps for virtual currencies.
        UserVirtualCurrencyRechargeTimes?: { [key: string]: VirtualCurrencyRechargeTime };

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerProfileRequest
    export interface GetPlayerProfileRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
        // only the allowed client profile properties for the title may be requested. These allowed properties are configured in
        // the Game Manager "Client Profile Options" tab in the "Settings" section.
        ProfileConstraints?: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerProfileResult
    export interface GetPlayerProfileResult extends PlayFabModule.IPlayFabResultCommon {
        // The profile of the player. This profile is not guaranteed to be up-to-date. For a new player, this profile will not
        // exist.
        PlayerProfile?: PlayerProfileModel;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerSegmentsResult
    export interface GetPlayerSegmentsResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of segments the requested player currently belongs to.
        Segments?: GetSegmentResult[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayersInSegmentRequest
    export interface GetPlayersInSegmentRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Continuation token if retrieving subsequent pages of results.
        ContinuationToken?: string;
        // Maximum number of profiles to load. Default is 1,000. Maximum is 10,000.
        MaxBatchSize?: number;
        // Number of seconds to keep the continuation token active. After token expiration it is not possible to continue paging
        // results. Default is 300 (5 minutes). Maximum is 1,800 (30 minutes).
        SecondsToLive?: number;
        // Unique identifier for this segment.
        SegmentId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayersInSegmentResult
    export interface GetPlayersInSegmentResult extends PlayFabModule.IPlayFabResultCommon {
        // Continuation token to use to retrieve subsequent pages of results. If token returns null there are no more results.
        ContinuationToken?: string;
        // Array of player profiles in this segment.
        PlayerProfiles?: PlayerProfile[];
        // Count of profiles matching this segment.
        ProfilesInSegment: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayersSegmentsRequest
    export interface GetPlayersSegmentsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerStatisticsRequest
    export interface GetPlayerStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // user for whom statistics are being requested
        PlayFabId: string;
        // statistics to return
        StatisticNames?: string[];
        // statistics to return, if StatisticNames is not set (only statistics which have a version matching that provided will be
        // returned)
        StatisticNameVersions?: StatisticNameVersion[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerStatisticsResult
    export interface GetPlayerStatisticsResult extends PlayFabModule.IPlayFabResultCommon {
        // PlayFab unique identifier of the user whose statistics are being returned
        PlayFabId?: string;
        // User statistics for the requested user.
        Statistics?: StatisticValue[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerStatisticVersionsRequest
    export interface GetPlayerStatisticVersionsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // unique name of the statistic
        StatisticName?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerStatisticVersionsResult
    export interface GetPlayerStatisticVersionsResult extends PlayFabModule.IPlayFabResultCommon {
        // version change history of the statistic
        StatisticVersions?: PlayerStatisticVersion[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerTagsRequest
    export interface GetPlayerTagsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Optional namespace to filter results by
        Namespace?: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayerTagsResult
    export interface GetPlayerTagsResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Canonical tags (including namespace and tag's name) for the requested user
        Tags: string[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromFacebookIDsRequest
    export interface GetPlayFabIDsFromFacebookIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Array of unique Facebook identifiers for which the title needs to get PlayFab identifiers.
        FacebookIDs: string[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromFacebookIDsResult
    export interface GetPlayFabIDsFromFacebookIDsResult extends PlayFabModule.IPlayFabResultCommon {
        // Mapping of Facebook identifiers to PlayFab identifiers.
        Data?: FacebookPlayFabIdPair[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromFacebookInstantGamesIdsRequest
    export interface GetPlayFabIDsFromFacebookInstantGamesIdsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Array of unique Facebook Instant Games identifiers for which the title needs to get PlayFab identifiers.
        FacebookInstantGamesIds: string[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromFacebookInstantGamesIdsResult
    export interface GetPlayFabIDsFromFacebookInstantGamesIdsResult extends PlayFabModule.IPlayFabResultCommon {
        // Mapping of Facebook Instant Games identifiers to PlayFab identifiers.
        Data?: FacebookInstantGamesPlayFabIdPair[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromGenericIDsRequest
    export interface GetPlayFabIDsFromGenericIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Array of unique generic service identifiers for which the title needs to get PlayFab identifiers. Currently limited to a
        // maximum of 10 in a single request.
        GenericIDs: GenericServiceId[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromGenericIDsResult
    export interface GetPlayFabIDsFromGenericIDsResult extends PlayFabModule.IPlayFabResultCommon {
        // Mapping of generic service identifiers to PlayFab identifiers.
        Data?: GenericPlayFabIdPair[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest
    export interface GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Array of unique Nintendo Switch Device identifiers for which the title needs to get PlayFab identifiers.
        NintendoSwitchDeviceIds: string[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromNintendoSwitchDeviceIdsResult
    export interface GetPlayFabIDsFromNintendoSwitchDeviceIdsResult extends PlayFabModule.IPlayFabResultCommon {
        // Mapping of Nintendo Switch Device identifiers to PlayFab identifiers.
        Data?: number[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromPSNAccountIDsRequest
    export interface GetPlayFabIDsFromPSNAccountIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Id of the PSN issuer environment. If null, defaults to 256 (production)
        IssuerId?: number;
        // Array of unique PlayStation Network identifiers for which the title needs to get PlayFab identifiers.
        PSNAccountIDs: string[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromPSNAccountIDsResult
    export interface GetPlayFabIDsFromPSNAccountIDsResult extends PlayFabModule.IPlayFabResultCommon {
        // Mapping of PlayStation Network identifiers to PlayFab identifiers.
        Data?: PSNAccountPlayFabIdPair[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromSteamIDsRequest
    export interface GetPlayFabIDsFromSteamIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Array of unique Steam identifiers (Steam profile IDs) for which the title needs to get PlayFab identifiers.
        SteamStringIDs?: string[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromSteamIDsResult
    export interface GetPlayFabIDsFromSteamIDsResult extends PlayFabModule.IPlayFabResultCommon {
        // Mapping of Steam identifiers to PlayFab identifiers.
        Data?: SteamPlayFabIdPair[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromXboxLiveIDsRequest
    export interface GetPlayFabIDsFromXboxLiveIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The ID of Xbox Live sandbox.
        Sandbox?: string;
        // Array of unique Xbox Live account identifiers for which the title needs to get PlayFab identifiers.
        XboxLiveAccountIDs: string[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPlayFabIDsFromXboxLiveIDsResult
    export interface GetPlayFabIDsFromXboxLiveIDsResult extends PlayFabModule.IPlayFabResultCommon {
        // Mapping of PlayStation Network identifiers to PlayFab identifiers.
        Data?: XboxLiveAccountPlayFabIdPair[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPublisherDataRequest
    export interface GetPublisherDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // array of keys to get back data from the Publisher data blob, set by the admin tools
        Keys: string[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetPublisherDataResult
    export interface GetPublisherDataResult extends PlayFabModule.IPlayFabResultCommon {
        // a dictionary object of key / value pairs
        Data?: { [key: string]: string | null };

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetRandomResultTablesRequest
    export interface GetRandomResultTablesRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Specifies the catalog version that should be used to retrieve the Random Result Tables. If unspecified, uses
        // default/primary catalog.
        CatalogVersion?: string;
        // The unique identifier of the Random Result Table to use.
        TableIDs: string[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetRandomResultTablesResult
    export interface GetRandomResultTablesResult extends PlayFabModule.IPlayFabResultCommon {
        // array of random result tables currently available
        Tables?: { [key: string]: RandomResultTableListing };

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetSegmentResult
    export interface GetSegmentResult {
        // Identifier of the segments AB Test, if it is attached to one.
        ABTestParent?: string;
        // Unique identifier for this segment.
        Id: string;
        // Segment name.
        Name?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetServerCustomIDsFromPlayFabIDsRequest
    export interface GetServerCustomIDsFromPlayFabIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Array of unique PlayFab player identifiers for which the title needs to get server custom identifiers. Cannot contain
        // more than 25 identifiers.
        PlayFabIDs: string[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetServerCustomIDsFromPlayFabIDsResult
    export interface GetServerCustomIDsFromPlayFabIDsResult extends PlayFabModule.IPlayFabResultCommon {
        // Mapping of server custom player identifiers to PlayFab identifiers.
        Data?: ServerCustomIDPlayFabIDPair[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetSharedGroupDataRequest
    export interface GetSharedGroupDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // If true, return the list of all members of the shared group.
        GetMembers?: boolean;
        // Specific keys to retrieve from the shared group (if not specified, all keys will be returned, while an empty array
        // indicates that no keys should be returned).
        Keys?: string[];
        // Unique identifier for the shared group.
        SharedGroupId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetSharedGroupDataResult
    export interface GetSharedGroupDataResult extends PlayFabModule.IPlayFabResultCommon {
        // Data for the requested keys.
        Data?: { [key: string]: SharedGroupDataRecord };
        // List of PlayFabId identifiers for the members of this group, if requested.
        Members?: string[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetTimeRequest
    export interface GetTimeRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetTimeResult
    export interface GetTimeResult extends PlayFabModule.IPlayFabResultCommon {
        // Current server time when the request was received, in UTC
        Time: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetTitleDataRequest
    export interface GetTitleDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Specific keys to search for in the title data (leave null to get all keys)
        Keys?: string[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetTitleDataResult
    export interface GetTitleDataResult extends PlayFabModule.IPlayFabResultCommon {
        // a dictionary object of key / value pairs
        Data?: { [key: string]: string | null };

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetTitleNewsRequest
    export interface GetTitleNewsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Limits the results to the last n entries. Defaults to 10 if not set.
        Count?: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetTitleNewsResult
    export interface GetTitleNewsResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of localized news items.
        News?: TitleNewsItem[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetUserAccountInfoRequest
    export interface GetUserAccountInfoRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetUserAccountInfoResult
    export interface GetUserAccountInfoResult extends PlayFabModule.IPlayFabResultCommon {
        // Account details for the user whose information was requested.
        UserInfo?: UserAccountInfo;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetUserBansRequest
    export interface GetUserBansRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetUserBansResult
    export interface GetUserBansResult extends PlayFabModule.IPlayFabResultCommon {
        // Information about the bans
        BanData?: BanInfo[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetUserDataRequest
    export interface GetUserDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The version that currently exists according to the caller. The call will return the data for all of the keys if the
        // version in the system is greater than this.
        IfChangedFromDataVersion?: number;
        // Specific keys to search for in the custom user data.
        Keys?: string[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetUserDataResult
    export interface GetUserDataResult extends PlayFabModule.IPlayFabResultCommon {
        // User specific data for this title.
        Data?: { [key: string]: UserDataRecord };
        // Indicates the current version of the data that has been set. This is incremented with every set call for that type of
        // data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
        DataVersion: number;
        // PlayFab unique identifier of the user whose custom data is being returned.
        PlayFabId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetUserInventoryRequest
    export interface GetUserInventoryRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GetUserInventoryResult
    export interface GetUserInventoryResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of inventory items belonging to the user.
        Inventory?: ItemInstance[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId?: string;
        // Array of virtual currency balance(s) belonging to the user.
        VirtualCurrency?: { [key: string]: number };
        // Array of remaining times and timestamps for virtual currencies.
        VirtualCurrencyRechargeTimes?: { [key: string]: VirtualCurrencyRechargeTime };

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantCharacterToUserRequest
    export interface GrantCharacterToUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Non-unique display name of the character being granted (1-20 characters in length).
        CharacterName: string;
        // Type of the character being granted; statistics can be sliced based on this value.
        CharacterType: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantCharacterToUserResult
    export interface GrantCharacterToUserResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique identifier tagged to this character.
        CharacterId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantedItemInstance
    export interface GrantedItemInstance {
        // Game specific comment associated with this instance when it was added to the user inventory.
        Annotation?: string;
        // Array of unique items that were awarded when this catalog item was purchased.
        BundleContents?: string[];
        // Unique identifier for the parent inventory item, as defined in the catalog, for object which were added from a bundle or
        // container.
        BundleParent?: string;
        // Catalog version for the inventory item, when this instance was created.
        CatalogVersion?: string;
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // A set of custom key-value pairs on the inventory item.
        CustomData?: { [key: string]: string | null };
        // CatalogItem.DisplayName at the time this item was purchased.
        DisplayName?: string;
        // Timestamp for when this instance will expire.
        Expiration?: string;
        // Class name for the inventory item, as defined in the catalog.
        ItemClass?: string;
        // Unique identifier for the inventory item, as defined in the catalog.
        ItemId?: string;
        // Unique item identifier for this specific instance of the item.
        ItemInstanceId?: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId?: string;
        // Timestamp for when this instance was purchased.
        PurchaseDate?: string;
        // Total number of remaining uses, if this is a consumable item.
        RemainingUses?: number;
        // Result of this operation.
        Result: boolean;
        // Currency type for the cost of the catalog item.
        UnitCurrency?: string;
        // Cost of the catalog item in the given currency.
        UnitPrice: number;
        // The number of uses that were added or removed to this item in this call.
        UsesIncrementedBy?: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantItemsToCharacterRequest
    export interface GrantItemsToCharacterRequest extends PlayFabModule.IPlayFabRequestCommon {
        // String detailing any additional information concerning this operation.
        Annotation?: string;
        // Catalog version from which items are to be granted.
        CatalogVersion?: string;
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Array of itemIds to grant to the user.
        ItemIds?: string[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantItemsToCharacterResult
    export interface GrantItemsToCharacterResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of items granted to users.
        ItemGrantResults?: GrantedItemInstance[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantItemsToUserRequest
    export interface GrantItemsToUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        // String detailing any additional information concerning this operation.
        Annotation?: string;
        // Catalog version from which items are to be granted.
        CatalogVersion?: string;
        // Array of itemIds to grant to the user.
        ItemIds: string[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantItemsToUserResult
    export interface GrantItemsToUserResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of items granted to users.
        ItemGrantResults?: GrantedItemInstance[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantItemsToUsersRequest
    export interface GrantItemsToUsersRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Catalog version from which items are to be granted.
        CatalogVersion?: string;
        // Array of items to grant and the users to whom the items are to be granted.
        ItemGrants: ItemGrant[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.GrantItemsToUsersResult
    export interface GrantItemsToUsersResult extends PlayFabModule.IPlayFabResultCommon {
        // Array of items granted to users.
        ItemGrantResults?: GrantedItemInstance[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ItemGrant
    export interface ItemGrant {
        // String detailing any additional information concerning this operation.
        Annotation?: string;
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
        // not begin with a '!' character or be null.
        Data?: { [key: string]: string | null };
        // Unique identifier of the catalog item to be granted to the user.
        ItemId: string;
        // Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
        // constraints. Use this to delete the keys directly.
        KeysToRemove?: string[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ItemInstance
    export interface ItemInstance {
        // Game specific comment associated with this instance when it was added to the user inventory.
        Annotation?: string;
        // Array of unique items that were awarded when this catalog item was purchased.
        BundleContents?: string[];
        // Unique identifier for the parent inventory item, as defined in the catalog, for object which were added from a bundle or
        // container.
        BundleParent?: string;
        // Catalog version for the inventory item, when this instance was created.
        CatalogVersion?: string;
        // A set of custom key-value pairs on the inventory item.
        CustomData?: { [key: string]: string | null };
        // CatalogItem.DisplayName at the time this item was purchased.
        DisplayName?: string;
        // Timestamp for when this instance will expire.
        Expiration?: string;
        // Class name for the inventory item, as defined in the catalog.
        ItemClass?: string;
        // Unique identifier for the inventory item, as defined in the catalog.
        ItemId?: string;
        // Unique item identifier for this specific instance of the item.
        ItemInstanceId?: string;
        // Timestamp for when this instance was purchased.
        PurchaseDate?: string;
        // Total number of remaining uses, if this is a consumable item.
        RemainingUses?: number;
        // Currency type for the cost of the catalog item.
        UnitCurrency?: string;
        // Cost of the catalog item in the given currency.
        UnitPrice: number;
        // The number of uses that were added or removed to this item in this call.
        UsesIncrementedBy?: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.LinkedPlatformAccountModel
    export interface LinkedPlatformAccountModel {
        // Linked account email of the user on the platform, if available
        Email?: string;
        // Authentication platform
        Platform?: string;
        // Unique account identifier of the user on the platform
        PlatformUserId?: string;
        // Linked account username of the user on the platform, if available
        Username?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.LinkServerCustomIdRequest
    export interface LinkServerCustomIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        // If another user is already linked to the custom ID, unlink the other user and re-link.
        ForceLink?: boolean;
        // Unique PlayFab identifier.
        PlayFabId: string;
        // Unique server custom identifier for this player.
        ServerCustomId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.LinkServerCustomIdResult
    export interface LinkServerCustomIdResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.LinkXboxAccountRequest
    export interface LinkXboxAccountRequest extends PlayFabModule.IPlayFabRequestCommon {
        // If another user is already linked to the account, unlink the other user and re-link.
        ForceLink?: boolean;
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Xbox Live identifier.
        PlayFabId: string;
        // Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com", "").
        XboxToken: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.LinkXboxAccountResult
    export interface LinkXboxAccountResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ListUsersCharactersRequest
    export interface ListUsersCharactersRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ListUsersCharactersResult
    export interface ListUsersCharactersResult extends PlayFabModule.IPlayFabResultCommon {
        // The requested list of characters.
        Characters?: CharacterResult[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.LocalizedPushNotificationProperties
    export interface LocalizedPushNotificationProperties {
        // Message of the localized push notification template.
        Message?: string;
        // Subject of the localized push notification template.
        Subject?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.LocationModel
    export interface LocationModel {
        // City name.
        City?: string;
        // The two-character continent code for this location
        ContinentCode?: string;
        // The two-character ISO 3166-1 country code for the country associated with the location
        CountryCode?: string;
        // Latitude coordinate of the geographic location.
        Latitude?: number;
        // Longitude coordinate of the geographic location.
        Longitude?: number;

    }

    type LoginIdentityProvider = "Unknown"
        | "PlayFab"
        | "Custom"
        | "GameCenter"
        | "GooglePlay"
        | "Steam"
        | "XBoxLive"
        | "PSN"
        | "Kongregate"
        | "Facebook"
        | "IOSDevice"
        | "AndroidDevice"
        | "Twitch"
        | "WindowsHello"
        | "GameServer"
        | "CustomServer"
        | "NintendoSwitch"
        | "FacebookInstantGames"
        | "OpenIdConnect";

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.LoginWithServerCustomIdRequest
    export interface LoginWithServerCustomIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Automatically create a PlayFab account if one is not currently linked to this ID.
        CreateAccount?: boolean;
        // Flags for which pieces of info to return for the user.
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        // Player secret that is used to verify API request signatures (Enterprise Only).
        PlayerSecret?: string;
        // The backend server identifier for this player.
        ServerCustomId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.LoginWithXboxRequest
    export interface LoginWithXboxRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Automatically create a PlayFab account if one is not currently linked to this ID.
        CreateAccount?: boolean;
        // Flags for which pieces of info to return for the user.
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        // Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com", "").
        XboxToken: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.LogStatement
    export interface LogStatement {
        // Optional object accompanying the message as contextual information
        Data?: any;
        // 'Debug', 'Info', or 'Error'
        Level?: string;
        Message?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.MembershipModel
    export interface MembershipModel {
        // Whether this membership is active. That is, whether the MembershipExpiration time has been reached.
        IsActive: boolean;
        // The time this membership expires
        MembershipExpiration: string;
        // The id of the membership
        MembershipId?: string;
        // Membership expirations can be explicitly overridden (via game manager or the admin api). If this membership has been
        // overridden, this will be the new expiration time.
        OverrideExpiration?: string;
        // The list of subscriptions that this player has for this membership
        Subscriptions?: SubscriptionModel[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ModifyCharacterVirtualCurrencyResult
    export interface ModifyCharacterVirtualCurrencyResult extends PlayFabModule.IPlayFabResultCommon {
        // Balance of the virtual currency after modification.
        Balance: number;
        // Name of the virtual currency which was modified.
        VirtualCurrency?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ModifyItemUsesRequest
    export interface ModifyItemUsesRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique instance identifier of the item to be modified.
        ItemInstanceId: string;
        // PlayFab unique identifier of the user whose item is being modified.
        PlayFabId: string;
        // Number of uses to add to the item. Can be negative to remove uses.
        UsesToAdd: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ModifyItemUsesResult
    export interface ModifyItemUsesResult extends PlayFabModule.IPlayFabResultCommon {
        // Unique instance identifier of the item with uses consumed.
        ItemInstanceId?: string;
        // Number of uses remaining on the item.
        RemainingUses: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ModifyUserVirtualCurrencyResult
    export interface ModifyUserVirtualCurrencyResult extends PlayFabModule.IPlayFabResultCommon {
        // Balance of the virtual currency after modification.
        Balance: number;
        // Amount added or subtracted from the user's virtual currency. Maximum VC balance is Int32 (2,147,483,647). Any increase
        // over this value will be discarded.
        BalanceChange: number;
        // User currency was subtracted from.
        PlayFabId?: string;
        // Name of the virtual currency which was modified.
        VirtualCurrency?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.MoveItemToCharacterFromCharacterRequest
    export interface MoveItemToCharacterFromCharacterRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the character that currently has the item.
        GivingCharacterId: string;
        // Unique PlayFab assigned instance identifier of the item
        ItemInstanceId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Unique identifier of the character that will be receiving the item.
        ReceivingCharacterId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.MoveItemToCharacterFromCharacterResult
    export interface MoveItemToCharacterFromCharacterResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.MoveItemToCharacterFromUserRequest
    export interface MoveItemToCharacterFromUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Unique PlayFab assigned instance identifier of the item
        ItemInstanceId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.MoveItemToCharacterFromUserResult
    export interface MoveItemToCharacterFromUserResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.MoveItemToUserFromCharacterRequest
    export interface MoveItemToUserFromCharacterRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Unique PlayFab assigned instance identifier of the item
        ItemInstanceId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.MoveItemToUserFromCharacterResult
    export interface MoveItemToUserFromCharacterResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.NintendoSwitchPlayFabIdPair
    export interface NintendoSwitchPlayFabIdPair {
        // Unique Nintendo Switch Device identifier for a user.
        NintendoSwitchDeviceId?: string;
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Nintendo Switch Device identifier.
        PlayFabId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.NotifyMatchmakerPlayerLeftRequest
    export interface NotifyMatchmakerPlayerLeftRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the Game Instance the user is leaving.
        LobbyId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.NotifyMatchmakerPlayerLeftResult
    export interface NotifyMatchmakerPlayerLeftResult extends PlayFabModule.IPlayFabResultCommon {
        // State of user leaving the Game Server Instance.
        PlayerState?: string;

    }

    type PlayerConnectionState = "Unassigned"
        | "Connecting"
        | "Participating"
        | "Participated";

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerLeaderboardEntry
    export interface PlayerLeaderboardEntry {
        // Title-specific display name of the user for this leaderboard entry.
        DisplayName?: string;
        // PlayFab unique identifier of the user for this leaderboard entry.
        PlayFabId?: string;
        // User's overall position in the leaderboard.
        Position: number;
        // The profile of the user, if requested.
        Profile?: PlayerProfileModel;
        // Specific value of the user's statistic.
        StatValue: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerLinkedAccount
    export interface PlayerLinkedAccount {
        // Linked account's email
        Email?: string;
        // Authentication platform
        Platform?: string;
        // Platform user identifier
        PlatformUserId?: string;
        // Linked account's username
        Username?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerLocation
    export interface PlayerLocation {
        // City of the player's geographic location.
        City?: string;
        // The two-character continent code for this location
        ContinentCode: string;
        // The two-character ISO 3166-1 country code for the country associated with the location
        CountryCode: string;
        // Latitude coordinate of the player's geographic location.
        Latitude?: number;
        // Longitude coordinate of the player's geographic location.
        Longitude?: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerProfile
    export interface PlayerProfile {
        // Array of ad campaigns player has been attributed to
        AdCampaignAttributions?: AdCampaignAttribution[];
        // Image URL of the player's avatar.
        AvatarUrl?: string;
        // Banned until UTC Date. If permanent ban this is set for 20 years after the original ban date.
        BannedUntil?: string;
        // Array of contact email addresses associated with the player
        ContactEmailAddresses?: ContactEmailInfo[];
        // Player record created
        Created?: string;
        // Player Display Name
        DisplayName?: string;
        // Last login
        LastLogin?: string;
        // Array of third party accounts linked to this player
        LinkedAccounts?: PlayerLinkedAccount[];
        // Dictionary of player's locations by type.
        Locations?: { [key: string]: PlayerLocation };
        // Player account origination
        Origination?: string;
        // PlayFab Player ID
        PlayerId?: string;
        // Array of player statistics
        PlayerStatistics?: PlayerStatistic[];
        // Publisher this player belongs to
        PublisherId?: string;
        // Array of configured push notification end points
        PushNotificationRegistrations?: PushNotificationRegistration[];
        // Dictionary of player's statistics using only the latest version's value
        Statistics?: { [key: string]: number };
        // List of player's tags for segmentation.
        Tags?: string[];
        // Title ID this profile applies to
        TitleId?: string;
        // A sum of player's total purchases in USD across all currencies.
        TotalValueToDateInUSD?: number;
        // Dictionary of player's total purchases by currency.
        ValuesToDate?: { [key: string]: number };
        // Dictionary of player's virtual currency balances
        VirtualCurrencyBalances?: { [key: string]: number };

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerProfileModel
    export interface PlayerProfileModel {
        // List of advertising campaigns the player has been attributed to
        AdCampaignAttributions?: AdCampaignAttributionModel[];
        // URL of the player's avatar image
        AvatarUrl?: string;
        // If the player is currently banned, the UTC Date when the ban expires
        BannedUntil?: string;
        // List of all contact email info associated with the player account
        ContactEmailAddresses?: ContactEmailInfoModel[];
        // Player record created
        Created?: string;
        // Player display name
        DisplayName?: string;
        // UTC time when the player most recently logged in to the title
        LastLogin?: string;
        // List of all authentication systems linked to this player account
        LinkedAccounts?: LinkedPlatformAccountModel[];
        // List of geographic locations from which the player has logged in to the title
        Locations?: LocationModel[];
        // List of memberships for the player, along with whether are expired.
        Memberships?: MembershipModel[];
        // Player account origination
        Origination?: string;
        // PlayFab player account unique identifier
        PlayerId?: string;
        // Publisher this player belongs to
        PublisherId?: string;
        // List of configured end points registered for sending the player push notifications
        PushNotificationRegistrations?: PushNotificationRegistrationModel[];
        // List of leaderboard statistic values for the player
        Statistics?: StatisticModel[];
        // List of player's tags for segmentation
        Tags?: TagModel[];
        // Title ID this player profile applies to
        TitleId?: string;
        // Sum of the player's purchases made with real-money currencies, converted to US dollars equivalent and represented as a
        // whole number of cents (1/100 USD). For example, 999 indicates nine dollars and ninety-nine cents.
        TotalValueToDateInUSD?: number;
        // List of the player's lifetime purchase totals, summed by real-money currency
        ValuesToDate?: ValueToDateModel[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerProfileViewConstraints
    export interface PlayerProfileViewConstraints {
        // Whether to show player's avatar URL. Defaults to false
        ShowAvatarUrl: boolean;
        // Whether to show the banned until time. Defaults to false
        ShowBannedUntil: boolean;
        // Whether to show campaign attributions. Defaults to false
        ShowCampaignAttributions: boolean;
        // Whether to show contact email addresses. Defaults to false
        ShowContactEmailAddresses: boolean;
        // Whether to show the created date. Defaults to false
        ShowCreated: boolean;
        // Whether to show the display name. Defaults to false
        ShowDisplayName: boolean;
        // Whether to show the last login time. Defaults to false
        ShowLastLogin: boolean;
        // Whether to show the linked accounts. Defaults to false
        ShowLinkedAccounts: boolean;
        // Whether to show player's locations. Defaults to false
        ShowLocations: boolean;
        // Whether to show player's membership information. Defaults to false
        ShowMemberships: boolean;
        // Whether to show origination. Defaults to false
        ShowOrigination: boolean;
        // Whether to show push notification registrations. Defaults to false
        ShowPushNotificationRegistrations: boolean;
        // Reserved for future development
        ShowStatistics: boolean;
        // Whether to show tags. Defaults to false
        ShowTags: boolean;
        // Whether to show the total value to date in usd. Defaults to false
        ShowTotalValueToDateInUsd: boolean;
        // Whether to show the values to date. Defaults to false
        ShowValuesToDate: boolean;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerStatistic
    export interface PlayerStatistic {
        // Statistic ID
        Id?: string;
        // Statistic name
        Name?: string;
        // Current statistic value
        StatisticValue: number;
        // Statistic version (0 if not a versioned statistic)
        StatisticVersion: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PlayerStatisticVersion
    export interface PlayerStatisticVersion {
        // time when the statistic version became active
        ActivationTime: string;
        // time when the statistic version became inactive due to statistic version incrementing
        DeactivationTime?: string;
        // time at which the statistic version was scheduled to become active, based on the configured ResetInterval
        ScheduledActivationTime?: string;
        // time at which the statistic version was scheduled to become inactive, based on the configured ResetInterval
        ScheduledDeactivationTime?: string;
        // name of the statistic when the version became active
        StatisticName?: string;
        // version of the statistic
        Version: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PSNAccountPlayFabIdPair
    export interface PSNAccountPlayFabIdPair {
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the PlayStation Network identifier.
        PlayFabId?: string;
        // Unique PlayStation Network identifier for a user.
        PSNAccountId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PushNotificationPackage
    export interface PushNotificationPackage {
        // Numerical badge to display on App icon (iOS only)
        Badge: number;
        // This must be a JSON formatted object. For use with developer-created custom Push Notification plugins
        CustomData?: string;
        // Icon file to display with the message (Not supported for iOS)
        Icon?: string;
        // Content of the message (all platforms)
        Message: string;
        // Sound file to play with the message (all platforms)
        Sound?: string;
        // Title/Subject of the message. Not supported for iOS
        Title: string;

    }

    type PushNotificationPlatform = "ApplePushNotificationService"
        | "GoogleCloudMessaging";

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PushNotificationRegistration
    export interface PushNotificationRegistration {
        // Notification configured endpoint
        NotificationEndpointARN?: string;
        // Push notification platform
        Platform?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.PushNotificationRegistrationModel
    export interface PushNotificationRegistrationModel {
        // Notification configured endpoint
        NotificationEndpointARN?: string;
        // Push notification platform
        Platform?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RandomResultTableListing
    export interface RandomResultTableListing {
        // Catalog version this table is associated with
        CatalogVersion?: string;
        // Child nodes that indicate what kind of drop table item this actually is.
        Nodes: ResultTableNode[];
        // Unique name for this drop table
        TableId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RedeemCouponRequest
    export interface RedeemCouponRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Catalog version of the coupon.
        CatalogVersion?: string;
        // Optional identifier for the Character that should receive the item. If null, item is added to the player
        CharacterId?: string;
        // Generated coupon code to redeem.
        CouponCode: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RedeemCouponResult
    export interface RedeemCouponResult extends PlayFabModule.IPlayFabResultCommon {
        // Items granted to the player as a result of redeeming the coupon.
        GrantedItems?: ItemInstance[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RedeemMatchmakerTicketRequest
    export interface RedeemMatchmakerTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the Game Server Instance that is asking for validation of the authorization ticket.
        LobbyId: string;
        // Server authorization ticket passed back from a call to Matchmake or StartGame.
        Ticket: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RedeemMatchmakerTicketResult
    export interface RedeemMatchmakerTicketResult extends PlayFabModule.IPlayFabResultCommon {
        // Error value if the ticket was not validated.
        Error?: string;
        // Boolean indicating whether the ticket was validated by the PlayFab service.
        TicketIsValid: boolean;
        // User account information for the user validated.
        UserInfo?: UserAccountInfo;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RefreshGameServerInstanceHeartbeatRequest
    export interface RefreshGameServerInstanceHeartbeatRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the Game Server Instance for which the heartbeat is updated.
        LobbyId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RefreshGameServerInstanceHeartbeatResult
    export interface RefreshGameServerInstanceHeartbeatResult extends PlayFabModule.IPlayFabResultCommon {

    }

    type Region = "USCentral"
        | "USEast"
        | "EUWest"
        | "Singapore"
        | "Japan"
        | "Brazil"
        | "Australia";

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RegisterGameRequest
    export interface RegisterGameRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the build running on the Game Server Instance.
        Build: string;
        // Game Mode the Game Server instance is running. Note that this must be defined in the Game Modes tab in the PlayFab Game
        // Manager, along with the Build ID (the same Game Mode can be defined for multiple Build IDs).
        GameMode: string;
        // Previous lobby id if re-registering an existing game.
        LobbyId?: string;
        // Region in which the Game Server Instance is running. For matchmaking using non-AWS region names, set this to any AWS
        // region and use Tags (below) to specify your custom region.
        Region: string;
        // IPV4 address of the game server instance.
        ServerIPV4Address?: string;
        // IPV6 address (if any) of the game server instance.
        ServerIPV6Address?: string;
        // Port number for communication with the Game Server Instance.
        ServerPort: string;
        // Public DNS name (if any) of the server
        ServerPublicDNSName?: string;
        // Tags for the Game Server Instance
        Tags?: { [key: string]: string | null };

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RegisterGameResponse
    export interface RegisterGameResponse extends PlayFabModule.IPlayFabResultCommon {
        // Unique identifier generated for the Game Server Instance that is registered. If LobbyId is specified in request and the
        // game still exists in PlayFab, the LobbyId in request is returned. Otherwise a new lobby id will be returned.
        LobbyId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RemoveFriendRequest
    export interface RemoveFriendRequest extends PlayFabModule.IPlayFabRequestCommon {
        // PlayFab identifier of the friend account which is to be removed.
        FriendPlayFabId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RemoveGenericIDRequest
    export interface RemoveGenericIDRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Generic service identifier to be removed from the player.
        GenericId: GenericServiceId;
        // PlayFabId of the user to remove.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RemovePlayerTagRequest
    export interface RemovePlayerTagRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Unique tag for player profile.
        TagName: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RemovePlayerTagResult
    export interface RemovePlayerTagResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RemoveSharedGroupMembersRequest
    export interface RemoveSharedGroupMembersRequest extends PlayFabModule.IPlayFabRequestCommon {
        // An array of unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabIds: string[];
        // Unique identifier for the shared group.
        SharedGroupId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RemoveSharedGroupMembersResult
    export interface RemoveSharedGroupMembersResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ReportPlayerServerRequest
    export interface ReportPlayerServerRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Optional additional comment by reporting player.
        Comment?: string;
        // Unique PlayFab identifier of the reported player.
        ReporteeId: string;
        // PlayFabId of the reporting player.
        ReporterId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ReportPlayerServerResult
    export interface ReportPlayerServerResult extends PlayFabModule.IPlayFabResultCommon {
        // The number of remaining reports which may be filed today by this reporting player.
        SubmissionsRemaining: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ResultTableNode
    export interface ResultTableNode {
        // Either an ItemId, or the TableId of another random result table
        ResultItem: string;
        // Whether this entry in the table is an item or a link to another table
        ResultItemType: string;
        // How likely this is to be rolled - larger numbers add more weight
        Weight: number;

    }

    type ResultTableNodeType = "ItemId"
        | "TableId";

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeAllBansForUserRequest
    export interface RevokeAllBansForUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeAllBansForUserResult
    export interface RevokeAllBansForUserResult extends PlayFabModule.IPlayFabResultCommon {
        // Information on the bans that were revoked.
        BanData?: BanInfo[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeBansRequest
    export interface RevokeBansRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Ids of the bans to be revoked. Maximum 100.
        BanIds: string[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeBansResult
    export interface RevokeBansResult extends PlayFabModule.IPlayFabResultCommon {
        // Information on the bans that were revoked
        BanData?: BanInfo[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeInventoryItem
    export interface RevokeInventoryItem {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // Unique PlayFab assigned instance identifier of the item
        ItemInstanceId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeInventoryItemRequest
    export interface RevokeInventoryItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // Unique PlayFab assigned instance identifier of the item
        ItemInstanceId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeInventoryItemsRequest
    export interface RevokeInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Array of player items to revoke, between 1 and 25 items.
        Items: RevokeInventoryItem[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeInventoryItemsResult
    export interface RevokeInventoryItemsResult extends PlayFabModule.IPlayFabResultCommon {
        // Collection of any errors that occurred during processing.
        Errors?: RevokeItemError[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeInventoryResult
    export interface RevokeInventoryResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.RevokeItemError
    export interface RevokeItemError {
        // Specific error that was encountered.
        Error?: string;
        // Item information that failed to be revoked.
        Item?: RevokeInventoryItem;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SavePushNotificationTemplateRequest
    export interface SavePushNotificationTemplateRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Android JSON for the notification template.
        AndroidPayload?: string;
        // Id of the push notification template.
        Id?: string;
        // IOS JSON for the notification template.
        IOSPayload?: string;
        // Dictionary of localized push notification templates with the language as the key.
        LocalizedPushNotificationTemplates?: { [key: string]: LocalizedPushNotificationProperties };
        // Name of the push notification template.
        Name: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SavePushNotificationTemplateResult
    export interface SavePushNotificationTemplateResult extends PlayFabModule.IPlayFabResultCommon {
        // Id of the push notification template that was saved.
        PushNotificationTemplateId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ScriptExecutionError
    export interface ScriptExecutionError {
        // Error code, such as CloudScriptNotFound, JavascriptException, CloudScriptFunctionArgumentSizeExceeded,
        // CloudScriptAPIRequestCountExceeded, CloudScriptAPIRequestError, or CloudScriptHTTPRequestError
        Error?: string;
        // Details about the error
        Message?: string;
        // Point during the execution of the script at which the error occurred, if any
        StackTrace?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SendCustomAccountRecoveryEmailRequest
    export interface SendCustomAccountRecoveryEmailRequest extends PlayFabModule.IPlayFabRequestCommon {
        // User email address attached to their account
        Email?: string;
        // The email template id of the account recovery email template to send.
        EmailTemplateId: string;
        // The user's username requesting an account recovery.
        Username?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SendCustomAccountRecoveryEmailResult
    export interface SendCustomAccountRecoveryEmailResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SendEmailFromTemplateRequest
    export interface SendEmailFromTemplateRequest extends PlayFabModule.IPlayFabRequestCommon {
        // The email template id of the email template to send.
        EmailTemplateId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SendEmailFromTemplateResult
    export interface SendEmailFromTemplateResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SendPushNotificationFromTemplateRequest
    export interface SendPushNotificationFromTemplateRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Id of the push notification template.
        PushNotificationTemplateId: string;
        // PlayFabId of the push notification recipient.
        Recipient: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SendPushNotificationRequest
    export interface SendPushNotificationRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Allows you to provide precisely formatted json to target devices. This is an advanced feature, allowing you to deliver
        // to custom plugin logic, fields, or functionality not natively supported by PlayFab.
        AdvancedPlatformDelivery?: AdvancedPushPlatformMsg[];
        // Text of message to send.
        Message?: string;
        // Defines all possible push attributes like message, title, icon, etc. Some parameters are device specific - please see
        // the PushNotificationPackage documentation for details.
        Package?: PushNotificationPackage;
        // PlayFabId of the recipient of the push notification.
        Recipient: string;
        // Subject of message to send (may not be displayed in all platforms)
        Subject?: string;
        // Target Platforms that should receive the Message or Package. If omitted, we will send to all available platforms.
        TargetPlatforms?: string[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SendPushNotificationResult
    export interface SendPushNotificationResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ServerCustomIDPlayFabIDPair
    export interface ServerCustomIDPlayFabIDPair {
        // Unique PlayFab identifier.
        PlayFabId?: string;
        // Unique server custom identifier for this player.
        ServerCustomId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ServerLoginResult
    export interface ServerLoginResult extends PlayFabModule.IPlayFabResultCommon {
        // If LoginTitlePlayerAccountEntity flag is set on the login request the title_player_account will also be logged in and
        // returned.
        EntityToken?: EntityTokenResponse;
        // Results for requested info.
        InfoResultPayload?: GetPlayerCombinedInfoResultPayload;
        // The time of this user's previous login. If there was no previous login, then it's DateTime.MinValue
        LastLoginTime?: string;
        // True if the account was newly created on this login.
        NewlyCreated: boolean;
        // Player's unique PlayFabId.
        PlayFabId?: string;
        // Unique token authorizing the user and game at the server level, for the current session.
        SessionTicket?: string;
        // Settings specific to this user.
        SettingsForUser?: UserSettings;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetFriendTagsRequest
    export interface SetFriendTagsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // PlayFab identifier of the friend account to which the tag(s) should be applied.
        FriendPlayFabId: string;
        // PlayFab identifier of the player whose friend is to be updated.
        PlayFabId: string;
        // Array of tags to set on the friend account.
        Tags: string[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetGameServerInstanceDataRequest
    export interface SetGameServerInstanceDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Custom data to set for the specified game server instance.
        GameServerData: string;
        // Unique identifier of the Game Instance to be updated, in decimal format.
        LobbyId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetGameServerInstanceDataResult
    export interface SetGameServerInstanceDataResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetGameServerInstanceStateRequest
    export interface SetGameServerInstanceStateRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the Game Instance to be updated, in decimal format.
        LobbyId: string;
        // State to set for the specified game server instance.
        State: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetGameServerInstanceStateResult
    export interface SetGameServerInstanceStateResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetGameServerInstanceTagsRequest
    export interface SetGameServerInstanceTagsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique identifier of the Game Server Instance to be updated.
        LobbyId: string;
        // Tags to set for the specified Game Server Instance. Note that this is the complete list of tags to be associated with
        // the Game Server Instance.
        Tags: { [key: string]: string | null };

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetGameServerInstanceTagsResult
    export interface SetGameServerInstanceTagsResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetPlayerSecretRequest
    export interface SetPlayerSecretRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Player secret that is used to verify API request signatures (Enterprise Only).
        PlayerSecret?: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetPlayerSecretResult
    export interface SetPlayerSecretResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetPublisherDataRequest
    export interface SetPublisherDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same
        // name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
        Key: string;
        // new value to set. Set to null to remove a value
        Value?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetPublisherDataResult
    export interface SetPublisherDataResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetTitleDataRequest
    export interface SetTitleDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same
        // name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
        Key: string;
        // new value to set. Set to null to remove a value
        Value?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SetTitleDataResult
    export interface SetTitleDataResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SharedGroupDataRecord
    export interface SharedGroupDataRecord {
        // Timestamp for when this data was last updated.
        LastUpdated: string;
        // PlayFabId of the user to last update this value.
        LastUpdatedBy?: string;
        // Indicates whether this data can be read by all users (public) or only members of the group (private).
        Permission?: string;
        // Data stored for the specified group data key.
        Value?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.StatisticModel
    export interface StatisticModel {
        // Statistic name
        Name?: string;
        // Statistic value
        Value: number;
        // Statistic version (0 if not a versioned statistic)
        Version: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.StatisticNameVersion
    export interface StatisticNameVersion {
        // unique name of the statistic
        StatisticName: string;
        // the version of the statistic to be returned
        Version: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.StatisticUpdate
    export interface StatisticUpdate {
        // unique name of the statistic
        StatisticName: string;
        // statistic value for the player
        Value: number;
        // for updates to an existing statistic value for a player, the version of the statistic when it was loaded. Null when
        // setting the statistic value for the first time.
        Version?: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.StatisticValue
    export interface StatisticValue {
        // unique name of the statistic
        StatisticName?: string;
        // statistic value for the player
        Value: number;
        // for updates to an existing statistic value for a player, the version of the statistic when it was loaded
        Version: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SteamPlayFabIdPair
    export interface SteamPlayFabIdPair {
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Steam identifier.
        PlayFabId?: string;
        // Unique Steam identifier for a user.
        SteamStringId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SubscriptionModel
    export interface SubscriptionModel {
        // When this subscription expires.
        Expiration: string;
        // The time the subscription was orignially purchased
        InitialSubscriptionTime: string;
        // Whether this subscription is currently active. That is, if Expiration > now.
        IsActive: boolean;
        // The status of this subscription, according to the subscription provider.
        Status?: string;
        // The id for this subscription
        SubscriptionId?: string;
        // The item id for this subscription from the primary catalog
        SubscriptionItemId?: string;
        // The provider for this subscription. Apple or Google Play are supported today.
        SubscriptionProvider?: string;

    }

    type SubscriptionProviderStatus = "NoError"
        | "Cancelled"
        | "UnknownError"
        | "BillingError"
        | "ProductUnavailable"
        | "CustomerDidNotAcceptPriceChange"
        | "FreeTrial"
        | "PaymentPending";

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SubtractCharacterVirtualCurrencyRequest
    export interface SubtractCharacterVirtualCurrencyRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Amount to be subtracted from the user balance of the specified virtual currency.
        Amount: number;
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Name of the virtual currency which is to be decremented.
        VirtualCurrency: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.SubtractUserVirtualCurrencyRequest
    export interface SubtractUserVirtualCurrencyRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Amount to be subtracted from the user balance of the specified virtual currency.
        Amount: number;
        // PlayFab unique identifier of the user whose virtual currency balance is to be decreased.
        PlayFabId: string;
        // Name of the virtual currency which is to be decremented.
        VirtualCurrency: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.TagModel
    export interface TagModel {
        // Full value of the tag, including namespace
        TagValue?: string;

    }

    type TitleActivationStatus = "None"
        | "ActivatedTitleKey"
        | "PendingSteam"
        | "ActivatedSteam"
        | "RevokedSteam";

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.TitleNewsItem
    export interface TitleNewsItem {
        // News item body.
        Body?: string;
        // Unique identifier of news item.
        NewsId?: string;
        // Date and time when the news item was posted.
        Timestamp: string;
        // Title of the news item.
        Title?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UnlinkServerCustomIdRequest
    export interface UnlinkServerCustomIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab identifier.
        PlayFabId: string;
        // Unique server custom identifier for this player.
        ServerCustomId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UnlinkServerCustomIdResult
    export interface UnlinkServerCustomIdResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UnlinkXboxAccountRequest
    export interface UnlinkXboxAccountRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Xbox Live identifier.
        PlayFabId: string;
        // Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com", "").
        XboxToken: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UnlinkXboxAccountResult
    export interface UnlinkXboxAccountResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UnlockContainerInstanceRequest
    export interface UnlockContainerInstanceRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Specifies the catalog version that should be used to determine container contents. If unspecified, uses catalog
        // associated with the item instance.
        CatalogVersion?: string;
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // ItemInstanceId of the container to unlock.
        ContainerItemInstanceId: string;
        // ItemInstanceId of the key that will be consumed by unlocking this container. If the container requires a key, this
        // parameter is required.
        KeyItemInstanceId?: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UnlockContainerItemRequest
    export interface UnlockContainerItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Specifies the catalog version that should be used to determine container contents. If unspecified, uses default/primary
        // catalog.
        CatalogVersion?: string;
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // Catalog ItemId of the container type to unlock.
        ContainerItemId: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UnlockContainerItemResult
    export interface UnlockContainerItemResult extends PlayFabModule.IPlayFabResultCommon {
        // Items granted to the player as a result of unlocking the container.
        GrantedItems?: ItemInstance[];
        // Unique instance identifier of the container unlocked.
        UnlockedItemInstanceId?: string;
        // Unique instance identifier of the key used to unlock the container, if applicable.
        UnlockedWithItemInstanceId?: string;
        // Virtual currency granted to the player as a result of unlocking the container.
        VirtualCurrency?: { [key: string]: number };

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateAvatarUrlRequest
    export interface UpdateAvatarUrlRequest extends PlayFabModule.IPlayFabRequestCommon {
        // URL of the avatar image. If empty, it removes the existing avatar URL.
        ImageUrl: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateBanRequest
    export interface UpdateBanRequest {
        // The updated active state for the ban. Null for no change.
        Active?: boolean;
        // The id of the ban to be updated.
        BanId: string;
        // The updated expiration date for the ban. Null for no change.
        Expires?: string;
        // The updated IP address for the ban. Null for no change.
        IPAddress?: string;
        // The updated MAC address for the ban. Null for no change.
        MACAddress?: string;
        // Whether to make this ban permanent. Set to true to make this ban permanent. This will not modify Active state.
        Permanent?: boolean;
        // The updated reason for the ban to be updated. Maximum 140 characters. Null for no change.
        Reason?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateBansRequest
    export interface UpdateBansRequest extends PlayFabModule.IPlayFabRequestCommon {
        // List of bans to be updated. Maximum 100.
        Bans: UpdateBanRequest[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateBansResult
    export interface UpdateBansResult extends PlayFabModule.IPlayFabResultCommon {
        // Information on the bans that were updated
        BanData?: BanInfo[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateCharacterDataRequest
    export interface UpdateCharacterDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
        // not begin with a '!' character or be null.
        Data?: { [key: string]: string | null };
        // Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
        // constraints. Use this to delete the keys directly.
        KeysToRemove?: string[];
        // Permission to be applied to all user data keys written in this request. Defaults to "private" if not set.
        Permission?: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateCharacterDataResult
    export interface UpdateCharacterDataResult extends PlayFabModule.IPlayFabResultCommon {
        // Indicates the current version of the data that has been set. This is incremented with every set call for that type of
        // data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
        DataVersion: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateCharacterStatisticsRequest
    export interface UpdateCharacterStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // Statistics to be updated with the provided values.
        CharacterStatistics?: { [key: string]: number };
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateCharacterStatisticsResult
    export interface UpdateCharacterStatisticsResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdatePlayerStatisticsRequest
    export interface UpdatePlayerStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Indicates whether the statistics provided should be set, regardless of the aggregation method set on the statistic.
        // Default is false.
        ForceUpdate?: boolean;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // Statistics to be updated with the provided values
        Statistics: StatisticUpdate[];

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdatePlayerStatisticsResult
    export interface UpdatePlayerStatisticsResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateSharedGroupDataRequest
    export interface UpdateSharedGroupDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
        // not begin with a '!' character or be null.
        Data?: { [key: string]: string | null };
        // Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
        // constraints. Use this to delete the keys directly.
        KeysToRemove?: string[];
        // Permission to be applied to all user data keys in this request.
        Permission?: string;
        // Unique identifier for the shared group.
        SharedGroupId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateSharedGroupDataResult
    export interface UpdateSharedGroupDataResult extends PlayFabModule.IPlayFabResultCommon {

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateUserDataRequest
    export interface UpdateUserDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
        // not begin with a '!' character or be null.
        Data?: { [key: string]: string | null };
        // Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
        // constraints. Use this to delete the keys directly.
        KeysToRemove?: string[];
        // Permission to be applied to all user data keys written in this request. Defaults to "private" if not set.
        Permission?: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateUserDataResult
    export interface UpdateUserDataResult extends PlayFabModule.IPlayFabResultCommon {
        // Indicates the current version of the data that has been set. This is incremented with every set call for that type of
        // data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
        DataVersion: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateUserInternalDataRequest
    export interface UpdateUserInternalDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
        // not begin with a '!' character or be null.
        Data?: { [key: string]: string | null };
        // Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
        // constraints. Use this to delete the keys directly.
        KeysToRemove?: string[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UpdateUserInventoryItemDataRequest
    export interface UpdateUserInventoryItemDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId?: string;
        // Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
        // not begin with a '!' character or be null.
        Data?: { [key: string]: string | null };
        // Unique PlayFab assigned instance identifier of the item
        ItemInstanceId: string;
        // Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
        // constraints. Use this to delete the keys directly.
        KeysToRemove?: string[];
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserAccountInfo
    export interface UserAccountInfo {
        // User Android device information, if an Android device has been linked
        AndroidDeviceInfo?: UserAndroidDeviceInfo;
        // Timestamp indicating when the user account was created
        Created: string;
        // Custom ID information, if a custom ID has been assigned
        CustomIdInfo?: UserCustomIdInfo;
        // User Facebook information, if a Facebook account has been linked
        FacebookInfo?: UserFacebookInfo;
        // Facebook Instant Games account information, if a Facebook Instant Games account has been linked
        FacebookInstantGamesIdInfo?: UserFacebookInstantGamesIdInfo;
        // User Gamecenter information, if a Gamecenter account has been linked
        GameCenterInfo?: UserGameCenterInfo;
        // User Google account information, if a Google account has been linked
        GoogleInfo?: UserGoogleInfo;
        // User iOS device information, if an iOS device has been linked
        IosDeviceInfo?: UserIosDeviceInfo;
        // User Kongregate account information, if a Kongregate account has been linked
        KongregateInfo?: UserKongregateInfo;
        // Nintendo Switch account information, if a Nintendo Switch account has been linked
        NintendoSwitchDeviceIdInfo?: number;
        // OpenID Connect information, if any OpenID Connect accounts have been linked
        OpenIdInfo?: UserOpenIdInfo[];
        // Unique identifier for the user account
        PlayFabId?: string;
        // Personal information for the user which is considered more sensitive
        PrivateInfo?: UserPrivateAccountInfo;
        // User PSN account information, if a PSN account has been linked
        PsnInfo?: UserPsnInfo;
        // User Steam information, if a Steam account has been linked
        SteamInfo?: UserSteamInfo;
        // Title-specific information for the user account
        TitleInfo?: UserTitleInfo;
        // User Twitch account information, if a Twitch account has been linked
        TwitchInfo?: UserTwitchInfo;
        // User account name in the PlayFab service
        Username?: string;
        // Windows Hello account information, if a Windows Hello account has been linked
        WindowsHelloInfo?: UserWindowsHelloInfo;
        // User XBox account information, if a XBox account has been linked
        XboxInfo?: UserXboxInfo;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserAndroidDeviceInfo
    export interface UserAndroidDeviceInfo {
        // Android device ID
        AndroidDeviceId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserCustomIdInfo
    export interface UserCustomIdInfo {
        // Custom ID
        CustomId?: string;

    }

    type UserDataPermission = "Private"
        | "Public";

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserDataRecord
    export interface UserDataRecord {
        // Timestamp for when this data was last updated.
        LastUpdated: string;
        // Indicates whether this data can be read by all users (public) or only the user (private). This is used for GetUserData
        // requests being made by one player about another player.
        Permission?: string;
        // Data stored for the specified user data key.
        Value?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserFacebookInfo
    export interface UserFacebookInfo {
        // Facebook identifier
        FacebookId?: string;
        // Facebook full name
        FullName?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserFacebookInstantGamesIdInfo
    export interface UserFacebookInstantGamesIdInfo {
        // Facebook Instant Games ID
        FacebookInstantGamesId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserGameCenterInfo
    export interface UserGameCenterInfo {
        // Gamecenter identifier
        GameCenterId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserGoogleInfo
    export interface UserGoogleInfo {
        // Email address of the Google account
        GoogleEmail?: string;
        // Gender information of the Google account
        GoogleGender?: string;
        // Google ID
        GoogleId?: string;
        // Locale of the Google account
        GoogleLocale?: string;
        // Name of the Google account user
        GoogleName?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserIosDeviceInfo
    export interface UserIosDeviceInfo {
        // iOS device ID
        IosDeviceId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserKongregateInfo
    export interface UserKongregateInfo {
        // Kongregate ID
        KongregateId?: string;
        // Kongregate Username
        KongregateName?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserNintendoSwitchDeviceIdInfo
    export interface UserNintendoSwitchDeviceIdInfo {
        // Nintendo Switch Device ID
        NintendoSwitchDeviceId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserOpenIdInfo
    export interface UserOpenIdInfo {
        // OpenID Connection ID
        ConnectionId?: string;
        // OpenID Issuer
        Issuer?: string;
        // OpenID Subject
        Subject?: string;

    }

    type UserOrigination = "Organic"
        | "Steam"
        | "Google"
        | "Amazon"
        | "Facebook"
        | "Kongregate"
        | "GamersFirst"
        | "Unknown"
        | "IOS"
        | "LoadTest"
        | "Android"
        | "PSN"
        | "GameCenter"
        | "CustomId"
        | "XboxLive"
        | "Parse"
        | "Twitch"
        | "WindowsHello"
        | "ServerCustomId"
        | "NintendoSwitchDeviceId"
        | "FacebookInstantGamesId"
        | "OpenIdConnect";

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserPrivateAccountInfo
    export interface UserPrivateAccountInfo {
        // user email address
        Email?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserPsnInfo
    export interface UserPsnInfo {
        // PSN account ID
        PsnAccountId?: string;
        // PSN online ID
        PsnOnlineId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserSettings
    export interface UserSettings {
        // Boolean for whether this player is eligible for gathering device info.
        GatherDeviceInfo: boolean;
        // Boolean for whether this player should report OnFocus play-time tracking.
        GatherFocusInfo: boolean;
        // Boolean for whether this player is eligible for ad tracking.
        NeedsAttribution: boolean;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserSteamInfo
    export interface UserSteamInfo {
        // what stage of game ownership the user is listed as being in, from Steam
        SteamActivationStatus?: string;
        // the country in which the player resides, from Steam data
        SteamCountry?: string;
        // currency type set in the user Steam account
        SteamCurrency?: string;
        // Steam identifier
        SteamId?: string;
        // Steam display name
        SteamName?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserTitleInfo
    export interface UserTitleInfo {
        // URL to the player's avatar.
        AvatarUrl?: string;
        // timestamp indicating when the user was first associated with this game (this can differ significantly from when the user
        // first registered with PlayFab)
        Created: string;
        // name of the user, as it is displayed in-game
        DisplayName?: string;
        // timestamp indicating when the user first signed into this game (this can differ from the Created timestamp, as other
        // events, such as issuing a beta key to the user, can associate the title to the user)
        FirstLogin?: string;
        // boolean indicating whether or not the user is currently banned for a title
        isBanned?: boolean;
        // timestamp for the last user login for this title
        LastLogin?: string;
        // source by which the user first joined the game, if known
        Origination?: string;
        // Title player account entity for this user
        TitlePlayerAccount?: EntityKey;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserTwitchInfo
    export interface UserTwitchInfo {
        // Twitch ID
        TwitchId?: string;
        // Twitch Username
        TwitchUserName?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserWindowsHelloInfo
    export interface UserWindowsHelloInfo {
        // Windows Hello Device Name
        WindowsHelloDeviceName?: string;
        // Windows Hello Public Key Hash
        WindowsHelloPublicKeyHash?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.UserXboxInfo
    export interface UserXboxInfo {
        // XBox user ID
        XboxUserId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.ValueToDateModel
    export interface ValueToDateModel {
        // ISO 4217 code of the currency used in the purchases
        Currency?: string;
        // Total value of the purchases in a whole number of 1/100 monetary units. For example, 999 indicates nine dollars and
        // ninety-nine cents when Currency is 'USD')
        TotalValue: number;
        // Total value of the purchases in a string representation of decimal monetary units. For example, '9.99' indicates nine
        // dollars and ninety-nine cents when Currency is 'USD'.
        TotalValueAsDecimal?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.VirtualCurrencyRechargeTime
    export interface VirtualCurrencyRechargeTime {
        // Maximum value to which the regenerating currency will automatically increment. Note that it can exceed this value
        // through use of the AddUserVirtualCurrency API call. However, it will not regenerate automatically until it has fallen
        // below this value.
        RechargeMax: number;
        // Server timestamp in UTC indicating the next time the virtual currency will be incremented.
        RechargeTime: string;
        // Time remaining (in seconds) before the next recharge increment of the virtual currency.
        SecondsToRecharge: number;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.WriteEventResponse
    export interface WriteEventResponse extends PlayFabModule.IPlayFabResultCommon {
        // The unique identifier of the event. The values of this identifier consist of ASCII characters and are not constrained to
        // any particular format.
        EventId?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.WriteServerCharacterEventRequest
    export interface WriteServerCharacterEventRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Custom event properties. Each property consists of a name (string) and a value (JSON object).
        Body?: { [key: string]: any };
        // Unique PlayFab assigned ID for a specific character owned by a user
        CharacterId: string;
        // The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
        // commonly follows the subject_verb_object pattern (e.g. player_logged_in).
        EventName: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // The time (in UTC) associated with this event. The value dafaults to the current time.
        Timestamp?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.WriteServerPlayerEventRequest
    export interface WriteServerPlayerEventRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Custom data properties associated with the event. Each property consists of a name (string) and a value (JSON object).
        Body?: { [key: string]: any };
        // The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
        // commonly follows the subject_verb_object pattern (e.g. player_logged_in).
        EventName: string;
        // Unique PlayFab assigned ID of the user on whom the operation will be performed.
        PlayFabId: string;
        // The time (in UTC) associated with this event. The value dafaults to the current time.
        Timestamp?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.WriteTitleEventRequest
    export interface WriteTitleEventRequest extends PlayFabModule.IPlayFabRequestCommon {
        // Custom event properties. Each property consists of a name (string) and a value (JSON object).
        Body?: { [key: string]: any };
        // The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
        // commonly follows the subject_verb_object pattern (e.g. player_logged_in).
        EventName: string;
        // The time (in UTC) associated with this event. The value dafaults to the current time.
        Timestamp?: string;

    }

    // https://api.playfab.com/Documentation/Server/datatype/PlayFab.Server.Models/PlayFab.Server.Models.XboxLiveAccountPlayFabIdPair
    export interface XboxLiveAccountPlayFabIdPair {
        // Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Xbox Live identifier.
        PlayFabId?: string;
        // Unique Xbox Live identifier for a user.
        XboxLiveAccountId?: string;

    }


}
