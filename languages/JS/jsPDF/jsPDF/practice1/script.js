function genPDF() {
  let doc = new jsPDF();

  let specialElementHandlers = {
    '#hidediv': function(element,render) {return true;}
  };
  // let theDiv = document.getElementById('testdiv');
    // console.log(theDiv);

  // let theDiv2 = $('#testdiv');
  // console.log(theDiv2);
  
  //NOTE: NORMAL DOM MANIPULATION DOES NOT WORK WITH THIS BECAUSE JQUERY PACKAGES THE ELEMENT INFORMATION MUCH DIFFERENTLY THAN DOM MANIPULATION.

  
doc.fromHTML($('#testdiv').get(0), 20,20,{
'width':500,
'elementHandlers': specialElementHandlers

});

  doc.save('Test2.pdf');
}  


