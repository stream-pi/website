import { forwardRef, ComponentProps } from "react";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { LabelProps } from "./Helper";

//* Makes sense to keep props here to minimize multi-imports
type Props = ComponentProps<typeof FormControl> & {
  errorText: string;
};

export const MyFormControl = forwardRef<any, Props>(
  ({ errorText, ...props }, ref) => {
    return (
      <>
        <FormControl ref={ref} autoComplete="off" {...props} />
        <FormControl.Feedback type="invalid" tooltip>
          {errorText}
        </FormControl.Feedback>
      </>
    );
  }
);
MyFormControl.displayName = "MyFormControl";

export const MyFormLabel = forwardRef<HTMLLabelElement, LabelProps>(
  ({ label, IcoName, IcoPre, subtext }, ref) => {
    return (
      <FormLabel ref={ref}>
        <h5>
          {label} <FontAwesomeIcon icon={[IcoPre, IcoName]} />
        </h5>
        {subtext ? ` ${subtext}` : ""}
      </FormLabel>
    );
  }
);
MyFormLabel.displayName = "MyFormLabel";
