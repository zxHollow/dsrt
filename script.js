function text() {
  textWin = window.open("text.html", "_blank", "location=0, menubar= 0, toolbar=0,scrollbars=0,resizable=0,top=100,left=500,width=400,height=400");
}

function table() {
  tableWin = window.open("table.html", "_blank", "location=0, menubar= 0, toolbar=0,scrollbars=0,resizable=0,top=100,left=500,width=400,height=400");
}

function book() {
  bookWin = window.open("books.html", "_blank", "location=0, menubar= 0, toolbar=0,scrollbars=0,resizable=0,top=100,left=500,width=400,height=400");
}

function closeall() {
  textWin.close();
  tableWin.close();
  bookWin.close();
}
