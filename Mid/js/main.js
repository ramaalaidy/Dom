    const paragraph = document.getElementById('text');
    const text = paragraph.innerHTML;

    const highlightedText = text.split(' ').map(word => {
      if (word.length > 8) {
        return `<span class="highlight">${word}</span>`;
      }
      return word;
    }).join(' ');

    paragraph.innerHTML = (highlightedText);
