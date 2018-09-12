function genPDF() {
  let doc = new jsPDF();
  let theDiv = document.getElementById('testdiv');
  console.log(theDiv);
  
doc.fromHTML($('#testdiv').get(0), 20,20,{
'width':500 });





  doc.save('Test2.pdf');
}  

