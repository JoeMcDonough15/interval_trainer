import { Slide } from "@progress/kendo-react-animation";
import { Notification } from "@progress/kendo-react-notification";
import { EmptyInputsErrorType } from "../IntervalSelection/IntervalSelection";
import "./EmptyInputsError.css";

interface Props {
  specificError: string;
  errorObj: EmptyInputsErrorType;
  setErrorObj: React.Dispatch<React.SetStateAction<EmptyInputsErrorType>>;
}

const EmptyInputsError = ({ errorObj, setErrorObj, specificError }: Props) => {
  return (
    <div className="error-notification-container">
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
    </div>
  );
};

export default EmptyInputsError;
