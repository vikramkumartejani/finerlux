export const uploadImages = async (files) => {
  if (!files || files.length === 0) return [];
  
  const formData = new FormData();
  
  // Append each file to the form data
  for (let i = 0; i < files.length; i++) {
    formData.append('images', files[i]);
  }
  
  try {
    const response = await fetch('/api/upload-images', {
      method: 'POST',
      body: formData,
    });
    
    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || 'Failed to upload images');
    }
    
    return data.imageUrls;
  } catch (error) {
    console.error('Error uploading images:', error);
    throw error;
  }
}; 