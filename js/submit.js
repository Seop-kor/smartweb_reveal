const sendBtn = document.querySelector(".send-btn");
const contactList = document.querySelector(".contact-list");

function sendpost() {
  contactList.innerHTML = this.responseText;
}
sendBtn.onclick = (e) => {
  e.preventDefault();
  const xmlreq = new XMLHttpRequest();
  if(!document.contact_form_data.name.value){
    alert("이름을 입력해주세요.");
    document.contact_form_data.name.focus();
    return;
  }
  if(!document.contact_form_data.email.value){
    alert("이메일을 입력해주세요.");
    document.contact_form_data.email.focus();
    return;
  }
  if(!document.contact_form_data.subject.value){
    alert("제목을 입력해주세요.");
    document.contact_form_data.subject.focus();
    return;
  }
  if(!document.contact_form_data.message.value){
    alert("내용을 입력해주세요.");
    document.contact_form_data.message.focus();
    return;
  }
  const formdata = new FormData(document.contact_form_data);
  xmlreq.addEventListener("load", sendpost);
  xmlreq.open("POST", "./php/insert.php");
  xmlreq.send(formdata);
}