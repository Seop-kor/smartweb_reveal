<?php
//name, email, subject, message

  // $id = $_POST['id'];
  // $pass = $_POST['pass'];
  // mysqli_real_escape_string(); << 공격 방지 보안을 위한 코드임.
  
  include_once "connect.php";

  $name = mysqli_real_escape_string($dbConnect, $_POST['name']);
  $email = mysqli_real_escape_string($dbConnect, $_POST['email']);
  $subject = mysqli_real_escape_string($dbConnect, $_POST['subject']);
  $message = mysqli_real_escape_string($dbConnect, $_POST['message']);
  $reg = date("Y-m-d");

  $sql = "insert into re_message(RE_name, RE_email, RE_subject, RE_msg, RE_reg) values('$name', '$email', '$subject', '$message', '$reg')";

  $check = mysqli_query($dbConnect, $sql);

  echo "
  <script>
  alert('작성완료!');
  window.location='/website/reveal/index.php';
  </script>
  ";

?>