// eslint-disable-next-line
InboxSDK.load(2, 'sdk_amalb_am_b382d5f1a6').then(function(sdk){

    sdk.Compose.registerComposeViewHandler(function(composeView){

        composeView.addButton({
            title: "Templates!",
            iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/%28at%29.svg/240px-%28at%29.svg.png',
            onClick: function(click_event) {
                const iframe = document.createElement('iframe');

                const modal = sdk.Widgets.showModalView({
                    title: 'Templates to choose',
                    'el': iframe,
                });

                function modalMessageHandler(event) {
                    // eslint-disable-next-line
                    const extensionOriginRegexp = new RegExp('chrome-extension:\/\/' + chrome.runtime.id);

                    if (event.origin.match(extensionOriginRegexp)) {
                        if (event.data.match(/^template#/)) {
                            const template_contents = event.data.substring('template#'.length);

                            console.log('Got template contents from iframe: ' + template_contents);

                            click_event.composeView.setBodyText(template_contents);
                            modal.close();
                        }
                    }
                };

                window.addEventListener('message', modalMessageHandler, false);
                modal.on('destroy', function() {
                    window.removeEventListener('message', modalMessageHandler, false);
                });

                // eslint-disable-next-line
                iframe.src = chrome.runtime.getURL('index.html');

            }

        });

    });

});
