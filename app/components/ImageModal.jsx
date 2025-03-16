export default function ImageModal({ isOpen, onClose, imageSrc, alt }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-[90vw] max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-xl p-2"
        >
          ✕
        </button>
        <img 
          src={imageSrc} 
          alt={alt} 
          className="max-w-full max-h-[85vh] object-contain"
        />
      </div>
    </div>
  );
} 