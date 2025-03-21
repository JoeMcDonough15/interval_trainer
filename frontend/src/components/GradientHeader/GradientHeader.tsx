import { DigitsObj } from "../../types";

interface Props {
  headerText: string;
}

const DIGIT_MAP: DigitsObj = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

const GradientHeader = ({ headerText }: Props) => {
  const createSubStrings = (headerText: string) => {
    const substrings = [];

    for (let i = 0; i < headerText.length; i += 2) {
      let currentString = "";
      if (headerText.length > i + 1) {
        currentString += headerText[i] + headerText[i + 1];
      } else {
        currentString += headerText[i];
      }

      substrings.push(currentString);
    }

    return substrings;
  };

  const substrings = createSubStrings(headerText);

  return (
    <h1>
      {substrings.map((substring, index) => {
        return (
          <span
            key={index}
            style={
              index === 0
                ? { color: "var(--my-primary-color)" }
                : {
                    color: `var(--my-primary-variant-${DIGIT_MAP[index]})`,
                  }
            }
          >
            {substring}
          </span>
        );
      })}
    </h1>
  );
};

export default GradientHeader;
