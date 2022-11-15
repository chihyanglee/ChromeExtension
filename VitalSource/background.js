chrome.runtime.onInstalled.addListener(async () => { });

const callback = (details) => {
    const pageStartWithUrl = "https://jigsaw.vitalsource.com/books";
    const resolution = "2000";
    const url = details.url;
    if (url.startsWith(pageStartWithUrl) && url.endsWith(resolution)) {
        chrome.downloads.download({
            url: url,
            filename: "cehbook.jpg",
        });
    }
};

const filter = {
    urls: ["<all_urls>"],
};

const opt_extraInfoSpec = [];

chrome.webRequest.onCompleted.addListener(callback, filter, opt_extraInfoSpec);
