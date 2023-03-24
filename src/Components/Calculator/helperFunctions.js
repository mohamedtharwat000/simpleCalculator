export default function calc(event, state, setState) {
  const value = event.target.value;
  const type = event.target.attributes.type.value;
  const isOperationFinshed =
    state.operation.startsWith("(") && state.operation.endsWith(")");

  if (value === "AC") {
    setState({
      operation: "",
      result: "",
      offsetLeft: 0,
    });
    return;
  }

  if (value === "x") {
    setState((prev) => ({
      ...prev,
      operation: prev.operation.slice(0, prev.operation.length - 1),
    }));
    return;
  }

  if (value === "=") {
    const pattern = /^([0-9]|\+|-|\*|\/|%|\.|\(|\))*$/g;
    const rightoperation = pattern.exec(state.operation);

    try {
      const finalResult = eval(rightoperation[0]);
      let newoperation = state.operation.split("");
      newoperation.unshift("(");
      newoperation.push(")");
      newoperation = newoperation.join("");

      setState((prev) => ({
        ...prev,
        result: finalResult,
        operation:
          isOperationFinshed || prev.operation === ""
            ? prev.operation
            : newoperation,
      }));

      if (finalResult) {
        const operation = state.operation;
        const savedHistory = localStorage.getItem("history");
        let history;
        if (savedHistory) {
          history = JSON.parse(savedHistory);
          history.push({ operation, finalResult });
          localStorage.setItem("history", JSON.stringify(history));
        } else {
          history = [];
          history.push({ operation, finalResult });
          localStorage.setItem("history", JSON.stringify(history));
        }
      }
    } catch (error) {
      setState((prev) => ({
        ...prev,
      }));
    }
    return;
  }

  if (isOperationFinshed) {
    if (type === "operator") {
      setState((prev) => ({
        ...prev,
        operation: prev.operation + value,
        result: "",
      }));
      return;
    }

    if (type === "operand") {
      setState((prev) => ({
        ...prev,
        operation: value,
        result: "",
      }));
      return;
    }
  }

  if (value) {
    setState((prev) => ({
      ...prev,
      operation: prev.operation + value,
      result: "",
    }));
    return;
  }
}
