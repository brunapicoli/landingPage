function showForm() {
  document.getElementById("name").scrollIntoView();
  document.getElementById("name").focus();
}

function validateForm() {
  var name = document.getElementById("name").value;
  if (name != '') {
    alert(`Pronto ${name}! Confira seu e-mail para acessar o material.`)
  }
}