document.addEventListener('DOMContentLoaded', function () {
    const generateReportBtn = document.getElementById('generate-report-btn');
    const reportMessage = document.getElementById('report-message');

    generateReportBtn.addEventListener('click', function () {
     
        const isReportGenerated = generateReport();

        
        if (isReportGenerated) {
            reportMessage.textContent = 'Report generated successfully!';
        } else {
            reportMessage.textContent = 'Failed to generate report. Please try again.';
        }
    });

   
    function generateReport() {
       
        const randomSuccess = Math.random() < 0.8; 

        return randomSuccess;
    }
});