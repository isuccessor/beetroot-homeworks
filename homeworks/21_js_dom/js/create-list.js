const createList = (playlist, DOMElement) => {
    const ul = document.createElement('ul');

    for (let i = 0; i < playlist.length; i++) {
      const item = playlist[i];
      const li = document.createElement('li');
      li.innerText = (i + 1) + '. ' + item.author + ' - ' + item.song;
      ul.appendChild(li);
    }
    DOMElement.appendChild(ul);
};

export default createList;