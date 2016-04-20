var geniusBlockerObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length > 0) { 
            for (var i = 0; i < mutation.addedNodes.length; i++) {
                var item = mutation.addedNodes[i];
                if (item.tagName !== undefined) {
                    if (item.tagName.startsWith("GENIUS")) {
                        document.body.removeChild(item);
                    } 
                }
            }
        }
    });
});

geniusBlockerObserver.observe(document.body, {childList: true});
    

