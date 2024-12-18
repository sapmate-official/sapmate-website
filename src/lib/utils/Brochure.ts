const handleDownloadBrochure = async () => {
    try {
        const cloudinaryUrl = process.env.NEXT_PUBLIC_BROUCHER_LINK;
        
        // Check if URL exists
        if (!cloudinaryUrl) {
            throw new Error('Brochure URL is not defined');
        }

        const response = await fetch(cloudinaryUrl);
        const blob = await response.blob();
        
        // Create a temporary URL for the blob
        const url = window.URL.createObjectURL(blob);
        
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = url;
        
        // Set the download filename
        link.download = 'sapmate_brochure_2025.pdf';
        
        // Append to body, click and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up the temporary URL
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Download failed:', error);
    }
};
export default handleDownloadBrochure;