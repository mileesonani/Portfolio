// export default function PdfModal({ show, onClose, fileUrl }) {
//     if (!show) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="p-[1.5rem] relative bg-white w-full max-w-4xl h-[80vh] rounded shadow-lg overflow-hidden" style={{ backgroundColor: 'rgb(230, 230, 230)' }}>
//                 {/* Close button */}
//                 <button
//                     onClick={onClose}
//                     className="absolute top-0.5 right-1.5 text-gray-700 hover:text-red-600 text-2xl font-bold"
//                 >
//                     &times;
//                 </button>

//                 {/* PDF iframe */}
//                 <iframe
//                     src={fileUrl}
//                     className="w-full h-full"
//                     title="PDF Viewer"
//                 ></iframe>
//             </div>
//         </div>
//     );
// }

// without close button
import { useRef, useEffect } from 'react';

export default function PdfModal({ show, onClose, fileUrl }) {
    const modalRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        }

        if (show) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                ref={modalRef}
                className="relative bg-white w-full max-w-4xl h-[80vh] rounded-lg shadow-lg overflow-hidden"
            >
                <iframe
                    src={fileUrl}
                    className="w-full h-full"
                    title="PDF Viewer"
                    style={{ border: 'none' }}
                ></iframe>
            </div>
        </div>
    );
}
