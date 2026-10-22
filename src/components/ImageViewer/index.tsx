import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Viewer, Close, Img } from "./index.styled";

export interface ViewerImage {
  src: string;
  alt: string;
}

interface ImageViewerProps {
  image: ViewerImage | null;
  onClose: () => void;
}

// Fullscreen viewer: wheel/trackpad/pinch to zoom, drag to pan, double-click/tap toggles zoom, Esc closes
export default function ImageViewer({ image, onClose }: ImageViewerProps) {
  return (
    <Modal open={!!image} onClose={onClose}>
      <Viewer>
        <Close aria-label="Close image" onClick={onClose}>
          <CloseIcon />
        </Close>
        {image && (
          <TransformWrapper
            maxScale={8}
            doubleClick={{ mode: "toggle" }}
            keyboard={{ disabled: false }}
          >
            <TransformComponent
              wrapperStyle={{ width: "100%", height: "100%" }}
              contentStyle={{
                width: "100%",
                height: "100%",
                padding: "56px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Img src={image.src} alt={image.alt} />
            </TransformComponent>
          </TransformWrapper>
        )}
      </Viewer>
    </Modal>
  );
}
