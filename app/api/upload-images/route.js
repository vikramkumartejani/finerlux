import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('images');
    
    if (!files || files.length === 0) {
      return NextResponse.json({ 
        success: false, 
        message: 'No images provided' 
      });
    }
    
    const imageUrls = [];
    
    for (const file of files) {
      if (file instanceof Blob) {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const base64String = `data:${file.type};base64,${buffer.toString('base64')}`;
        
        const uploadResult = await cloudinary.uploader.upload(base64String, {
          folder: 'finerlux-uploads',
        });
        
        imageUrls.push(uploadResult.secure_url);
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      imageUrls 
    });
    
  } catch (error) {
    console.error('Image upload error:', error);
    return NextResponse.json(
      { success: false, message: 'Error uploading images' },
      { status: 500 }
    );
  }
} 