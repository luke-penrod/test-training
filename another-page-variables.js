alloy("configure", {
    "edgeConfigId": "2e40f92e-e474-44ed-a69c-bbc7807443a2",
    "orgId": "53A16ACB5CC1D3760A495C99@AdobeOrg"
});

alloy("sendEvent", {
    "xdm": {
        "web": {
            "webPageDetails": {
                "URL": window.document.URL,
                "name": window.document.title
            }
        },
        "_experience": {
            "analytics": {
                "customDimensions": {
                    "eVars": {
                        "eVar1": "Luke Web SDK",
                        "eVar2": "Christmas tree"
                    }
                }
            }
        }
    }
});