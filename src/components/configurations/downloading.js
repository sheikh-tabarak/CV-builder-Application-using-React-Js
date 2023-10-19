import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function downLoadPdf(pdfRef, filename) {
  const input = pdfRef.current;

  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4", true);
    const pdfwidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgwidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfwidth / imgwidth, pdfHeight / imgHeight);
    const imgx = (pdfwidth - imgwidth * ratio) / 2;
    const imgY = (pdfHeight - imgHeight * ratio) / 2;
    const newX = imgwidth * ratio;
    const newY = imgHeight * ratio;


    

    pdf.addImage(imgData, "PNG", imgx, imgY, newX, newY);
    //   pdf.addImage(
    //     imgData,
    //     'PNG',
    //     imgx,
    //     imgY,
    //     imgwidth * ratio,
    //     imgHeight * ratio
    //   );
    pdf.save(filename + ".pdf");
  });
}

export default downLoadPdf;
