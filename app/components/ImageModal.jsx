export default function ImageModal({ isOpen, onClose, imageSrc, alt }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-0"
      onClick={onClose}
    >
      <div className="relative w-screen h-screen">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl p-2 z-10"
        >
          ✕
        </button>
        <img 
          src={imageSrc} 
          alt={alt} 
          className="w-screen h-screen object-contain"
        />
      </div>
    </div>
  );
} 
