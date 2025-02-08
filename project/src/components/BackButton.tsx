import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-4 left-4 p-2 text-gray-600 hover:text-peach-600 transition-colors duration-200"
    >
      <ArrowLeft className="h-6 w-6" />
    </button>
  );
}