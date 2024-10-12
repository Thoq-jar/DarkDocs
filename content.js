function main() {
    console.log("[DarkDocs] DarkDocs v0.1.0");
    inject();
}

function inject() {
    try {
        console.log("[DarkDocs] Injecting DarkDocs...");
        document.body.style.filter = "invert(1)";
        document.querySelectorAll('img, svg').forEach(element => element.style.filter = "invert(1)");
        console.log("[DarkDocs] Injected DarkDocs successfully!");
    } catch (ex) {
        console.error(`[DarkDocs] Error injecting: ${ex}`);
    }
}

main();