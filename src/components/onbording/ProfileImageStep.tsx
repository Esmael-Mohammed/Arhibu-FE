import React, { useRef, useState } from 'react';
import { Upload } from 'lucide-react';
import Button from '../ui/Button';

const ProfileImageStep = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mb-4">
          {preview ? (
            <img src={preview} alt="Profile Preview" className="w-full h-full object-cover rounded-full" />
          ) : (
            <Upload className="w-8 h-8 text-gray-400" />
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        <Button
          variant="outline"
          className="mb-6"
          onClick={() => fileInputRef.current?.click()}
        >
          Upload Photo
        </Button>

        <p className="text-sm text-gray-600">
          Add a profile photo to build trust with potential roommates
        </p>
      </div>
    </div>
  );
};

export default ProfileImageStep;
