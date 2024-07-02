import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TextFieldBase from "./TextFieldBase";

describe("TextFieldBase component", () => {
  it("renders the TextFieldBase component", () => {
    render(<TextFieldBase />);
    const textFieldBaseElement = screen.getByTestId(
      "text-field-base-component"
    );
    expect(textFieldBaseElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText("Message");
    expect(inputElement).toBeInTheDocument();
  });
});

describe("TextFieldBase component fire event", () => {
  it("should change input value", () => {
    render(<TextFieldBase />);
    const inputElement = screen.getByPlaceholderText("Message");
    fireEvent.change(inputElement, { target: { value: "Hello" } });
    expect(inputElement.value).toBe("Hello");

    setTimeout(() => {
      // Check if the messages state is updated
      expect(screen.getByTestId("text-field-base-component")).toHaveTextContent(
        "Hello"
      );
    }, 500); // Adjust the timeout as necessary based on the debounce/throttle in use
  });
});

describe("TextFieldBase component fire event with 2 inputs", () => {
  it("should change 2 input value", () => {
    render(<TextFieldBase />);
    const inputElement = screen.getByPlaceholderText("Message");
    fireEvent.change(inputElement, { target: { value: "Hello!" } });
    expect(inputElement.value).toBe("Hello!");
    fireEvent.change(inputElement, { target: { value: "How are you?" } });
    expect(inputElement.value).toBe("How are you?");

    setTimeout(() => {
      // Check if the messages state is updated
      expect(screen.getByTestId("text-field-base-component")).toHaveTextContent(
        "Hello!"
      );
    }, 500);
    setTimeout(() => {
      // Check if the messages state is updated
      expect(screen.getByTestId("text-field-base-component")).toHaveTextContent(
        "How are you?"
      );
    }, 500);
  });
});
