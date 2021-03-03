function computerPlay() {
    let selection = ['Rock', 'Paper', 'Scissor'];
    const randomElement = Math.floor(Math.random() * selection.length);
    return selection[randomElement];
  }