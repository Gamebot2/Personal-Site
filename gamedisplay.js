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