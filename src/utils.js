import JSZip from "jszip";

const uuid4 = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

export function openDocument(file) {
  // opens docx file and returns document contents as dom tree

  const openFile = () => {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        (respo) => {
          res(respo.target.result);
        },
        false
      );
      reader.addEventListener("error", rej);
      reader.readAsArrayBuffer(file);
    });
  };

  const readZippedContent = (content) => {
    return new JSZip().loadAsync(content);
  };

  const getXMLData = (zip) => {
    return zip.file("word/document.xml").async("string");
  };

  const parseXMLData = (docString) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(docString, "text/xml");
    return xml.documentElement;
  };

  return openFile()
    .then(readZippedContent)
    .then(getXMLData)
    .then(parseXMLData);
}

function xmlToScenes(xml) {
  const scenes = {}
  const getTextContent = pElement => pElement.textContent;
  const removeEmptyStrings = str => str && str.trim().length > 0;
  const createTextComponent = text => ({ id: uuid4(), type: 'textComponent', text });
  const splitSentances = paragraph => paragraph.split('. ').filter(removeEmptyStrings);
  const addScene = (paragraphStr, index) => {
    scenes[uuid4()] = {
      title: "untitled",
      order: index + 1,
      components: splitSentances(paragraphStr).map(createTextComponent)
    }
  };
  [...xml.getElementsByTagName("w:p")] // get all paragraph elements
    .map(getTextContent) // get text content from each paragraph
    .filter(removeEmptyStrings) // filter out empty strings
    .forEach(addScene) // make scene with each paragraph
  return scenes
}

export function wordDocToStory(xml) {
  return {
    "id": uuid4(),
    "version": 2,
    "name": "auto generated book",
    "description": "description",
    "cover": { "status": "empty" },
    "genre": "Drama",
    "configuration": {
      "soundMap": {},
      "backgroundMap": {},
      "musicMap": {},
      "characterMap": {}
    },
    "variables": [],
    "lastModified": new Date().toISOString(),
    "createdOn": new Date().toISOString(),
    "contentFormat": "E",
    "chapters": [
      {
        "id": uuid4(),
        "title": "Untitled",
        "description": "",
        "contents": {
          "version": 2,
          "scenes": xmlToScenes(xml)
        },
        "order": 1,
        "lastModified": new Date().toISOString(),
        "createdOn": new Date().toISOString()
      }
    ]
  }
}

export function saveStory(story) {
  function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
  download(
    JSON.stringify(story), 
    'untitled.story.json', 
    'application/json'
    );
}