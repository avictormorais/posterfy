import React, { useState } from "react";
import PosterEditor from "../PosterEditor";
import ModelSelector from "../ModelSelector";
import Searchbar from "../../Searchbar";
import Grid from "../../Grid";

const PosterBySearch = ({ onBack }) => {
    const [query, setQuery] = useState("");
    const [albumId, setAlbumId] = useState(null);
    const [showModelSelector, setShowModelSelector] = useState(false);
    const [selectedModel, setSelectedModel] = useState(null);
    const [modelParams, setModelParams] = useState(null);

    function onClickAlbum(id) {
        setAlbumId(id);
        setShowModelSelector(true);
        setSelectedModel(null);
        setModelParams(null);
    }

    function handleClickBack() {
        setAlbumId(null);
        setShowModelSelector(false);
        setSelectedModel(null);
        setModelParams(null);
        if (onBack) onBack();
    }


    // Garante que o Searchbar seja controlado pelo estado query
    const onSearch = (newQuery) => {
        setQuery(newQuery);
    };

    if (albumId && selectedModel && modelParams) {
        return (
            <PosterEditor albumID={albumId} handleClickBack={handleClickBack} model={selectedModel} modelParams={modelParams} />
        );
    }
    if (albumId && showModelSelector) {
        return (
            <ModelSelector
                onSelectModel={(model, params) => {
                    setSelectedModel(model);
                    setModelParams(params);
                    setShowModelSelector(false);
                }}
                onBack={handleClickBack}
            />
        );
    }

    return (
        <>
            <Searchbar onSearch={onSearch} value={query} />
            {query.trim() ? (
                <Grid query={query} onclick={onClickAlbum} />
            ) : (
                <div>
                    <Grid onclick={onClickAlbum} />
                </div>
            )}
        </>
    );
};

export default PosterBySearch;