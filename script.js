function removeAllDescription() {
    var descriptions = document.getElementById('description').children;
    for (var description of descriptions){
    description.style.display = "none";
  }
}
function change(e) {
    removeAllDescription();
    var index = e.selectedIndex;
    var option = e.options[index];
    var selectedData = document.getElementById(option.value);
    selectedData.style.display = "block";
}
