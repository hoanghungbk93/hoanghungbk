
import {useRef, useCallback} from 'react'
import Webcam, { WebcamProps } from 'react-webcam';
import {Modal} from 'antd'
function WebcamCapture  ()  {
  const webcamRef = useRef<Webcam>(null);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  }
  const capture = useCallback(
    () => {
      const imageSrc = webcamRef?.current?.getScreenshot();
      console.log('imageSrc', imageSrc)
    },
    [webcamRef]
  );

  return (
    <>
      <Webcam
        audio={false}
        height={200}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={300}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  );
};

function WebcamModal (props: any) {
  const {visible, setVisible} = props
  return <> 
  <Modal
    visible={visible}
    onCancel={()=>{setVisible(false)}}
  >
    <WebcamCapture></WebcamCapture>
  </Modal>
  </>
}
export default WebcamModal