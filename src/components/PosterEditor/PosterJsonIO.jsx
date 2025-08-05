import React, { useRef } from "react";


export function exportPosterJson(posterData) {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(posterData, null, 2));
    let album = posterData.albumName || "Posterfy";
    album = String(album).replace(/[^a-zA-Z0-9-_ ]/g, "").replace(/\s+/g, "-");
    const fileName = `Posterfy-${album}.json`;
    const link = document.createElement('a');
    link.href = dataStr;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


export function importPosterJson(onImport) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.style.display = 'none';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
            try {
                const json = JSON.parse(evt.target.result);
                onImport(json);
            } catch {}
        };
        reader.readAsText(file);
    };
    document.body.appendChild(input);
    input.click();
    setTimeout(() => document.body.removeChild(input), 1000);
}
