var geniusBlockerObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length > 0) { 
            for (var i = 0; i < mutation.addedNodes.length; i++) {
                var item = mutation.addedNodes[i];
                if (item.tagName !== undefined) {
                    if (item.tagName === "SCRIPT") {
                        var src = item.getAttribute("src");
                        if (src !== undefined && (src.startsWith("http://genius.com/") || src.startsWith("https://genius.com/"))) {
                            console.log("Removing ", item.tagName, src);
                            document.body.removeChild(item);
                        } else {
                            console.log("Not removing ", item.tagName, src);
                        }
                    } else if (item.tagName.startsWith("GENIUS")) {
                        console.log("Removing ", item.tagName);
                        document.body.removeChild(item);
                    } else {
                        console.log("Not removing ", item.tagName);
                    }
                }
            }
        }
    });
});

geniusBlockerObserver.observe(document.body, {childList: true});
    

