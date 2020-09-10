import React, { useState, useEffect } from "react";
import "./App.css";
import Dropdown from "./Dropdown";
import MemePreview from "./MemePreview";
import TextInput from "./TextInput";
import Button from "./Button";
import Inputs from "./Inputs";
import GeneratedMeme from "./GeneratedMeme";

const App = () => {
  const [meme, selectMeme] = useState("");
  const [memes, setMemes] = useState([]);
  const [memeImage, setMemeImage] = useState(null);
  const [nrInputs, setNrInputs] = useState(0);
  const [inputs, setInputs] = useState([]);
  const [memeId, setMemeId] = useState("");
  const [generatedMeme, setGeneratedMeme] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        const newMemes = [];
        data.data.memes.map((item) => {
          const newItem = item;
          newItem["label"] = item.name;
          newItem["value"] = item.id;
          newMemes.push(newItem);
        });
        setMemes(newMemes);
      });
  }, []);

  useEffect(() => {
    memes.forEach((item) => {
      if (item.id === meme.value) {
        setMemeImage(item.url);
        setNrInputs(item.box_count);
        setMemeId(item.id);
      }
    });
  }, [meme]);

  const handleMemeChange = (selectedMeme) => {
    selectMeme(selectedMeme);
  };
  const handleTextChange = (e) => {
    const val = e.target.value;
    const index = e.target.attributes.index.value;
    const newinputs = inputs;
    newinputs[index] = val;
    setInputs(newinputs);
  };

  const generateMeme = () => {
    const formData = new FormData();
    formData.append("username", "dariusdc18");
    formData.append("password", "12345678");
    formData.append("template_id", memeId.toString());
    inputs.forEach((input, index) =>
      formData.append(`boxes[${index}][text]`, input)
    );

    fetch("https://api.imgflip.com/caption_image", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => setGeneratedMeme(data.data.url));
  };

  return (
    <div className="app">
      <h1 className="title">Meme Generator</h1>
      <Dropdown items={memes} handleChange={handleMemeChange} meme={meme} />
      <MemePreview image={memeImage} />
      <Inputs
        handleChange={handleTextChange}
        nrInputs={nrInputs}
        inputs={inputs}
      />
      <Button name="Generate Meme" handleClick={generateMeme} />
      <GeneratedMeme image={generatedMeme} />
      {generatedMeme && (
        <a href={generatedMeme} className="download-meme" download>
          Download your meme
        </a>
      )}
    </div>
  );
};

export default App;
