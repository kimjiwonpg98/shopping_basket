const student = document.querySelector("#student"),
  product = document.querySelector("#product"),
  boardno = document.querySelector("#boardno"),
  button = document.querySelector(".insert");

function run() {
  button.addEventListener("click", start);
}

const start = () => {
  const data = {
    student: student.value,
    board_title: product.value,
    board_code_no: boardno.value,
  };

  const post = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };

  const requestWrite = (post) => {
    fetch("/api/addCart", post);
  };

  requestWrite(post);
};

run();
