import { ModalOverlayProps } from "../types/components/modalOverlay";

export default function ModalOverlay({ children }: ModalOverlayProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-[9999999999] flex items-center justify-center">
      {children}
    </div>
  );
}
