import { Slide } from "@progress/kendo-react-animation";
import { Notification } from "@progress/kendo-react-notification";
import { EmptyInputsErrorType } from "../../types";

interface Props {
  specificError: string;
  errorObj: EmptyInputsErrorType;
  setErrorObj: React.Dispatch<React.SetStateAction<EmptyInputsErrorType>>;
}

const EmptyInputsErrorNotification = ({
  errorObj,
  setErrorObj,
  specificError,
}: Props) => {
  return (
    <Slide>
      {errorObj[specificError as keyof EmptyInputsErrorType] && (
        <Notification
          type={{ style: "error" }}
          closable={true}
          onClose={() =>
            setErrorObj((prevErrors) => {
              const newErrors = { ...prevErrors };
              delete newErrors[specificError as keyof EmptyInputsErrorType];
              return newErrors;
            })
          }
        >
          <span>{errorObj[specificError as keyof EmptyInputsErrorType]}</span>
        </Notification>
      )}
    </Slide>
  );
};

export default EmptyInputsErrorNotification;
