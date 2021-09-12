const stats = document.getElementsByClassName('perf-stat__content');

if (stats.length > 0) {
    const stat = stats.item(0);

    // <section>
    const elemSection = document.createElement('section');

    // <h2>
    const elemH2 = document.createElement('h2');
    elemH2.innerText = 'Mate in One';
    elemSection.appendChild(elemH2);

    // TODO: append info

    stat.appendChild(elemSection);
}
