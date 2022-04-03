import { DocumentIcon } from '@heroicons/react/solid';
import {
  Avatar,
  Button,
  Container,
  Modal,
  Spacer,
  Text,
} from '@nextui-org/react';
import EditButton from './editButton';
import { NoteTypes } from './noteCardController';

interface PlainModalProps {
  visible: boolean;
  setVisible(value: boolean): void;
  loading: boolean;
  value: string;
  setValue(value: string): void;
  title: string;
  setTitle(value: string): void;
  id: string;
}

const PlainModal: React.FC<PlainModalProps> = ({
  visible,
  setVisible,
  loading,
  value,
  setValue,
  title,
  setTitle,
  id,
}) => {
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      <Modal
        closeButton
        scroll
        width="75%"
        open={visible}
        onClose={closeHandler}
        aria-labelledby="modal-title"
      >
        <Spacer y={1} />
        <Modal.Header>
          <Container className="flex flex-row items-center">
            <Avatar
              icon={<DocumentIcon className="w-5 h-5 text-teal-50" />}
              color="primary"
            />
            <Text b size={25} span css={{ ml: 8 }}>
              {title}
            </Text>
            {loading ? (
              <></>
            ) : (
              <EditButton
                activeTitle={title}
                setTitle={setTitle}
                activeValue={value}
                setValue={setValue}
                activeType={NoteTypes.PLAIN}
                activeId={id}
                setVisibleModal={setVisible}
              />
            )}
          </Container>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <>Loading...</>
          ) : (
            <Container>
              <Text className="text-lg tracking-normal" id="modal-title">
                {value}
              </Text>
            </Container>
          )}
        </Modal.Body>
        <Modal.Footer>
          {loading ? (
            <></>
          ) : (
            <Button auto rounded onClick={closeHandler}>
              Done
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PlainModal;
