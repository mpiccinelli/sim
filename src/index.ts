/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

WA.room.onEnterLayer('clockZone').subscribe(() => {
    WA.chat.sendChatMessage("Hello!", 'Mr Robot');
});

WA.room.onLeaveLayer('clockZone').subscribe(() => {
    WA.chat.sendChatMessage("Goodbye!", 'Mr Robot');
});