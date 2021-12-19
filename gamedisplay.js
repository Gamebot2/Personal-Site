var currentId = "";

function toggleReview(id) {
    if(currentId.length > 0) {
        document.getElementById(currentId).style.display = 'none';
    }
    if(id == currentId) {
        document.getElementById(id).style.display = 'none';
        currentId = "";
    } else {
        document.getElementById(id).style.display = 'block';
        currentId = id;
    }
}

var column = 0;

for(var i = 0; i < games.length; i++) {
    var game = games[i];

    // Get variables
    var title = game.title;
    var code = game.code;
    var story = game.story;
    var gameplay = game.gameplay;
    var characters = game.characters;
    var music = game.music;
    var visuals = game.visuals;
    var total = story + gameplay + characters + music + visuals;
    var r1 = game.review_1;
    var r2 = game.review_2;
    var ip = game.img_path;
    var cp = game.console_path;
    var guest = '';
    var r3 = '';
    if ('guest' in game) { guest = game.guest; }
    if ('review_3' in game) { r3 = game.review_3; }

    var scoreSlot = total;
    if (total == 0) { scoreSlot = "??"; }
    if (total > 10) { scoreSlot = "10*"; }

    // Create the review div and append it to the reviewSection element
    const div = document.createElement('div');

    div.id = code;
    div.className = 'review';

    div.innerHTML += `<h5 class="title">${title}</h5>`;
    div.innerHTML += `<h5 class="reviewtext">${r1}</h5>`;
    if (r2.length > 0) { div.innerHTML += `<hr><h5 class="reviewtext">${r2}</h5>`; }
    if (guest.length > 0) {
        div.innerHTML += `<h5 class="title">Guest review: ${guest}</h5>`;
    }
    if (r3.length > 0) {
        div.innerHTML += `<hr><h5 class="reviewtext">${r3}</h5>`;
    }
    document.getElementById('reviewSection').appendChild(div);


    // Create the image div and append to appropriate ColumnI element
    const article = document.createElement('article');
    article.className = 'item';
    
    article.innerHTML += `
        <a class="image fit" onclick="toggleReview('${code}')">
            <img src="${ip}" alt="" />
        </a>
        <table style="padding: 0;">
            <tr>
                <td>
                    <header>
                        <div class="ratings" style="text-align: left;">
                            <h5>Story: <span class="rating">${story}/2</span></h5>
                            <h5>Gameplay: <span class="rating">${gameplay}/2</span></h5>
                            <h5>Characters: <span class="rating">${characters}/2</span></h5>
                            <h5>Music: <span class="rating">${music}/2</span></h5>
                            <h5>Visuals: <span class="rating">${visuals}/2</span></h5>
                        </div>
                    </header>
                </td>
                <td class="hullo">
                    <h1 class="score">${scoreSlot}</h1>
                    <img class="switch" src="${cp}">
                </td>
            </tr>
        </table>
    `;

    column_id = `Column${column}`;
    document.getElementById(column_id).appendChild(article);
    column = (column + 1) % 3;
}