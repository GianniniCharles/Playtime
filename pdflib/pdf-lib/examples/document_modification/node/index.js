const fs = require('fs');
const {
  PDFDocumentFactory,
  PDFDocumentWriter,
  drawText,
  drawLinesOfText,
  drawImage,
  drawRectangle,
} = require('pdf-lib');

/* ========================= 1. Read in Assets ============================== */
// This step is platform dependent. Since this is a Node script, we can just
// read the assets in from the file system. But this approach wouldn't work
// in a browser. Instead, you might need to make HTTP requests for the assets.
const assets = {
  ubuntuFontBytes: fs.readFileSync('./assets/ubuntu-fonts/Ubuntu-R.ttf'),
  marioPngBytes: fs.readFileSync('./assets/running_mario.png'),
  taxVoucherPdfBytes: fs.readFileSync('./assets/income_tax_voucher.pdf'),
};

/* ================== 2. Load and Setup the PDF Document ==================== */
// This step is platform independent. The same code can be used in any
// JavaScript runtime (e.g. Node, the browser, or React Native).

// Here we load the tax voucher PDF file into a PDFDocument object.
const pdfDoc = PDFDocumentFactory.load(assets.taxVoucherPdfBytes);

// Let's define some constants that we can use to reference the fonts and
// images later in the script.
const COURIER_FONT = 'Courier';
const UBUNTU_FONT = 'Ubuntu';

// Now we embed a standard font (Courier), and the custom TrueType font we
// read in (Ubuntu-R).
const [courierFontRef] = pdfDoc.embedStandardFont('Courier');
const [ubuntuFontRef] = pdfDoc.embedFont(assets.ubuntuFontBytes);

// Next, we embed the PNG image we read in.
const [marioPngRef, marioPngDims] = pdfDoc.embedPNG(assets.marioPngBytes);

/* ====================== 3. Modify Existing Page =========================== */
// This step is platform independent. The same code can be used in any
// JavaScript runtime (e.g. Node, the browser, or React Native).

// Here we get an array of PDFPage objects contained in the `pdfDoc`. In this
// case, the tax voucher we loaded has a single page. So this will be an array
// of length one.

const pages = pdfDoc.getPages();
console.log(pages);



// Now we'll add the Courier font dictionary and Mario PNG image object that we
// embedded into the document earlier.

debugger;

const page1 = pages[0].addFontDictionary(COURIER_FONT, courierFontRef);
const page2 = pages[1].addFontDictionary(COURIER_FONT, courierFontRef);
const page3 = pages[2].addFontDictionary(COURIER_FONT, courierFontRef);
const page4 = pages[3].addFontDictionary(COURIER_FONT, courierFontRef);
const page5 = pages[4].addFontDictionary(COURIER_FONT, courierFontRef);
const page6 = pages[5].addFontDictionary(COURIER_FONT, courierFontRef);
const page7 = pages[6].addFontDictionary(COURIER_FONT, courierFontRef);
const page8 = pages[7].addFontDictionary(COURIER_FONT, courierFontRef);
const page9 = pages[8].addFontDictionary(COURIER_FONT, courierFontRef);
const page10 = pages[9].addFontDictionary(COURIER_FONT, courierFontRef);
const page11 = pages[10].addFontDictionary(COURIER_FONT, courierFontRef);
const page12 = pages[11].addFontDictionary(COURIER_FONT, courierFontRef);
const page13 = pages[12].addFontDictionary(COURIER_FONT, courierFontRef);
const page14 = pages[13].addFontDictionary(COURIER_FONT, courierFontRef);
const page15 = pages[14].addFontDictionary(COURIER_FONT, courierFontRef);
const page16 = pages[15].addFontDictionary(COURIER_FONT, courierFontRef);
const page17 = pages[16].addFontDictionary(COURIER_FONT, courierFontRef);
const page18 = pages[17].addFontDictionary(COURIER_FONT, courierFontRef);
const page19 = pages[18].addFontDictionary(COURIER_FONT, courierFontRef);
const page20 = pages[19].addFontDictionary(COURIER_FONT, courierFontRef);
const page21 = pages[20].addFontDictionary(COURIER_FONT, courierFontRef);
const page22 = pages[21].addFontDictionary(COURIER_FONT, courierFontRef);
const page23 = pages[22].addFontDictionary(COURIER_FONT, courierFontRef);
const page24 = pages[23].addFontDictionary(COURIER_FONT, courierFontRef);
const page25 = pages[24].addFontDictionary(COURIER_FONT, courierFontRef);
const page26 = pages[25].addFontDictionary(COURIER_FONT, courierFontRef);
const page27 = pages[26].addFontDictionary(COURIER_FONT, courierFontRef);
const page28 = pages[27].addFontDictionary(COURIER_FONT, courierFontRef);
const page29 = pages[28].addFontDictionary(COURIER_FONT, courierFontRef);
const page30 = pages[29].addFontDictionary(COURIER_FONT, courierFontRef);
const page31 = pages[30].addFontDictionary(COURIER_FONT, courierFontRef);
const page32 = pages[31].addFontDictionary(COURIER_FONT, courierFontRef);
const page33 = pages[32].addFontDictionary(COURIER_FONT, courierFontRef);
const page34 = pages[33].addFontDictionary(COURIER_FONT, courierFontRef);
const page35 = pages[34].addFontDictionary(COURIER_FONT, courierFontRef);
const page36 = pages[35].addFontDictionary(COURIER_FONT, courierFontRef);
const page37 = pages[36].addFontDictionary(COURIER_FONT, courierFontRef);
const page38 = pages[37].addFontDictionary(COURIER_FONT, courierFontRef);
const page39 = pages[38].addFontDictionary(COURIER_FONT, courierFontRef);
const page40 = pages[39].addFontDictionary(COURIER_FONT, courierFontRef);
const page41 = pages[40].addFontDictionary(COURIER_FONT, courierFontRef);
const page42 = pages[41].addFontDictionary(COURIER_FONT, courierFontRef);
const page43 = pages[42].addFontDictionary(COURIER_FONT, courierFontRef);
const page44 = pages[43].addFontDictionary(COURIER_FONT, courierFontRef);
const page45 = pages[44].addFontDictionary(COURIER_FONT, courierFontRef);
const page46 = pages[45].addFontDictionary(COURIER_FONT, courierFontRef);
const page47 = pages[46].addFontDictionary(COURIER_FONT, courierFontRef);
const page48 = pages[47].addFontDictionary(COURIER_FONT, courierFontRef);
const page49 = pages[48].addFontDictionary(COURIER_FONT, courierFontRef);
const page50 = pages[49].addFontDictionary(COURIER_FONT, courierFontRef);

  

// Let's define some constants for the PNG image's width and height. We'll use
// the dimensions returned as the second element of the tuple returned by
// `pdfDoc.embedPNG` when we embedded the image in the document.
//
// Since the image is quite large relative to our page size, we'll scale both
// the width and height down to 15% of their original size.

// Here, we define a new "content stream" for the page. A content stream is
// simply a sequence of PDF operators that define what we want to draw on the
// page.
// const newContentStream = pdfDoc.createContentStream(
  // `drawImage` is a "composite" PDF operator that lets us easily draw an image
  // on a page's content stream. "composite" just means that it is composed of
  // several lower-level PDF operators. Usually, you'll want to work with
  // composite operators - they make things a lot easier! The naming convention
  // for composite operators is "draw<thing_being_drawn>".
  //
  // Here we draw the image of Mario on the page's content stream. We'll draw
  // him centered horizontally in the top half of the page.
  
  // Now let's draw 2 lines of red Courier text near the bottom of the page.


// Here we (1) register the content stream to the PDF document, and (2) add the
// reference to the registered stream to the page's content streams.
// page3.addContentStreams(pdfDoc.register(newContentStream)));

/* ================= 4. Setup and Create New First Page ===================== */
// This step is platform independent. The same code can be used in any
// JavaScript runtime (e.g. Node, the browser, or React Native).


// Let's define some RGB colors. Note that these arrays are of the form:
//   [<red_intensity>, <green_intensity>, <blue_intensity>]
// where each color value must be in the range 0.0-1.0. Note that they should
// *not* be in the range 0-255 as they would be if you were writing CSS styles,
// which is why we are dividing each color component by 255.
const BLACK = [0 / 255, 0 / 255, 0 / 255];





// Here we (1) register the content stream to the PDF document, and (2) add the
// reference to the registered stream as the page's content stream.

/* ================= 5. Setup and Create New Third Page ===================== */
// This step is platform independent. The same code can be used in any
// JavaScript runtime (e.g. Node, the browser, or React Native).



/*
Loop:

Declare content streams before the loop. add content streams for each based on i.

sooo....





*/

const theVar = 'VARTIME'

const contentStream1 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 1"],{x: 170,y: 10,font: COURIER_FONT,size: 12,colorRgb: BLACK,},
    // ["This party doesn't stop!"],{x: 30,y: 10,font: COURIER_FONT,size: 12,colorRgb: BLACK,},
    
      ),//end drawLinesOfText,

  drawLinesOfText(
        ["This party doesn't stop"],{x: 105,y: 30,font: COURIER_FONT,size: 12,colorRgb: BLACK,},
        // ["This party doesn't stop!"],{x: 30,y: 10,font: COURIER_FONT,size: 12,colorRgb: BLACK,},
        
          )//end drawLinesOfText,
    );//end ContentStream;
    
const contentStream2 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 2"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream3 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 3"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream4 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 4"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream5 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 5"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream6 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 6"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream7 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 7"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream8 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 8"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream9 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 9"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream10 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 10"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream11 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 11"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream12 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 12"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream13 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 13"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream14 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 14"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream15 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 15"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream16 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 16"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream17 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 17"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream18 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 18"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream19 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 19"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream20 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 20"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream21 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 21"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream22 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 22"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream23 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 23"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream24 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 24"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream25 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 25"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream26 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 26"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream27 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 27"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream28 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 28"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream29 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 29"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream30 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 30"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream31 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 31"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream32 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 32"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream33 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 33"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream34 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 34"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream35 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 35"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream36 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 36"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream37 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 37"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream38 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 38"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream39 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 39"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream40 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 40"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream41 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 41"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream42 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 42"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream43 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 43"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream44 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 44"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream45 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 45"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream46 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 46"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream47 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 47"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream48 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 48"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream49 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 49"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);
const contentStream50 = pdfDoc.createContentStream(
  drawLinesOfText(
    ["Page 50"],
    {
      x: 0,
      y: 0,
      font: COURIER_FONT,
      size: 12,
      colorRgb: BLACK,
    },
  ),
);


// for (let i = 1; i<=50; i++){
//   contentStream[i] = 
// }

// const contentStream3 = pdfDoc.createContentStream(
//   drawLinesOfText(
//     ["I AM THE ONE"],
//     {
//       x: 0,
//       y: 0,
//       font: COURIER_FONT,
//       size: 12,
//       colorRgb: BLACK,
//     },
//   ),
// );

// Here we (1) register the content stream to the PDF document, and (2) add the
// reference to the registered stream as the page's content stream.
page1.addContentStreams(pdfDoc.register(contentStream1));

page2.addContentStreams(pdfDoc.register(contentStream2));

page3.addContentStreams(pdfDoc.register(contentStream3));

page4.addContentStreams(pdfDoc.register(contentStream4));

page5.addContentStreams(pdfDoc.register(contentStream5));

page6.addContentStreams(pdfDoc.register(contentStream6));

page7.addContentStreams(pdfDoc.register(contentStream7));

page8.addContentStreams(pdfDoc.register(contentStream8));

page9.addContentStreams(pdfDoc.register(contentStream9));

page10.addContentStreams(pdfDoc.register(contentStream10));

page11.addContentStreams(pdfDoc.register(contentStream11));

page12.addContentStreams(pdfDoc.register(contentStream12));

page13.addContentStreams(pdfDoc.register(contentStream13));

page14.addContentStreams(pdfDoc.register(contentStream14));

page15.addContentStreams(pdfDoc.register(contentStream15));

page16.addContentStreams(pdfDoc.register(contentStream16));

page17.addContentStreams(pdfDoc.register(contentStream17));

page18.addContentStreams(pdfDoc.register(contentStream18));

page19.addContentStreams(pdfDoc.register(contentStream19));

page20.addContentStreams(pdfDoc.register(contentStream20));

page21.addContentStreams(pdfDoc.register(contentStream21));

page22.addContentStreams(pdfDoc.register(contentStream22));

page23.addContentStreams(pdfDoc.register(contentStream23));

page24.addContentStreams(pdfDoc.register(contentStream24));

page25.addContentStreams(pdfDoc.register(contentStream25));

page26.addContentStreams(pdfDoc.register(contentStream26));

page27.addContentStreams(pdfDoc.register(contentStream27));

page28.addContentStreams(pdfDoc.register(contentStream28));

page29.addContentStreams(pdfDoc.register(contentStream29));

page30.addContentStreams(pdfDoc.register(contentStream30));

page31.addContentStreams(pdfDoc.register(contentStream31));

page32.addContentStreams(pdfDoc.register(contentStream32));

page33.addContentStreams(pdfDoc.register(contentStream33));

page34.addContentStreams(pdfDoc.register(contentStream34));

page35.addContentStreams(pdfDoc.register(contentStream35));

page36.addContentStreams(pdfDoc.register(contentStream36));

page37.addContentStreams(pdfDoc.register(contentStream37));

page38.addContentStreams(pdfDoc.register(contentStream38));

page39.addContentStreams(pdfDoc.register(contentStream39));

page40.addContentStreams(pdfDoc.register(contentStream40));

page41.addContentStreams(pdfDoc.register(contentStream41));

page42.addContentStreams(pdfDoc.register(contentStream42));

page43.addContentStreams(pdfDoc.register(contentStream43));

page44.addContentStreams(pdfDoc.register(contentStream44));

page45.addContentStreams(pdfDoc.register(contentStream45));

page46.addContentStreams(pdfDoc.register(contentStream46));

page47.addContentStreams(pdfDoc.register(contentStream47));

page48.addContentStreams(pdfDoc.register(contentStream48));

page49.addContentStreams(pdfDoc.register(contentStream49));

page50.addContentStreams(pdfDoc.register(contentStream50));
/* =========== 6. Insert and Add Pages and Convert PDF to Bytes ============= */
// This step is platform independent. The same code can be used in any
// JavaScript runtime (e.g. Node, the browser, or React Native).

// Here we add the page's to the document. This step is what will cause the
// pages to actually be rendered when the document is opened. Our previous calls
// to `pdfDoc.createPage` only **created** the pages, they did not add them to
// the document.

// Now we'll convert the `pdfDoc` to a `Uint8Array` containing the bytes of a
// PDF document. This step serializes the document. You can still make changes
// to the document after this step, but you'll have to call `saveToBytes` again
// after doing so.
//
// The `Uint8Array` returned here can be used in a number of ways. What you do
// with it largely depends on the JavaScript environment you're running in.
const pdfBytes = PDFDocumentWriter.saveToBytes(pdfDoc);

/* ========================== 7. Write PDF to File ========================== */
// This step is platform dependent. Since this is a Node script, we can just
// save the `pdfBytes` to the file system, where it can be opened with a PDF
// reader.
const filePath = `${__dirname}/modified.pdf`;
fs.writeFileSync(filePath, pdfBytes);
console.log(`PDF file written to: ${filePath}`);
