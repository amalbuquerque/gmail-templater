// eslint-disable-next-line
InboxSDK.load(2, 'sdk_amalb_am_b382d5f1a6').then(function(sdk){

    sdk.Compose.registerComposeViewHandler(function(composeView){

        composeView.addButton({
            title: "Templates!",
            iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/%28at%29.svg/240px-%28at%29.svg.png',
            onClick: function() {
                const iframe = document.createElement('iframe');
                iframe.onload = function() {
                    iframe.contentWindow.postMessage("greeting", "*");
                };

                // TODO: Match the exact extension id
                // var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;

                function modalMessageHandler(event) {
                    if (event.origin.match(/^chrome-extension:\/\//)) {
                        //make sure that the message is coming from an extension and you can get more strict that the
                        //extension id is the same as your public extension id
                        if (event.data === 'close') {
                            console.log('got close event from iframe');
                            //modal.close();

                        } else if (event.data === 'TODO-other-events-to-handle') {
                            // TODO
                            console.log('TODO need to handle other events');
                        }
                    }
                };

                window.addEventListener('message', modalMessageHandler, false);
                // eslint-disable-next-line
                iframe.src = chrome.runtime.getURL('index.html');

                const modal = sdk.Widgets.showModalView({
                    title: 'Templates to choose',
                    'el': iframe,
                });

                modal.on('destroy', function() {
                    window.removeEventListener('message', modalMessageHandler, false);
                });

            }

        });

    });

});
